'use strict';

function create_typed_workspace() {
  var workspaceOptions = {
    typedVersion: true
  };
  return new Blockly.Workspace(workspaceOptions);
}

function virtually_transfer_workspace(block, targetWorkspace) {
  block.setTransferring(true);
  var xml = Blockly.Xml.blockToDom(block);
  var block = Blockly.Xml.domToBlock(xml, targetWorkspace);
  return block;
}

function test_type_transfer_block_workspace_simpleValueBlock() {
  var workspace = create_typed_workspace();
  var otherWorkspace = create_typed_workspace()
  try {
    var originalBlock = workspace.newBlock('let_typed');
    var transferredBlock = virtually_transfer_workspace(originalBlock,
        otherWorkspace);
    var value1 = originalBlock.getField('VAR').getVariable();
    var value2 = transferredBlock.getField('VAR').getVariable();
    originalBlock.dispose();
    assertTrue(value1 != value2);
    assertTrue(value1.getId() != value2.getId());
  } finally {
    workspace.dispose();
  }
}

function test_type_transfer_block_workspace_valueBlockWithReferences() {
  var workspace = create_typed_workspace();
  var otherWorkspace = create_typed_workspace()
  try {
    var originalBlock = workspace.newBlock('let_typed');
    var varBlock = workspace.newBlock('variables_get_typed');
    var originalValue = originalBlock.getField('VAR').getVariable();
    var reference = varBlock.getField('VAR').getVariable();
    reference.setBoundValue(originalValue);
    assertTrue(originalValue.referenceCount() == 1);

    var transferredBlock = virtually_transfer_workspace(originalBlock,
        otherWorkspace);
    var transferredValue = transferredBlock.getField('VAR').getVariable();
    // transferredBlock must have the identical variable value with the
    // original block.
    assertTrue(originalValue == transferredValue);
  } finally {
    workspace.dispose();
  }
}

function test_type_transfer_block_workspace_nestedValueBlocks() {

}
