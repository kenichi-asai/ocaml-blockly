/**
 * @license
 * Copyright 2011 Google LLC
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
 * @fileoverview The class representing one block.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Block');

goog.require('Blockly.Blocks');
goog.require('Blockly.Connection');
goog.require('Blockly.ErrorCollector');
goog.require('Blockly.Events');
goog.require('Blockly.Events.BlockChange');
goog.require('Blockly.Events.BlockCreate');
goog.require('Blockly.Events.BlockDelete');
goog.require('Blockly.Events.BlockMove');
goog.require('Blockly.Extensions');
goog.require('Blockly.FieldBoundVariable');
goog.require('Blockly.FlyoutMutator'); // circular dependency via workspaceSvg
goog.require('Blockly.Input');
goog.require('Blockly.PatternWorkbench'); // circular dependency
goog.require('Blockly.Scheme');
goog.require('Blockly.TypeWorkbench'); // circular dependency
goog.require('Blockly.Workbench'); // circular dependency
goog.require('Blockly.utils');
goog.require('Blockly.utils.Coordinate');
goog.require('Blockly.utils.colour');
goog.require('Blockly.utils.object');
goog.require('Blockly.fieldRegistry');
goog.require('Blockly.utils.string');
goog.require('Blockly.Workspace');

/**
 * Class for one block.
 * Not normally called directly, workspace.newBlock() is preferred.
 * @param {!Blockly.Workspace} workspace The block's workspace.
 * @param {?string} prototypeName Name of the language object containing
 *     type-specific functions for this block.
 * @param {string=} opt_id Optional ID.  Use this ID if provided, otherwise
 *     create a new ID.
 * @constructor
 * @throws When block is not valid or block name is not allowed.
 */
Blockly.Block = function(workspace, prototypeName, opt_id) {
  if (Blockly.Generator &&
      typeof Blockly.Generator.prototype[prototypeName] != 'undefined') {
    // Occluding Generator class members is not allowed.
    throw Error('Block prototypeName "' + prototypeName +
        '" conflicts with Blockly.Generator members.');
  }

  /** @type {string} */
  this.id = (opt_id && !workspace.getBlockById(opt_id)) ?
      opt_id : Blockly.utils.genUid();
  workspace.blockDB_[this.id] = this;
  /** @type {Blockly.Connection} */
  this.outputConnection = null;
  /** @type {Blockly.Connection} */
  this.nextConnection = null;
  /** @type {Blockly.Connection} */
  this.previousConnection = null;
  /** @type {!Array.<!Blockly.Input>} */
  this.inputList = [];
  /** @type {!Object<string, !Blockly.BoundVariableValue>} */
  this.typedValue = {};
  /*
   * Map of variable name to normal variable reference. If a reference is stored
   * in the object, it will be examined if the binding is valid.
   * @type {!Object<string, !Blockly.BoundVariableValueReference>}
   */
  this.typedReference = {};
  /*
   * Map of variable name to structure variable reference. If a reference is
   * stored in the object, it will be examined if the binding is valid.
   * @type {!Object<string, !Blockly.BoundVariableValueReference>}
   */
  this.typedStructureReference = {};
  /** @type {boolean|undefined} */
  this.inputsInline = undefined;
  /**
   * @type {boolean}
   * @private
   */
  this.disabled = false;
  /** @type {string|!Function} */
  this.tooltip = '';
  /** @type {boolean} */
  this.contextMenu = true;

  /**
   * @type {Blockly.Block}
   * @protected
   */
  this.parentBlock_ = null;

  /**
   * @type {!Array.<!Blockly.Block>}
   * @protected
   */
  this.childBlocks_ = [];

  /**
   * @type {boolean}
   * @private
   */
  this.deletable_ = true;

  /**
   * @type {boolean}
   * @private
   */
  this.movable_ = true;

  /**
   * @type {boolean}
   * @private
   */
  this.editable_ = true;

  /**
   * @type {boolean}
   * @private
   */
  this.isShadow_ = false;

  /**
   * @type {boolean}
   * @protected
   */
  this.collapsed_ = false;

  /**
   * @type {boolean}
   * @private
   */
  this.transferable_ = false;

  /**
   * A string representing the comment attached to this block.
   * @type {string|Blockly.Comment}
   * @deprecated August 2019. Use getCommentText instead.
   */
  this.comment = null;

  /**
   * A model of the comment attached to this block.
   * @type {!Blockly.Block.CommentModel}
   * @package
   */
  this.commentModel = {
    text: null,
    pinned: false,
    size: new Blockly.utils.Size(160, 80)
  };

  /**
   * The block's position in workspace units.  (0, 0) is at the workspace's
   * origin; scale does not change this value.
   * @type {!Blockly.utils.Coordinate}
   * @private
   */
  this.xy_ = new Blockly.utils.Coordinate(0, 0);

  /** @type {!Blockly.Workspace} */
  this.workspace = workspace;
  /** @type {boolean} */
  this.isInFlyout = workspace.isFlyout;
  /** @type {boolean} */
  this.isInMutator = workspace.isMutator;

  /** @type {boolean} */
  this.RTL = workspace.RTL;

  /**
   * True if this block is an insertion marker.
   * @type {boolean}
   * @protected
   */
  this.isInsertionMarker_ = false;

  /**
   * Name of the type of hat.
   * @type {string|undefined}
   */
  this.hat = undefined;

  // Copy the type-specific functions and data from the prototype.
  if (prototypeName) {
    /** @type {string} */
    this.type = prototypeName;
    var prototype = Blockly.Blocks[prototypeName];
    if (!prototype || typeof prototype != 'object') {
      throw TypeError('Unknown block type: ' + prototypeName);
    }
    Blockly.utils.object.mixin(this, prototype);
  }

  workspace.addTopBlock(this);
  workspace.addTypedBlock(this);

  // Call an initialization function, if it exists.
  if (typeof this.init == 'function') {
    this.init();
  }
  // Record initial inline state.
  /** @type {boolean|undefined} */
  this.inputsInlineDefault = this.inputsInline;

  // Fire a create event.
  if (Blockly.Events.isEnabled()) {
    var existingGroup = Blockly.Events.getGroup();
    if (!existingGroup) {
      Blockly.Events.setGroup(true);
    }
    try {
      Blockly.Events.fire(new Blockly.Events.BlockCreate(this));
    } finally {
      if (!existingGroup) {
        Blockly.Events.setGroup(false);
      }
    }

  }
  // Bind an onchange function, if it exists.
  if (typeof this.onchange == 'function') {
    this.setOnChange(this.onchange);
  }
};

/**
 * @typedef {{
 *            text:?string,
 *            pinned:boolean,
 *            size:Blockly.utils.Size
 *          }}
 */
Blockly.Block.CommentModel;

/**
 * Optional text data that round-trips between blocks and XML.
 * Has no effect. May be used by 3rd parties for meta information.
 * @type {?string}
 */
Blockly.Block.prototype.data = null;

/**
 * Has this block been disposed of?
 * @type {boolean}
 * @package
 */
Blockly.Block.prototype.disposed = false;

/**
 * Colour of the block as HSV hue value (0-360)
 * This may be null if the block colour was not set via a hue number.
 * @type {?number}
 * @private
 */
Blockly.Block.prototype.hue_ = null;

/**
 * Colour of the block in '#RRGGBB' format.
 * @type {string}
 * @private
 */
Blockly.Block.prototype.colour_ = '#000000';

/**
 * Secondary colour of the block.
 * Colour of shadow blocks.
 * @type {?string}
 * @private
 */
Blockly.Block.prototype.colourSecondary_ = null;

/**
 * Tertiary colour of the block.
 * Colour of the block's border.
 * @type {?string}
 * @private
 */
Blockly.Block.prototype.colourTertiary_ = null;

/**
 * Name of the block style.
 * @type {?string}
 * @private
 */
Blockly.Block.prototype.styleName_ = null;

/**
 * An optional serialization method for defining how to serialize the
 * mutation state. This must be coupled with defining `domToMutation`.
 * @type {?function(...):!Element}
 */
Blockly.Block.prototype.mutationToDom;

/**
 * An optional deserialization method for defining how to deserialize the
 * mutation state. This must be coupled with defining `mutationToDom`.
 * @type {?function(!Element)}
 */
Blockly.Block.prototype.domToMutation;

/**
 * An optional property for suppressing adding STATEMENT_PREFIX and
 * STATEMENT_SUFFIX to generated code.
 * @type {?boolean}
 */
Blockly.Block.prototype.suppressPrefixSuffix;

/**
 * Dispose of this block.
 * @param {boolean} healStack If true, then try to heal any gap by connecting
 *     the next statement with the previous statement.  Otherwise, dispose of
 *     all children of this block.
 */
Blockly.Block.prototype.dispose = function(healStack) {
  if (!this.workspace) {
    // Already deleted.
    return;
  }
  // Terminate onchange event calls.
  if (this.onchangeWrapper_) {
    this.workspace.removeChangeListener(this.onchangeWrapper_);
  }

  if (Blockly.keyboardAccessibilityMode) {
    // No-op if this is called from the block_svg class.
    Blockly.navigation.moveCursorOnBlockDelete(this);
  }

  this.unplug(healStack);
  if (Blockly.Events.isEnabled()) {
    Blockly.Events.fire(new Blockly.Events.BlockDelete(this));
  }
  Blockly.Events.disable();

  try {
    // This block is now at the top of the workspace.
    // Remove this block from the workspace's list of top-most blocks.
    if (this.workspace) {
      this.workspace.removeTopBlock(this);
      this.workspace.removeTypedBlock(this);
      // Remove from block database.
      delete this.workspace.blockDB_[this.id];
      this.workspace = null;
    }

    // Just deleting this block from the DOM would result in a memory leak as
    // well as corruption of the connection database.  Therefore we must
    // methodically step through the blocks and carefully disassemble them.

    if (Blockly.selected == this) {
      Blockly.selected = null;
    }

    // First, dispose of all my children.
    for (var i = this.childBlocks_.length - 1; i >= 0; i--) {
      this.childBlocks_[i].dispose(false);
    }
    // Then dispose of myself.
    // Dispose of all inputs and their fields.
    for (var i = 0, input; input = this.inputList[i]; i++) {
      input.dispose();
    }
    this.inputList.length = 0;
    // Dispose of any remaining connections (next/previous/output).
    var connections = this.getConnections_(true);
    for (var i = 0, connection; connection = connections[i]; i++) {
      connection.dispose();
    }

    // Dispose all of values.
    var fieldNames = Object.keys(this.typedValue);
    for (var i = 0, name; name = fieldNames[i]; i++) {
      this.typedValue[name].dispose();
    }
  } finally {
    Blockly.Events.enable();
    this.disposed = true;
  }
};

/**
 * Call initModel on all fields on the block.
 * May be called more than once.
 * Either initModel or initSvg must be called after creating a block and before
 * the first interaction with it.  Interactions include UI actions
 * (e.g. clicking and dragging) and firing events (e.g. create, delete, and
 * change).
 * @public
 */
Blockly.Block.prototype.initModel = function() {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      if (field.initModel) {
        field.initModel();
      }
    }
  }
};

/**
 * Unplug this block from its superior block.  If this block is a statement,
 * optionally reconnect the block underneath with the block on top.
 * @param {boolean=} opt_healStack Disconnect child statement and reconnect
 *   stack.  Defaults to false.
 */
Blockly.Block.prototype.unplug = function(opt_healStack) {
  if (this.outputConnection) {
    this.unplugFromRow_(opt_healStack);
  } else if (this.previousConnection) {
    this.unplugFromStack_(opt_healStack);
  }
};

