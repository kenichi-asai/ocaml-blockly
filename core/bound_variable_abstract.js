/**
 * @fileoverview Variable representation with variable binding.
 * This is an abstract class for Blockly.BoundVariableValue and
 * Blockly.BoundVariableReference.
 * @author harukam0416@gmail.com (Haruka Matsumoto)
 */
'use strict';

goog.provide('Blockly.BoundVariableAbstract');

goog.require('goog.array');
goog.require('goog.string');


/**
 * Class for a variable to implement variable binding.
 * @param {!Blockly.TypeExpr} typeExpr The type expression of this
 *     variable.
 * @param {!number} label The enum representing type of variable.
 * @constructor
 */
Blockly.BoundVariableAbstract = function(typeExpr, label) {
  /**
   * The block the variable is declared in.
   * @type {Blockly.Block|null}
   */
  this.sourceBlock_ = null;

  /**
   * The workspace of this variable's block.
   * @type {Blockly.Workspace|null}
   */
  this.workspace_ = null;

  /**
   * The name of the main field name on the block.
   * @type {string}
   */
  this.mainFieldName_ = null;

  /**
   * The type expression of this variable.
   * @type {Blockly.TypeExpr}
   */
  this.typeExpr_ = typeExpr;

  /**
   * The enum representing type of variable.
   * @type {number}
   */
  this.label = label;

  /**
   * A unique id for the variable.
   * @type {string}
   * @private
   */
  this.id_ = Blockly.utils.genUid();

  /**
   * Whether the variable has been added to the variable database of the
   * workspace.
   * @type {boolean}
   */
  this.inWorkspaceDB = false;

  /**
   * Whether the variable has been added to the variable map of any block.
   * @type {boolean}
   */
  this.inBlockDB = false;
};

/**
 * Get the source block for this varialbe.
 * @return {Blockly.Block|null} The source block
 */
Blockly.BoundVariableAbstract.prototype.getSourceBlock = function() {
  return this.sourceBlock_ ? this.sourceBlock_ : null;
};

/**
 * Get the workspace of this variable's source block.
 * @return {Blockly.Workspace|null} The source block's workspace, or null.
 */
Blockly.BoundVariableAbstract.prototype.getWorkspace = function() {
  return this.workspace_ ? this.workspace_ : null;
};

/**
 * Set the name of the main field this variable is bound to.
 * @param {!Blockly.FieldBoundVariable} field
 */
Blockly.BoundVariableAbstract.prototype.setMainField = function(field) {
  var fieldName = field.name;
  if ((typeof fieldName != 'string') || !fieldName.length) {
    throw Error('Expected a non empty string.');
  }
  this.mainFieldName_ = fieldName;

  // TODO(harukam): Avoid accessing a private member.
  var block = field.sourceBlock_;
  if (!block) {
    throw Error('The given field is not initialized yet.');
  }
  this.sourceBlock_ = block;
  this.workspace_ = block.workspace;
};

/**
 * Returns the name of the main field this variable is bound to. If it's not
 * decided yet, returns null.
 * @return {string|null} The name of this variable's field.
 */
Blockly.BoundVariableAbstract.prototype.getMainFieldName = function() {
  return this.mainFieldName_ ? this.mainFieldName_ : null;
};

/**
 * Returns the field this variable is bound to. If it's not provided yet,
 * returns null.
 * @return {Blockly.FieldBoundVariable|null} This variable's field.
 */
Blockly.BoundVariableAbstract.prototype.getMainField = function() {
  if (!this.sourceBlock_) {
    return null;
  }
  if (typeof this.mainFieldName_ != 'string') {
    return null;
  }
  return this.sourceBlock_.getField(this.mainFieldName_);
};

/**
 * Returns the type expression of this variable.
 * @return {Blockly.TypeExpr} The type expression of this variable, or null.
 */
Blockly.BoundVariableAbstract.prototype.getTypeExpr = function() {
  return this.typeExpr_;
};

/**
 * Store the given type expression in this variable.
 * @param {Blockly.TypeExpr|null} typeExpr The type expression to be stored in
 *     this variable, or could be null if another block takes the place of the
 *     block.
 */
Blockly.BoundVariableAbstract.prototype.setTypeExpr = function(typeExpr) {
  this.typeExpr_ = typeExpr;
};

/**
 * Returns if this variable is a reference.
 * @return {boolean} True if this variable is a reference.
 */
Blockly.BoundVariableAbstract.prototype.isReference = undefined;

/**
 * @return {!string} The ID for the variable.
 */
Blockly.BoundVariableAbstract.prototype.getId = function() {
  return this.id_;
};

Blockly.BoundVariableAbstract.VARIABLE = 1;
Blockly.BoundVariableAbstract.CONSTRUCTOR = 3;
Blockly.BoundVariableAbstract.RECORD = 5;
Blockly.BoundVariableAbstract.RECORD_FIELD = 6;

