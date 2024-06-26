/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2016 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Components for creating connections between blocks.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.RenderedConnection');

goog.require('Blockly.Connection');
goog.require('Blockly.utils');

goog.require('goog.math.Coordinate');


/**
 * Class for a connection between blocks that may be rendered on screen.
 * @param {!Blockly.Block} source The block establishing this connection.
 * @param {number} type The type of the connection.
 * @extends {Blockly.Connection}
 * @constructor
 */
Blockly.RenderedConnection = function(source, type) {
  Blockly.RenderedConnection.superClass_.constructor.call(this, source, type);

  /**
   * Workspace units, (0, 0) is top left of block.
   * @type {!goog.math.Coordinate}
   * @private
   */
  this.offsetInBlock_ = new goog.math.Coordinate(0, 0);

  /**
   * The last rendered type expression.
   * @type {Blockly.TypeExpr}
   * @private
   */
  this.lastRenderedTypeExpr_ = null;
};
goog.inherits(Blockly.RenderedConnection, Blockly.Connection);

/**
 * Returns the distance between this connection and another connection in
 * workspace units.
 * @param {!Blockly.Connection} otherConnection The other connection to measure
 *     the distance to.
 * @return {number} The distance between connections, in workspace units.
 */
Blockly.RenderedConnection.prototype.distanceFrom = function(otherConnection) {
  var xDiff = this.x_ - otherConnection.x_;
  var yDiff = this.y_ - otherConnection.y_;
  return Math.sqrt(xDiff * xDiff + yDiff * yDiff);
};

/**
 * Move the block(s) belonging to the connection to a point where they don't
 * visually interfere with the specified connection.
 * @param {!Blockly.Connection} staticConnection The connection to move away
 *     from.
 * @private
 */
Blockly.RenderedConnection.prototype.bumpAwayFrom_ = function(staticConnection) {
  if (this.sourceBlock_.workspace.isDragging()) {
    // Don't move blocks around while the user is doing the same.
    return;
  }
  // Move the root block.
  var rootBlock = this.sourceBlock_.getRootBlock();
  if (rootBlock.isInFlyout) {
    // Don't move blocks around in a flyout.
    return;
  }
  var reverse = false;
  if (!rootBlock.isMovable()) {
    // Can't bump an uneditable block away.
    // Check to see if the other block is movable.
    rootBlock = staticConnection.getSourceBlock().getRootBlock();
    if (!rootBlock.isMovable()) {
      return;
    }
    // Swap the connections and move the 'static' connection instead.
    staticConnection = this;
    reverse = true;
  }
  // Raise it to the top for extra visibility.
  var selected = Blockly.selected == rootBlock;
  selected || rootBlock.addSelect();
  var dx = (staticConnection.x_ + Blockly.SNAP_RADIUS +
      Math.floor(Math.random() * Blockly.BUMP_RANDOMNESS)) - this.x_;
  var dy = (staticConnection.y_ + Blockly.SNAP_RADIUS +
      Math.floor(Math.random() * Blockly.BUMP_RANDOMNESS)) - this.y_;
  if (reverse) {
    // When reversing a bump due to an uneditable block, bump up.
    dy = -dy;
  }
  if (rootBlock.RTL) {
    dx = -dx;
  }
  rootBlock.moveBy(dx, dy);
  selected || rootBlock.removeSelect();
};

/**
 * Change the connection's coordinates.
 * @param {number} x New absolute x coordinate, in workspace coordinates.
 * @param {number} y New absolute y coordinate, in workspace coordinates.
 */
Blockly.RenderedConnection.prototype.moveTo = function(x, y) {
  // Remove it from its old location in the database (if already present)
  if (this.inDB_) {
    this.db_.removeConnection_(this);
  }
  this.x_ = x;
  this.y_ = y;
  // Insert it into its new location in the database.
  if (!this.hidden_) {
    this.db_.addConnection(this);
  }
};

/**
 * Change the connection's coordinates.
 * @param {number} dx Change to x coordinate, in workspace units.
 * @param {number} dy Change to y coordinate, in workspace units.
 */
Blockly.RenderedConnection.prototype.moveBy = function(dx, dy) {
  this.moveTo(this.x_ + dx, this.y_ + dy);
};

/**
 * Move this connection to the location given by its offset within the block and
 * the location of the block's top left corner.
 * @param {!goog.math.Coordinate} blockTL The location of the top left corner
 *     of the block, in workspace coordinates.
 */
Blockly.RenderedConnection.prototype.moveToOffset = function(blockTL) {
  this.moveTo(blockTL.x + this.offsetInBlock_.x,
      blockTL.y + this.offsetInBlock_.y);
};

/**
 * Set the offset of this connection relative to the top left of its block.
 * @param {number} x The new relative x, in workspace units.
 * @param {number} y The new relative y, in workspace units.
 */