/**
 * Unplug this block's output from an input on another block.  Optionally
 * reconnect the block's parent to the only child block, if possible.
 * @param {boolean=} opt_healStack Disconnect right-side block and connect to
 *     left-side block.  Defaults to false.
 * @private
 */
Blockly.Block.prototype.unplugFromRow_ = function(opt_healStack) {
  var parentConnection = null;
  if (this.outputConnection.isConnected()) {
    parentConnection = this.outputConnection.targetConnection;
    // Disconnect from any superior block.
    this.outputConnection.disconnect();
  }

  // Return early in obvious cases.
  if (!parentConnection || !opt_healStack) {
    return;
  }

  var thisConnection = this.getOnlyValueConnection_();
  if (!thisConnection ||
      !thisConnection.isConnected() ||
      thisConnection.targetBlock().isShadow()) {
    // Too many or too few possible connections on this block, or there's
    // nothing on the other side of this connection.
    return;
  }

  var childConnection = thisConnection.targetConnection;
  // Asai: have to check if it does not break binding, as in unplugFromStack_.
  // Disconnect the child block.
  childConnection.disconnect();
  // Connect child to the parent if possible, otherwise bump away.
  if (childConnection.checkType_(parentConnection)) {
    parentConnection.connect(childConnection);
  } else {
    childConnection.onFailedConnect(parentConnection);
  }
};

/**
 * Returns the connection on the value input that is connected to another block.
 * When an insertion marker is connected to a connection with a block already
 * attached, the connected block is attached to the insertion marker.
 * Since only one block can be displaced and attached to the insertion marker
 * this should only ever return one connection.
 *
 * @return {Blockly.Connection} The connection on the value input, or null.
 * @private
 */
Blockly.Block.prototype.getOnlyValueConnection_ = function() {
  var connection = null;
  for (var i = 0; i < this.inputList.length; i++) {
    var thisConnection = this.inputList[i].connection;
    if (thisConnection && thisConnection.type == Blockly.INPUT_VALUE &&
        thisConnection.targetConnection) {
      if (connection) {
        return null; // More than one value input found.
      }
      connection = thisConnection;
    }
  }
  return connection;
};

/**
 * Unplug this statement block from its superior block.  Optionally reconnect
 * the block underneath with the block on top.
 * @param {boolean=} opt_healStack Disconnect child statement and reconnect
 *   stack.  Defaults to false.
 * @private
 */
Blockly.Block.prototype.unplugFromStack_ = function(opt_healStack) {
  var previousTarget = null;
  if (this.previousConnection.isConnected()) {
    // Remember the connection that any next statements need to connect to.
    previousTarget = this.previousConnection.targetConnection;
    // Detach this block from the parent's tree.
    this.previousConnection.disconnect();
  }
  var previousBlock = this.previousConnection.getSourceBlock();
  if (opt_healStack) {
    var context = previousBlock.obtainParentContext(previousTarget);
    var nextBlock = this.getNextBlock();
    // Check whether children can be unplugged one by one.
    while (nextBlock && !nextBlock.isShadow()) {
      var resolved = nextBlock.resolveReferenceOnDescendants(context);
      if (resolved) {
        // The nextBlock does not refer to the binding of this block.
        // Disconnect it.
        var nextTarget = nextBlock.previousConnection;
        nextTarget.disconnect();
        // Attach nextBlock to the previous statement.
        if (previousTarget && previousTarget.checkType_(nextTarget)) {
          previousTarget.connect(nextTarget);
        }
        break;
      } else {
        // The nextBlock depends on the binding of this block.
        // It has to be unplugged with this block.
        nextBlock = nextBlock.getNextBlock();
      }
    }
  }
};

/**
 * Returns all connections originating from this block.
 * @param {boolean} _all If true, return all connections even hidden ones.
 * @return {!Array.<!Blockly.Connection>} Array of connections.
 * @private
 */
Blockly.Block.prototype.getConnections_ = function(_all) {
  var myConnections = [];
  if (this.outputConnection) {
    myConnections.push(this.outputConnection);
  }
  if (this.previousConnection) {
    myConnections.push(this.previousConnection);
  }
  if (this.nextConnection) {
    myConnections.push(this.nextConnection);
  }
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.connection) {
      myConnections.push(input.connection);
    }
  }
  return myConnections;
};

/**
 * Search a list of connections for a equivalent one to the given connection
 * on another block.
 * @param {!Blockly.Connection} connection The connection whose corresponding
 *     connection to search for.
 * this.localConnection_ in the old block.
 */
Blockly.Block.prototype.getEquivalentConnection = function(connection) {
  var targetBlock = connection.getSourceBlock();
  if (this.type !== targetBlock.type && !this.isPairPattern(targetBlock)) {
    return null;
  } else if (this == targetBlock) {
    return connection;
  }
  var thisConnection = null;
  if (targetBlock.outputConnection == connection) {
    thisConnection = this.outputConnection;
  } else if (targetBlock.previousConnection == connection) {
    thisConnection = this.previouseConnection;
  } else if (targetBlock.nextConnection == connection) {
    thisConnection = this.nextConnection;
  } else if (targetBlock.lastConnectionInStack() == connection) {
    thisConnection = this.lastConnectionInStack();
  } else {
    var parentInput = goog.array.find(targetBlock.inputList, function(input) {
      return input.connection == connection;
    }, this);
    if (parentInput) {
      thisConnection = this.getInput(parentInput.name).connection;
    }
  }
  return thisConnection;
};

/**
 * Walks down a stack of blocks and finds the last next connection on the stack.
 * @return {Blockly.Connection} The last next connection on the stack, or null.
 * @package
 */
Blockly.Block.prototype.lastConnectionInStack = function() {
  var nextConnection = this.nextConnection;
  while (nextConnection) {
    var nextBlock = nextConnection.targetBlock();
    if (!nextBlock) {
      // Found a next connection with nothing on the other side.
      return nextConnection;
    }
    nextConnection = nextBlock.nextConnection;
  }
  // Ran out of next connections.
  return null;
};

/**
 * Bump unconnected blocks out of alignment.  Two blocks which aren't actually
 * connected should not coincidentally line up on screen.
 */
Blockly.Block.prototype.bumpNeighbours = function() {
  console.warn('Not expected to reach Block.bumpNeighbours function. ' +
      'BlockSvg.bumpNeighbours was expected to be called instead.');
};

/**
 * Return the parent block or null if this block is at the top level.
 * @return {Blockly.Block} The block that holds the current block.
 */
Blockly.Block.prototype.getParent = function() {
  // Look at the DOM to see if we are nested in another block.
  return this.parentBlock_;
};

/**
 * Return the input that connects to the specified block.
 * @param {!Blockly.Block} block A block connected to an input on this block.
 * @return {Blockly.Input} The input that connects to the specified block.
 */
Blockly.Block.prototype.getInputWithBlock = function(block) {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.connection && input.connection.targetBlock() == block) {
      return input;
    }
  }
  return null;
};

/**
 * Return the parent block that surrounds the current block, or null if this
 * block has no surrounding block.  A parent block might just be the previous
 * statement, whereas the surrounding block is an if statement, while loop, etc.
 * @return {Blockly.Block} The block that surrounds the current block.
 */
Blockly.Block.prototype.getSurroundParent = function() {
  var block = this;
  do {
    var prevBlock = block;
    block = block.getParent();
    if (!block) {
      // Ran off the top.
      return null;
    }
  } while (block.getNextBlock() == prevBlock);
  // This block is an enclosing parent, not just a statement in a stack.
  return block;
};

/**
 * Return the next statement block directly connected to this block.
 * @return {Blockly.Block} The next statement block or null.
 */
Blockly.Block.prototype.getNextBlock = function() {
  return this.nextConnection && this.nextConnection.targetBlock();
};

/**
 * Return the previous statement block directly connected to this block.
 * @return {Blockly.Block} The previous statement block or null.
 */
Blockly.Block.prototype.getPreviousBlock = function() {
  return this.previousConnection && this.previousConnection.targetBlock();
};

/**
 * Return the connection on the first statement input on this block, or null if
 * there are none.
 * @return {Blockly.Connection} The first statement connection or null.
 * @package
 */
Blockly.Block.prototype.getFirstStatementConnection = function() {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.connection && input.connection.type == Blockly.NEXT_STATEMENT) {
      return input.connection;
    }
  }
  return null;
};

/**
 * Return the top-most block in this block's tree.
 * This will return itself if this block is at the top level.
 * @return {!Blockly.Block} The root block.
 */
Blockly.Block.prototype.getRootBlock = function() {
  var rootBlock;
  var block = this;
  do {
    rootBlock = block;
    block = rootBlock.parentBlock_;
  } while (block);
  return rootBlock;
};

/**
 * Walk up from the given block up through the stack of blocks to find
 * the top block of the sub stack. If we are nested in a statement input only
 * find the top-most nested block. Do not go all the way to the root block.
 * @return {!Blockly.Block} The top block in a stack.
 * @private
 */
Blockly.Block.prototype.getTopStackBlock = function() {
  var block = this;
  do {
    var previous = block.getPreviousBlock();
  } while (previous && previous.getNextBlock() == block && (block = previous));
  return block;
};

/**
 * Find all the blocks that are directly nested inside this one.
 * Includes value and statement inputs, as well as any following statement.
 * Excludes any connection on an output tab or any preceding statement.
 * Blocks are optionally sorted by position; top to bottom.
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array.<!Blockly.Block>} Array of blocks.
 */
Blockly.Block.prototype.getChildren = function(ordered) {
  if (!ordered) {
    return this.childBlocks_;
  }
  var blocks = [];
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.connection) {
      var child = input.connection.targetBlock();
      if (child) {
        blocks.push(child);
      }
    }
  }
  var next = this.getNextBlock();
  if (next) {
    blocks.push(next);
  }
  return blocks;
};

/**
 * Set parent of this block to be a new block or null.
 * @param {Blockly.Block} newParent New parent block.
 */
Blockly.Block.prototype.setParent = function(newParent) {
  if (newParent == this.parentBlock_) {
    return;
  }
  if (this.parentBlock_) {
    // Remove this block from the old parent's child list.
    Blockly.utils.arrayRemove(this.parentBlock_.childBlocks_, this);

    // Disconnect from superior blocks.
    if (this.previousConnection && this.previousConnection.isConnected()) {
      throw Error('Still connected to previous block.');
    }
    if (this.outputConnection && this.outputConnection.isConnected()) {
      throw Error('Still connected to parent block.');
    }
    this.parentBlock_ = null;
    // This block hasn't actually moved on-screen, so there's no need to update
    // its connection locations.
  } else {
    // Remove this block from the workspace's list of top-most blocks.
    this.workspace.removeTopBlock(this);
  }

  this.parentBlock_ = newParent;
  if (newParent) {
    // Add this block to the new parent's child list.
    newParent.childBlocks_.push(this);
  } else {
    this.workspace.addTopBlock(this);
  }
};

/**
 * Find all the blocks that are directly or indirectly nested inside this one.
 * Includes this block in the list.
 * Includes value and statement inputs, as well as any following statements.
 * Excludes any connection on an output tab or any preceding statements.
 * Blocks are optionally sorted by position; top to bottom.
 * @param {boolean} ordered Sort the list if true.
 * @return {!Array.<!Blockly.Block>} Flattened array of blocks.
 */
Blockly.Block.prototype.getDescendants = function(ordered) {
  var blocks = [this];
  var childBlocks = this.getChildren(ordered);
  for (var child, i = 0; child = childBlocks[i]; i++) {
    blocks.push.apply(blocks, child.getDescendants(ordered));
  }
  return blocks;
};

/**
 * Get whether this block is deletable or not.
 * @return {boolean} True if deletable.
 */
