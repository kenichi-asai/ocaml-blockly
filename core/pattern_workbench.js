'use strict';

goog.provide('Blockly.PatternWorkbench');

goog.require('Blockly.Workbench');

/**
 * Class for a dialog which provides an area for user to work on pattern
 * blocks for a match block.
 * @extends {Blockly.Workbench}
 * @constructor
 */
Blockly.PatternWorkbench = function() {
  Blockly.PatternWorkbench.superClass_.constructor.call(this, null);
};
goog.inherits(Blockly.PatternWorkbench, Blockly.Workbench);

/**
 * Draw the workbench icon.
 * @param {!Element} group The icon group.
 * @private
 */
Blockly.PatternWorkbench.prototype.drawIcon_ = function(group) {
  // Square with rounded corners.
  Blockly.utils.createSvgElement('rect',
      {
        'class': 'blocklyWorkbenchIconShape',
        'rx': '4',
        'ry': '4',
        'height': '16',
        'width': '16'
      },
      group);
  // Gear teeth.
  Blockly.utils.createSvgElement('path',
      {
        'class': 'blocklyWorkbenchIconSymbol',
        'd': 'm 5,2 l -3,11 m 6,-11 l 4,11 m 0,-11 a 2,2 0 1,0 0.01,0'
      },
      group);
};

/**
 * Set the connection whose context this workbench should be bound to.
 * @param {!Blockly.Connetion} connection The connection where this workbench's
 *     context is bound.
 * @param {!Blockly.Input} input The input that connection is attached to.
 * @override
 */
Blockly.PatternWorkbench.prototype.setContextConnection = function(connection,
    input) {
  // NOP. Pattern workbench is attached to the block instead of an input/connection.
};

/**
 * Finds variable environment which can be referred to inside this workbench.
 * @param {boolean=} opt_includeImplicit False to exclude implicit context
 *     existing in the workspace of the block, and collects only context that
 *     are bound to the block and its ancestors. Defaults to true.
 * @return {!Blockly.Block.VariableContext} The variable context.
 * @override
 */
Blockly.PatternWorkbench.prototype.getContext = function(opt_includeImplicit) {
  if (this.block_) {
    // Unless this workbench is in the process of being deleted.
    var includeImplicit = opt_includeImplicit !== false;
    if (this.block_.outputConnection) {
      return this.block_.allVisibleVariables(this.block_.outputConnection,
          includeImplicit);
    } else if (this.block_.previousConnection) {
      return this.block_.allVisibleVariables(this.block_.previousConnection,
          includeImplicit);
    } else {
      return new Blockly.Block.VariableContext();
    }
  }
  return new Blockly.Block.VariableContext();
};

/**
 * Finds variables environment bound only to the workbench's block, and able to
 * be referred to by blocks inside this workbench workspace.
 * @return {!Blockly.Block.VariableContext} The variable context.
 * @override
 */
Blockly.PatternWorkbench.prototype.getBlockContext = function() {
  return new Blockly.Block.VariableContext();
};

/**
 * Returns whether the block is allowed to enter into this workbench.
 * @param {!Blockly.Block} block The block.
 * @param {Blockly.ErrorCollector=} opt_collector If provided, the reason why
 *     the block can not enter will be stored.
 * @return {boolean} True if this block can enter into this workbench.
 * @override
 */
Blockly.PatternWorkbench.prototype.acceptBlock = function(block,
    opt_collector) {
  var typeExpr = block.outputConnection && block.outputConnection.typeExpr;
  if (!!typeExpr && typeExpr.isPattern()) {
    return true;
  }
  if (opt_collector) {
    opt_collector.addPatternWorkbenchRefuseBlock();
  }
  return false;
};

/**
 * Return a new variable name that is not yet being used on the related
 * workspace.
 * @param {!string} name The base name from which a new name is generated.
 * @param {!Blockly.Workspace} workspace The workspace on which to generate
 *     a new variable name.
 * @param {string=} opt_suffix Optional suffix to be added.
 * @return {!string} New variable name.
 */