// Note: Since label names are used to make an error message, they must be
// lowercase and not be abbreviated. These names are synchronized with XML
// encoder/decoder, so if these names are changed, the implementation of
// block_of_ocaml (https://github.com/harukamm/block_of_ocaml) must be updated.
Blockly.BoundVariableAbstract._NAME_LABEL_LIST = [
  ['variable', '変数', Blockly.BoundVariableAbstract.VARIABLE],
  ['constructor', 'コンストラクタ', Blockly.BoundVariableAbstract.CONSTRUCTOR],
  ['record', 'レコード', Blockly.BoundVariableAbstract.RECORD],
  ['record-field', 'レコードフィールド', Blockly.BoundVariableAbstract.RECORD_FIELD]
];

Blockly.BoundVariableAbstract._LABEL_LIST =
  goog.array.map(Blockly.BoundVariableAbstract._NAME_LABEL_LIST,
      function(tuple) {return tuple[2];});

/**
 * Functions to convert the given label to its name.
 */
Blockly.BoundVariableAbstract.labelToName = function(label) {
  var tuple = goog.array.find(Blockly.BoundVariableAbstract._NAME_LABEL_LIST,
      function(tuple) { return tuple[2] == label});
  return tuple ? tuple[0] : null;
};
Blockly.BoundVariableAbstract.labelToDisplayName = function(label) {
  var tuple = goog.array.find(Blockly.BoundVariableAbstract._NAME_LABEL_LIST,
      function(tuple) { return tuple[2] == label});
  return tuple ? tuple[1] : null;
};
Blockly.BoundVariableAbstract.nameToLabel = function(name) {
  var tuple = goog.array.find(Blockly.BoundVariableAbstract._NAME_LABEL_LIST,
      function(tuple) { return tuple[0] == name});
  return tuple ? tuple[2] : null;
};

/**
 * Functions to return if the variable is of the specified type.
 */
Blockly.BoundVariableAbstract.prototype.isVariable = function() {
  return this.label == Blockly.BoundVariableAbstract.VARIABLE;
};
Blockly.BoundVariableAbstract.prototype.isConstructor = function() {
  return this.label == Blockly.BoundVariableAbstract.CONSTRUCTOR;
};
Blockly.BoundVariableAbstract.prototype.isRecord = function() {
  return this.label == Blockly.BoundVariableAbstract.RECORD;
};
Blockly.BoundVariableAbstract.prototype.isRecordField = function() {
  return this.label == Blockly.BoundVariableAbstract.RECORD_FIELD;
};
Blockly.BoundVariableAbstract.isValidLabel = function(label) {
  return Blockly.BoundVariableAbstract._LABEL_LIST.indexOf(label) != -1;
};
Blockly.BoundVariableAbstract.isVariableLabel = function(label) {
  return label == Blockly.BoundVariableAbstract.VARIABLE;
};
Blockly.BoundVariableAbstract.isConstructorLabel = function(label) {
  return label == Blockly.BoundVariableAbstract.CONSTRUCTOR;
};
Blockly.BoundVariableAbstract.isRecordLabel = function(label) {
  return label == Blockly.BoundVariableAbstract.RECORD;
};
Blockly.BoundVariableAbstract.isRecordFieldLabel = function(label) {
  return label == Blockly.BoundVariableAbstract.RECORD_FIELD;
};

/**
 * Get the variable name for this variable.
 * @return {!string} This variable's name.
 */
Blockly.BoundVariableAbstract.prototype.getVariableName = undefined;

/**
 * Set the variable name for this variable.
 * @param {!string} newName The new name for this variable.
 */
Blockly.BoundVariableAbstract.prototype.setVariableName = undefined;

/**
 * Returns a list of variables which refer to the same value, or are referred
 * to by them.  Includes this variable in the list.
 * @return {Array.<!Blockly.BoundVariableAbstract>} A list of variables.
 */
Blockly.BoundVariableAbstract.prototype.getAllBoundVariables = function() {
  return [this];
};

/**
 * Returns a list of variables to highlight when the container of this variable
 * is hovered by users.
 * @return {Array.<!Blockly.BoundVariableAbstract>} A list of variables.
 */
Blockly.BoundVariableAbstract.prototype.getVariablesToHighlight = function() {
  return this.getAllBoundVariables();
};

/**
 * Dispose of this variable.
 */
Blockly.BoundVariableAbstract.prototype.dispose = function() {
  this.sourceBlock_ = null;
  this.workspace_ = null;
  this.typeExpr_ = null;
};

/**
 * A custom compare function for the BoundVariableAbstract objects.
 * @param {Blockly.VariableModel} var1 First variable to compare.
 * @param {Blockly.VariableModel} var2 Second variable to compare.
 * @return {number} -1 if name of var1 is less than name of var2, 0 if equal,
 *     and 1 if greater.
 * @package
 */
Blockly.BoundVariableAbstract.compareByName = function(var1, var2) {
  return goog.string.caseInsensitiveCompare(var1.getVariableName(),
      var2.getVariableName());
};