Blockly.Block.prototype.isDeletable = function() {
  return this.deletable_ && !this.isShadow_ &&
      !(this.workspace && this.workspace.options.readOnly);
};

/**
 * Set whether this block is deletable or not.
 * @param {boolean} deletable True if deletable.
 */
Blockly.Block.prototype.setDeletable = function(deletable) {
  this.deletable_ = deletable;
};

/**
 * Get whether this block is movable or not.
 * @return {boolean} True if movable.
 */
Blockly.Block.prototype.isMovable = function() {
  return this.movable_ && !this.isShadow_ &&
      !(this.workspace && this.workspace.options.readOnly);
};

/**
 * Set whether this block is movable or not.
 * @param {boolean} movable True if movable.
 */
Blockly.Block.prototype.setMovable = function(movable) {
  this.movable_ = movable;
};

/**
 * Get whether is block is duplicatable or not. If duplicating this block and
 * descendants will put this block over the workspace's capacity this block is
 * not duplicatable. If duplicating this block and descendants will put any
 * type over their maxInstances this block is not duplicatable.
 * @return {boolean} True if duplicatable.
 */
Blockly.Block.prototype.isDuplicatable = function() {
  if (!this.workspace.hasBlockLimits()) {
    return true;
  }
  return this.workspace.isCapacityAvailable(
      Blockly.utils.getBlockTypeCounts(this, true));
};

/**
 * Get whether this block is a shadow block or not.
 * @return {boolean} True if a shadow.
 */
Blockly.Block.prototype.isShadow = function() {
  return this.isShadow_;
};

/**
 * Set whether this block is a shadow block or not.
 * @param {boolean} shadow True if a shadow.
 */
Blockly.Block.prototype.setShadow = function(shadow) {
  this.isShadow_ = shadow;
};

/**
 * Get whether this block is an insertion marker block or not.
 * @return {boolean} True if an insertion marker.
 * @package
 */
Blockly.Block.prototype.isInsertionMarker = function() {
  return this.isInsertionMarker_;
};

/**
 * Set whether this block is an insertion marker block or not.
 * Once set this cannot be unset.
 * @param {boolean} insertionMarker True if an insertion marker.
 * @package
 */
Blockly.Block.prototype.setInsertionMarker = function(insertionMarker) {
  this.isInsertionMarker_ = insertionMarker;
};

/**
 * Get whether this block is editable or not.
 * @return {boolean} True if editable.
 */
Blockly.Block.prototype.isEditable = function() {
  return this.editable_ && !(this.workspace && this.workspace.options.readOnly);
};

/**
 * Set whether this block is editable or not.
 * @param {boolean} editable True if editable.
 */
Blockly.Block.prototype.setEditable = function(editable) {
  this.editable_ = editable;
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      field.updateEditable();
    }
  }
};

/**
 * Find the connection on this block that corresponds to the given connection
 * on the other block.
 * Used to match connections between a block and its insertion marker.
 * @param {!Blockly.Block} otherBlock The other block to match against.
 * @param {!Blockly.Connection} conn The other connection to match.
 * @return {Blockly.Connection} The matching connection on this block, or null.
 * @package
 */
Blockly.Block.prototype.getMatchingConnection = function(otherBlock, conn) {
  var connections = this.getConnections_(true);
  var otherConnections = otherBlock.getConnections_(true);
  if (connections.length != otherConnections.length) {
    throw Error("Connection lists did not match in length.");
  }
  for (var i = 0; i < otherConnections.length; i++) {
    if (otherConnections[i] == conn) {
      return connections[i];
    }
  }
  return null;
};

/**
 * Set the URL of this block's help page.
 * @param {string|Function} url URL string for block help, or function that
 *     returns a URL.  Null for no help.
 */
Blockly.Block.prototype.setHelpUrl = function(url) {
  this.helpUrl = url;
};

/**
 * Change the tooltip text for a block.
 * @param {string|!Function} newTip Text for tooltip or a parent element to
 *     link to for its tooltip.  May be a function that returns a string.
 */
Blockly.Block.prototype.setTooltip = function(newTip) {
  this.tooltip = newTip;
};

/**
 * Get the colour of a block.
 * @return {string} #RRGGBB string.
 */
Blockly.Block.prototype.getColour = function() {
  return this.colour_;
};

/**
 * Get the secondary colour of a block.
 * @return {?string} #RRGGBB string.
 */
Blockly.Block.prototype.getColourSecondary = function() {
  return this.colourSecondary_;
};

/**
 * Get the tertiary colour of a block.
 * @return {?string} #RRGGBB string.
 */
Blockly.Block.prototype.getColourTertiary = function() {
  return this.colourTertiary_;
};

/**
 * Get the shadow colour of a block.
 * @return {?string} #RRGGBB string.
 */
Blockly.Block.prototype.getColourShadow = function() {
  var colourSecondary = this.getColourSecondary();
  if (colourSecondary) {
    return colourSecondary;
  }
  return Blockly.utils.colour.blend('#fff', this.getColour(), 0.6);
};

/**
 * Get the border colour(s) of a block.
 * @return {{colourDark, colourLight, colourBorder}} An object containing
 *     colour values for the border(s) of the block. If the block is using a
 *     style the colourBorder will be defined and equal to the tertiary colour
 *     of the style (#RRGGBB string). Otherwise the colourDark and colourLight
 *     attributes will be defined (#RRGGBB strings).
 * @package
 */
Blockly.Block.prototype.getColourBorder = function() {
  var colourTertiary = this.getColourTertiary();
  if (colourTertiary) {
    return {
      colourBorder: colourTertiary,
      colourLight: null,
      colourDark: null
    };
  }
  var colour = this.getColour();
  return {
    colourBorder: null,
    colourLight: Blockly.utils.colour.blend('#fff', colour, 0.3),
    colourDark: Blockly.utils.colour.blend('#000', colour, 0.2)
  };
};

/**
 * Get the name of the block style.
 * @return {?string} Name of the block style.
 */
Blockly.Block.prototype.getStyleName = function() {
  return this.styleName_;
};

/**
 * Get the HSV hue value of a block.  Null if hue not set.
 * @return {?number} Hue value (0-360).
 */
Blockly.Block.prototype.getHue = function() {
  return this.hue_;
};

/**
 * Change the colour of a block.
 * @param {number|string} colour HSV hue value (0 to 360), #RRGGBB string,
 *     or a message reference string pointing to one of those two values.
 */
Blockly.Block.prototype.setColour = function(colour) {
  var dereferenced = (typeof colour == 'string') ?
      Blockly.utils.replaceMessageReferences(colour) : colour;

  var hue = Number(dereferenced);
  if (!isNaN(hue) && 0 <= hue && hue <= 360) {
    this.hue_ = hue;
    this.colour_ = Blockly.hueToHex(hue);
  } else {
    var hex = Blockly.utils.colour.parse(dereferenced);
    if (hex) {
      this.colour_ = hex;
      // Only store hue if colour is set as a hue.
      this.hue_ = null;
    } else {
      var errorMsg = 'Invalid colour: "' + dereferenced + '"';
      if (colour != dereferenced) {
        errorMsg += ' (from "' + colour + '")';
      }
      throw Error(errorMsg);
    }
  }
};

/**
 * Set the style and colour values of a block.
 * @param {string} blockStyleName Name of the block style
 * @throws {Error} if the block style does not exist.
 */
Blockly.Block.prototype.setStyle = function(blockStyleName) {
  var theme = this.workspace.getTheme();
  var blockStyle = theme.getBlockStyle(blockStyleName);
  this.styleName_ = blockStyleName;

  if (blockStyle) {
    this.colourSecondary_ = blockStyle['colourSecondary'];
    this.colourTertiary_ = blockStyle['colourTertiary'];
    this.hat = blockStyle.hat;
    // Set colour will trigger an updateColour() on a block_svg
    this.setColour(blockStyle['colourPrimary']);
  } else {
    throw Error('Invalid style name: ' + blockStyleName);
  }
};

/**
 * Sets a callback function to use whenever the block's parent workspace
 * changes, replacing any prior onchange handler. This is usually only called
 * from the constructor, the block type initializer function, or an extension
 * initializer function.
 * @param {function(Blockly.Events.Abstract)} onchangeFn The callback to call
 *     when the block's workspace changes.
 * @throws {Error} if onchangeFn is not falsey or a function.
 */
Blockly.Block.prototype.setOnChange = function(onchangeFn) {
  if (onchangeFn && typeof onchangeFn != 'function') {
    throw Error('onchange must be a function.');
  }
  if (this.onchangeWrapper_) {
    this.workspace.removeChangeListener(this.onchangeWrapper_);
  }
  this.onchange = onchangeFn;
  if (this.onchange) {
    this.onchangeWrapper_ = onchangeFn.bind(this);
    this.workspace.addChangeListener(this.onchangeWrapper_);
  }
};

/**
 * Returns the named field from a block.
 * @param {string} name The name of the field.
 * @return {Blockly.Field} Named field, or null if field does not exist.
 */
Blockly.Block.prototype.getField = function(name) {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      if (field.name == name) {
        return field;
      }
    }
  }
  return null;
};

/**
 * Return all variables referenced by this block.
 * @return {!Array.<string>} List of variable names.
 * @package
 */
Blockly.Block.prototype.getVars = function() {
  var vars = [];
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      if (field.referencesVariables() == Blockly.FIELD_VARIABLE_DEFAULT) {
        vars.push(field.getValue());
      }
    }
  }
  return vars;
};

/**
 * Return all variables referenced by this block.
 * @return {!Array.<!Blockly.VariableModel>} List of variable models.
 * @package
 */
Blockly.Block.prototype.getVarModels = function() {
  var vars = [];
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      if (field.referencesVariables() == Blockly.FIELD_VARIABLE_DEFAULT) {
        var model = this.workspace.getVariableById(
            /** @type {string} */ (field.getValue()));
        // Check if the variable actually exists (and isn't just a potential
        // variable).
        if (model) {
          vars.push(model);
        }
      }
    }
  }
  return vars;
};

/**
 * Returns all bound-variables referenced by this block.
 * @param {boolean=} opt_filter If true, collect only variable references. If
 *     false, collect only values. If not provided, include both of them.
 * @param {boolean=} opt_structFilter If true, collect structure variables too.
 *     Otherwise, only normal variables. Defaults to false.
 * @return {!Array.<!Blockly.BoundVariableAbstract>} List of variables.
 * @package
 */
Blockly.Block.prototype.getVariables = function(opt_filter, opt_structFilter) {
  var vars = [];
  var filtered = opt_filter === true || opt_filter === false;
  var collectStructure = opt_structFilter == true;
  if (!filtered || opt_filter === true) {
    for (name in this.typedReference) {
      vars.push(this.typedReference[name]);
    }
    if (collectStructure) {
      for (name in this.typedStructureReference) {
        vars.push(this.typedStructureReference[name]);
      }
    }
  }
  if (!filtered || opt_filter === false) {
    for (name in this.typedValue) {
      vars.push(this.typedValue[name]);
    }
  }
  return vars;
};

/**
 * Notification that a variable is renaming but keeping the same ID.  If the
 * variable is in use on this block, rerender to show the new name.
 * @param {!Blockly.VariableModel} variable The variable being renamed.
 * @package
 */
Blockly.Block.prototype.updateVarName = function(variable) {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      if (field.referencesVariables() == Blockly.FIELD_VARIABLE_DEFAULT &&
          variable.getId() == field.getValue()) {
        field.refreshVariableName();
      }
    }
  }
};

/**
 * Notification that a variable is renaming.
 * If the ID matches one of this block's variables, rename it.
 * @param {string} oldId ID of variable to rename.
 * @param {string} newId ID of new variable.  May be the same as oldId, but with
 *     an updated name.
 */
