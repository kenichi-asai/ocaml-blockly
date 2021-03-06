'use strict';

goog.provide('Blockly.TypeExpr');
goog.provide('Blockly.TypeExpr.Error');

goog.require('Blockly.ErrorCollector');

goog.require('goog.array');
goog.require('goog.asserts');
goog.require('goog.dom');

/**
 * @constructor
 * @param {number} label
 */
Blockly.TypeExpr = function(label) {
  this.label = label;
};

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.INT_ = 100;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.FLOAT_ = 105;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.BOOL_ = 110;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.STRING_ = 113;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.LIST_ = 115;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.OPTION_ = 118;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.TUPLE_ = 121;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.UNIT_ = 125;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.FUN_ = 130;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.CONSTRUCT_ = 140;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.TYPE_CONSTRUCTOR_ = 150;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.RECORD_ = 155;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.PATTERN_ = 160;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.UNKNOWN_ = 165;

/**
 * @type {number}
 * @private
 */
Blockly.TypeExpr.TVAR_ = 170;

/**
 * @type {number} for universe
 * @private
 */
Blockly.TypeExpr.COLOR_ = 180;
Blockly.TypeExpr.IMAGE_ = 181;
Blockly.TypeExpr.SCENE_ = 182;

/**
 * Convert the type instance into plan text.
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.prototype.toString = function(opt_deref) {
  goog.asserts.assert(false, 'Not implemented.');
};

/**
 * Gets the display text for type expression.
 * @return {string}
 */
Blockly.TypeExpr.prototype.getDisplayText = function() {
  return this.getTypeName();
};

/**
 * Return the object's type name.
 * @return {string}
 */
Blockly.TypeExpr.prototype.getTypeName = function() {
  switch (this.label) {
    case Blockly.TypeExpr.INT_:
      return 'int';
    case Blockly.TypeExpr.FLOAT_:
      return 'float';
    case Blockly.TypeExpr.BOOL_:
      return 'bool';
    case Blockly.TypeExpr.STRING_:
      return 'string';
    case Blockly.TypeExpr.LIST_:
      return 'list';
    case Blockly.TypeExpr.OPTION_:
      return 'option';
    case Blockly.TypeExpr.TUPLE_:
      return 'tuple';
    case Blockly.TypeExpr.UNIT_:
      return 'unit';
    case Blockly.TypeExpr.FUN_:
      return 'function';
    case Blockly.TypeExpr.CONSTRUCT_:
      return 'construct';
    case Blockly.TypeExpr.TYPE_CONSTRUCTOR_:
      return 'type-constructor';
    case Blockly.TypeExpr.RECORD_:
      return 'record';
    case Blockly.TypeExpr.PATTERN_:
      return 'pattern';
    case Blockly.TypeExpr.UNKNOWN_:
      return 'unknown';
    case Blockly.TypeExpr.TVAR_:
      return 'typeVar';
    case Blockly.TypeExpr.COLOR_:
      return 'Color.t';
    case Blockly.TypeExpr.IMAGE_:
      return 'Image.t';
    case Blockly.TypeExpr.SCENE_:
      return 'scene_t';
    default:
      goog.asserts.assert(false, 'Not implemented.');
  }
};

/**
 * Functions to return if the object represents a specific type.
 * @return {boolean}
 */
Blockly.TypeExpr.prototype.isInt = function() {
  return this.label == Blockly.TypeExpr.INT_;
};
Blockly.TypeExpr.prototype.isFloat = function() {
  return this.label == Blockly.TypeExpr.FLOAT_;
};
Blockly.TypeExpr.prototype.isBool = function() {
  return this.label == Blockly.TypeExpr.BOOL_;
};
Blockly.TypeExpr.prototype.isString = function() {
  return this.label == Blockly.TypeExpr.STRING_;
};
Blockly.TypeExpr.prototype.isPrimitive = function() {
  return this.label == Blockly.TypeExpr.INT_ ||
      this.label == Blockly.TypeExpr.FLOAT_ ||
      this.label == Blockly.TypeExpr.BOOL_ ||
      this.label == Blockly.TypeExpr.COLOR_ ||
      this.label == Blockly.TypeExpr.IMAGE_ ||
      this.label == Blockly.TypeExpr.SCENE_;
};
Blockly.TypeExpr.prototype.isList = function() {
  return this.label == Blockly.TypeExpr.LIST_;
};
Blockly.TypeExpr.prototype.isOption = function() {
  return this.label == Blockly.TypeExpr.OPTION_;
}
Blockly.TypeExpr.prototype.isTuple = function() {
  return this.label == Blockly.TypeExpr.TUPLE_;
};
Blockly.TypeExpr.prototype.isPair = function() {
  return this.label == Blockly.TypeExpr.TUPLE_ &&
      this.tuples_.length == 2;
};
Blockly.TypeExpr.prototype.isTriple = function() {
  return this.label == Blockly.TypeExpr.TUPLE_ &&
      this.tuples_.length == 3;
};
// Blockly.TypeExpr.prototype.isUnit = function() {
//   return this.label == Blockly.TypeExpr.UNIT_;
// };
Blockly.TypeExpr.prototype.isFunction = function() {
  return this.label == Blockly.TypeExpr.FUN_;
};
Blockly.TypeExpr.prototype.isConstruct = function() {
  return this.label == Blockly.TypeExpr.CONSTRUCT_;
};
Blockly.TypeExpr.prototype.isTypeConstructor = function() {
  return this.label == Blockly.TypeExpr.TYPE_CONSTRUCTOR_;
};
Blockly.TypeExpr.prototype.isRecord = function() {
  return this.label == Blockly.TypeExpr.RECORD_;
};
Blockly.TypeExpr.prototype.isStructure = function() {
  // The class of type expression representing a structure is expected to have
  // a field named `id` to identify the structure.
  return this.isConstruct() || this.isRecord();
};
Blockly.TypeExpr.prototype.isPattern = function() {
  return this.label == Blockly.TypeExpr.PATTERN_;
};
Blockly.TypeExpr.prototype.isUnknown = function() {
  return this.label == Blockly.TypeExpr.UNKNOWN_;
};
Blockly.TypeExpr.prototype.isTypeVar = function() {
  return this.label == Blockly.TypeExpr.TVAR_;
};