Blockly.PatternWorkbench.prototype.generateUniqueVariableFrom = function(
    name, workspace, opt_suffix) {
  var label = Blockly.BoundVariableAbstract.VARIABLE;
  var namesMap = Blockly.BoundVariables.getDefinedNames(label, workspace);
  var baseName = name.charAt(0).toLowerCase() + name.slice(1);
  var newName = opt_suffix ? baseName + opt_suffix : baseName;
  if (Blockly.BoundVariables.isLegalName(label, newName) &&
      !(newName in namesMap)) {
    return newName;
  }
  var n = 2;
  do {
    newName = opt_suffix ? baseName + n + opt_suffix : baseName + n;
    n++;
  } while (!Blockly.BoundVariables.isLegalName(label, newName) ||
      newName in namesMap);
  return newName;
}

/**
 * Creates blocks to show in workbench's flyout on the given workspace.
 * @param {!Blockly.Workspace} flyoutWorkspace The workspace to create blocks.
 * @return {!Array.<!Blockly.Block>} List of blocks to show in a flyout.
 * @override
 * @private
 */
Blockly.PatternWorkbench.prototype.blocksForFlyout_ = function(flyoutWorkspace) {
  return [];
};

/**
 * Updates the shown blocks in the workbench flyout.
 * @override
 */
Blockly.PatternWorkbench.prototype.updateFlyoutTree = function() {
  if (!this.workspace_ || !this.workspace_.flyout_) {
    return;
  }
  var contentsMap = this.getContentsMap_();
  var keys = Object.keys(contentsMap);
  var children = [];
  for (var i = 0, name; name = keys[i]; i++) {
    var label = goog.dom.createDom('label');
    label.setAttribute('text', name);
    label.setAttribute('gap', '5');
    children.push(label);

    var blockXmlList = contentsMap[name];
    for (var j = 0, blockXml; blockXml = blockXmlList[j]; j++) {
      blockXml.setAttribute('gap', '5');
      children.push(blockXml);
    }
  }
  this.workspace_.flyout_.show(children);
  this.updateScreen_();
};

/**
 * Get a map that maps from block's name to a list of pattern block XML.
 * @return {Object.<string,!Array.<!Element>>} Object mapping category name
 *     to block XML list.
 */
