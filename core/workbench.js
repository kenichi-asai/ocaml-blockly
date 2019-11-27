'use strict';

goog.provide('Blockly.Workbench');

goog.require('Blockly.Bubble');
goog.require('Blockly.Events.BlockChange');
goog.require('Blockly.Events.Ui');
goog.require('Blockly.Icon');
goog.require('Blockly.WorkspaceSvg');
goog.require('goog.dom');


/**
 * Class for a dialog which provides an area for user to work on block
 * assembly.
 * @extends {Blockly.Icon}
 * @constructor
 */
Blockly.Workbench = function() {
  Blockly.Workbench.superClass_.constructor.call(this, null);
};
goog.inherits(Blockly.Workbench, Blockly.Icon);

/**
 * Width of workspace.
 * @private
 */
Blockly.Workbench.prototype.workspaceWidth_ = 0;

/**
 * Height of workspace.
 * @private
 */
Blockly.Workbench.prototype.workspaceHeight_ = 0;

/**
 * Minimum width of workspace.
 * @private
 */
Blockly.Workbench.MINIMUM_WIDTH_ = 300;

/**
 * Minimum height of workspace.
 * @private
 */
Blockly.Workbench.MINIMUM_HEIGHT_ = 100;

/**
 * Minimum height of workspace.
 * @private
 */
Blockly.Workbench.MAX_HEIGHT_ = 200;

/**
 * Whether the workbench dialog has been initialized.
 * @private
 */
Blockly.Workbench.prototype.initialized_ = false;

/**
 * The connection this workbench's context is bound to.
 * @type {Blockly.Connection}
 * @private
 */
Blockly.Workbench.prototype.contextConnection_ = null;

Blockly.Workbench.prototype.SIZE = 10;

/**
 * Draw the workbench icon.
 * @param {!Element} group The icon group.
 * @private
 */
Blockly.Workbench.prototype.drawIcon_ = function(group) {
  // Square with rounded corners.
  Blockly.utils.createSvgElement('rect',
      {
        'class': 'blocklyWorkbenchIconShape',
        'rx': '4',
        'ry': '4',
        'height': '9',
        'width': '9'
      },
      group);
  // Gear teeth.
  Blockly.utils.createSvgElement('path',
      {
        'class': 'blocklyWorkbenchIconSymbol',
        'd': 'm 8.0,1.0 l 0,2.0 z M 1.0,8.0 l 2.0,0 z M 8.0,15.0 l 0,-2.0 z ' +
             'M 15.0,8.0 l -2.0,0 z M 8.0,5.0 l 0,6.0 z M 5.0,8.0 l 6.0,0 z'
      },
      group);
  // Axle hole.
  Blockly.utils.createSvgElement(
      'circle',
      {
        'class': 'blocklyWorkbenchIconShape',
        'r': '5.0',
        'cx': '8',
        'cy': '8'
      },
      group);
};

/**
 * Clicking on the icon toggles if the workbench bubble is visible.
 * Disable if block is uneditable.
 * @param {!Event} e Mouse click event.
 * @private
 * @override
 */
Blockly.Workbench.prototype.iconClick_ = function(e) {
  if (this.block_.isEditable()) {
    Blockly.Icon.prototype.iconClick_.call(this, e);
  }
};

/**
 * Create the editor for the workbench's bubble.
 * @return {!Element} The top-level node of the editor.
 * @private
 */
Blockly.Workbench.prototype.createEditor_ = function() {
  /* Create the editor.  Here's the markup that will be generated:
  <svg>
    [Workspace]
  </svg>
  */
  if (!this.svgDialog_) {
    this.svgDialog_ = Blockly.utils.createSvgElement('svg',
        {'x': Blockly.Bubble.BORDER_WIDTH, 'y': Blockly.Bubble.BORDER_WIDTH},
        null);
  }
  this.initWorkspace_();

  // workbench flyouts go inside the workbench workspace's <g> rather than in
  // a top level svg. Instead of handling scale themselves, workbenchs
  // inherit scale from the parent workspace.
  // To fix this, scale needs to be applied at a different level in the dom.
  if (!this.flyoutSvg_) {
    this.flyoutSvg_ =  this.workspace_.addFlyout_('g');
  }
  if (!this.background_) {
    this.background_ = this.workspace_.createDom('blocklyMutatorBackground');
  }

  // Insert the flyout after the <rect> but before the block canvas so that
  // the flyout is underneath in z-order.  This makes blocks layering during
  // dragging work properly.
  this.background_.insertBefore(this.flyoutSvg_, this.workspace_.svgBlockCanvas_);
  this.svgDialog_.appendChild(this.background_);

  return this.svgDialog_;
};