/**
 * Return a collection of the object's child types.
 * @return {Array<Type>}
 */
Blockly.TypeExpr.prototype.getChildren = function() {
  return [];
};

/**
 * Replace one of children type which this type directly has with another
 * type.
 * @param {!Blockly.Block} oldChild The child type to be replaced.
 * @param {!Blockly.Block} newChild The child type to be inserted instead of
 *     oldChild.
 */
Blockly.TypeExpr.prototype.replaceChild = function(oldChild, newChild) {
  goog.asserts.assert(false, 'Has no child.');
};

/**
 * Clear type resolutions deeply.
 */
Blockly.TypeExpr.prototype.clear = function() {
  var children = this.getChildren();
  for (var i = 0, child; child = children[i]; i++) {
    child.clear();
  }
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.prototype.clone = function() {
  goog.asserts.assert(false, 'Not implemented.');
};

/**
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.prototype.deref = function() {
  var t = this;
  while (t.isTypeVar() && t.val != null)
    t = t.val;
  return t;
};

/**
 * Returns the object which is dereferenced recursively.
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.prototype.deepDeref = function() {
  return this;
};

/**
 * @static
 * @return {string}
 */
Blockly.TypeExpr.generateColor = function() {
  var getRandomInt = function(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  var to2digitshexString = function(v) {
    var x = v.toString(16).slice(-2);
    return '0'.repeat(2 - x.length) + x;
  }
  var r = getRandomInt(1 << 8);
  var g = getRandomInt(1 << 8);
  var b = getRandomInt(1 << 8);
  return '#' + to2digitshexString(r) + to2digitshexString(g) +
      to2digitshexString(b);
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.INT = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.INT_);
};
goog.inherits(Blockly.TypeExpr.INT, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.INT.prototype.toString = function(opt_deref) {
  return "INT";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.INT.prototype.clone = function() {
  return new Blockly.TypeExpr.INT();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.FLOAT = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.FLOAT_);
};
goog.inherits(Blockly.TypeExpr.FLOAT, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.FLOAT.prototype.toString = function(opt_deref) {
  return "FLOAT";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.FLOAT.prototype.clone = function() {
  return new Blockly.TypeExpr.FLOAT();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.BOOL = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.BOOL_);
};
goog.inherits(Blockly.TypeExpr.BOOL, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.BOOL.prototype.toString = function(opt_deref) {
  return "BOOL";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.BOOL.prototype.clone = function() {
  return new Blockly.TypeExpr.BOOL();
};
/**
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.STRING = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.STRING_);
};
goog.inherits(Blockly.TypeExpr.STRING, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.STRING.prototype.toString = function(opt_deref) {
  return "STRING";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.STRING.prototype.clone = function() {
  return new Blockly.TypeExpr.STRING();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @param {Blockly.TypeExpr} element_type
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.LIST = function(element_type) {
  /** @type {Blockly.TypeExpr} */
  this.element_type = element_type;
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.LIST_);
};
goog.inherits(Blockly.TypeExpr.LIST, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.LIST.prototype.toString = function(opt_deref) {
  return "LIST[" + this.element_type.toString(opt_deref) + "]";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.LIST.prototype.getDisplayText = function() {
  return this.element_type.getDisplayText() + " list";
};

/**
 * @override
 * @return {Array<Type>}
 */
Blockly.TypeExpr.LIST.prototype.getChildren = function() {
  return [this.element_type];
};

/**
 * Replace one of children type which this type directly has with another
 * type.
 * @param {!Blockly.Block} oldChild The child type to be replaced.
 * @param {!Blockly.Block} newChild The child type to be inserted instead of
 *     oldChild.
 */
Blockly.TypeExpr.LIST.prototype.replaceChild = function(oldChild, newChild) {
  goog.asserts.assert(this.element_type == oldChild,
      'The specidied child is not found.');
  this.element_type = newChild;
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.LIST.prototype.clone = function() {
  return new Blockly.TypeExpr.LIST(this.element_type.clone());
};

/**
 * Returns the object which is dereferenced recursively.
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.LIST.prototype.deepDeref = function() {
  return new Blockly.TypeExpr.LIST(this.element_type.deepDeref());
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @param {Blockly.TypeExpr} element_type
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.OPTION = function(element_type) {
  /** @type {Blockly.TypeExpr} */
  this.element_type = element_type;
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.OPTION_);
};
goog.inherits(Blockly.TypeExpr.OPTION, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.OPTION.prototype.toString = function(opt_deref) {
  return "OPTION[" + this.element_type.toString(opt_deref) + "]";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.OPTION.prototype.getDisplayText = function() {
  return this.element_type.getDisplayText() + " option";
};

/**
 * @override
 * @return {Array<Type>}
 */
Blockly.TypeExpr.OPTION.prototype.getChildren = function() {
  return [this.element_type];
};

/**
 * Replace one of children type which this type directly has with another
 * type.
 * @param {!Blockly.Block} oldChild The child type to be replaced.
 * @param {!Blockly.Block} newChild The child type to be inserted instead of
 *      oldChild.
 */
Blockly.TypeExpr.OPTION.prototype.replaceChild = function(oldChild, newChild) {
  goog.asserts.assert(this.element_type == oldChild,
    'The specified child is not found.');
  this.element_type = newChild;
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.OPTION.prototype.clone = function() {
  return new Blockly.TypeExpr.OPTION(this.element_type.clone());
};

/**
 * Returns the object which is dereferenced recursively.
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.OPTION.prototype.deepDeref = function() {
  return new Blockly.TypeExpr.OPTION(this.element_type.deepDeref());
};

/**
 * @param {Array.<!Blockly.TypeExpr>|...!Blockly.TypeExpr}
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.TUPLE = function() {
  var args = arguments;
  if (args.length == 1 && goog.isArray(args[0])) {
    args = args[0];
  }
  goog.asserts.assert(1 < args.length);

  this.tuples_ = [];
  for (var i = 0; i < args.length; i++) {
    this.tuples_.push(args[i]);
  }
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.TUPLE_);
};
goog.inherits(Blockly.TypeExpr.TUPLE, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.TUPLE.prototype.toString = function(opt_deref) {
  var str = "TUPLE[";
  for (var i = 0; i < this.tuples_.length; i++) {
    str += this.tuples_[i].toString(opt_deref);
    if (i != this.tuples_.length - 1) {
      str += " * ";
    }
  }
  str += "]";
  return str;
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.TUPLE.prototype.getDisplayText = function() {
  var str = "";
  for (var i = 0; i < this.tuples_.length; i++) {
    str += this.tuples_[i].getDisplayText();
    if (i != this.tuples_.length - 1) {
      str += " * ";
    }
  }
  return str;
};

/**
 * @return {Array<Type>}
 * @override
 */
Blockly.TypeExpr.TUPLE.prototype.getChildren = function() {
  return [].concat(this.tuples_);
};

/**
 * Replace one of children type which this type directly has with another
 * type.
 * @param {!Blockly.Block} oldChild The child type to be replaced.
 * @param {!Blockly.Block} newChild The child type to be inserted instead of
 *     oldChild.
 */
Blockly.TypeExpr.TUPLE.prototype.replaceChild = function(oldChild, newChild) {
  for (var i = 0, type; type = this.tuples_[i]; i++) {
    if (type == oldChild) {
      this.tuples_[i] = newChild;
      return;
    }
  }
  goog.asserts.assert(false, 'The specidied child is not found.');
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.TUPLE.prototype.clone = function() {
  var types = [];
  for (var i = 0, type; type = this.tuples_[i]; i++) {
    types.push(type.clone());
  }
  return new Blockly.TypeExpr.TUPLE(types);
};

/**
 * Returns the object which is dereferenced recursively.
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.TUPLE.prototype.deepDeref = function() {
  var types = [];
  for (var i = 0, type; type = this.tuples_[i]; i++) {
    types.push(type.deepDeref());
  }
  return new Blockly.TypeExpr.TUPLE(types);
};

/**
 * Get the child type of tuples.
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.TUPLE.prototype.firstType = function() {
  return this.tuples_[0];
};
Blockly.TypeExpr.TUPLE.prototype.secondType = function() {
  return this.tuples_[1];
};
Blockly.TypeExpr.TUPLE.prototype.thirdType = function() {
  return this.tuples_[2];
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @param {Blockly.TypeExpr}
 */
Blockly.TypeExpr.UNIT = function() {
 Blockly.TypeExpr.call(this, Blockly.TypeExpr.UNIT_);
};
goog.inherits(Blockly.TypeExpr.UNIT, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.UNIT.prototype.toString = function(opt_deref) {
  return "UNIT";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.UNIT.prototype.getDisplayText = function() {
  return "unit"
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.UNIT.prototype.clone = function() {
  return new Blockly.TypeExpr.UNIT();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @param {Blockly.TypeExpr} arg_type
 * @param {Blockly.TypeExpr} return_type
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.FUN = function(arg_type, return_type) {
  /** @type {Blockly.TypeExpr} */
  this.arg_type = arg_type;
  /** @type {Blockly.TypeExpr} */
  this.return_type = return_type;
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.FUN_);
};
goog.inherits(Blockly.TypeExpr.FUN, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.FUN.prototype.toString = function(opt_deref) {
  return "FUN((" + this.arg_type.toString(opt_deref) + ") -> (" +
      this.return_type.toString(opt_deref) + "))";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.FUN.prototype.getDisplayText = function() {
  return this.arg_type.getDisplayText() + " -> " +
      this.return_type.getDisplayText();
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.FUN.prototype.clone = function() {
  return new Blockly.TypeExpr.FUN(this.arg_type.clone(),
      this.return_type.clone());
};

/**
 * @override
 * @return {Array<Type>}
 */
Blockly.TypeExpr.FUN.prototype.getChildren = function() {
  return [this.arg_type, this.return_type];
};

/**
 * Replace one of children type which this type directly has with another
 * type.
 * @param {!Blockly.Block} oldChild The child type to be replaced.
 * @param {!Blockly.Block} newChild The child type to be inserted instead of
 *     oldChild.
 */
Blockly.TypeExpr.FUN.prototype.replaceChild = function(oldChild, newChild) {
  if (oldChild == this.arg_type) {
    this.arg_type = newChild;
  } else if (oldChild == this.return_type) {
    this.return_type = newChild;
  } else {
    goog.asserts.assert(false, 'The specidied child is not found.');
  }
};

/**
 * Returns the object which is dereferenced recursively.
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.FUN.prototype.deepDeref = function() {
  return new Blockly.TypeExpr.FUN(this.arg_type.deepDeref(),
      this.return_type.deepDeref());
};

/**
 * @param {string} id The string to identify constructor type. Null if it's not
 *     identified.
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.CONSTRUCT = function(id) {
  this.id = (typeof id == 'string') ? id : null;
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.CONSTRUCT_);
};
goog.inherits(Blockly.TypeExpr.CONSTRUCT, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.CONSTRUCT.prototype.toString = function(opt_deref) {
  return "CONSTRUCT(" + (this.id ? this.id : "null") + ")";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.CONSTRUCT.prototype.getDisplayText = function() {
  var dataname;
  if (Blockly.mainWorkspace) {
    dataname = Blockly.mainWorkspace.getCtorDataName(this.id);
  }
  return dataname ? dataname : '';
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.CONSTRUCT.prototype.clone = function() {
  return new Blockly.TypeExpr.CONSTRUCT(this.id);
};

/**
 * Returns the object which is dereferenced recursively.
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.CONSTRUCT.prototype.deepDeref = function() {
  return new Blockly.TypeExpr.CONSTRUCT(this.id);
};

/**
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.TYPE_CONSTRUCTOR = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.TYPE_CONSTRUCTOR_);
};
goog.inherits(Blockly.TypeExpr.TYPE_CONSTRUCTOR, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.TYPE_CONSTRUCTOR.prototype.toString = function(opt_deref) {
  return "TYPE_CONSTRUCTOR";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.TYPE_CONSTRUCTOR.prototype.getDisplayText = function() {
  return "<type>";
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.TYPE_CONSTRUCTOR.prototype.clone = function() {
  return new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
};

/**
 * @param {string} id The string to identify record type. Null if it's not
 *     identified.
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.RECORD = function(id) {
  this.id = (typeof id == 'string') ? id : null;
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.RECORD_);
};
goog.inherits(Blockly.TypeExpr.RECORD, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.RECORD.prototype.toString = function(opt_deref) {
  return "RECORD(" + (this.id ? this.id : "null") + ")";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.RECORD.prototype.getDisplayText = function() {
  var dataname;
  if (Blockly.mainWorkspace) {
    dataname = Blockly.mainWorkspace.getStructureName(
        Blockly.BoundVariableAbstract.RECORD, this.id);
  }
  return dataname ? dataname : '';
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.RECORD.prototype.clone = function() {
  return new Blockly.TypeExpr.RECORD(this.id);
};

/**
 * Returns the object which is dereferenced recursively.
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.RECORD.prototype.deepDeref = function() {
  return new Blockly.TypeExpr.RECORD(this.id);
};

/**
 * @param {!Blockly.TypeExpr} pattExpr
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.PATTERN = function(pattExpr) {
  this.pattExpr = pattExpr;
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.PATTERN_);
};
goog.inherits(Blockly.TypeExpr.PATTERN, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.PATTERN.prototype.toString = function(opt_deref) {
  return "PATTERN(" + this.pattExpr.toString() + ")";
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.PATTERN.prototype.getDisplayText = function() {
  return "<pattern>";
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.PATTERN.prototype.clone = function() {
  return new Blockly.TypeExpr.PATTERN(this.pattExpr.clone());
};

/**
 * Clear type resolutions deeply.
 * @override
 */
Blockly.TypeExpr.PATTERN.prototype.clear = function() {
  this.pattExpr.clear();
};

/**
 * @param {!Blockly.TypeExpr} otherPatt
 */
Blockly.TypeExpr.PATTERN.prototype.unifyPattern = function(otherPatt) {
  goog.asserts.assert(otherPatt.isPattern(), 'The give type is not pattern ' +
      'type-expr.');
  this.pattExpr.unify(otherPatt.pattExpr);
};

/**
 * @constructor
 * @extends {Blockly.TypeExpr}
 */
Blockly.TypeExpr.UNKNOWN = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.UNKNOWN_);
};
goog.inherits(Blockly.TypeExpr.UNKNOWN, Blockly.TypeExpr);

/**
 * @param {boolean=} opt_deref
 * @return {string}
 * @override
 */
Blockly.TypeExpr.UNKNOWN.prototype.toString = function(opt_deref) {
  return "UNKNOWN";
};

/**
 * Deeply clone the object
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.UNKNOWN.prototype.clone = function() {
  return new Blockly.TypeExpr.UNKNOWN();
};

/**
 * Returns the object which is dereferenced recursively.
 * @return {Blockly.TypeExpr}
 * @override
 */
Blockly.TypeExpr.UNKNOWN.prototype.deepDeref = function() {
  return new Blockly.TypeExpr.UNKNOWN();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.COLOR = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.COLOR_);
};
goog.inherits(Blockly.TypeExpr.COLOR, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.COLOR.prototype.toString = function(opt_deref) {
  return "Color.t";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.COLOR.prototype.clone = function() {
  return new Blockly.TypeExpr.COLOR();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.IMAGE = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.IMAGE_);
};
goog.inherits(Blockly.TypeExpr.IMAGE, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.IMAGE.prototype.toString = function(opt_deref) {
  return "Image.t";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.IMAGE.prototype.clone = function() {
  return new Blockly.TypeExpr.IMAGE();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.SCENE = function() {
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.SCENE_);
};
goog.inherits(Blockly.TypeExpr.SCENE, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.SCENE.prototype.toString = function(opt_deref) {
  return "scene_t";
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.SCENE.prototype.clone = function() {
  return new Blockly.TypeExpr.SCENE();
};

/**
 * @extends {Blockly.TypeExpr}
 * @constructor
 * @param {string} name
 * @param {Blockly.TypeExpr} val
 * @param {string=} opt_color
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.TVAR = function(name, val, opt_color) {
  /** @type {string} */
  this.name = name;
  /** @type {Blockly.TypeExpr} */
  this.val = val;
  /** @type {string} */
  this.color = opt_color ? opt_color : Blockly.TypeExpr.generateColor();
  Blockly.TypeExpr.call(this, Blockly.TypeExpr.TVAR_);
};
goog.inherits(Blockly.TypeExpr.TVAR, Blockly.TypeExpr);

/**
 * @override
 * @param {boolean=} opt_deref
 * @return {string}
 */
Blockly.TypeExpr.TVAR.prototype.toString = function(opt_deref) {
  var inst = opt_deref ? this.deref() : this;
  if (inst.isTypeVar()) {
    var val_str = inst.val ? inst.val.toString(opt_deref) : "null";
    return "<" + inst.name + "=" + val_str + ">";
  } else {
    return "" + inst.toString(opt_deref);
  }
};

/**
 * Gets the display text for type expression.
 * @return {string}
 * @private
 */
Blockly.TypeExpr.TVAR.prototype.getDisplayText = function() {
  var t = this.deref();
  if (t.isTypeVar()) {
    return '\'' + t.name.toLowerCase();
  }
  return t.getDisplayText();
};

/**
 * @override
 * @return {Array<Type>}
 */
Blockly.TypeExpr.TVAR.prototype.getChildren = function() {
  return this.val ? [this.val] : [];
};

/**
 * Deeply clone the object
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.TVAR.prototype.clone = function() {
  return new Blockly.TypeExpr.TVAR(this.name,
      this.val ? this.val.clone() : null);
};

/**
 * Returns the object which is dereferenced recursively.
 * @override
 * @return {Blockly.TypeExpr}
 */
Blockly.TypeExpr.TVAR.prototype.deepDeref = function() {
  var t = this;
  while (t.val != null && t.val.isTypeVar())
    t = t.val;
  return t.val != null ? t.val.deepDeref() : t;
};

/**
 * Clear a type resolution.
 * @override
 */
Blockly.TypeExpr.TVAR.prototype.clear = function() {
  if (this.val) {
    this.val.clear();
  }
  this.val = null;
};

Blockly.TypeExpr.gen_counter = 1;

/**
 * @static
 * @param {number} n
 * @return {string}
 */
Blockly.TypeExpr.ExcelColumn = function(n) {
  var r = "";
  var acode = "A".charCodeAt(0);
  while (0 < n) {
    n--;
    r += String.fromCharCode(acode + (n % 26));
    n /= 26;
    n = Math.floor(n);
  }
  var result = "";
  for (var i = r.length - 1; 0 <= i; i--)
    result += r[i];

  return result;
};

/**
 * @static
 * @private
 * @return {string}
 */
Blockly.TypeExpr.generateTypeVarName_ = function() {
  var name = Blockly.TypeExpr.ExcelColumn(
      Blockly.TypeExpr.gen_counter);
  Blockly.TypeExpr.gen_counter++;
  return name;
};

Blockly.TypeExpr.generateTypeVar = function() {
  var name = Blockly.TypeExpr.generateTypeVarName_();
  return new Blockly.TypeExpr.TVAR(name, null);
};

/**
 * Collects a list of type variables existing inside this type expression.
 * @param {!Array.<!Blockly.TypeExpr>} The list of type variables.
 */
Blockly.TypeExpr.prototype.getTvarList = function() {
  var type = this.deepDeref();
  var tvars = [];
  var staq = [type];
  while (staq.length) {
    var t = staq.pop();

    if (t.isTypeVar()) {
      tvars.push(t);
      continue;
    }

    var children = t.getChildren();
    for (var i = 0; i < children.length; i++) {
      var child = children[i];
      staq.push(child);
    }
  }
  return tvars;
};

/**
 * Returns if this type expression includes an unknown type.
 */
Blockly.TypeExpr.prototype.hasUnknown = function() {
  var staq = [this];
  while (staq.length) {
    var t = staq.pop();
    if (t.isUnknown()) {
      return true;
    }
    var children = t.getChildren();
    for (var i = 0, child; child = children[i]; i++) {
      staq.push(child);
    }
  }
  return false;
};

/**
 * Clone type expression and replace some of type variables with flesh ones.
 * @param {!Array.<!string>} targetNames List of type variable names to be
 *     replaced.
 * @return {!{instance: !Blockly.TypeExpr, bounds: !Array.<!Blockly.TypeExpr>}}
 *     The cloned type expression with some flesh type variables, and list of
 *     flesh type variable generated newly.
 * @private
 */
Blockly.TypeExpr.prototype.instantiate = function(targetNames) {
  var type = this.deepDeref();
  var cloned = type.clone();
  var map = {};
  var staq = [[type, cloned, null]];
  while (staq.length) {
    var pair = staq.pop();
    var t = pair[0];
    var u = pair[1];
    var parentTyp = pair[2];

    if (!t.isTypeVar()) {
      var children1 = t.getChildren();
      var children2 = u.getChildren();
      for (var i = 0; i < children1.length; i++) {
        var child1 = children1[i];
        var child2 = children2[i];
        staq.push([child1, child2, u]);
      }
    } else {
      goog.asserts.assert(!t.val && !u.val,
          'Expects types are already dereferenced.');
      goog.asserts.assert(t.name === u.name);

      var index = targetNames.indexOf(t.name);
      if (index == -1) {
        // free type variable.
        var typeToInsert = t;
      } else {
        // Bound type variable.
        if (t.name in map) {
          var typeToInsert = map[t.name];
        } else {
          var typeToInsert = Blockly.TypeExpr.generateTypeVar();
          map[t.name] = typeToInsert;
        }
      }
      if (parentTyp) {
        parentTyp.replaceChild(u, typeToInsert);
      } else {
        cloned = typeToInsert;
        break;
      }
    }
  }
  var keys = Object.keys(map);
  var boundList = goog.array.map(keys, key => map[key]);
  return {instance: cloned, bounds: boundList};
};

/**
 * @param {Blockly.TypeExpr} other
 */
Blockly.TypeExpr.prototype.unify = function(other) {
  if (this.hasUnknown() || other.hasUnknown()) {
    throw Blockly.TypeExpr.errorUnknownType(this, other);
  }

  var staq = [[this, other]];
  while (staq.length != 0) {
    var pair = staq.pop();
    var t1 = pair[0];
    var t2 = pair[1];
    if (t1.isTypeConstructor() && t2.isTypeConstructor()) {
      continue;
    }
    if (t1.isPattern() && t2.isPattern()) {
      t1.unifyPattern(t2);
      continue;
    }
    if (t1.isTypeConstructor() || t2.isTypeConstructor()) {
      var othr = t1.isTypeConstructor() ? t2 : t1;
      throw Blockly.TypeExpr.errorUnifyTypeCtor(othr);
    }
    if (t1.isPattern() || t2.isPattern()) {
      var othr = t1.isPattern() ? t2 : t1;
      throw Blockly.TypeExpr.errorUnifyPattern(othr);
    }
    if (t1.isUnknown() || t2.isUnknown()) {
      throw Blockly.TypeExpr.errorUnknownType(t1, t2);
    }
    if (t1.isTypeVar() || t2.isTypeVar()) {
      var t1_is_tvar = t1.isTypeVar();
      if (t1_is_tvar && t2.isTypeVar())
        t1_is_tvar = t1.val != null;

      var tvar = t1_is_tvar ? t1 : t2;
      var othr = t1_is_tvar ? t2 : t1;
      if (othr.isTypeVar() && tvar.name == othr.name)
        continue;
      if (tvar.val != null) {
        // Don't swap order of pairs in staq. Error objects assume that the
        // order is consistent.
        var pair = t1_is_tvar ? [tvar.val, othr] : [othr, tvar.val];
        staq.push(pair);
      } else if (othr.occur(tvar.name)) {
        throw Blockly.TypeExpr.errorOccurCheck(tvar, othr);
      } else {
        tvar.val = othr;
      }
    } else if (t1.label != t2.label) {
      throw Blockly.TypeExpr.errorInconsistentLabel(t1, t2);
    } else if (t1.isTuple() && t1.tuples_.length != t1.tuples_.length) {
      throw Blockly.TypeExpr.errorInconsistentLabel(t1, t2);
    } else if (t1.isStructure() && t2.isStructure()) {
      if (t1.id && t2.id) {
        if (t1.id != t2.id) {
          throw Blockly.TypeExpr.errorInconsistentStructure(t1, t2);
        }
      } else if (t2.id) {
        t1.id = t2.id;
      } else if (t1.id) {
        t2.id = t1.id;
      } else {
        console.log('Both are undefined structure: ' + t1 + ', '+ t2);
        goog.asserts.fail('Both are undefined structure.');
      }
    } else {
      var children1 = t1.getChildren();
      var children2 = t2.getChildren();
      goog.asserts.assert(children1.length == children2.length,
          'Not matched children length');
      for (var i = 0; i < children1.length; i++) {
        var child1 = children1[i];
        var child2 = children2[i];
        staq.push([child1, child2]);
      }
    }
  }
};

/**
 * @param {string} name
 * @return {boolean}
 */
Blockly.TypeExpr.prototype.occur = function(name) {
  var staq = [this];
  while (staq.length != 0) {
    var t = staq.pop();
    if (t.isTypeVar() && t.name == name)
      return true;
    var children = t.getChildren();
    for (var i = 0; i < children.length; i++)
      staq.push(children[i]);
  }
  return false;
};

/**
 * Return whether it's possible to unify the object with the give one.
 * @param {Blockly.TypeExpr} other
 * @param {Blockly.ErrorCollector} opt_errorCollector
 * @return {boolean}
 */
Blockly.TypeExpr.prototype.ableToUnify = function(other, opt_errorCollector) {
  var t1 = this.clone();
  var t2 = other.clone();
  try {
    t1.unify(t2);
    return true;
  } catch (e) {
    if (!opt_errorCollector) {
      return false;
    }
    if (!(e instanceof Blockly.TypeExpr.Error)) {
      return false;
    }
    opt_errorCollector.addTypeError(e);
    return false;
  }
};

/**
 * Disconnect this type expression from another one if they are type variables
 * and either one contains the other.
 * @param {!Blockly.TypeExpr} other
 */
Blockly.TypeExpr.prototype.disconnect = function(other) {
  function disconnectImpl(upstream, child) {
    if (!child.isTypeVar()) {
      return;
    }
    var t = upstream;
    while (t) {
      if (!t.isTypeVar() || !t.val) {
        break;
      }
      t.val = t.val == child ? null : t.val;
      t = t.val;
    }
  }
  disconnectImpl(this, other);
  disconnectImpl(other, this);
};

Blockly.TypeExpr.prototype.flatten = function() {
  var t = this.deepDeref();
  var children = t.getChildren();
  if (children.length == 0) {
    return [t];
  }
  var desc = [];
  for (var i = 0; i < children.length; i++) {
    var child = children[i];
    desc = desc.concat(child.flatten());
  }
  return desc;
};

/**
 * Do the given two type expression represent to the same type without
 * dereferencing type variable reference?
 * @param {!Blockly.TypeExpr} typ1 First type expression
 * @param {!Blockly.TypeExpr} typ2 Second type expression
 * @return {boolean} True if type expressions are the same.
 */
Blockly.TypeExpr.equals = function(typ1, typ2) {
  if (typ1.label != typ2.label) {
    return false;
  }
  // Check if the types are primitive ones.
  if (typ1.isPrimitive()) {
    return true;
  }
  if (typ1.isStructure()) {
    return typ1.id && typ2.id ? typ1.id == typ2.id : false;
  }
  if (typ1.isTypeConstructor()) {
    return false;
  }
  if (typ1.isPattern()) {
    return Blockly.TypeExpr.equals(typ1.pattExpr, typ2.pattExpr);
  }
  if (typ1.isUnknown()) {
    return true;
  }
  if (typ1.isTypeVar()) {
    return typ1.name == typ2.name;
  }
  var children1 = typ1.getChildren();
  var children2 = typ2.getChildren();
  for (var i = 0; i < children1.length; i++) {
    var t1 = children1[i];
    var t2 = children2[i];
    if (!Blockly.TypeExpr.equals(t1, t2)) {
      return false;
    }
  }
  return true;
};

/**
 * Creates type instances representing function.
 * @param {!Array.<!Blockly.TypeExpr>} types List of types in order to
 *     be nested inside the function type.
 * @return {!Blockly.TypeExpr.FUN} The created function type.
 */
Blockly.TypeExpr.createFunType = function(types) {
  goog.asserts.assert(2 <= types.length);
  var returnType = types[types.length - 1];
  var second = types[types.length - 2];
  var result = new Blockly.TypeExpr.FUN(second, returnType);
  for (var i = types.length - 3; 0 <= i; i--) {
    var type = types[i];
    result = new Blockly.TypeExpr.FUN(type, result);
  }
  return result;
};

Blockly.TypeExpr.functionToArray = function(type) {
  var t = type.deref();
  if (!t.isFunction()) {
    return [];
  }
  var result = [];
  while (t.isFunction()) {
    result.push(t.arg_type);
    t = t.return_type.deref();
  }
  result.push(t);
  return result;
};

/**
 * Class which defines unification errors.
 * @param {number} label Enum to specify error type.
 */
Blockly.TypeExpr.Error = function(label, t1, t2) {
  goog.asserts.assert(!isNaN(label));
  this.label = label;
  this.t1 = t1;
  this.t2 = t2;
};

Blockly.TypeExpr.ERROR_TYPECTOR = 1;
Blockly.TypeExpr.ERROR_PATTERN = 5;
Blockly.TypeExpr.ERROR_OCCUR_CHECK = 10;
Blockly.TypeExpr.ERROR_STRUCTURE_INCONSISTENT = 15;
Blockly.TypeExpr.ERROR_LABEL_INCONSISTENT = 20;
Blockly.TypeExpr.ERROR_UNKNOWN_TYPE = 25;
Blockly.TypeExpr.ERROR_NOT_SPECIFIED = 30;

Blockly.TypeExpr.errorUnifyTypeCtor = function(t) {
  return new Blockly.TypeExpr.Error(Blockly.TypeExpr.ERROR_TYPECTOR, t, null);
};

Blockly.TypeExpr.errorUnifyPattern = function(t) {
  return new Blockly.TypeExpr.Error(Blockly.TypeExpr.ERROR_PATTERN, t, null);
};

Blockly.TypeExpr.errorOccurCheck = function(tvar, type) {
  return new Blockly.TypeExpr.Error(Blockly.TypeExpr.ERROR_OCCUR_CHECK, tvar,
    type);
};

Blockly.TypeExpr.errorInconsistentStructure = function(t1, t2) {
  return new Blockly.TypeExpr.Error(
      Blockly.TypeExpr.ERROR_STRUCTURE_INCONSISTENT, t1, t2);
};

Blockly.TypeExpr.errorInconsistentLabel = function(t1, t2) {
  return new Blockly.TypeExpr.Error(Blockly.TypeExpr.ERROR_LABEL_INCONSISTENT,
    t1, t2);
};

Blockly.TypeExpr.errorUnknownType = function(t1, t2) {
  return new Blockly.TypeExpr.Error(Blockly.TypeExpr.ERROR_UNKNOWN_TYPE,
    t1, t2);
};

Blockly.TypeExpr.errorNotSpecified = function() {
  return new Blockly.TypeExpr.Error(Blockly.TypeExpr.ERROR_NOT_SPECIFIED);
};

/**
 * Returns error message.
 * @return {!string}
 */
Blockly.TypeExpr.Error.prototype.toMessage = function() {
  var s1 = this.t1 ? this.t1.getDisplayText() : '';
  var s2 = this.t2 ? this.t2.getDisplayText() : '';
  switch (this.label) {
    case Blockly.TypeExpr.ERROR_TYPECTOR:
      return '型ブロックは、型 ' + s1 + ' と相入れません。';
    case Blockly.TypeExpr.ERROR_PATTERN:
      return 'パターンブロックは、型 ' + s1 + ' と相入れません。';
    case Blockly.TypeExpr.ERROR_OCCUR_CHECK:
      return '型変数 ' + s1 + 'が、型 ' + s2 + ' の中に出現しています！';
    case Blockly.TypeExpr.ERROR_STRUCTURE_INCONSISTENT:
      var isRecord = this.t1.isRecord();
      var typeName = isRecord ? 'レコード' : 'ヴァリアント';
      if (s1 === '' || s2 === '') {
        // The name of structure is not found.
        return '異なる' + typeName + 'の型です。';
      }
      return typeName + ' ' + s2 + ' の型が求められていますが、' +
          'これは' + typeName + ' ' + s1 + ' の型です。';
    case Blockly.TypeExpr.ERROR_LABEL_INCONSISTENT:
      return s1 + ' 型を持っているので、' + s2 + ' 型にはなれません。';
    case Blockly.TypeExpr.ERROR_UNKNOWN_TYPE:
      if (this.t1.isUnknown()) {
        return 'この型はまだ決定されていません。';
      }
      return '相手の型はまだ決定されていません。';
    case Blockly.TypeExpr.ERROR_NOT_SPECIFIED:
      return '別の箇所の部分で型が合っていません。';
    default:
      goog.asserts.fail('Unexpected type error label.');
  }
};