Blockly.Block.prototype.renameVarById = function(oldId, newId) {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    for (var j = 0, field; field = input.fieldRow[j]; j++) {
      if (field.referencesVariables() == Blockly.FIELD_VARIABLE_DEFAULT &&
          oldId == field.getValue()) {
        field.setValue(newId);
      }
    }
  }
};

/**
 * Returns the language-neutral value from the field of a block.
 * @param {string} name The name of the field.
 * @return {*} Value from the field or null if field does not exist.
 */
Blockly.Block.prototype.getFieldValue = function(name) {
  var field = this.getField(name);
  if (field) {
    return field.getValue();
  }
  return null;
};

/**
 * Change the field value for a block (e.g. 'CHOOSE' or 'REMOVE').
 * @param {string} newValue Value to be the new field.
 * @param {string} name The name of the field.
 */
Blockly.Block.prototype.setFieldValue = function(newValue, name) {
  var field = this.getField(name);
  if (!field) {
    throw Error('Field "' + name + '" not found.');
  }
  field.setValue(newValue);
};

/**
 * Set whether this block can chain onto the bottom of another block.
 * @param {boolean} newBoolean True if there can be a previous statement.
 * @param {(string|Array.<string>|null)=} opt_check Statement type or
 *     list of statement types.  Null/undefined if any type could be connected.
 */
Blockly.Block.prototype.setPreviousStatement = function(newBoolean, opt_check) {
  if (newBoolean) {
    if (opt_check === undefined) {
      opt_check = null;
    }
    if (!this.previousConnection) {
      if (this.outputConnection) {
        throw Error('Remove output connection prior to adding previous ' +
            'connection.');
      }
      this.previousConnection =
          this.makeConnection_(Blockly.PREVIOUS_STATEMENT);
    }
    this.previousConnection.setCheck(opt_check);
  } else {
    if (this.previousConnection) {
      if (this.previousConnection.isConnected()) {
        throw Error('Must disconnect previous statement before removing ' +
            'connection.');
      }
      this.previousConnection.dispose();
      this.previousConnection = null;
    }
  }
};

/**
 * Set whether another block can chain onto the bottom of this block.
 * @param {boolean} newBoolean True if there can be a next statement.
 * @param {(string|Array.<string>|null)=} opt_check Statement type or
 *     list of statement types.  Null/undefined if any type could be connected.
 */
Blockly.Block.prototype.setNextStatement = function(newBoolean, opt_check) {
  if (newBoolean) {
    if (opt_check === undefined) {
      opt_check = null;
    }
    if (!this.nextConnection) {
      this.nextConnection = this.makeConnection_(Blockly.NEXT_STATEMENT);
    }
    this.nextConnection.setCheck(opt_check);
  } else {
    if (this.nextConnection) {
      if (this.nextConnection.isConnected()) {
        throw Error('Must disconnect next statement before removing ' +
            'connection.');
      }
      this.nextConnection.dispose();
      this.nextConnection = null;
    }
  }
};

/**
 * Set or remove previous and next statements with dummy type expressions.
 * @param {boolean} newBoolean True if there can be statements.
 */
Blockly.Block.prototype.setTypedStatements = function(newBoolean) {
  this.setPreviousStatement(newBoolean);
  this.setNextStatement(newBoolean);

  if (newBoolean) {
    // Append dummy type expression to statement connections so that they
    // can trigger types/variables check.
    this.previousConnection.setTypeExpr(Blockly.TypeExpr.generateTypeVar());
    this.nextConnection.setTypeExpr(Blockly.TypeExpr.generateTypeVar());
  }
};

/**
 * Set whether this block returns a value.
 * @param {boolean} newBoolean True if there is an output.
 * @param {(string|Array.<string>|null)=} opt_check Returned type or list
 *     of returned types.  Null or undefined if any type could be returned
 *     (e.g. variable get).
 */
Blockly.Block.prototype.setOutput = function(newBoolean, opt_check) {
  if (newBoolean) {
    if (opt_check === undefined) {
      opt_check = null;
    }
    if (!this.outputConnection) {
      if (this.previousConnection) {
        throw Error('Remove previous connection prior to adding output ' +
            'connection.');
      }
      this.outputConnection = this.makeConnection_(Blockly.OUTPUT_VALUE);
    }
    this.outputConnection.setCheck(opt_check);
  } else {
    if (this.outputConnection) {
      if (this.outputConnection.isConnected()) {
        throw Error('Must disconnect output value before removing connection.');
      }
      this.outputConnection.dispose();
      this.outputConnection = null;
    }
  }
};

/**
 * Store the given type expression in the output connection of this block.
 * @param {!Blockly.TypeExpr} typeExpr The type expression to be stored in the
 *     output connection of this block.
 * @param {boolean=} opt_overwrite If true, overwrite a type expression already
 *     present on the connection.
 */
Blockly.Block.prototype.setOutputTypeExpr = function(typeExpr, opt_overwrite) {
  if (!this.workspace.options.typedVersion) {
    throw Error('Allow to have types only in a workspace of typedBlockly version.');
  }
  this.outputConnection.setTypeExpr(typeExpr, opt_overwrite);
}

/**
 * Replace each of this block's type expressions by the corresponding one of
 * another block. If both blocks have nested blocks, also replace their type
 * expressions on them.
 * @param {!Blockly.Block} oldBlock The block whose type expressions to replace
 *     that of this block.
 * @param {boolean=} opt_removeTypeExpr If true, remove references to type
 *     expressions which has been stored in the oldBlock after the replacement.
 *     If false, just leave them as they are. Removing them is recommended if
 *     the oldBlock is being deleted. Defaults to true.
 */
Blockly.Block.prototype.replaceTypeExprWith = function(oldBlock,
    opt_removeTypeExpr) {
  var pairsToUnify = [[this, oldBlock]];
  while (pairsToUnify.length) {
    var pair = pairsToUnify.pop();
    var thisBlock = pair[0];
    var oldBlock = pair[1];
    if (thisBlock.type !== oldBlock.type) {
      continue;
    }
    if (thisBlock.outputConnection) {
      thisBlock.outputConnection.replaceTypeExprWith(
          oldBlock.outputConnection, opt_removeTypeExpr);
    }
    for (var i = 0, input; input = thisBlock.inputList[i]; i++) {
      var oldInput = oldBlock.inputList[i];
      if (input.connection) {
        if (input.name !== oldInput.name) {
          throw Error('assertion failure in block.js, replaceTypeExprWith1');
        }
        input.connection.replaceTypeExprWith(oldInput.connection,
            opt_removeTypeExpr);
        var targetBlock = input.connection.targetBlock();
        var oldTargetBlock = oldInput.connection.targetBlock();
        if (targetBlock && oldTargetBlock) {
          pairsToUnify.push([targetBlock, oldTargetBlock]);
        }
      }
    }
    if (typeof thisBlock.typeExprReplaced == 'function') {
      if (typeof oldBlock.typeExprReplaced !== 'function') {
        throw Error('assertion failure in block.js, replaceTypeExprWith2');
      }
      thisBlock.typeExprReplaced(oldBlock);
      if (opt_removeTypeExpr !== false) {
        oldBlock.typeExprReplaced(null);
      }
    }
  }
};

/**
 * Replace each of workbench workspaces this blocks contain with the
 * corresponding one of the given block.
 * @param {!Blockly.Block} oldBlock The block whose workbench workspaces to
 *     replace those of this blocks with.
 */
Blockly.Block.prototype.replaceWorkbenchWorkspaceWith = function(oldBlock) {
  var newBlockDesc = this.getDescendants(true);
  var oldBlockDesc = oldBlock.getDescendants(true);
  for (var i = 0, oldChild; oldChild = oldBlockDesc[i]; i++) {
    var newChild = newBlockDesc[i];
    if (oldChild.type !== newChild.type) {
      throw Error('assertion failure in block.js, replaceWorkbenchWorkspaceWith');
    }
    if (Array.isArray(oldChild.workbenches)) {
      for (var j = 0, workbench; workbench = oldChild.workbenches[j]; j++) {
        var workspace = workbench.getWorkspace();
        var newWorkbench = newChild.workbenches[j];
        newWorkbench.replaceWorkspace(workbench);
      }
    }
  }
};

/**
 * Set whether value inputs are arranged horizontally or vertically.
 * @param {boolean} newBoolean True if inputs are horizontal.
 */
Blockly.Block.prototype.setInputsInline = function(newBoolean) {
  if (this.inputsInline != newBoolean) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        this, 'inline', null, this.inputsInline, newBoolean));
    this.inputsInline = newBoolean;
  }
};

/**
 * Get whether value inputs are arranged horizontally or vertically.
 * @return {boolean} True if inputs are horizontal.
 */
Blockly.Block.prototype.getInputsInline = function() {
  if (this.inputsInline != undefined) {
    // Set explicitly.
    return this.inputsInline;
  }
  // Not defined explicitly.  Figure out what would look best.
  for (var i = 1; i < this.inputList.length; i++) {
    if (this.inputList[i - 1].type == Blockly.DUMMY_INPUT &&
        this.inputList[i].type == Blockly.DUMMY_INPUT) {
      // Two dummy inputs in a row.  Don't inline them.
      return false;
    }
  }
  for (var i = 1; i < this.inputList.length; i++) {
    if (this.inputList[i - 1].type == Blockly.INPUT_VALUE &&
        this.inputList[i].type == Blockly.DUMMY_INPUT) {
      // Dummy input after a value input.  Inline them.
      return true;
    }
  }
  return false;
};

/**
 * Set whether the block is disabled or not.
 * @param {boolean} disabled True if disabled.
 * @deprecated May 2019
 */
Blockly.Block.prototype.setDisabled = function(disabled) {
  console.warn('Deprecated call to Blockly.Block.prototype.setDisabled, ' +
               'use Blockly.Block.prototype.setEnabled instead.');
  this.setEnabled(!disabled);
};

/**
 * Get whether this block is enabled or not.
 * @return {boolean} True if enabled.
 */
Blockly.Block.prototype.isEnabled = function() {
  return !this.disabled;
};

/**
 * Set whether the block is enabled or not.
 * @param {boolean} enabled True if enabled.
 */
Blockly.Block.prototype.setEnabled = function(enabled) {
  if (this.isEnabled() != enabled) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        this, 'disabled', null, this.disabled, !enabled));
    this.disabled = !enabled;
  }
};

/**
 * Get whether the block is disabled or not due to parents.
 * The block's own disabled property is not considered.
 * @return {boolean} True if disabled.
 */
Blockly.Block.prototype.getInheritedDisabled = function() {
  var ancestor = this.getSurroundParent();
  while (ancestor) {
    if (ancestor.disabled) {
      return true;
    }
    ancestor = ancestor.getSurroundParent();
  }
  // Ran off the top.
  return false;
};

/**
 * Get whether the block is collapsed or not.
 * @return {boolean} True if collapsed.
 */
Blockly.Block.prototype.isCollapsed = function() {
  return this.collapsed_;
};

/**
 * Set whether the block is collapsed or not.
 * @param {boolean} collapsed True if collapsed.
 */
Blockly.Block.prototype.setCollapsed = function(collapsed) {
  if (this.collapsed_ != collapsed) {
    Blockly.Events.fire(new Blockly.Events.BlockChange(
        this, 'collapsed', null, this.collapsed_, collapsed));
    this.collapsed_ = collapsed;
  }
};

/**
 * Get whether the block is able to transfer workspace.
 * @return {boolean} True if transferable.
 */
Blockly.Block.prototype.isTransferable = function() {
  // All blocks in a workspace of typed version are transferable except blocks
  // disabled to transfer.
  if (this.workspace.options.typedVersion) {
    return this.disableTransfer_ !== true;
  }
  return this.transferable_;
};