Blockly.RenderedConnection.prototype.setOffsetInBlock = function(x, y) {
  this.offsetInBlock_.x = x;
  this.offsetInBlock_.y = y;
};

/**
 * Move the blocks on either side of this connection right next to each other.
 * @private
 */
Blockly.RenderedConnection.prototype.tighten_ = function() {
  var dx = this.targetConnection.x_ - this.x_;
  var dy = this.targetConnection.y_ - this.y_;
  if (dx != 0 || dy != 0) {
    var block = this.targetBlock();
    var svgRoot = block.getSvgRoot();
    if (!svgRoot) {
      throw Error('block is not rendered.');
    }
    // Workspace coordinates.
    var xy = Blockly.utils.getRelativeXY(svgRoot);
    block.getSvgRoot().setAttribute('transform',
        'translate(' + (xy.x - dx) + ',' + (xy.y - dy) + ')');
    block.moveConnections_(-dx, -dy);
  }
};

/**
 * Find the closest compatible connection to this connection.
 * All parameters are in workspace units.
 * @param {number} maxLimit The maximum radius to another connection.
 * @param {!goog.math.Coordinate} dxy Offset between this connection's location
 *     in the database and the current location (as a result of dragging).
 * @param {Blockly.WorkspaceSvg=} opt_targetWorkspace Workspace to search for
 *     the closest connection.
 * @param {number=} opt_maxErrorRadius The maximum radius to incompatible
 *     connection. If not provided, use the same radius with maxRadius.
 * @return {!{connection: ?Blockly.Connection, radius: number,
 *       reason: ?Blockly.ConnectionDB.errorReason}} Contains three properties:
 *    'connection' which is either another connection or null, 'radius' which
 *    is the distance, 'reason' which is incompatibility reason if connection
 *    is not found.
 */
Blockly.RenderedConnection.prototype.closest = function(maxLimit, dxy,
    opt_targetWorkspace, opt_maxErrorRadius) {
  var db, offsetXY;
  var thisWorkspace = this.sourceBlock_.workspace;
  if (opt_targetWorkspace && opt_targetWorkspace != thisWorkspace) {
    if (!this.sourceBlock_.isTransferable()) {
      // If the block is not transferable, can not search connections of
      // other workspace.
      return {connection: null, radius: maxLimit, reason: null};
    }
    var workspace = this.sourceBlock_.workspace;
    var targetWorkspace = opt_targetWorkspace;
    db = targetWorkspace.connectionDBList[Blockly.OPPOSITE_TYPE[this.type]];
    // Translate dxy to a coordinate in targetWorkspace's units.
    var surfaceXY = workspace.getRelativeToWorkspaceXY(opt_targetWorkspace);
    offsetXY = goog.math.Coordinate.sum(surfaceXY, dxy);
  } else {
    db = this.dbOpposite_;
    offsetXY = dxy;
  }
  return db.searchForClosest(this, maxLimit, offsetXY, opt_maxErrorRadius);
};

/**
 * Add highlighting around this connection.
 */
Blockly.RenderedConnection.prototype.highlight = function() {
  var steps;
  if (this.type == Blockly.INPUT_VALUE || this.type == Blockly.OUTPUT_VALUE) {
    if (this.typeExpr) {
      var path = Blockly.RenderedTypeExpr.getHighlightedPath(this.typeExpr);
      steps = 'm 0,0 ' + path;
    } else {
      steps = 'm 0,0 ' + Blockly.BlockSvg.TAB_PATH_DOWN + ' v 5';
    }
  } else {
    steps = 'm -20,0 h 5 ' + Blockly.BlockSvg.NOTCH_PATH_LEFT + ' h 5';
  }
  var xy = this.sourceBlock_.getRelativeToSurfaceXY();
  var x = this.x_ - xy.x;
  var y = this.y_ - xy.y;
  Blockly.Connection.highlightedPath_ = Blockly.utils.createSvgElement(
      'path',
      {
        'class': 'blocklyHighlightedConnectionPath',
        'd': steps,
        transform: 'translate(' + x + ',' + y + ')' +
            (this.sourceBlock_.RTL ? ' scale(-1 1)' : '')
      },
      this.sourceBlock_.getSvgRoot());
};

/**
 * Unhide this connection, as well as all down-stream connections on any block
 * attached to this connection.  This happens when a block is expanded.
 * Also unhides down-stream comments.
 * @return {!Array.<!Blockly.Block>} List of blocks to render.
 */