/**
 * Remove the svg elements in this workbench.
 */
Blockly.Workbench.prototype.removeSvgElements = function() {
  if (!this.svgDialog_) {
    return;
  }
  this.background_.removeChild(this.flyoutSvg_);
  this.flyoutSvg_ = null;
  this.svgDialog_.removeChild(this.background_);
  this.background_ = null;

  if (this.bubble_) {
    this.bubble_.removeContent();
  }
  this.svgDialog_ = null;
};

/**
 * Initialize the icon and its components.
 * @param {Element=} opt_childBubbleCavas The SVG element to form nested
 *     bubbles surface. Provided to use a element that already exists as the
 *     nested surface of this bubble.
 * @private
 */
Blockly.Workbench.prototype.init_ = function(opt_childBubbleCanvas) {
  if (this.initialized_) {
    return;
  }

  // Create the bubble.
  var anchorXY = this.iconXY_ ? this.iconXY_ : new goog.math.Coordinate(0, 0);
  this.bubble_ = new Blockly.Bubble(
      /** @type {!Blockly.WorkspaceSvg} */ (this.block_.workspace),
      this.createEditor_(), this.block_.svgPath_, anchorXY, null, null,
      opt_childBubbleCanvas);
  // Expose this workbench's block's ID on its top-level SVG group.
  this.bubble_.setSvgId(this.block_.id);

  this.workspace_.flyout_.init(this.workspace_);

  this.initialized_ = true;
};

Blockly.Workbench.prototype.initWorkspace_ = function() {
  if (this.workspace_) {
    return;
  }
  var workspaceOptions = this.createWorkspaceOptions_();
  this.workspace_ = new Blockly.WorkspaceSvg(workspaceOptions);
  this.workspace_.isMutator = true;
  this.workspace_.ownerMutator_ = this;
};

/**
 * Add or remove the UI indicating if this icon may be clicked or not.
 */
Blockly.Workbench.prototype.updateEditable = function() {
  if (!this.block_.isInFlyout) {
    if (this.block_.isEditable()) {
      if (this.iconGroup_) {
        Blockly.utils.removeClass(
            /** @type {!Element} */ (this.iconGroup_),
            'blocklyIconGroupReadonly');
      }
    } else {
      // Close any workbench bubble.  Icon is not clickable.
      this.setVisible(false);
      if (this.iconGroup_) {
        Blockly.utils.addClass(
            /** @type {!Element} */ (this.iconGroup_),
            'blocklyIconGroupReadonly');
      }
    }
  }
  // Default behaviour for an icon.
  Blockly.Icon.prototype.updateEditable.call(this);
};

/**
 * Return the workbench's bubble.
 * @return {Blockly.Bubble} Bubble, or null.
 */
Blockly.Workbench.prototype.getBubble = function() {
  return this.bubble_ ? this.bubble_ : null;
};

/**
 * Return the workbench workspace.
 * @return {Blockly.Workspace} Workspace, or null.
 */
Blockly.Workbench.prototype.getWorkspace = function() {
  return this.workspace_;
};

/**
 * Return the flyout workspace in workbench.
 * @return {Blockly.WorkspaceSvg} The workspace in a flyout, or null.
 */
Blockly.Workbench.prototype.getFlyoutWorkspace = function() {
  if (this.workspace_ && this.workspace_.flyout_) {
    return this.workspace_.flyout_.getWorkspace();
  }
  return null;
};

/**
 * Set the connection whose context this workbench should be bound to.
 * @param {!Blockly.Connetion} connection The connection where this workbench's
 *     context is bound.
 * @param {!Blockly.Input} input The input that connection is attached to.
 */
Blockly.Workbench.prototype.setContextConnection = function(connection,
    input) {
  if (connection.getSourceBlock() != this.block_) {
    throw 'The connection and workbench belong to differenct blocks.';
  }
  this.contextConnection_ = connection;
  this.followingInput = input;
};