/**
 * Set whether the block is able to transfer workspace.
 * @param {boolean} transferable True if transferable.
 */
Blockly.Block.prototype.setTransferable = function(transferable) {
  this.transferable_ = transferable;
};

/**
 * Get whether the block is currently transferring its workspace.
 * @return {boolean} True if this block is in the process of transferring.
 */
Blockly.Block.prototype.isTransferring = function() {
  if (!Blockly.transferring.block) {
    return false;
  }
  if (Blockly.transferring.block.workspace != this.workspace) {
    return false;
  }
  return !!this.isTransferring_;
};

/**
 * Find a list of workbenches which belong to this block or its nested blocks.
 * @return {!Array} A list of workbenches.
 */
Blockly.Block.prototype.getAllWorkbenches = function() {
  var blocks = this.getDescendants();
  var workbenches = [];
  for (var i = 0, child; child = blocks[i]; i++) {
    if (Array.isArray(child.workbenches)) {
      Array.prototype.push.apply(workbenches, child.workbenches);
    }
  }
  return workbenches;
};

/**
 * Is this block allowed to be copied?
 * @return {boolean} True if this block are copyable.
 */
Blockly.Block.prototype.isCopyable = function() {
  return this.canBeRoot();
};

/**
 * Create a human-readable text representation of this block and any children.
 * @param {number=} opt_maxLength Truncate the string to this length.
 * @param {string=} opt_emptyToken The placeholder string used to denote an
 *     empty field. If not specified, '?' is used.
 * @return {string} Text of block.
 */
Blockly.Block.prototype.toString = function(opt_maxLength, opt_emptyToken) {
  var text = [];
  var emptyFieldPlaceholder = opt_emptyToken || '?';
  if (this.collapsed_) {
    text.push(this.getInput('_TEMP_COLLAPSED_INPUT').fieldRow[0].getText());
  } else {
    for (var i = 0, input; input = this.inputList[i]; i++) {
      for (var j = 0, field; field = input.fieldRow[j]; j++) {
        text.push(field.getText());
      }
      if (input.connection) {
        var child = input.connection.targetBlock();
        if (child) {
          text.push(child.toString(undefined, opt_emptyToken));
        } else {
          text.push(emptyFieldPlaceholder);
        }
      }
    }
  }
  text = text.join(' ').trim() || '???';
  if (opt_maxLength) {
    // TODO: Improve truncation so that text from this block is given priority.
    // E.g. "1+2+3+4+5+6+7+8+9=0" should be "...6+7+8+9=0", not "1+2+3+4+5...".
    // E.g. "1+2+3+4+5=6+7+8+9+0" should be "...4+5=6+7...".
    if (text.length > opt_maxLength) {
      text = text.substring(0, opt_maxLength - 3) + '...';
    }
  }
  return text;
};

/**
 * Shortcut for appending a value input row.
 * @param {string} name Language-neutral identifier which may used to find this
 *     input again.  Should be unique to this block.
 * @return {!Blockly.Input} The input object created.
 */
Blockly.Block.prototype.appendValueInput = function(name) {
  return this.appendInput_(Blockly.INPUT_VALUE, name);
};

/**
 * Shortcut for appending a value input row.
 * @param {string} name Language-neutral identifier which may used to find this
 *     input again.  Should be unique to this block.
 * @param {string} refName Name of input that comes after the inserted input.
 * @return {!Blockly.Input} The input object created.
 */
Blockly.Block.prototype.appendValueInputBefore = function(name, refName) {
  var input = this.appendInput_(Blockly.INPUT_VALUE, name);
  this.moveInputBefore(name, refName);
  return input;
};

/**
 * Shortcut for appending a statement input row.
 * @param {string} name Language-neutral identifier which may used to find this
 *     input again.  Should be unique to this block.
 * @return {!Blockly.Input} The input object created.
 */
Blockly.Block.prototype.appendStatementInput = function(name) {
  return this.appendInput_(Blockly.NEXT_STATEMENT, name);
};

/**
 * Shortcut for appending a dummy input row.
 * @param {string=} opt_name Language-neutral identifier which may used to find
 *     this input again.  Should be unique to this block.
 * @return {!Blockly.Input} The input object created.
 */
Blockly.Block.prototype.appendDummyInput = function(opt_name) {
  return this.appendInput_(Blockly.DUMMY_INPUT, opt_name || '');
};

/**
 * Initialize this block using a cross-platform, internationalization-friendly
 * JSON description.
 * @param {!Object} json Structured data describing the block.
 */
Blockly.Block.prototype.jsonInit = function(json) {
  var warningPrefix = json['type'] ? 'Block "' + json['type'] + '": ' : '';

  // Validate inputs.
  if (json['output'] && json['previousStatement']) {
    throw Error(warningPrefix +
        'Must not have both an output and a previousStatement.');
  }

  // Set basic properties of block.
  // Makes styles backward compatible with old way of defining hat style.
  if (json['style'] && json['style'].hat) {
    this.hat = json['style'].hat;
    // Must set to null so it doesn't error when checking for style and colour.
    json['style'] = null;
  }

  if (json['style'] && json['colour']) {
    throw Error(warningPrefix + 'Must not have both a colour and a style.');
  } else if (json['style']) {
    this.jsonInitStyle_(json, warningPrefix);
  } else {
    this.jsonInitColour_(json, warningPrefix);
  }

  // Interpolate the message blocks.
  var i = 0;
  while (json['message' + i] !== undefined) {
    this.interpolate_(json['message' + i], json['args' + i] || [],
        json['lastDummyAlign' + i]);
    i++;
  }

  if (json['inputsInline'] !== undefined) {
    this.setInputsInline(json['inputsInline']);
  }
  // Set output and previous/next connections.
  if (json['output'] !== undefined) {
    this.setOutput(true, json['output']);
  }
  if (json['previousStatement'] !== undefined) {
    this.setPreviousStatement(true, json['previousStatement']);
  }
  if (json['nextStatement'] !== undefined) {
    this.setNextStatement(true, json['nextStatement']);
  }
  if (json['tooltip'] !== undefined) {
    var rawValue = json['tooltip'];
    var localizedText = Blockly.utils.replaceMessageReferences(rawValue);
    this.setTooltip(localizedText);
  }
  if (json['enableContextMenu'] !== undefined) {
    var rawValue = json['enableContextMenu'];
    this.contextMenu = !!rawValue;
  }
  if (json['helpUrl'] !== undefined) {
    var rawValue = json['helpUrl'];
    var localizedValue = Blockly.utils.replaceMessageReferences(rawValue);
    this.setHelpUrl(localizedValue);
  }
  if (typeof json['extensions'] == 'string') {
    console.warn(
        warningPrefix + 'JSON attribute \'extensions\' should be an array of' +
        ' strings. Found raw string in JSON for \'' + json['type'] +
        '\' block.');
    json['extensions'] = [json['extensions']];  // Correct and continue.
  }

  // Add the mutator to the block
  if (json['mutator'] !== undefined) {
    Blockly.Extensions.apply(json['mutator'], this, true);
  }

  if (Array.isArray(json['extensions'])) {
    var extensionNames = json['extensions'];
    for (var j = 0; j < extensionNames.length; ++j) {
      var extensionName = extensionNames[j];
      Blockly.Extensions.apply(extensionName, this, false);
    }
  }
};

/**
 * Initialize the colour of this block from the JSON description.
 * @param {!Object} json Structured data describing the block.
 * @param {string} warningPrefix Warning prefix string identifying block.
 * @private
 */
Blockly.Block.prototype.jsonInitColour_ = function(json, warningPrefix) {
  if ('colour' in json) {
    if (json['colour'] === undefined) {
      console.warn(warningPrefix + 'Undefined colour value.');
    } else {
      var rawValue = json['colour'];
      try {
        this.setColour(rawValue);
      } catch (e) {
        console.warn(warningPrefix + 'Illegal colour value: ', rawValue);
      }
    }
  }
};

/**
 * Initialize the style of this block from the JSON description.
 * @param {!Object} json Structured data describing the block.
 * @param {string} warningPrefix Warning prefix string identifying block.
 * @private
 */
Blockly.Block.prototype.jsonInitStyle_ = function(json, warningPrefix) {
  var blockStyleName = json['style'];
  try {
    this.setStyle(blockStyleName);
  } catch (styleError) {
    console.warn(warningPrefix + 'Style does not exist: ', blockStyleName);
  }
};

/**
 * Add key/values from mixinObj to this block object. By default, this method
 * will check that the keys in mixinObj will not overwrite existing values in
 * the block, including prototype values. This provides some insurance against
 * mixin / extension incompatibilities with future block features. This check
 * can be disabled by passing true as the second argument.
 * @param {!Object} mixinObj The key/values pairs to add to this block object.
 * @param {boolean=} opt_disableCheck Option flag to disable overwrite checks.
 */
Blockly.Block.prototype.mixin = function(mixinObj, opt_disableCheck) {
  if (opt_disableCheck !== undefined && typeof opt_disableCheck != 'boolean') {
    throw Error('opt_disableCheck must be a boolean if provided');
  }
  if (!opt_disableCheck) {
    var overwrites = [];
    for (var key in mixinObj) {
      if (this[key] !== undefined) {
        overwrites.push(key);
      }
    }
    if (overwrites.length) {
      throw Error('Mixin will overwrite block members: ' +
          JSON.stringify(overwrites));
    }
  }
  Blockly.utils.object.mixin(this, mixinObj);
};

/**
 * Interpolate a message description onto the block.
 * @param {string} message Text contains interpolation tokens (%1, %2, ...)
 *     that match with fields or inputs defined in the args array.
 * @param {!Array} args Array of arguments to be interpolated.
 * @param {string|undefined} lastDummyAlign If a dummy input is added at the
 *     end, how should it be aligned?
 * @private
 */
Blockly.Block.prototype.interpolate_ = function(message, args, lastDummyAlign) {
  var tokens = Blockly.utils.tokenizeInterpolation(message);
  // Interpolate the arguments.  Build a list of elements.
  var indexDup = [];
  var indexCount = 0;
  var elements = [];
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];
    if (typeof token == 'number') {
      if (token <= 0 || token > args.length) {
        throw Error('Block "' + this.type + '": ' +
            'Message index %' + token + ' out of range.');
      }
      if (indexDup[token]) {
        throw Error('Block "' + this.type + '": ' +
            'Message index %' + token + ' duplicated.');
      }
      indexDup[token] = true;
      indexCount++;
      elements.push(args[token - 1]);
    } else {
      token = token.trim();
      if (token) {
        elements.push(token);
      }
    }
  }
  if (indexCount != args.length) {
    throw Error('Block "' + this.type + '": ' +
        'Message does not reference all ' + args.length + ' arg(s).');
  }
  // Add last dummy input if needed.
  if (elements.length && (typeof elements[elements.length - 1] == 'string' ||
      Blockly.utils.string.startsWith(
          elements[elements.length - 1]['type'], 'field_'))) {
    var dummyInput = {type: 'input_dummy'};
    if (lastDummyAlign) {
      dummyInput['align'] = lastDummyAlign;
    }
    elements.push(dummyInput);
  }
  // Lookup of alignment constants.
  var alignmentLookup = {
    'LEFT': Blockly.ALIGN_LEFT,
    'RIGHT': Blockly.ALIGN_RIGHT,
    'CENTRE': Blockly.ALIGN_CENTRE
  };
  // Populate block with inputs and fields.
  var fieldStack = [];
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    if (typeof element == 'string') {
      fieldStack.push([element, undefined]);
    } else {
      var field = null;
      var input = null;
      do {
        var altRepeat = false;
        if (typeof element == 'string') {
          field = new Blockly.FieldLabel(element);
        } else {
          switch (element['type']) {
            case 'input_value':
              input = this.appendValueInput(element['name']);
              break;
            case 'input_statement':
              input = this.appendStatementInput(element['name']);
              break;
            case 'input_dummy':
              input = this.appendDummyInput(element['name']);
              break;
            default:
              // This should handle all field JSON parsing, including
              // options that can be applied to any field type.
              field = Blockly.fieldRegistry.fromJson(element);

              // Unknown field.
              if (!field) {
                if (element['alt']) {
                  element = element['alt'];
                  altRepeat = true;
                }
              }
          }
        }
      } while (altRepeat);
      if (field) {
        fieldStack.push([field, element['name']]);
      } else if (input) {
        if (element['check']) {
          input.setCheck(element['check']);
        }
        if (element['align']) {
          input.setAlign(alignmentLookup[element['align']]);
        }
        for (var j = 0; j < fieldStack.length; j++) {
          input.appendField(fieldStack[j][0], fieldStack[j][1]);
        }
        fieldStack.length = 0;
      }
    }
  }
};