Blockly.PatternWorkbench.prototype.getContentsMap_ = function() {
  var contentsMap = {};
  var label = Blockly.BoundVariableAbstract.VARIABLE;
  var ws = this.getWorkspace();
  // variable
  var n = this.generateUniqueVariableFrom('v', ws);
  var xml = Blockly.PatternWorkbench.createVariableDom(n, 'true');
  contentsMap['variable'] = [xml];
  // pair
  var n1 = this.generateUniqueVariableFrom('x', ws);
  var b1 = Blockly.PatternWorkbench.createVariableDom(n1, 'true');
  var v1 = Blockly.PatternWorkbench.createValueDom('LEFT', b1);
  var n2 = this.generateUniqueVariableFrom('y', ws);
  var b2 = Blockly.PatternWorkbench.createVariableDom(n2, 'true');
  var v2 = Blockly.PatternWorkbench.createValueDom('RIGHT', b2);
  var xml = Blockly.PatternWorkbench.createPairDom([v1, v2]);
  contentsMap['pair'] = [xml];
  // record (later), placed here to fix the order of patterns
  contentsMap['record'] = [];
  // list
  var xml1 = Blockly.PatternWorkbench.createEmptyListDom();
  var n1 = this.generateUniqueVariableFrom('first', ws);
  var b1 = Blockly.PatternWorkbench.createVariableDom(n1, 'true');
  var v1 = Blockly.PatternWorkbench.createValueDom('FIRST', b1);
  var n2 = this.generateUniqueVariableFrom('rest', ws);
  var b2 = Blockly.PatternWorkbench.createVariableDom(n2, 'true');
  var v2 = Blockly.PatternWorkbench.createValueDom('CONS', b2);
  var xml2 = Blockly.PatternWorkbench.createConsDom([v1, v2]);
  contentsMap['list'] = [xml1, xml2];
  // option
  var xml1 = Blockly.PatternWorkbench.createNoneDom();
  var n = this.generateUniqueVariableFrom('s', ws);
  var b = Blockly.PatternWorkbench.createVariableDom(n, 'true');
  var v1 = Blockly.PatternWorkbench.createValueDom('PARAM', b);
  var xml2 = Blockly.PatternWorkbench.createSomeDom(v1);
  contentsMap['option'] = [xml1, xml2];

  // record
  // var label = Blockly.BoundVariableAbstract.RECORD_FIELD;
  var parentConnection = this.block_.outputConnection ?
      this.block_.outputConnection.targetConnection :
      this.block_.previousConnection ?
      this.block_.previousConnection.targetConnection : null;
  var parentBlock = parentConnection &&
      parentConnection.getSourceBlock();
  if (!parentBlock || !parentConnection) {
    return contentsMap;
  }
  var ctx = parentBlock.allVisibleVariables(parentConnection);
  var recordValues = ctx.getVariablesWithLabel(
      Blockly.BoundVariableAbstract.RECORD);
  if (recordValues.length != 0) {
    var blockXmlList = [];
    for (var i = 0, val; val = recordValues[i]; i++) {
      var blockXml = goog.dom.createDom('block',
          {'type': 'record_pattern_typed'});
      var field = goog.dom.createDom('field', {}, val.getVariableName());
      var typeName = Blockly.BoundVariableAbstract.labelToName(val.label);
      field.setAttribute('name', 'RECORD');
      field.setAttribute('isvalue', 'false');
      field.setAttribute('variable-type', typeName);

      var valueDom = goog.dom.createDom('refer-to');
      valueDom.setAttribute('id', val.getId());
      valueDom.setAttribute('workspace-id', val.getWorkspace().id);
      field.appendChild(valueDom);

      blockXml.appendChild(field);
      for (var j = 0; j < val.childValues_.length; j++) {
        var input = val.getSourceBlock().getInput('FIELD_INP' + j);
        var targetConnection = input.connection.targetConnection;
        if (targetConnection && // The field does not have type yet.
            targetConnection.getSourceBlock().allInputsFilled()) {
            // The second condition needed for a tuple with blank arguments.
          var name = val.childValues_[j].getVariableName();
          var n = this.generateUniqueVariableFrom(name, ws, '_v');
          var b = Blockly.PatternWorkbench.createVariableDom(n, 'true');
          var v = Blockly.PatternWorkbench.createValueDom('FIELD_INP' + j, b);
          blockXml.appendChild(v);
        }
      }
      blockXmlList.push(blockXml);
    }
    contentsMap['record'] = blockXmlList;
  }
  return contentsMap;
};

/**
 * create Dom for variables
 */
Blockly.PatternWorkbench.createVariableDom = function(name, isvalue) {
  var f = goog.dom.createDom('field', {}, name);
  f.setAttribute('name', 'VAR');
  f.setAttribute('isvalue', isvalue);
  f.setAttribute('variable-type', 'variable');
  var xml = goog.dom.createDom('block', {'type': 'variable_pattern_typed'}, f);
  return xml;
};

/**
 * create value Dom
 */
Blockly.PatternWorkbench.createValueDom = function(name, child) {
  var xml = goog.dom.createDom('value', {}, child);
  xml.setAttribute('name', name);
  return xml;
};

/**
 * create Dom for pairs
 */
Blockly.PatternWorkbench.createPairDom = function(children) {
  var xml = goog.dom.createDom('block', {'type': 'pair_pattern_typed'},
      children);
  return xml;
};

/**
 * create Dom for empty list
 */
Blockly.PatternWorkbench.createEmptyListDom = function() {
  var xml = goog.dom.createDom('block',
      {'type': 'empty_construct_pattern_typed'});
  return xml;
};

/**
 * create Dom for cons
 */
Blockly.PatternWorkbench.createConsDom = function(children) {
  var xml = goog.dom.createDom('block',
      {'type': 'cons_construct_pattern_typed'}, children);
  return xml;
};

/**
 * create Dom for None
 */
Blockly.PatternWorkbench.createNoneDom = function() {
  var xml = goog.dom.createDom('block',
      {'type': 'option_none_pattern_typed'});
  return xml;
};

/**
 * create Dom for Some
 */
Blockly.PatternWorkbench.createSomeDom = function(child) {
  var xml = goog.dom.createDom('block',
      {'type': 'option_some_pattern_typed'}, child);
  return xml;
};