Blockly.RenderedConnection.prototype.unhideAll = function() {
  this.setHidden(false);
  // All blocks that need unhiding must be unhidden before any rendering takes
  // place, since rendering requires knowing the dimensions of lower blocks.
  // Also, since rendering a block renders all its parents, we only need to
  // render the leaf nodes.
  var renderList = [];
  if (this.type != Blockly.INPUT_VALUE && this.type != Blockly.NEXT_STATEMENT) {
    // Only spider down.
    return renderList;
  }
  var block = this.targetBlock();
  if (block) {
    var connections;
    if (block.isCollapsed()) {
      // This block should only be partially revealed since it is collapsed.
      connections = [];
      block.outputConnection && connections.push(block.outputConnection);
      block.nextConnection && connections.push(block.nextConnection);
      block.previousConnection && connections.push(block.previousConnection);
    } else {
      // Show all connections of this block.
      connections = block.getConnections_(true);
    }
    for (var i = 0; i < connections.length; i++) {
      renderList.push.apply(renderList, connections[i].unhideAll());
    }
    if (!renderList.length) {
      // Leaf block.
      renderList[0] = block;
    }
  }
  return renderList;
};

/**
 * Remove the highlighting around this connection.
 */
Blockly.RenderedConnection.prototype.unhighlight = function() {
  Blockly.utils.removeNode(Blockly.Connection.highlightedPath_);
  delete Blockly.Connection.highlightedPath_;
};

/**
 * Set whether this connections is hidden (not tracked in a database) or not.
 * @param {boolean} hidden True if connection is hidden.
 */
Blockly.RenderedConnection.prototype.setHidden = function(hidden) {
  this.hidden_ = hidden;
  if (hidden && this.inDB_) {
    this.db_.removeConnection_(this);
  } else if (!hidden && !this.inDB_) {
    this.db_.addConnection(this);
  }
};

/**
 * Hide this connection, as well as all down-stream connections on any block
 * attached to this connection.  This happens when a block is collapsed.
 * Also hides down-stream comments.
 */
Blockly.RenderedConnection.prototype.hideAll = function() {
  this.setHidden(true);
  if (this.targetConnection) {
    var blocks = this.targetBlock().getDescendants(false);
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i];
      // Hide all connections of all children.
      var connections = block.getConnections_(true);
      for (var j = 0; j < connections.length; j++) {
        connections[j].setHidden(true);
      }
      // Close all bubbles of all children.
      var icons = block.getIcons();
      for (var j = 0; j < icons.length; j++) {
        icons[j].setVisible(false);
      }
    }
  }
};

/**
 * Check if the two connections can be dragged to connect to each other.
 * @param {!Blockly.Connection} candidate A nearby connection to check.
 * @param {number} maxRadius The maximum radius allowed for connections, in
 *     workspace units.
 * @param {Blockly.Connection.typeCheckContext=} opt_context Context of type
 *     check.
 * @return {boolean} True if the connection is allowed, false otherwise.
 */
Blockly.RenderedConnection.prototype.isConnectionAllowed = function(candidate,
    maxRadius, opt_context) {
  if (this.distanceFrom(candidate) > maxRadius) {
    return false;
  }

  return Blockly.RenderedConnection.superClass_.isConnectionAllowed.call(this,
      candidate, opt_context);
};

/**
 * Disconnect two blocks that are connected by this connection.
 * @param {!Blockly.Block} parentBlock The superior block.
 * @param {!Blockly.Block} childBlock The inferior block.
 * @private
 */
Blockly.RenderedConnection.prototype.disconnectInternal_ = function(parentBlock,
    childBlock) {
  Blockly.RenderedConnection.superClass_.disconnectInternal_.call(this,
      parentBlock, childBlock);

  childBlock.updateWorkbenchFlyout();
  // in case of match pattern.
  parentBlock.updateWorkbenchFlyout();
  // Rerender the parent so that it may reflow.
  if (parentBlock.rendered) {
    parentBlock.render();
  }
  if (childBlock.rendered) {
    childBlock.updateDisabled();
    childBlock.render();
  }

  if (parentBlock.rendered && childBlock.rendered && this.typeExprEnabled()) {
    // Re-render all blocks which contain changed type expression on related
    // workspaces.
    parentBlock.workspace.renderTypeChangedWorkspaces();
  }
};

/**
 * Respawn the shadow block if there was one connected to the this connection.
 * Render/rerender blocks as needed.
 * @private
 */
Blockly.RenderedConnection.prototype.respawnShadow_ = function() {
  var parentBlock = this.getSourceBlock();
  // Respawn the shadow block if there is one.
  var shadow = this.getShadowDom();
  if (parentBlock.workspace && shadow && Blockly.Events.recordUndo) {
    Blockly.RenderedConnection.superClass_.respawnShadow_.call(this);
    var blockShadow = this.targetBlock();
    if (!blockShadow) {
      throw Error('Couldn\'t respawn the shadow block that should exist here.');
    }
    blockShadow.initSvg();
    blockShadow.render(false);
    if (parentBlock.rendered) {
      parentBlock.render();
    }
  }
};