/**
 * Add a value input, statement input or local variable to this block.
 * @param {number} type Either Blockly.INPUT_VALUE or Blockly.NEXT_STATEMENT or
 *     Blockly.DUMMY_INPUT.
 * @param {string} name Language-neutral identifier which may used to find this
 *     input again.  Should be unique to this block.
 * @return {!Blockly.Input} The input object created.
 * @protected
 */
Blockly.Block.prototype.appendInput_ = function(type, name) {
  var connection = null;
  if (type == Blockly.INPUT_VALUE || type == Blockly.NEXT_STATEMENT) {
    connection = this.makeConnection_(type);
  }
  var input = new Blockly.Input(type, name, this, connection);
  // Append input to list.
  this.inputList.push(input);
  return input;
};

/**
 * Move a named input to a different location on this block.
 * @param {string} name The name of the input to move.
 * @param {?string} refName Name of input that should be after the moved input,
 *   or null to be the input at the end.
 */
Blockly.Block.prototype.moveInputBefore = function(name, refName) {
  if (name == refName) {
    return;
  }
  // Find both inputs.
  var inputIndex = -1;
  var refIndex = refName ? -1 : this.inputList.length;
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.name == name) {
      inputIndex = i;
      if (refIndex != -1) {
        break;
      }
    } else if (refName && input.name == refName) {
      refIndex = i;
      if (inputIndex != -1) {
        break;
      }
    }
  }
  if (inputIndex == -1) {
    throw Error('Named input "' + name + '" not found.');
  }
  if (refIndex == -1) {
    throw Error('Reference input "' + refName + '" not found.');
  }
  this.moveNumberedInputBefore(inputIndex, refIndex);
};

/**
 * Move a numbered input to a different location on this block.
 * @param {number} inputIndex Index of the input to move.
 * @param {number} refIndex Index of input that should be after the moved input.
 */
Blockly.Block.prototype.moveNumberedInputBefore = function(
    inputIndex, refIndex) {
  // Validate arguments.
  if (inputIndex == refIndex) {
    throw Error('Can\'t move input to itself.');
  }
  if (inputIndex >= this.inputList.length) {
    throw RangeError('Input index ' + inputIndex + ' out of bounds.');
  }
  if (refIndex > this.inputList.length) {
    throw RangeError('Reference input ' + refIndex + ' out of bounds.');
  }
  // Remove input.
  var input = this.inputList[inputIndex];
  this.inputList.splice(inputIndex, 1);
  if (inputIndex < refIndex) {
    refIndex--;
  }
  // Reinsert input.
  this.inputList.splice(refIndex, 0, input);
};

/**
 * Remove an input from this block.
 * @param {string} name The name of the input.
 * @param {boolean=} opt_quiet True to prevent error if input is not present.
 * @throws {Error} if the input is not present and
 *     opt_quiet is not true.
 */
Blockly.Block.prototype.removeInput = function(name, opt_quiet) {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.name == name) {
      input.dispose();
      this.inputList.splice(i, 1);
      return;
    }
  }
  if (!opt_quiet) {
    throw Error('Input not found: ' + name);
  }
};

/**
 * Fetches the named input object.
 * @param {string} name The name of the input.
 * @return {Blockly.Input} The input object, or null if input does not exist.
 */
Blockly.Block.prototype.getInput = function(name) {
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.name == name) {
      return input;
    }
  }
  // This input does not exist.
  return null;
};

/**
 * Fetches the block attached to the named input.
 * @param {string} name The name of the input.
 * @return {Blockly.Block} The attached value block, or null if the input is
 *     either disconnected or if the input does not exist.
 */
Blockly.Block.prototype.getInputTargetBlock = function(name) {
  var input = this.getInput(name);
  return input && input.connection && input.connection.targetBlock();
};

/**
 * Returns type description of the block attached to the named input.
 * @return {undefined|null|!Blockly.TypeExpr} The type description if it's found.
 *     If the specified input does not exist, undefined. Otherwise null.
 */
Blockly.Block.prototype.getTargetTypeCtor = function(name) {
  if (!name) {
    return undefined;
  }
  var input = this.getInput(name);
  if (!input || !input.connection) {
    return undefined;
  }
  var block = input.connection.targetBlock();
  if (!block) {
    return null;
  }
  if (typeof block.getTypeCtor != 'function') {
    return null;
  }
  return block.getTypeCtor();
};

/**
 * Returns the target connection which connect this block to the parent block.
 * @return {Blockly.Connection} The target connection if this block has a
 *     parent. Otherwise, null.
 */
Blockly.Block.prototype.getParentConnection = function() {
  var parentBlock = this.getParent();
  if (!parentBlock) {
    return null;
  }
  var targetConnection;
  if (this.outputConnection) {
    targetConnection = this.outputConnection.targetConnection;
  } else if (this.previousConnection) {
    targetConnection = this.previousConnection.targetConnection;
  }
  if (!targetConnection ||
      targetConnection.getSourceBlock() !== parentBlock) {
    throw Error('The parent\'s connection is not found.');
  }
  return targetConnection;
};

/**
 * Returns the comment on this block (or null if there is no comment).
 * @return {string} Block's comment.
 */
Blockly.Block.prototype.getCommentText = function() {
  return this.commentModel.text;
};

/**
 * Set this block's comment text.
 * @param {?string} text The text, or null to delete.
 */
Blockly.Block.prototype.setCommentText = function(text) {
  if (this.commentModel.text == text) {
    return;
  }
  Blockly.Events.fire(new Blockly.Events.BlockChange(
      this, 'comment', null, this.commentModel.text, text));
  this.commentModel.text = text;
  this.comment = text;  // For backwards compatibility.
};

/**
 * Set this block's warning text.
 * @param {?string} _text The text, or null to delete.
 * @param {string=} _opt_id An optional ID for the warning text to be able to
 *     maintain multiple warnings.
 */
Blockly.Block.prototype.setWarningText = function(_text, _opt_id) {
  // NOP.
};

/**
 * Give this block a mutator dialog.
 * @param {Blockly.Mutator} _mutator A mutator dialog instance or null to
 *     remove.
 */
Blockly.Block.prototype.setMutator = function(_mutator) {
  // NOP.
};

/**
 * Give this block a workbench dialog.
 * @param {Blockly.Workbench} _workbench A workbench dialog instance or null to
 *     remove.
 */
Blockly.Block.prototype.setWorkbench = function(_workbench) {
  // NOP.
};

/**
 * Return the coordinates of the top-left corner of this block relative to the
 * drawing surface's origin (0,0), in workspace units.
 * @return {!Blockly.utils.Coordinate} Object with .x and .y properties.
 */
Blockly.Block.prototype.getRelativeToSurfaceXY = function() {
  return this.xy_;
};

/**
 * Move a block by a relative offset.
 * @param {number} dx Horizontal offset, in workspace units.
 * @param {number} dy Vertical offset, in workspace units.
 */
Blockly.Block.prototype.moveBy = function(dx, dy) {
  if (this.parentBlock_) {
    throw Error('Block has parent.');
  }
  var event = new Blockly.Events.BlockMove(this);
  this.xy_.translate(dx, dy);
  event.recordNew();
  Blockly.Events.fire(event);
};

/* Begin functions related type inference. */

/**
 * Class for context during running type inference.
 * @param {boolean=} opt_unifyOrphan True if unify type expression of reference
 *     variable which do not have the bound value in its environment.
 * @param {boolean=} opt_fresh Use generate fresh type expressions instead of
 *     ones attached to blocks.
 * @param {Object<string, Blockly.Scheme>=} opt_typeEnv Object representing
 *     type environment.
 */
Blockly.Block.typeInferenceContext = function(opt_unifyOrphan, opt_fresh,
    opt_typeEnv) {
  // TODO(harukam): Move this class to another file.
  /** @private */
  this.unifyOrphan_ = opt_unifyOrphan === true;
  /** @private */
  this.useFreshTypeExpr_ = opt_fresh === true;
  /** @private */
  this.typeEnv_ = opt_typeEnv ? opt_typeEnv : {};

  if (this.useFreshTypeExpr_) {
    throw Error('This feature is under processing.');
  }
};

Blockly.Block.typeInferenceContext.prototype.canUnifyOrphan = function() {
  return this.unifyOrphan_;
};

Blockly.Block.typeInferenceContext.prototype.useFreshTypes = function() {
  return this.useFreshTypeExpr_;
};

Blockly.Block.typeInferenceContext.prototype.getTypeInEnv = function(name) {
  return name in this.typeEnv_ ? this.typeEnv_[name] : null;
};

Blockly.Block.typeInferenceContext.prototype.addTypeToEnv = function(name,
    scheme) {
  this.typeEnv_[name] = scheme;
};

Blockly.Block.typeInferenceContext.prototype.createPolyType = function(
    typeExpr) {
  return Blockly.Scheme.create(this.typeEnv_, typeExpr);
};

Blockly.Block.typeInferenceContext.prototype.copy = function() {
  var copiedTypeEnv = Object.assign({}, this.typeEnv_);
  return new Blockly.Block.typeInferenceContext(this.unifyOrphan_,
      this.useFreshTypeExpr_, copiedTypeEnv);
};

/**
 * Update type inference for each block in the given list.
 * @param {!Array.<!Blockly.Block>} blocks List of blocks whose type
 *     expressions to be updated.
 * @param {boolean=} opt_reset True if clear all of type unification before
 *     start of type inference.
 * @param {boolean=} opt_unifyOrphan True if unify type expression of
 *     reference variable which do not have the bound value in its environment.
 *     Defaults to false.
 * @private
 * @static
 */
Blockly.Block.inferBlocksType_ = function(blocks, opt_reset, opt_unifyOrphan) {
  if (opt_reset) {
    for (var i = 0, block; block = blocks[i]; i++) {
      if (!block.isTransferring()) {
        block.clearTypes();
      }
    }
  }
  for (var i = 0, block; block = blocks[i]; i++) {
    if (!block.isTransferring()) {
      var context = new Blockly.Block.typeInferenceContext(opt_unifyOrphan);
      block.inferTypes(context);
    }
  }
};

/**
 * Clear unification of all type expressions existing inside blocks and their
 * descendants.
 */
Blockly.Block.prototype.clearTypes = function() {
  if (this.outputConnection && this.outputConnection.typeExpr) {
    this.outputConnection.typeExpr.clear();
  }
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (input.connection && input.connection.typeExpr) {
      input.connection.typeExpr.clear();
    }
  }
  if (typeof this.clearInnerTypes == 'function') {
    this.clearInnerTypes();
  }
  var children = this.getChildren();
  for (var i = 0, child; child = children[i]; i++) {
    child.clearTypes();
  }
};