/**
 * Callback function triggered when the bubble has resized.
 * Resize the workspace accordingly.
 * @private
 */
Blockly.Workbench.prototype.resizeBubble_ = function() {
  var doubleBorderWidth = 2 * Blockly.Bubble.BORDER_WIDTH;
  var workspaceSize = this.workspace_.getCanvas().getBBox();
  var width;
  if (this.block_.RTL) {
    width = -workspaceSize.x;
  } else {
    width = workspaceSize.width + workspaceSize.x;
  }
  var height = workspaceSize.height + workspaceSize.y +
      doubleBorderWidth * 3;
  if (this.workspace_.flyout_) {
    var flyoutMetrics = this.workspace_.flyout_.getMetrics_();
    width = Math.max(width, flyoutMetrics.contentWidth + 10);
    height = Math.max(height, flyoutMetrics.contentHeight + 20);
  }
  width += doubleBorderWidth * 3;
  // Minimum size of a workbench workspace.
  width = Math.max(width, Blockly.Workbench.MINIMUM_WIDTH_);
  height = Math.max(height, Blockly.Workbench.MINIMUM_HEIGHT_);
  height = Math.min(height, Blockly.Workbench.MAX_HEIGHT_);
  // Only resize if the size difference is significant.  Eliminates shuddering.
  if (Math.abs(this.workspaceWidth_ - width) > doubleBorderWidth ||
      Math.abs(this.workspaceHeight_ - height) > doubleBorderWidth) {
    // Record some layout information for getFlyoutMetrics_.
    this.workspaceWidth_ = width;
    this.workspaceHeight_ = height;
    // Resize the bubble.
    this.bubble_.setBubbleSize(
        width + doubleBorderWidth, height + doubleBorderWidth);
    this.svgDialog_.setAttribute('width', this.workspaceWidth_);
    this.svgDialog_.setAttribute('height', this.workspaceHeight_);
  }

  if (this.block_.RTL) {
    // Scroll the workspace to always left-align.
    var translation = 'translate(' + this.workspaceWidth_ + ',0)';
    this.workspace_.getCanvas().setAttribute('transform', translation);
  }
  this.workspace_.resize();
};

/**
 * Show or hide the workbench bubble.
 * @param {boolean} visible True if the bubble should be visible.
 */
Blockly.Workbench.prototype.setVisible = function(visible) {
  if (visible == this.isVisible()) {
    // No change.
    return;
  }
  if (!this.initialized_) {
    this.init_();
  }
  if (Blockly.Events.isEnabled()) {
    var existingGroup = Blockly.Events.getGroup();
    if (!existingGroup) {
      Blockly.Events.setGroup(true);
    }
    try {
      Blockly.Events.fire(new Blockly.Events.UiWithUndo(this.block_,
        'workbenchOpen', !visible, visible));
    } finally {
      if (!existingGroup) {
        Blockly.Events.setGroup(false);
      }
    }
  }

  // Show or hide the bubble. It also shows/hides the workbench because the
  // bubble contains whole the workbench.
  this.bubble_.setVisible(visible);
  // Update the visibility of the workspace for its components.
  if (this.workspace_) {
    this.workspace_.setVisible(visible);
  }

  if (visible) {
    goog.asserts.assert(this.workspace_, 'The workspace has been removed.');
    this.updateFlyoutTree();

    this.updateScreen_();
    this.addChangeListener();
    this.updateColour();
  } else {
    this.workspaceWidth_ = 0;
    this.workspaceHeight_ = 0;
    this.removeChangeListener();
  }
};

/**
 * Update the source block when the workbench's blocks are changed.
 * Bump down any block that's too high.
 * Fired whenever a change is made to the workbench's workspace.
 * @private
 */
Blockly.Workbench.prototype.workspaceChanged_ = function() {
  if (!this.workspace_.isDragging()) {
    var blocks = this.workspace_.getTopBlocks(false);
    var MARGIN = 20;
    for (var b = 0, block; block = blocks[b]; b++) {
      var blockXY = block.getRelativeToSurfaceXY();
      var blockHW = block.getHeightWidth();
      if (blockXY.y + blockHW.height < MARGIN) {
        // Bump any block that's above the top back inside.
        block.moveBy(0, MARGIN - blockHW.height - blockXY.y);
      }
    }
  }
  // Don't update the bubble until the drag has ended, to avoid moving blocks
  // under the cursor.
  if (!this.workspace_.isDragging()) {
    this.resizeBubble_();
  }
};