/**
 * Find all nearby compatible connections to this connection.
 * Type checking does not apply, since this function is used for bumping.
 * @param {number} maxLimit The maximum radius to another connection, in
 *     workspace units.
 * @return {!Array.<!Blockly.Connection>} List of connections.
 * @private
 */
Blockly.RenderedConnection.prototype.neighbours_ = function(maxLimit) {
  return this.dbOpposite_.getNeighbours(this, maxLimit);
};

/**
 * Connect two connections together.  This is the connection on the superior
 * block.  Rerender blocks as needed.
 * @param {!Blockly.Connection} childConnection Connection on inferior block.
 * @private
 */
Blockly.RenderedConnection.prototype.connect_ = function(childConnection) {
  Blockly.RenderedConnection.superClass_.connect_.call(this, childConnection);

  var parentConnection = this;
  var parentBlock = parentConnection.getSourceBlock();
  var childBlock = childConnection.getSourceBlock();

  if (parentBlock.rendered) {
    parentBlock.updateDisabled();
  }
  if (childBlock.rendered) {
    childBlock.updateDisabled();
  }
  childBlock.updateWorkbenchFlyout();
  // in case of match pattern.
  parentBlock.updateWorkbenchFlyout();
  if (parentBlock.rendered && childBlock.rendered) {
    if (parentConnection.type == Blockly.NEXT_STATEMENT ||
        parentConnection.type == Blockly.PREVIOUS_STATEMENT) {
      // Child block may need to square off its corners if it is in a stack.
      // Rendering a child will render its parent.
      childBlock.render();
    } else {
      // Child block does not change shape.  Rendering the parent node will
      // move its connected children into position.
      parentBlock.render();
    }

    if (this.typeExprEnabled()) {
      // Re-render all blocks which contain changed type expression on related
      // workspaces.
      parentBlock.workspace.renderTypeChangedWorkspaces();
    }
  }
};

/**
 * Function to be called when this connection's compatible types have changed.
 * @private
 */
Blockly.RenderedConnection.prototype.onCheckChanged_ = function() {
  // The new value type may not be compatible with the existing connection.
  if (this.isConnected() && !this.checkType_(this.targetConnection)) {
    var child = this.isSuperior() ? this.targetBlock() : this.sourceBlock_;
    child.unplug();
    // Bump away.
    this.sourceBlock_.bumpNeighbours_();
  }
};

Blockly.RenderedConnection.prototype.renderTypeVarHighlights = function() {
  if (!this.typeExpr)
    return;
  if (this.typeVarPaths_) {
    for (var i = 0; i < this.typeVarPaths_.length; i++) {
      goog.dom.removeNode(this.typeVarPaths_[i]);
      delete this.typeVarPaths_[i];
    }
  }
  if (this.sourceBlock_.isCollapsed()) {
    return;
  }
  this.typeVarPaths_ = [];
  var xy = this.sourceBlock_.getRelativeToSurfaceXY();
  var pos = new goog.math.Coordinate(this.x_ - xy.x, this.y_ - xy.y);

  this.typeVarPaths_ = Blockly.RenderedTypeExpr.createHighlightedSvg(
      this.typeExpr, pos, 1, this.sourceBlock_.getSvgRoot());
};

/**
 * Set the last rendered type expression. It would be used to detect if the
 * type expression has been updated.
 */
Blockly.RenderedConnection.prototype.setLastRenderedTypeExpr = function() {
  this.lastRenderedTypeExpr_ = this.typeExpr.deepDeref();
};

/**
 * Find if the type expression has been changed since the type expression
 * was rendered last time.
 */
Blockly.RenderedConnection.prototype.typeExprHasChanged = function() {
  if (!this.typeExpr) {
    return false;
  }
  if (!this.lastRenderedTypeExpr_) {
    return true;
  }
  var oldTypeExpr = this.lastRenderedTypeExpr_;
  var newTypeExpr = this.typeExpr.deepDeref();
  return !Blockly.TypeExpr.equals(oldTypeExpr, newTypeExpr);
};

/**
 * Store the given workbench to the connection.
 * @param {!Blockly.Workbench} workbench The workbench to store.
 * @param {!Blockly.Input} input The input the connection belongs to.
 * @return {!Blockly.Connection} The connection being modified
 *     (to allow chaining).
 * @override
 */
Blockly.RenderedConnection.prototype.setWorkbench = function(workbench,
    input) {
  this.contextWorkbench = workbench;
  workbench.setContextConnection(this, input);
  return this;
};

/**
 * Dispose of the connection.
 */
Blockly.RenderedConnection.prototype.dispose = function() {
  if (this.contextWorkbench) {
    this.contextWorkbench = null;
  }
  this.lastRenderedTypeExpr_ = null;
  Blockly.RenderedConnection.superClass_.dispose.call(this);
};