/**
 * Do type inference on this block and return its output type expression.
 * If this block does not have the implementation of type inference, just
 * return its output type or infer types of the next block.
 * @return {Blockly.TypeExpr=} The output type expression.
 */
Blockly.Block.prototype.inferTypes = function(ctx) {
  if (typeof this.infer == 'function') {
    return this.infer(ctx);
  }
  if (this.outputConnection) {
    return this.outputConnection.typeExpr;
  }
  var nextBlock;
  if (this.nextConnection) {
    nextBlock = this.nextConnection.targetBlock();
  }
  return nextBlock ? nextBlock.inferTypes(ctx) : null;
};

/**
 * Update type inference for this block.
 * @param {boolean=} opt_reset True if types should be reset first.
 */
Blockly.Block.prototype.updateTypeInference = function(opt_reset) {
  // TODO(harukam): opt_reset parameter is no longer used. Types are always
  // cleared.
  if (this.workspace) {
    Blockly.Block.doTypeInference(this.workspace);
  }
};

/**
 * Returns whether the block is typed and has a type expression.
 * @param {!Blockly.Block} block
 * @return {boolean} True if the given block is typed.
 * @static
 */
Blockly.Block.isTypedBlock = function(block) {
  if (!block.workspace || !block.type.endsWith('_typed')) {
    return false;
  }
  if (block.outputConnection && block.outputConnection.typeExpr) {
    return true;
  }
  if (block.nextConnection && block.nextConnection.typeExpr &&
      block.previousConnection && block.previousConnection.typeExpr) {
    return true;
  }
  var m = block.type.match(/let([a-z]*)_typed/);
  if (!m) {
    return false;
  }
  if (m[1] === '' || m[1] === 'rec' || m[1] === 'statement') {
    var variable = block.typedValue['VAR'];
    return !!variable && !!variable.getTypeExpr();
  }
  return false;
};

/**
 * Trigger type inference on the given workspace and its descendant
 * workbenches's workspace.
 * @static
 */
Blockly.Block.doTypeInference = function(workspace) {
  if (workspace.isFlyout) {
    return;
  }

  var staq = [workspace];
  // Collect root blocks whose types should be updated. These blocks are sorted
  // in order by parent workspace then child one because The type inference for
  // the value is needed to be done before the reference.
  var blocksToUpdate = [];
  while (staq.length) {
    var ws = staq.pop();
    var topBlocks = ws.getTopBlocks();
    topBlocks = goog.array.filter(topBlocks, Blockly.Block.isTypedBlock);
    Array.prototype.push.apply(blocksToUpdate, topBlocks);

    if (ws.isFlyout) {
      // The flyout workspace in a workbench.
      continue;
    }

    for (var j = 0, topBlock; topBlock = topBlocks[j]; j++) {
      var workbenches = topBlock.getAllWorkbenches();
      for (var i = 0, workbench; workbench = workbenches[i]; i++) {
        var ws = workbench.getWorkspace();
        if (ws) {
          staq.push(ws);
          var flyoutWs = workbench.getFlyoutWorkspace();
          if (flyoutWs) {
            staq.push(flyoutWs);
          }
        }
      }
    }
  }

  Blockly.Block.inferBlocksType_(blocksToUpdate, true, true);
};

/**
 * Call the Infer function indirectly if it exists.
 * @param {string|Blockly.Connection} name The name of the input or
 *     connection.
 * @param {!Blockly.Block.typeInferenceContext} ctx Context of type inference.
 * @return {Blockly.TypeExpr} type expression of the input
 */
Blockly.Block.prototype.callInfer = function(name, ctx) {
  if (typeof name == 'string') {
    var input = this.getInput(name);
    if (!input) {
      throw Error('Invalid input name');
    }
    var connection = input.connection;
  } else {
    var connection = name;
  }
  var childBlock = connection.targetBlock();
  if (!childBlock) {
    return null;
  }
  return childBlock.inferTypes(ctx);
};

/**
 * Infer the type of the child and unify it with the expected one.
 * @param {string|Blockly.Connection} name The name of the input or
 *     connection.
 * @param {!Blockly.Block.typeInferenceContext} ctx Context of type inference.
 */
Blockly.Block.prototype.inferChild = function(name, ctx) {
  var inferred_type = this.callInfer(name, ctx);
  var expected_type = this.getInput(name).connection.typeExpr;
  if (inferred_type) {
    inferred_type.unify(expected_type);
  }
};

/* End functions related type inference. */

/**
 * Find if this block and the given block is a pair of pattern block and
 * pattern value block.
 * @param {!Blockly.Block} otherBlock The other block.
 * @return {boolean} True if this block and otherBlock is a pair of pattern
 *     block.
 */
Blockly.Block.prototype.isPairPattern = function(otherBlock) {
  var patternBlockSuffix = 'pattern_typed';
  var patternValueBlockSuffix = 'pattern_value_typed';
  var patternBlock = null;
  if (this.type.endsWith(patternBlockSuffix)) {
    patternBlock = this;
  } else if (otherBlock.type.endsWith(patternBlockSuffix)) {
    patternBlock = otherBlock;
  }
  if (!patternBlock) {
    return false;
  }
  var valueBlock = patternBlock == this ? otherBlock : this;
  if (!valueBlock.type.endsWith(patternValueBlockSuffix)) {
    return false;
  }
  var prefix1 = patternBlock.type.slice(0, -patternBlockSuffix.length);
  var prefix2 = valueBlock.type.slice(0, -patternValueBlockSuffix.length);
  return prefix1 === prefix2;
};

/**
 * Returns if this block is a pattern block.
 * @return {boolean} True if this block has a type of pattern.
 */
Blockly.Block.prototype.isPatternBlock = function() {
  if (this.outputConnection &&
      this.outputConnection.typeExpr.deref().isPattern()) {
    return true;
  }
  return false;
};

/**
 * Returns if this type of block is allowed to be orphan.
 * @param {Blockly.ErrorCollector=} opt_collector If provided and this block
 *     is not allowed to be orphan, details of this block will be stored.
 * @param {Blockly.Workspace=} opt_workspace If provided, check if this type of
 *     block can be orphan when it's moved to the specified workspace.
 * @return {boolean} False if this block must be connected to a parent always.
 *     Otherwise, returns true.
 */
Blockly.Block.prototype.allowedToBeOrphan = function(opt_collector, opt_workspace) {
  var targetWorkspace = opt_workspace || this.workspace;
  var mutator = targetWorkspace.ownerMutator_;
  if (mutator && mutator.isWorkbench()) {
    if (!mutator.acceptBlock(this, opt_collector)) {
      return false;
    }
  }
  if (!this.outputConnection || !this.outputConnection.typeExpr) {
    return true;
  }
  if (this.outputConnection.typeExpr.deref().isPattern()) {
    if (mutator && mutator instanceof Blockly.PatternWorkbench) {
      return true;
    }
    if (opt_collector) {
      opt_collector.addOrphanPatternError();
    }
    return false;
  }
  if (this.outputConnection.typeExpr.deref().isTypeConstructor()) {
    if (mutator && mutator instanceof Blockly.TypeWorkbench) {
      return true;
    }
    if (opt_collector) {
      opt_collector.addOrphanTypeConstructorError();
    }
    return false;
  }
  return true;
};

/**
 * Whether this block is able to be at the top level.
 * @param {Blockly.Workspace=} opt_workspace If provided, returns whether this
 *     block can be top in the given workspace.
 * @param {Blockly.ErrorCollector=} opt_collector If provided, details of
 *     errors will be stored to explain why this block can not be a root block.
 * @return {boolean} True if this block can be at the top level. False
 *     otherwise.
 */
Blockly.Block.prototype.canBeRoot = function(opt_workspace, opt_collector) {
  var targetWorkspace = opt_workspace ? opt_workspace : this.workspace;
  if (!this.resolveReference(null, false, targetWorkspace,
      opt_collector)) {
    return false;
  }
  return this.allowedToBeOrphan(opt_collector, targetWorkspace);
};

/* Begin functions related variable binding. */

/**
 * Class for context during checking variable binding.
 * @constructor
 */
Blockly.Block.VariableContext = function() {
  // TODO(harukam): Merge this class with Blockly.Block.typeInferenceContext,
  // which is used while doing type inference. Perform type checking and
  // variable binding check at the same time.
  // TODO(harukam): Implement ordered dictionary to keep the order of
  // variables.
  // TODO(harukam): Move this class to another file.
  /**
   * @type {!Object<!string, !Blockly.BoundVariableValue}
   * @private
   */
  this.variableEnv_ = {};
  this.structureEnv_ = {};
};

/**
 * Returns the object to store variables of the given label.
 * @param {number} label One of variable labels which are defined in
 *     Blockly.BoundVariableAbstract class.
 * @return {!Object} Object to store variables.
 * @private
 */
Blockly.Block.VariableContext.prototype.getEnvWithLabel_ = function(label) {
  if (Blockly.BoundVariableAbstract.isVariableLabel(label) ||
      Blockly.BoundVariableAbstract.isConstructorLabel(label)) {
    return this.variableEnv_;
  }
  if (Blockly.BoundVariableAbstract.isRecordLabel(label) ||
      Blockly.BoundVariableAbstract.isRecordFieldLabel(label)) {
    return this.structureEnv_;
  }
  throw Error('Unexpected variable label.');
};

/**
 * Look up a variable using name and variable label.
 * @param {!string} name
 * @param {number} label
 * @return {!Blockly.BoundVariableValue|null} The variable if found, or null.
 */
Blockly.Block.VariableContext.prototype.getVariableWithLabel = function(
    name, label) {
  var env = this.getEnvWithLabel_(label);
  if (!env || !(name in env)) {
    return null;
  }
  var variable = env[name];
  return variable.label == label ? variable : null;
};

Blockly.Block.VariableContext.prototype.getVariablesImpl_ = function(env) {
  var keys = Object.keys(env);
  var values = [];
  for (var i = 0; i < keys.length; i++) {
    values.push(env[keys[i]]);
  }
  return values;
};

/**
 * Functions to get, set, and copy normal variable values.
 */
Blockly.Block.VariableContext.prototype.getVariable = function(name) {
  return name in this.variableEnv_ ? this.variableEnv_[name] : null;
};
Blockly.Block.VariableContext.prototype.getVariables = function(name) {
  return this.getVariablesImpl_(this.variableEnv_);
};
Blockly.Block.VariableContext.prototype.getVariableNames = function(name) {
  return Object.keys(this.variableEnv_);
};
Blockly.Block.VariableContext.prototype.addVariable = function(variable) {
  if (variable.isReference() ||
      !(variable.isVariable() || variable.isConstructor())) {
    throw Error('Only variable and constructor values are acceptable.');
  }
  var name = variable.getVariableName();
  this.variableEnv_[name] = variable;
};

/**
 * Functions to get, set, and copy structure variable values.
 */
Blockly.Block.VariableContext.prototype.getStructureVariable = function(name) {
  return name in this.structureEnv_ ? this.structureEnv_[name] : null;
};
Blockly.Block.VariableContext.prototype.getStructureVariables = function() {
  return this.getVariablesImpl_(this.structureEnv_);
};
Blockly.Block.VariableContext.prototype.addStructureVariable = function(
    variable) {
  if (variable.isReference() || !(variable.isRecord() ||
     variable.isRecordField())) {
    throw Error('Only structure variable values are acceptable.');
  }
  var name = variable.getVariableName();
  this.structureEnv_[name] = variable;
};

