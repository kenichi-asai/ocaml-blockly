/**
 * @fileoverview blocks related datatype for typed Blockly.
 * @author harukam0416@gmail.com (Haruka Matsumoto)
 */
'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['defined_recordtype_typed'] = {
  // Declare record types.
  init: function() {
    this.setColour(Blockly.Msg['DEFINE_TYPES_HUE']);
    this.setTooltip(Blockly.Msg.DEFINE_RECORD_TOOLTIP);

    this.recordId_ = Blockly.utils.genUid();
    var record_type = new Blockly.TypeExpr.RECORD(this.recordId_);
    var typename_field = Blockly.FieldBoundVariable.newValueRecord(record_type);

    this.appendDummyInput()
        .appendField('type ')
        .appendField(typename_field, 'DATANAME')
        .appendField('= {');

    this.itemCount_ = 0;
    this.appendRecordFieldInput();
    this.appendRecordFieldInput();
    this.appendDummyInput('RBRACE')
        .appendField('}')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setInputsInline(false);

    this.setTypedStatements(true);
    this.setMutator(new Blockly.Mutator(['record_field_item']));
    this.setWorkbench(new Blockly.TypeWorkbench());

    this.disableTransfer_ = true;
  },

  typeExprReplaced() {
    throw 'Not allowed to replace type expression for record.';
  },

  getStructureId: function() {
    return this.recordId_;
  },

  getStructureTypeDef: function(fieldName) {
    var inputName = fieldName.replace(/FIELD(\d+)/, 'FIELD_INP$1');
    return this.getTargetTypeCtor(inputName);
  },

  updateVariableEnv: function(conn, ctx) {
    if (conn && this.nextConnection == conn) {
      var variable = this.getField('DATANAME').getVariable();
      ctx.addStructureVariable(variable);
      for (var index = 0; index < this.itemCount_; index++) {
        var fieldVariable = this.getField('FIELD' + index).getVariable();
        ctx.addStructureVariable(fieldVariable);
      }
    }
  },

  getTypeScheme: function(fieldName) {
    if (fieldName === 'DATANAME') {
      var recordType = new Blockly.TypeExpr.RECORD(this.recordId_);
      return Blockly.Scheme.monoType(recordType);
    }
    return null;
  },

  appendRecordFieldInput: function() {
    var field = this.getField('DATANAME');
    var variableField =
        Blockly.FieldBoundVariable.newValueRecordField(null);
    var index = this.itemCount_++;
    var input = this.appendValueInput('FIELD_INP' + index)
        .appendField(variableField, 'FIELD' + index)
        .appendField(':')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR())
        .setAlign(Blockly.ALIGN_RIGHT);
    // Set a child value after appending its field to a block. Otherwise,
    // the child value's block would not be initialized.
    // To avoid this, call variableField.initModel() here or
    // store the child after appendField().
    field.setChildValue(variableField);
    return input;
  },

  resizeRecordFieldInputs: function(expectedCount) {
    while (expectedCount < this.itemCount_) {
      var index = this.itemCount_ - 1;
      // Decrement the size of items first. The function this.removeInput()
      // might disconnect some blocks from this block, and disconnecting blocks
      // triggers type inference, which causes a null pointer exception. To
      // avoid the type inference for the removed input, update the size of
      // items first.
      var input = this.getInput('FIELD_INP' + index);
      var connection = input.connection;
      var typeBlock = connection.targetBlock();
      if (typeBlock) {
        connection.disconnect();
        typeBlock.dispose();
        // TODO: move the block to type workbench rather than dispose.
      }
      this.itemCount_--;
      this.removeInput('FIELD_INP' + index);
    }
    if (this.itemCount_ < expectedCount) {
      this.removeInput('RBRACE');
      while (this.itemCount_ < expectedCount) {
        this.appendRecordFieldInput();
      }
      this.appendDummyInput('RBRACE')
          .appendField('}')
          .setAlign(Blockly.ALIGN_RIGHT);
    }
    var value = this.getField('DATANAME').getVariable();
    value.updateReferenceStructure();
  },

  /**
   * Create XML to represent record field inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the record field inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var newItemCount = parseInt(xmlElement.getAttribute('items')) || 2;
    this.resizeRecordFieldInputs(newItemCount);
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('record_field_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = workspace.newBlock('record_field_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemCount = containerBlock.getItemCount();
    this.resizeRecordFieldInputs(itemCount);
  },

  wouldChange: function(containerBlock) {
    return containerBlock.getItemCount() != this.itemCount_;
  }
};

Blockly.Blocks['create_record_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['DEFINE_TYPES_HUE']);
    var recordType = new Blockly.TypeExpr.RECORD(null);
    var variableField =
        Blockly.FieldBoundVariable.newReferenceRecord(recordType);
    this.appendDummyInput()
        .appendField(variableField, 'RECORD')
        .appendField('{');
    this.appendDummyInput('RBRACE')
        .appendField('}');
    this.setOutput(true);
    this.setOutputTypeExpr(recordType);
    this.setInputsInline(true);

    this.fieldCount_ = 0;
  },

  appendFieldInput: function(index, fieldValue) {
    var storedRendered = this.rendered;
    this.rendered = false;
    var field = Blockly.FieldBoundVariable.newReferenceRecordField(null,
        fieldValue.getVariableName());
    field.setBoundValue(fieldValue);

    var input = this.appendValueInput('FIELD_INP' + index);
    if (index != 0) {
      input.appendField(';');
    }
    input.appendField(field, 'FIELD' + index)
    input.appendField('=');
    field.initModel();
    this.rendered = storedRendered;
    this.fieldCount_++;
    return input;
  },

  updateStructure: function() {
    var changed_ = false;
    var reference = this.getField('RECORD').getVariable();
    var value = reference.getBoundValue();
    var children = value ? value.getChildren() : [];
    while (children.length < this.fieldCount_) {
      var index = --this.fieldCount_;
      this.removeInput('FIELD_INP' + index);
      changed_ = true;
    }
    for (var i = 0; i < children.length; i++) {
      if (this.fieldCount_ <= i) {
        var input = this.appendFieldInput(i, children[i]);
        changed_ = true;
      } else {
        var input = this.getInput('FIELD_INP' + i);
      }
      // Without the following line, type of record field in flyout is unknown.
      this.setChildInputTypeExpr_(input, children[i]);
    }
    if (goog.array.last(this.inputList).name != 'RBRACE') {
      this.removeInput('RBRACE');
      this.appendDummyInput('RBRACE')
          .appendField('}');
    }
    if (changed_ && goog.isFunction(this.initSvg)) {
      this.initSvg();
    }
  },

  /**
   * Remove blocks at the position specified by fieldName.
   * @param {string} fieldName Field name whose blocks are removed.
   */
  removeBlocksWithName: function(fieldName) {
    var block = this.getInputTargetBlock(fieldName);
    if (!block) {
      return;
    }
    block.dispose();
  },

  setChildInputTypeExpr_: function(input, fieldValue) {
    var def = fieldValue.getStructureTypeDef();
    if (def) {
      input.setTypeExpr(def, true);
    } else {
      input.setTypeExpr(new Blockly.TypeExpr.UNKNOWN(), true);
    }
  },

  updateRecordTypes: function(ctx) {
    var reference = this.getField('RECORD').getVariable();
    var value = reference.getBoundValue();
    var children = value ? value.getChildren() : [];
    for (var i = 0; i < children.length; i++) {
      var input = this.getInput('FIELD_INP' + i);
      this.setChildInputTypeExpr_(input, children[i]);

      var expected = input.connection.typeExpr;
      var arg = this.callInfer('FIELD_INP' + i, ctx);
      if (arg) {
        arg.unify(expected);
      }
    }
  },

  domToMutation: function(xmlElement) {
    // xmlElement = <mutation items="n"></mutation>
    // where n is the number of fields.
    // returns an empty record with length n
    var newItemCount = parseInt(xmlElement.getAttribute('items')) || 2;
    while (newItemCount < this.fieldCount_) {
      var index = --this.fieldCount_;
      this.removeInput('FIELD_INP' + index);
    }
    for (var i = 0; i < newItemCount; i++) {
      if (this.fieldCount_ <= i) {
        // this.appendFieldInput(i, children[i]);
        var field = Blockly.FieldBoundVariable.newReferenceRecordField(null,
            'a');

        var input = this.appendValueInput('FIELD_INP' + i);
        // input.setTypeExpr(new Blockly.TypeExpr.INT(), true);
        if (i != 0) {
          input.appendField(';');
        }
        input.appendField(field, 'FIELD' + i)
        input.appendField('=');
        field.initModel();
        this.fieldCount_++;
      }
    }
    if (goog.array.last(this.inputList).name != 'RBRACE') {
      this.removeInput('RBRACE');
      this.appendDummyInput('RBRACE')
          .appendField('}');
    }
    if (goog.isFunction(this.initSvg)) {
      this.initSvg();
    }
  },

  infer: function(ctx) {
    this.updateRecordTypes(ctx);
    return this.outputConnection.typeExpr;
  }
};