/**
 * Return an object with all the metrics required to size scrollbars for the
 * workbench flyout.  The following properties are computed:
 * .viewHeight: Height of the visible rectangle,
 * .viewWidth: Width of the visible rectangle,
 * .absoluteTop: Top-edge of view.
 * .absoluteLeft: Left-edge of view.
 * @return {!Object} Contains size and position metrics of workbench dialog's
 *     workspace.
 * @private
 */
Blockly.Workbench.prototype.getFlyoutMetrics_ = function() {
  return {
    viewHeight: this.workspaceHeight_,
    viewWidth: this.workspaceWidth_,
    absoluteTop: 0,
    absoluteLeft: 0
  };
};

/**
 * Finds variable environment which can be referred to inside this workbench.
 * @param {boolean=} opt_includeImplicit False to exclude implicit context
 *     existing in the workspace of the block, and collects only context that
 *     are bound to the block and its ancestors. Defaults to true.
 * @return {!Blockly.Block.VariableContext} The variable context.
 */
Blockly.Workbench.prototype.getContext = function(opt_includeImplicit) {
  if (this.block_) {
    // Unless this workbench is in the process of being deleted.
    var includeImplicit = opt_includeImplicit !== false;
    return this.block_.allVisibleVariables(this.contextConnection_,
        includeImplicit);
  }
  return new Blockly.Block.VariableContext();
};

/**
 * Finds variables environment bound only to the workbench's block, and able to
 * be referred to by blocks inside this workbench workspace.
 * @return {!Blockly.Block.VariableContext} The variable context.
 */
Blockly.Workbench.prototype.getBlockContext = function() {
  var ctx = new Blockly.Block.VariableContext;
  if (this.block_) {
    this.block_.updateVariableEnvImpl(this.contextConnection_, ctx);
  }
  return ctx;
};

/**
 * Creates blocks to show in workbench's flyout on the given workspace.
 * @param {!Blockly.Workspace} flyoutWorkspace The workspace to create blocks.
 * @return {!Array.<!Blockly.Block>} List of blocks to show in a flyout.
 * @override
 * @private
 */
Blockly.Workbench.prototype.blocksForFlyout_ = function(flyoutWorkspace) {
  var ctx = this.getContext();
  var variables = ctx.getAllVariables();
  var blocks = [];

  for (var i = 0, variable; variable = variables[i]; i++) {
    if (variable.isVariable()) {
      var prototypeName = 'function_app_typed';
      // TODO(harukam): Do not create variable block of type variables_get_typed
      // because it could be first-order function. Otherwise, the following case
      // must be fixed:
      //  1. There is 'let b = ? in a :: b' block.
      //  2. Add arguments using mutator on let block.
      //  3. Type error occurs since variable b has 'a list type but was
      //     expected of type 'b -> 'c.
      var fieldName = 'VAR';
    } else if (variable.isConstructor()) {
      var prototypeName = 'create_construct_typed';
      var fieldName = 'CONSTRUCTOR';
    } else if (variable.isRecord()) {
      var prototypeName = 'create_record_typed';
      var fieldName = 'RECORD';
    } else if (variable.isRecordField()) {
      continue;
    } else {
      goog.asserts.fail('Not supported type of variable.');
    }
    var getterBlock = flyoutWorkspace.newBlock(prototypeName);
    var field = getterBlock.getField(fieldName);
    if (goog.isFunction(getterBlock.initSvg)) {
      getterBlock.initSvg();
    }
    field.initModel();
    field.setVariableName(variable.getVariableName());
    field.setBoundValue(variable);
    blocks.push(getterBlock);
  }
  return blocks;
};

/**
 * Updates the shown blocks in the workbench flyout.
 */
Blockly.Workbench.prototype.updateFlyoutTree = function() {
  if (this.workspace_ && this.workspace_.flyout_) {
    // TODO(harukam): Store the last context, and update blocks shown in a
    // flyout only if the context is changed. Blocks creation and rerendering
    // blocks are expensive.
    this.workspace_.flyout_.show(this.blocksForFlyout_.bind(this));
    this.updateScreen_();
  }
};