Blockly.Block.VariableContext.prototype.getVariablesWithLabel = function(
    label) {
  var env = this.getEnvWithLabel_(label);
  var values = this.getVariablesImpl_(env);
  return goog.array.filter(values, function(val) {return val.label == label;});
};
Blockly.Block.VariableContext.prototype.getAllVariables = function(ctx) {
  var variables = this.getVariables();
  Array.prototype.push.apply(variables, this.getStructureVariables());
  return variables;
};
Blockly.Block.VariableContext.prototype.assignEnv = function(ctx) {
  Object.assign(this.variableEnv_, ctx.variableEnv_);
  Object.assign(this.structureEnv_, ctx.structureEnv_);
};


/**
 * Whether there would be no getter block which refers to a non-existing
 * variable. Check not only this block but also all the blocks nested inside
 * it.
 * @param {Blockly.Connection} parentConnection Connection this block is trying
 *     to connect to, which means that this block would share a variable context
 *     with the parent. If null, the block is not connected to any block.
 * @param {boolean=} opt_bind Bind the getter with the proper variable if
 *     true.
 * @param {Blockly.Workspace=} opt_workspace If provided, assume that this
 *     block has transferred to the workspace. Must be identical with a
 *     connection's workspace if parentConnection is supplied.
 * @param {Blockly.ErrorCollector=} opt_collector If provided, details of
 *     unresolved variables will be stored.
 * @return {boolean} True if all of getter blocks inside this block  can refer
 *     to a existing variable.
 */
Blockly.Block.prototype.resolveReference = function(parentConnection,
      opt_bind, opt_workspace, opt_collector) {
  var context = this.obtainParentContext(parentConnection, opt_workspace);
  return this.resolveReferenceOnDescendants(context, opt_bind, opt_collector);
};

Blockly.Block.prototype.obtainParentContext = function(parentConnection,
      opt_workspace) {
  var contextWorkspace;
  var parentBlock;

  // Find the implicit context of the workspace where this block is supposed
  // to exist.
  if (parentConnection) {
    parentBlock = parentConnection.getSourceBlock();
    contextWorkspace = parentBlock.workspace;
    if (opt_workspace && opt_workspace !== contextWorkspace) {
      throw Error('assertion failure in block.js, obtainParentContext');
    }
  } else if (opt_workspace) {
    contextWorkspace = opt_workspace;
  } else {
    contextWorkspace = this.workspace;
  }
  var context = contextWorkspace.getImplicitContext();

  if (parentConnection) {
    var parentsContext = parentBlock.allVisibleVariables(parentConnection,
        false /** Excludes the default implicit context. */,
        true  /** Includes the potential context. */);
    context.assignEnv(parentsContext);
  }
  return context;
};

/**
 * Check if variables on this block and nested blocks are correctly bound to
 * the variable context. Also look through variables on blocks mutators.
 * @param {!Blockly.Block.VariableContext} ctx The variable context.
 * @param {boolean=} opt_bind Bind reference block with the proper variable if
 *     true.
 * @param {Blockly.ErrorCollector=} opt_collector If provided, details of
 *     unresolved variables will be stored.
 */
Blockly.Block.prototype.resolveReferenceOnDescendants = function(ctx,
    opt_bind, opt_collector) {
  var returnImmediate = !opt_collector;
  var resolved = true;
  var bfsStack = [[this, ctx]];
  while (bfsStack.length) {
    var pair = bfsStack.shift();
    var block = pair[0];
    var ctxOfParent = pair[1];

    if (!block.resolveReferenceWithEnv_(ctxOfParent, opt_bind, opt_collector)) {
      resolved = false;
      if (returnImmediate) {
        return false;
      }
    }

    if (Array.isArray(block.workbenches)) {
      for (var i = 0, workbench; workbench = block.workbenches[i]; i++) {
        if (!workbench.checkReference(ctxOfParent, opt_bind, opt_collector)) {
          resolved = false;
          if (returnImmediate) {
            return false;
          }
        }
      }
    }

    for (var i = 0, child; child = block.childBlocks_[i]; i++) {
      var targetConn = child.getParentConnection();
      var ctxOfChild = new Blockly.Block.VariableContext();
      ctxOfChild.assignEnv(ctxOfParent);
      block.updateVariableEnvImpl(targetConn, ctxOfChild);
      bfsStack.push([child, ctxOfChild]);
    }
  }
  return resolved;
};

/**
 * Returns if all of references this block contains can be resolved with the
 * given variable environment.
 * @param {!Blockly.Block.VariableContext} ctx The variable context.
 * @param {boolean=} opt_bind Bind the getter with the proper variable if
 *     true.
 * @param {Blockly.ErrorCollector} opt_collector If provided, details of
 *     unresolved variables will be stored.
 * @return {boolean} True if all of references this block contains are
 *     resolved. Otherwise false.
 */
Blockly.Block.prototype.resolveReferenceWithEnv_ = function(ctx, opt_bind,
    opt_collector) {
  var referenceList = this.getVariables(true /** Gets only references. */,
      true /** Gets structure variables too. */);
  var allBound = true;
  for (var i = 0, variable; variable = referenceList[i]; i++) {
    var name = variable.getVariableName();
    var value = ctx.getVariableWithLabel(name, variable.label);
    var currentValue = variable.getBoundValue();
    if (!value) {
      // Refers to an undefined variable.
      if (opt_collector) {
        opt_collector.addUnboundVariable(variable, null);
      }
      allBound = false;
    }
    if (value && currentValue && currentValue != value) {
      // Refers to the different variable value.
      if (opt_collector) {
        opt_collector.addUnboundVariable(variable, value);
      }
      allBound = false;
    }
    if (opt_bind === true && value && !currentValue) {
      variable.setBoundValue(value);
    }
  }
  return allBound;
};

/**
 * Return all variables which is declared in blocks, and can be used later in
 * the given connection's input.
 * @param {!Blockly.Connection} connection Connection to specify a scope.
 * @param {boolean=} opt_implicit If true, also collect implicit context of the
 *     workspace. Defaults to false.
 * @param {boolean=} opt_potential If true, also include potential context.
 * @return {!Blockly.Block.VariableContext} The variable context.
 */
Blockly.Block.prototype.allVisibleVariables = function(conn, opt_implicit,
    opt_potential) {
  var context = new Blockly.Block.VariableContext();
  if (conn.getSourceBlock() != this) {
    return context;
  }
  if (opt_implicit === true) {
    context.assignEnv(this.workspace.getImplicitContext());
  }

  var blocksToCheck = [[this, conn]];
  var block = this;
  while (block.getParent()) {
    var targetConnection = block.getParentConnection();
    block = block.getParent();
    blocksToCheck.push([block, targetConnection]);
  }
  if (opt_potential === true) {
    context.assignEnv(this.getPotentialContext());
  }

  for (var i = blocksToCheck.length - 1, pair; pair = blocksToCheck[i]; i--) {
    var block = pair[0];
    var connection = pair[1];
    block.updateVariableEnvImpl(connection, context);
  }
  return context;
};

/**
 * Finds the list of variables on the block which this block is due to connect
 * to. Returns empty unless another block is currently transferring and this
 * block would take the place of the transferring block.
 * @return {!Blockly.Block.VariableContext} The variable context.
 */
Blockly.Block.prototype.getPotentialContext = function() {
  if (!Blockly.transferring.block ||
      !Blockly.transferring.localConnection ||
      !Blockly.transferring.pendingTargetConnection ||
      this.isTransferring() || this.getParent()) {
    return new Blockly.Block.VariableContext();
  }
  // TODO(harukam): Check if this block is the newly created one that takes
  // the place of transferring block.
  var oldLocalConnection = Blockly.transferring.localConnection;
  var newLocalConnection = this.getEquivalentConnection(oldLocalConnection);
  var pendingTargetConnection = Blockly.transferring.pendingTargetConnection;

  if (newLocalConnection == this.outputConnection) {
    var pendingTargetBlock = pendingTargetConnection.getSourceBlock();
    return pendingTargetBlock.allVisibleVariables(pendingTargetConnection,
        false /** Excludes the default implicit context. */,
        false /** Excludes the potential context. */);
  }
  return new Blockly.Block.VariableContext();
};

/**
 * Finds a list of variable values on this block which are referable inside
 * the input of the given connection, and copy the values to the target object.
 * @param {!Blockly.Connection} conn The connection.
 * @param {!Blockly.Block.VariableContext} ctx The variable context.
 */
Blockly.Block.prototype.updateVariableEnvImpl = function(conn, ctx) {
  if (typeof this.updateVariableEnv == 'function') {
    this.updateVariableEnv(conn, ctx);
  }
};

/**
 * Return a list of variable references on the given block.
 * @return {!Array.<!Blockly.BoundVariableValueReference>} A list of variables
 *     which can no be resolved in the block's context.
 */
Blockly.Block.prototype.getUnboundVariables = function() {
  var collector = new Blockly.ErrorCollector();
  var resolved = this.resolveReference(null, false, null, collector);
  if (resolved) {
    if (!collector.isEmpty()) {
      throw Error('assertion failure in block.js, getUnboundVariables');
    }
    return [];
  }
  return collector.getUnboundVariables();
};

/**
 * Remove an input from this block after deleting free variables on the
 * attached value block. If the given input does not exist in this block, just
 * ignore.
 * @param {Blockly.Input} input The input to be removed. If null, do nothing.
 */
Blockly.Block.prototype.removeInputSafely = function(input) {
  if (!input || this.inputList.indexOf(input) == -1) {
    return;
  }
  var targetBlock = input.connection ?
      input.connection.targetBlock() : null;
  this.removeInput(input.name);
  if (targetBlock) {
    var unresolvedRefs = targetBlock.getUnboundVariables();
    for (var i = 0, ref; ref = unresolvedRefs[i]; i++) {
      ref.getSourceBlock().dispose();
    }
  }
};

/* End functions related variable binding. */

/**
 * Create a connection of the specified type.
 * @param {number} type The type of the connection to create.
 * @return {!Blockly.Connection} A new connection of the specified type.
 * @private
 */
Blockly.Block.prototype.makeConnection_ = function(type) {
  return new Blockly.Connection(this, type);
};

/**
 * Recursively checks whether all statement and value inputs are filled with
 * blocks. Also checks all following statement blocks in this stack.
 * @param {boolean=} opt_shadowBlocksAreFilled An optional argument controlling
 *     whether shadow blocks are counted as filled. Defaults to true.
 * @return {boolean} True if all inputs are filled, false otherwise.
 */
Blockly.Block.prototype.allInputsFilled = function(opt_shadowBlocksAreFilled) {
  // Account for the shadow block filledness toggle.
  if (opt_shadowBlocksAreFilled === undefined) {
    opt_shadowBlocksAreFilled = true;
  }
  if (!opt_shadowBlocksAreFilled && this.isShadow()) {
    return false;
  }

  // Recursively check each input block of the current block.
  for (var i = 0, input; input = this.inputList[i]; i++) {
    if (!input.connection) {
      continue;
    }
    var target = input.connection.targetBlock();
    if (!target || !target.allInputsFilled(opt_shadowBlocksAreFilled)) {
      return false;
    }
  }

  // Recursively check the next block after the current block.
  var next = this.getNextBlock();
  if (next) {
    return next.allInputsFilled(opt_shadowBlocksAreFilled);
  }

  return true;
};

/**
 * This method returns a string describing this Block in developer terms (type
 * name and ID; English only).
 *
 * Intended to on be used in console logs and errors. If you need a string that
 * uses the user's native language (including block text, field values, and
 * child blocks), use [toString()]{@link Blockly.Block#toString}.
 * @return {string} The description.
 */
Blockly.Block.prototype.toDevString = function() {
  var msg = this.type ? '"' + this.type + '" block' : 'Block';
  if (this.id) {
    msg += ' (id="' + this.id + '")';
  }
  return msg;
};