Blockly.Blocks['defined_datatype_typed'] = {
  // Declare constructor types.
  init: function() {
    this.setColour(Blockly.Msg['DEFINE_TYPES_HUE']);
    var validator = Blockly.BoundVariables.variableNameValidator.bind(null,
        Blockly.BoundVariableAbstract.VARIABLE);

    this.appendDummyInput()
        .appendField('type ')
        .appendField(new Blockly.FieldTextInput('data', validator), 'DATANAME')
        .appendField('=');

    this.constructId_ = Blockly.utils.genUid();
    this.itemCount_ = 0;
    this.appendCtorInput();
    this.appendCtorInput();

    this.setTypedStatements(true);
    this.setMutator(new Blockly.Mutator(['constructor_variant_item']));
    this.setWorkbench(new Blockly.TypeWorkbench());

    this.disableTransfer_ = true;
  },

  typeExprReplaced() {
    throw 'Not allowed to replace type expression for value construct.';
  },

  getStructureId: function() {
    return this.constructId_;
  },

  getStructureTypeDef: function(fieldName) {
    var inputName = fieldName.replace(/CTR(\d+)/, 'CTR_INP$1');
    return this.getTargetTypeCtor(inputName);
  },

  updateVariableEnv: function(conn, ctx) {
    if (!conn || this.nextConnection != conn) {
      return;
    }
    for (var i = 0; i < this.itemCount_; i++) {
      var field = this.getField('CTR' + i);
      var variable = field.getVariable();
      ctx.addVariable(variable);
    }
  },

  getTypeScheme: function(fieldName) {
    if (fieldName.startsWith('CTR')) {
      var numstr = fieldName.substring(3);
      var x = parseInt(numstr);
      if (!isNaN(x) && x < this.itemCount_) {
        var ctorType = new Blockly.TypeExpr.CONSTRUCT(this.constructId_);
        return Blockly.Scheme.monoType(ctorType);
      }
    }
    return null;
  },

  appendCtorInput: function() {
    var ctrType = new Blockly.TypeExpr.CONSTRUCT(this.constructId_);
    var variableField =
        Blockly.FieldBoundVariable.newValueConstructor(ctrType);
    var index = this.itemCount_++;
    var input = this.appendValueInput('CTR_INP' + index)
        .appendField('|')
        .appendField(variableField, 'CTR' + index)
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR())
        .setAlign(Blockly.ALIGN_RIGHT);
    return input;
  },

  resizeCtorInputs: function(expectedCount) {
    while (expectedCount < this.itemCount_) {
      var index = this.itemCount_ - 1;
      // Decrement the size of items first. The function this.removeInput()
      // might disconnect some blocks from this block, and disconnecting blocks
      // triggers type inference, which causes a null pointer exception. To
      // avoid the type inference for the removed input, update the size of
      // items first.
      this.itemCount_--;
      this.removeInput('CTR_INP' + index);
    }
    while (this.itemCount_ < expectedCount) {
      this.appendCtorInput();
    }
  },

  /**
   * Create XML to represent constructor inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the constructor inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var newItemCount = parseInt(xmlElement.getAttribute('items')) || 2;
    this.resizeCtorInputs(newItemCount);
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('constructor_variant_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = workspace.newBlock('constructor_variant_item');
      itemBlock.initSvg();
      connection.connect(itemBlock.previousConnection);
      connection = itemBlock.nextConnection;
    }
    return containerBlock;
  },
  /**
   * Reconfigure this block based on the mutator dialog's components.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  compose: function(containerBlock) {
    var itemCount = containerBlock.getItemCount();
    this.resizeCtorInputs(itemCount);
  },

  wouldChange: function(containerBlock) {
    return containerBlock.getItemCount() != this.itemCount_;
  },

  infer: function(ctx) {
    for (var i = 0; i < this.inputList.length; i++) {
      var input = this.inputList[i];
      if (!input.name.match(/CTR_INP\d+/)) {
        continue;
      }
      var lastField = goog.array.last(input.fieldRow);
      var hasOf = lastField.name === 'OF';
      var hasTypeCtor = !!input.connection.targetBlock();
      if (hasTypeCtor) {
        if (!hasOf) input.appendField('of', 'OF');
      } else {
        if (hasOf) input.removeField('OF');
      }
    }
    this.callInfer(this.nextConnection, ctx);
    return null;
  }
};

Blockly.Blocks['create_construct_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['DEFINE_TYPES_HUE']);
    var ctrType = new Blockly.TypeExpr.CONSTRUCT(null);
    var variableField =
        Blockly.FieldBoundVariable.newReferenceConstructor(ctrType);
    this.appendDummyInput()
        .appendField(variableField, 'CONSTRUCTOR');
    this.setOutput(true);
    this.setOutputTypeExpr(ctrType);
    this.setInputsInline(true);
  },

  updateAndGetParameterInputs_: function() {
    // TODO(harukam): Move the following code to the bound-varaible class.
    var value = this.getField('CONSTRUCTOR').getBoundValue();
    if (!value) {
      return [];
    }
    var def = value.getStructureTypeDef();
    goog.asserts.assert(def !== undefined, 'Unknown type ctor.');

    var lparenInput = this.getInput('LPAREN');
    var rparenInput = this.getInput('RPAREN');

    var paramSize = 0;
    if (def) {
      var typeChildrenSize = def.getChildren().length;
      paramSize = typeChildrenSize == 0 ? 1 : typeChildrenSize;
    }
    var paramInputs = [];

    // Collect current parameter inputs. If there are more inputs than
    // paramSize expects, remove them.
    var copiedInputList = [].concat(this.inputList);
    for (var i = 0, input; input = copiedInputList[i]; i++) {
      var m = input.name && input.name.match(/PARAM(\d+)/);
      if (!m) {
        continue;
      }
      var index = parseInt(m[1]);
      var currentSize = index + 1;
      if (paramSize < currentSize) {
        this.removeInputSafely(input);
        continue;
      }
      if (1 <= index) {
        var prevInput = paramInputs[index - 1];
        goog.asserts.assert(!!prevInput);
      }
      paramInputs.push(input);
    }

    if (paramSize <= 0) {
      this.removeInputSafely(lparenInput);
      this.removeInputSafely(rparenInput);
      return [];
    }
    if (!lparenInput) {
      goog.asserts.assert(paramInputs.length == 0);
      this.appendDummyInput('LPAREN')
          .appendField('(');
    }
    // Add additional parameter inputs.
    var currentSize = paramInputs.length;
    for (; currentSize < paramSize; currentSize++) {
      var index = currentSize;
      var input = this.appendValueInput('PARAM' + index);
      if (index != 0) {
        input.appendField(',');
      }
      paramInputs.push(input);
    }
    if (goog.array.last(this.inputList).name != 'RPAREN') {
      this.removeInputSafely(rparenInput);
      this.appendDummyInput('RPAREN')
          .appendField(')');
    }

    // Set type expression on the value paramInputs if necessary.
    switch (paramSize) {
      case 1:
        paramInputs[0].setTypeExpr(def, true);
        break;
      case 2:
        goog.asserts.assert(def.isPair());
        paramInputs[0].setTypeExpr(def.firstType(), true);
        paramInputs[1].setTypeExpr(def.secondType(), true);
        break;
      case 3:
        goog.asserts.assert(def.isTriple());
        paramInputs[0].setTypeExpr(def.firstType(), true);
        paramInputs[1].setTypeExpr(def.secondType(), true);
        paramInputs[2].setTypeExpr(def.thirdType(), true);
        break;
      default:
        goog.asserts.fail('Not supported more than 3 tuples');
    }
    return paramInputs;
  },

  updateStructure: function() {
    this.updateAndGetParameterInputs_();
  },

  infer: function(ctx) {
    var outType = this.outputConnection.typeExpr;
    var paramInputs = this.updateAndGetParameterInputs_();
    for (var i = 0, input; input = paramInputs[i]; i++) {
      if (!input) {
        continue;
      }
      var expected = input.connection.typeExpr;
      var paramType = this.callInfer(input.name, ctx);
      if (paramType) {
        expected.unify(paramType);
      }
    }
    return outType;
  }
};

Blockly.Blocks['int_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('int');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.INT();
  },

  /**
   * Search the field name this block is connected to and remove all
   * the blocks connected to the field name.
   */
  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    var parentBlock = this.getParent();
    if (!parentBlock) {
      return;
    }
    if (parentBlock.type === 'defined_recordtype_typed') { // found
      var fieldName = '';
      for (var i = 0; i < parentBlock.itemCount_; i++) {
        var connection = parentBlock.getInput('FIELD_INP' + i).connection;
        if (connection.targetBlock() === this) {
          fieldName = 'FIELD_INP' + i;
        }
      }
      goog.asserts.assert(fieldName !== '', 'No FIELD_INP found.');
      var boundVariableValue = parentBlock.getField('DATANAME').getVariable();
      boundVariableValue.removeBlocksWithName(fieldName);
    } else if (parentBlock.searchFieldNameAndRemoveSpecifiedBlocks) {
      parentBlock.searchFieldNameAndRemoveSpecifiedBlocks();
    } else { // parentBlock is not a record definition
      return;
    }
  },

  canBeUnplugged: function() {
    var parent = this.getParent();
    if (!parent) {
      return true;
    }
    // TODO(harukam): Ask the parent, which must be define-datatypes block,
    // whether changing definition of datatype is fine or not.
    return true;
  }
};