/**
 * Updates the bubble's size and position.
 */
Blockly.Workbench.prototype.updateScreen_ = function() {
  this.bubble_.setAnchorLocation(this.iconXY_);
  this.resizeBubble_();
};

/**
 * Check if all of reference blocks on the workbench's workspace and its nested
 * workbenchs are correctly bound to their context.
 * @param {!Blockly.Block.VariableContext} ctx The variable context.
 * @param {boolean=} opt_bind True to newly bind variable reference with the
 *     variable found in the context.
 * @param {Blockly.ErrorCollector=} opt_collector If provided, details of
 *     unresolved variables will be stored.
 * @return {boolean} True if reference blocks on the workbench's workspace and
 *     its nested workbenchs' workspaces can be resolved.
 */
Blockly.Workbench.prototype.checkReference = function(ctx, opt_bind,
    opt_collector) {
  if (!this.workspace_) {
    return true;
  }
  var resolved = true;
  var context = new Blockly.Block.VariableContext();
  context.assignEnv(ctx);
  context.assignEnv(this.getBlockContext());

  var topBlocks = this.workspace_.getTopBlocks();
  for (var i = 0, topBlock; topBlock = topBlocks[i]; i++) {
    // This function will be called recursively for each of nested workbenchs.
    if (!topBlock.resolveReferenceOnDescendants(context, opt_bind,
        opt_collector)) {
      if (!opt_collector) {
        return false;
      }
      resolved = false;
    }
  }
  return resolved;
};

/**
 * Dispose of this workbench.
 */
Blockly.Workbench.prototype.dispose = function() {
  var removalIndex = this.block_.workbenches.indexOf(this);
  if (removalIndex != -1) {
    this.block_.workbenches.splice(removalIndex, 1);
  }
  Blockly.Icon.prototype.dispose.call(this);

  this.removeSvgElements();
  this.removeChangeListener();
  if (this.workspace_) {
    this.workspace_.dispose();
    this.workspace_ = null;
  }
  if (this.bubble_) {
    this.bubble_.dispose();
    this.bubble_ = null;
  }
  this.workspaceWidth_ = 0;
  this.workspaceHeight_ = 0;
};

/**
 * Add a change listener for the workbench workspace.
 */
Blockly.Workbench.prototype.addChangeListener = function() {
  if (!this.changeListener_) {
    this.changeListener_ = this.workspaceChanged_.bind(this);
    this.workspace_.addChangeListener(this.changeListener_);
  }
};

/**
 * Remove a change listener for the workbench workspace.
 */
Blockly.Workbench.prototype.removeChangeListener = function() {
  if (this.changeListener_) {
    this.workspace_.removeChangeListener(this.changeListener_);
    this.changeListener_ = null;
  }
};

/**
 * Release ownership of the current workspace in a workbench without destroying
 * it.
 */
Blockly.Workbench.prototype.releaseWorkspace = function() {
  if (this.workspace_) {
    this.removeChangeListener();
    Blockly.WorkspaceTree.setParent(this.workspace_, null);
    this.workspace_.ownerMutator_ = null;
    this.workspace_ = null;
  }
};

/**
 * Replace the workbench workspace with the given workspace.
 * @param {!Blockly.Workbench} workbench The workbench whose workspace to be
 *     stored to this workbench.
 */
Blockly.Workbench.prototype.replaceWorkspace = function(workbench) {
  var workspace = workbench.getWorkspace();
  if (!workspace) {
    return;
  }
  if (this.initialized_ || this.svgDialog_) {
    throw 'The workbench\'s DOM is already initialized.';
  }
  if (this.workspace_) {
    this.workspace_.ownerMutator_ = null;
    this.workspace_.dispose();
    this.workspace_ = null;
  }
  workbench.releaseWorkspace();

  Blockly.WorkspaceTree.setParent(workspace, this.block_.workspace);
  workspace.isMutator = true;
  workspace.ownerMutator_ = this;
  this.workspace_ = workspace;
  this.adaptWorkspace_(workbench);
};