Blockly.Blocks['float_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('float');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.FLOAT();
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  },

  canBeUnplugged: function() {
    var parent = this.getParent();
    if (!parent) {
      return true;
    }
    // TODO(harukam): Ask the parent, which must be define-datatypes block,
    // whether changing definition of datatype is fine or not.
    return true;
  }
};

Blockly.Blocks['bool_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('bool');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.BOOL();
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['string_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('string');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.STRING();
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['pair_type_constructor_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendValueInput('LEFT')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.appendValueInput('RIGHT')
        .appendField('*')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.setOutput(true);
    this.setInputsInline(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    var leftBlock = this.getInputTargetBlock('LEFT');
    var rightBlock = this.getInputTargetBlock('RIGHT');
    var left = leftBlock ?
        leftBlock.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
    var right = rightBlock ?
        rightBlock.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
    return new Blockly.TypeExpr.TUPLE(left, right);
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['triple_type_constructor_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendValueInput('ITEM0')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.appendValueInput('ITEM1')
        .appendField('*')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.appendValueInput('ITEM2')
        .appendField('*')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.setOutput(true);
    this.setInputsInline(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    var item0Block = this.getInputTargetBlock('ITEM0');
    var item1Block = this.getInputTargetBlock('ITEM1');
    var item2Block = this.getInputTargetBlock('ITEM2');
    var item0 = item0Block ?
        item0Block.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
    var item1 = item1Block ?
        item1Block.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
    var item2 = item2Block ?
        item2Block.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
      return new Blockly.TypeExpr.TUPLE(item0, item1, item2);
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['alist_type_constructor_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendValueInput('ITEM')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.appendDummyInput()
        .appendField(' list')
    this.setOutput(true);
    this.setInputsInline(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    var itemBlock = this.getInputTargetBlock('ITEM');
    var item = itemBlock ?
        itemBlock.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
    return new Blockly.TypeExpr.LIST(item);
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['aoption_type_constructor_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendValueInput('ITEM')
        .setTypeExpr(new Blockly.TypeExpr.TYPE_CONSTRUCTOR());
    this.appendDummyInput()
        .appendField(' option');
    this.setOutput(true);
    this.setInputsInline(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    var itemBlock = this.getInputTargetBlock('ITEM');
    var item = itemBlock ?
        itemBlock.getTypeCtor() : new Blockly.TypeExpr.UNKNOWN();
    return new Blockly.TypeExpr.OPTION(item);
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function() {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['color_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('Color.t');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.COLOR();
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['image_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('Image.t');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.IMAGE();
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['scene_type_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['TYPES_HUE']);
    this.appendDummyInput()
        .appendField('scene_t');
    this.setOutput(true);
    var typeCtrType = new Blockly.TypeExpr.TYPE_CONSTRUCTOR();
    this.setOutputTypeExpr(typeCtrType);
  },

  getTypeCtor: function() {
    return new Blockly.TypeExpr.SCENE();
  },

  searchFieldNameAndRemoveSpecifiedBlocks: function () {
    Blockly.Blocks['int_type_typed']
        .searchFieldNameAndRemoveSpecifiedBlocks.call(this);
  }
};

Blockly.Blocks['variable_pattern_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var variable = Blockly.FieldBoundVariable.newValue(A, 'a');
    this.appendDummyInput()
        .appendField(variable, 'VAR')
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(A));
    this.setInputsInline(true);
  },

  transformToValue: function(workspace) {
    var valueBlock = workspace.newBlock('variable_pattern_typed');
    valueBlock.initSvg();
    valueBlock.render();
    var variable = this.getField('VAR');
    valueBlock.getField('VAR').setVariableName(variable.getText());
    return valueBlock;
  },

  updateUpperContext: function(ctx) {
    var variable = this.getField('VAR').getVariable();
    ctx.addVariable(variable);
  },

  updateUpperTypeContext: function(ctx) {
    var variable = this.getField('VAR').getVariable();
    var varName = variable.getVariableName();
    var argScheme = Blockly.Scheme.monoType(variable.getTypeExpr());
    ctx.addTypeToEnv(varName, argScheme);
  },

  removePatternReference: function() {
    var variable = this.getField('VAR').getVariable();
    // the folllowing code from: Blockly.BoundVariableValue.prototype.dispose
    var referenceList = [].concat(variable.referenceList_);
    for (var i = 0, ref; ref = referenceList[i]; i++) {
      var refBlock = ref.getSourceBlock();
      refBlock.dispose();
    }
    goog.asserts.assert(variable.referenceList_.length == 0);
  },

  getTypeScheme: function(fieldName) {
    if (fieldName !== 'VAR') {
      return null;
    }
    var variable = this.getField('VAR');
    var typeExpr = variable.defaultTypeExpr_;
    // TODO(asai): avoid referring to private variable defaultTypeExpr_
    return Blockly.Scheme.monoType(typeExpr);
  }
};

Blockly.Blocks['empty_construct_pattern_typed'] = {
  init: function() {
    var A = Blockly.TypeExpr.generateTypeVar();
    var list = new Blockly.TypeExpr.LIST(A);
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    this.appendDummyInput()
        .appendField('[ ]');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(list));
    this.setInputsInline(true);
  },

  transformToValue: function(workspace) {
    var valueBlock = workspace.newBlock('empty_construct_pattern_typed');
    valueBlock.initSvg();
    valueBlock.render();
    return valueBlock;
  },

  updateUpperContext: function(ctx) {
  },

  removePatternReference: function() {
  }
};

Blockly.Blocks['cons_construct_pattern_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var list = new Blockly.TypeExpr.LIST(A);
    this.appendValueInput('FIRST')
        .setTypeExpr(new Blockly.TypeExpr.PATTERN(A));
    this.appendValueInput('CONS')
        .setTypeExpr(new Blockly.TypeExpr.PATTERN(list))
        .appendField('::')
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(list));
    this.setInputsInline(true);
  },

  transformToValue: function(workspace) {
    var valueBlock = workspace.newBlock('cons_construct_pattern_typed');
    var first = this.getInput('FIRST').connection.targetConnection;
    if (first) {
      var newLeft = first.getSourceBlock().transformToValue(workspace);
      var connection = valueBlock.getInput('FIRST').connection;
      connection.connect(newLeft.outputConnection);
    }
    var cons = this.getInput('CONS').connection.targetConnection;
    if (cons) {
      var newLeft = cons.getSourceBlock().transformToValue(workspace);
      var connection = valueBlock.getInput('CONS').connection;
      connection.connect(newLeft.outputConnection);
    }
    valueBlock.initSvg();
    valueBlock.render();
    return valueBlock;
  },

  updateUpperContext: function(ctx) {
    var first = this.getInput('FIRST').connection.targetConnection;
    if (first) {
      first.getSourceBlock().updateUpperContext(ctx);
    }
    var cons = this.getInput('CONS').connection.targetConnection;
    if (cons) {
      cons.getSourceBlock().updateUpperContext(ctx);
    }
  },

  updateUpperTypeContext: function(ctx) {
    var first = this.getInput('FIRST').connection.targetConnection;
    if (first) {
      first.getSourceBlock().updateUpperTypeContext(ctx);
    }
    var cons = this.getInput('CONS').connection.targetConnection;
    if (cons) {
      cons.getSourceBlock().updateUpperTypeContext(ctx);
    }
  },

  removePatternReference: function() {
    var first = this.getInput('FIRST').connection.targetConnection;
    if (first) {
      first.getSourceBlock().removePatternReference();
    }
    var cons = this.getInput('CONS').connection.targetConnection;
    if (cons) {
      cons.getSourceBlock().removePatternReference();
    }
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expected1 = this.getInput('FIRST').connection.typeExpr;
    var arg1 = this.callInfer('FIRST', ctx);
    if (arg1) {
      arg1.unify(expected1);
    }
    var expected2 = this.getInput('CONS').connection.typeExpr;
    var arg2 = this.callInfer('CONS', ctx);
    if (arg2) {
      arg2.unify(expected2);
    }
    return expected;
  }
};

Blockly.Blocks['option_none_pattern_typed'] = {
  init: function() {
    var elementType = Blockly.TypeExpr.generateTypeVar();
    var optionType = new Blockly.TypeExpr.OPTION(elementType);
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    this.appendDummyInput()
        .appendField('None');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(optionType));
    this.setInputsInline(true);
  },

  transformToValue: function(workspace) {
    var valueBlock = workspace.newBlock('option_none_pattern_typed');
    valueBlock.initSvg();
    valueBlock.render();
    return valueBlock;
  },

  updateUpperContext: function(ctx) {
  },

  removePatternReference: function() {
  }
};

Blockly.Blocks['option_some_pattern_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    var elementType = Blockly.TypeExpr.generateTypeVar();
    var optionType = new Blockly.TypeExpr.OPTION(elementType);
    this.appendValueInput('PARAM')
        .setTypeExpr(new Blockly.TypeExpr.PATTERN(elementType))
        .appendField('Some');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(optionType));
    this.setInputsInline(true);
  },

  transformToValue: function(workspace) {
    var valueBlock = workspace.newBlock('option_some_pattern_typed');
    var param = this.getInput('PARAM').connection.targetConnection;
    if (param) {
      var newParam = param.getSourceBlock().transformToValue(workspace);
      var connection = valueBlock.getInput('PARAM').connection;
      connection.connect(newParam.outputConnection);
    }
    valueBlock.initSvg();
    valueBlock.render();
    return valueBlock;
  },

  updateUpperContext: function(ctx) {
    var param = this.getInput('PARAM').connection.targetConnection;
    if (param) {
      param.getSourceBlock().updateUpperContext(ctx);
    }
  },

  updateUpperTypeContext: function(ctx) {
    var param = this.getInput('PARAM').connection.targetConnection;
    if (param) {
      param.getSourceBlock().updateUpperTypeContext(ctx);
    }
  },

  removePatternReference: function() {
    var param = this.getInput('PARAM').connection.targetConnection;
    if (param) {
      param.getSourceBlock().removePatternReference();
    }
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expectedParam = this.getInput('PARAM').connection.typeExpr;
    var param1 = this.callInfer('PARAM', ctx);
    if (param1) {
      param1.unify(expectedParam);
    }
    return expected;
  }
};

Blockly.Blocks['pair_pattern_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    this.appendDummyInput()
        .appendField('(');
    this.appendValueInput('LEFT')
        .setTypeExpr(new Blockly.TypeExpr.PATTERN(A));
    this.appendValueInput('RIGHT')
        .setTypeExpr(new Blockly.TypeExpr.PATTERN(B))
        .appendField(',');
    this.appendDummyInput()
        .appendField(')');
    this.setOutput(true);

    var pairType = new Blockly.TypeExpr.TUPLE(A, B);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(pairType));
    this.setInputsInline(true);
  },

  transformToValue: function(workspace) {
    var valueBlock = workspace.newBlock('pair_pattern_typed');
    var left = this.getInput('LEFT').connection.targetConnection;
    if (left) {
      var newLeft = left.getSourceBlock().transformToValue(workspace);
      var connection = valueBlock.getInput('LEFT').connection;
      connection.connect(newLeft.outputConnection);
    }
    var right = this.getInput('RIGHT').connection.targetConnection;
    if (right) {
      var newLeft = right.getSourceBlock().transformToValue(workspace);
      var connection = valueBlock.getInput('RIGHT').connection;
      connection.connect(newLeft.outputConnection);
    }
    valueBlock.initSvg();
    valueBlock.render();
    return valueBlock;
  },

  updateUpperContext: function(ctx) {
    var left = this.getInput('LEFT').connection.targetConnection;
    if (left) {
      left.getSourceBlock().updateUpperContext(ctx);
    }
    var right = this.getInput('RIGHT').connection.targetConnection;
    if (right) {
      right.getSourceBlock().updateUpperContext(ctx);
    }
  },

  updateUpperTypeContext: function(ctx) {
    var left = this.getInput('LEFT').connection.targetConnection;
    if (left) {
      left.getSourceBlock().updateUpperTypeContext(ctx);
    }
    var right = this.getInput('RIGHT').connection.targetConnection;
    if (right) {
      right.getSourceBlock().updateUpperTypeContext(ctx);
    }
  },

  removePatternReference: function() {
    var left = this.getInput('LEFT').connection.targetConnection;
    if (left) {
      left.getSourceBlock().removePatternReference();
    }
    var right = this.getInput('RIGHT').connection.targetConnection;
    if (right) {
      right.getSourceBlock().removePatternReference();
    }
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expected1 = this.getInput('LEFT').connection.typeExpr;
    var arg1 = this.callInfer('LEFT', ctx);
    if (arg1) {
      arg1.unify(expected1);
    }
    var expected2 = this.getInput('RIGHT').connection.typeExpr;
    var arg2 = this.callInfer('RIGHT', ctx);
    if (arg2) {
      arg2.unify(expected2);
    }
    return expected;
  }
};

Blockly.Blocks['record_pattern_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PATTERN_HUE']);
    var recordType = new Blockly.TypeExpr.RECORD(null);
    var variableField =
        Blockly.FieldBoundVariable.newReferenceRecord(recordType);
    this.appendDummyInput()
        .appendField(variableField, 'RECORD')
        .appendField('{');
    this.appendDummyInput('RBRACE')
        .appendField('}');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.PATTERN(recordType));
    this.setInputsInline(true);

    this.fieldCount_ = 0;
  },

  transformToValue: function(workspace) {
    var recordValue = this.getField('RECORD').getBoundValue();
    var recordName = recordValue.getVariableName();
    var patternValueBlock = workspace.newBlock('record_pattern_typed');
    var reference = patternValueBlock.getField('RECORD').getVariable();
    reference.setVariableName(recordName);
    reference.setBoundValue(recordValue);
    var children = recordValue.getChildren();
    for (var i = 0; i < children.length; i++) {
      var child = this.getInput('FIELD_INP' + i).connection.targetConnection;
      if (child) {
        var newChild = child.getSourceBlock().transformToValue(workspace);
        var connection = patternValueBlock.getInput('FIELD_INP' + i).connection;
        connection.connect(newChild.outputConnection);
      }
    }
    if (goog.isFunction(patternValueBlock.initSvg)) {
      patternValueBlock.initSvg();
      patternValueBlock.render();
    }
    return patternValueBlock;
  },

  updateUpperContext: function(ctx) {
    for (var i = 0; i < this.fieldCount_; i++) {
      var con = this.getInput('FIELD_INP' + i).connection.targetConnection;
      if (con) {
        con.getSourceBlock().updateUpperContext(ctx);
      }
    }
  },

  updateUpperTypeContext: function(ctx) {
    for (var i = 0; i < this.fieldCount_; i++) {
      var con = this.getInput('FIELD_INP' + i).connection.targetConnection;
      if (con) {
        con.getSourceBlock().updateUpperTypeContext(ctx);
      }
    }
  },

  appendFieldInput: function(index, fieldValue) {
    var storedRendered = this.rendered;
    this.rendered = false;
    var field = Blockly.FieldBoundVariable.newReferenceRecordField(null,
        fieldValue.getVariableName());
    field.setBoundValue(fieldValue);

    var input = this.appendValueInput('FIELD_INP' + index);
    if (index != 0) {
      input.appendField(';');
    }
    input.appendField(field, 'FIELD' + index)
    input.appendField('=');
    field.initModel();
    this.rendered = storedRendered;
    this.fieldCount_++;
    return input;
  },

  updateStructure: function() {
    var reference = this.getField('RECORD').getVariable();
    var value = reference.getBoundValue();
    var children = value ? value.getChildren() : [];
    while (children.length < this.fieldCount_) {
      var index = --this.fieldCount_;
      this.removeInput('FIELD_INP' + index);
    }
    for (var i = 0; i < children.length; i++) {
      if (this.fieldCount_ <= i) {
        var input = this.appendFieldInput(i, children[i]);
      } else {
        var input = this.getInput('FIELD_INP' + i);
      }
      this.setChildInputTypeExpr_(input, children[i]);
    }
    if (goog.array.last(this.inputList).name != 'RBRACE') {
      this.removeInput('RBRACE');
      this.appendDummyInput('RBRACE')
          .appendField('}');
    }
    if (goog.isFunction(this.initSvg)) {
      this.initSvg();
    }
  },

  setChildInputTypeExpr_: function(input, fieldValue) {
    var def = fieldValue.getStructureTypeDef();
    if (def && !def.hasUnknown()) {
      input.setTypeExpr(new Blockly.TypeExpr.PATTERN(def), true);
    } else {
      input.setTypeExpr(new Blockly.TypeExpr.UNKNOWN(), true);
    }
  },

  /**
   * Remove blocks at the position specified by fieldName.
   * @param {string} fieldName Field name whose blocks are removed.
   */
  removeBlocksWithName: function(fieldName) {
    var block = this.getInputTargetBlock(fieldName);
    if (!block) {
      return;
    }
    block.dispose();
  },

  updateRecordTypes: function(ctx) {
    var reference = this.getField('RECORD').getVariable();
    var value = reference.getBoundValue();
    var children = value ? value.getChildren() : [];
    for (var i = 0; i < children.length; i++) {
      var input = this.getInput('FIELD_INP' + i);
      this.setChildInputTypeExpr_(input, children[i]);

      var expected = input.connection.typeExpr;
      var arg = this.callInfer('FIELD_INP' + i, ctx);
      if (arg) {
        arg.unify(expected);
      }
    }
  },

  domToMutation: function(xmlElement) {
    // xmlElement = <mutation items="n"></mutation>
    // where n is the number of fields.
    // returns an empty record pattern with length n
    var newItemCount = parseInt(xmlElement.getAttribute('items')) || 2;
    while (newItemCount < this.fieldCount_) {
      var index = --this.fieldCount_;
      this.removeInput('FIELD_INP' + index);
    }
    for (var i = 0; i < newItemCount; i++) {
      if (this.fieldCount_ <= i) {
        // this.appendFieldInput(i, children[i]);
        var field = Blockly.FieldBoundVariable.newReferenceRecordField(null,
            'a');

        var input = this.appendValueInput('FIELD_INP' + i);
        // input.setTypeExpr(new Blockly.TypeExpr.INT(), true);
        if (i != 0) {
          input.appendField(';');
        }
        input.appendField(field, 'FIELD' + i)
        input.appendField('=');
        field.initModel();
        this.fieldCount_++;
      }
    }
    if (goog.array.last(this.inputList).name != 'RBRACE') {
      this.removeInput('RBRACE');
      this.appendDummyInput('RBRACE')
          .appendField('}');
    }
    if (goog.isFunction(this.initSvg)) {
      this.initSvg();
    }
  },

  removePatternReference: function() {
    for (var i = 0; i < this.fieldCount_; i++) {
      var con = this.getInput('FIELD_INP' + i).connection.targetConnection;
      if (con) {
        con.getSourceBlock().removePatternReference();
      }
    }
  },

  infer: function(ctx) {
    this.updateRecordTypes(ctx);
    return this.outputConnection.typeExpr;
  }
};