/**
 * Adapts the workspace to this workbench condition. Called when the workbench
 * workspace is replaced with another one.
 * @param {!Blockly.Workbench} workbench The workbench the workspace originally
 *     belonged to.
 */
Blockly.Workbench.prototype.adaptWorkspace_ = function(workbench) {
  this.workspace_.updateOptions(this.createWorkspaceOptions_());

  var originalBackground = workbench.background_;
  workbench.removeSvgElements();

  // Recreate the flyout because the old flyout refers to the original workbench.
  this.workspace_.clearFlyout();
  this.workspace_.clearCached();

  this.background_ = originalBackground;

  this.workspace_.recordDeleteAreas();
  this.workspace_.recordWorkspaceArea();

  var bubble = workbench.getBubble();
  var originalChildBubble = bubble.getChildBubbleCanvas();
  bubble.removeChildBubbleCanvas();

  this.init_(originalChildBubble);
  this.setVisible(false);
};

/**
 * Returns workspace options for this workbench's workspace.
 * @return {!Object} Dictionary of options.
 */
Blockly.Workbench.prototype.createWorkspaceOptions_ = function() {
  var options = {};
  options.parentWorkspace = this.block_.workspace;
  options.pathToMedia = this.block_.workspace.options.pathToMedia;
  options.RTL = this.block_.RTL;
  options.toolboxPosition = this.block_.RTL ? Blockly.TOOLBOX_AT_RIGHT :
      Blockly.TOOLBOX_AT_LEFT;
  options.horizontalLayout = false;
  options.typedVersion = this.block_.workspace.options.typedVersion;
  options.getMetrics = this.getFlyoutMetrics_.bind(this);
  options.setMetrics = null;
  return options;
};

/**
 * Returns if this workbench is a workbench.
 */
Blockly.Workbench.prototype.isWorkbench = function() {
  return true;
};

/**
 * Returns whether the block is allowed to enter into this workbench.
 * @param {!Blockly.Block} block The block.
 * @param {Blockly.ErrorCollector=} opt_collector If provided, the reason why
 *     the block can not enter will be stored.
 * @return {boolean} True if this block can enter into this workbench.
 */
Blockly.Workbench.prototype.acceptBlock = function(block, opt_collector) {
  return true;
};

/**
 * Reconnect an block to a mutated input.
 * @param {Blockly.Connection} connectionChild Connection on child block.
 * @param {!Blockly.Block} block Parent block.
 * @param {string} inputName Name of input on parent block.
 * @return {boolean} True iff a reconnection was made, false otherwise.
 */
Blockly.Workbench.reconnect = function(connectionChild, block, inputName) {
  if (!connectionChild || !connectionChild.getSourceBlock().workspace) {
    return false;  // No connection or block has been deleted.
  }
  var connectionParent = block.getInput(inputName).connection;
  var currentParent = connectionChild.targetBlock();
  if ((!currentParent || currentParent == block) &&
      connectionParent.targetConnection != connectionChild) {
    if (connectionParent.isConnected()) {
      // There's already something connected here.  Get rid of it.
      connectionParent.disconnect();
    }
    connectionParent.connect(connectionChild);
    return true;
  }
  return false;
};

/**
 * Get the parent workspace of a workspace that is inside a workbench, taking into
 * account whether it is a flyout.
 * @param {?Blockly.Workspace} workspace The workspace that is inside a workbench.
 * @return {?Blockly.Workspace} The workbench's parent workspace or null.
 * @public
 */
Blockly.Workbench.findParentWs = function(workspace) {
  var outerWs = null;
  if (workspace && workspace.options) {
    var parent = workspace.options.parentWorkspace;
    // If we were in a flyout in a workbench, need to go up two levels to find
    // the actual parent.
    if (workspace.isFlyout) {
      if (parent && parent.options) {
        outerWs = parent.options.parentWorkspace;
      }
    } else if (parent) {
      outerWs = parent;
    }
  }
  return outerWs;
};

// Export symbols that would otherwise be renamed by Closure compiler.
if (!goog.global['Blockly']) {
  goog.global['Blockly'] = {};
}
if (!goog.global['Blockly']['Workbench']) {
  goog.global['Blockly']['Workbench'] = {};
}
goog.global['Blockly']['Workbench']['reconnect'] = Blockly.Workbench.reconnect;
