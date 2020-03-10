/**
 * @license
 * Copyright 2012 Google LLC
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
 * @fileoverview XML reader and writer.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

/**
 * @name Blockly.Xml
 * @namespace
 */
goog.provide('Blockly.Xml');

goog.require('Blockly.Events');
goog.require('Blockly.Events.BlockCreate');
goog.require('Blockly.Events.FinishedLoading');
goog.require('Blockly.Events.VarCreate');
goog.require('Blockly.utils');
goog.require('Blockly.utils.dom');
goog.require('Blockly.utils.global');
goog.require('Blockly.utils.xml');


/**
 * Encode a block tree as XML.
 * @param {!Blockly.Workspace} workspace The workspace containing blocks.
 * @param {boolean=} opt_noId True if the encoder should skip the block IDs.
 * @return {!Element} XML DOM element.
 */
Blockly.Xml.workspaceToDom = function(workspace, opt_noId) {
  var xml = Blockly.utils.xml.createElement('xml');
  var variablesElement = Blockly.Xml.variablesToDom(
      Blockly.Variables.allUsedVarModels(workspace));
  if (variablesElement.hasChildNodes()) {
    xml.appendChild(variablesElement);
  }
  var comments = workspace.getTopComments(true);
  for (var i = 0, comment; (comment = comments[i]); i++) {
    xml.appendChild(comment.toXmlWithXY(opt_noId));
  }
  var blocks = workspace.getTopBlocks(true);
  for (var i = 0, block; (block = blocks[i]); i++) {
    xml.appendChild(Blockly.Xml.blockToDomWithXY(block, opt_noId));
  }
  return xml;
};

/**
 * Encode a list of variables as XML.
 * @param {!Array.<!Blockly.VariableModel>} variableList List of all variable
 *     models.
 * @return {!Element} Tree of XML elements.
 */
Blockly.Xml.variablesToDom = function(variableList) {
  var variables = Blockly.utils.xml.createElement('variables');
  for (var i = 0, variable; (variable = variableList[i]); i++) {
    var element = Blockly.utils.xml.createElement('variable');
    element.appendChild(Blockly.utils.xml.createTextNode(variable.name));
    if (variable.type) {
      element.setAttribute('type', variable.type);
    }
    element.id = variable.getId();
    variables.appendChild(element);
  }
  return variables;
};

/**
 * Encode a block subtree as XML with XY coordinates.
 * @param {!Blockly.Block} block The root block to encode.
 * @param {boolean=} opt_noId True if the encoder should skip the block ID.
 * @return {!Element} Tree of XML elements.
 */
Blockly.Xml.blockToDomWithXY = function(block, opt_noId) {
  var width;  // Not used in LTR.
  if (block.workspace.RTL) {
    width = block.workspace.getWidth();
  }
  var element = Blockly.Xml.blockToDom(block, opt_noId);
  var xy = block.getRelativeToSurfaceXY();
  element.setAttribute('x',
      Math.round(block.workspace.RTL ? width - xy.x : xy.x));
  element.setAttribute('y', Math.round(xy.y));
  return element;
};

/**
 * Encode a variable field as XML.
 * @param {!Blockly.FieldVariable} field The field to encode.
 * @return {Element} XML element, or null if the field did not need to be
 *     serialized.
 * @private
 */
Blockly.Xml.fieldToDomVariable_ = function(field) {
  var id = field.getValue();
  // The field had not been initialized fully before being serialized.
  // This can happen if a block is created directly through a call to
  // workspace.newBlock instead of from XML.
  // The new block will be serialized for the first time when firing a block
  // creation event.
  if (id == null) {
    field.initModel();
    id = field.getValue();
  }
  // Get the variable directly from the field, instead of doing a lookup.  This
  // will work even if the variable has already been deleted.  This can happen
  // because the flyout defers deleting blocks until the next time the flyout
  // is opened.
  var variable = field.getVariable();

  if (!variable) {
    throw Error('Tried to serialize a variable field with no variable.');
  }
  var container = Blockly.utils.xml.createElement('field');
  container.appendChild(Blockly.utils.xml.createTextNode(variable.name));
  container.setAttribute('name', field.name);
  container.setAttribute('id', variable.getId());
  container.setAttribute('variabletype', variable.type);
  return container;
};

/**
 * Encode a bound-variable field as XML.
 * @param {!Blockly.FieldBoundVariable} field The field to encode.
 * @param {!Blockly.Block} rootBlock The root block currently being encoded.
 *     Note that this block is not always same with the root block of the
 *     field's block.
 * @return {!Element} XML Element.
 * @private
 */
Blockly.Xml.fieldToDomBoundVariable_ = function(field, rootBlock) {
  var id = field.getValue();
  if (id == null) {
    field.initModel();
    id = field.getValue();
  }
  var container = Blockly.utils.xml.createElement('field');
  container.appendChild(
      Blockly.utils.xml.createTextNode(field.getVariableName()));
  container.setAttribute('name', field.name || '');

  // Encode the type name of the variable.
  var typeName = Blockly.BoundVariableAbstract.labelToName(field.label_);
  if (!typeName) {
    throw Error('assertion failure in xml.js, fieldToDomBoundVariable_');
  }
  container.setAttribute('variable-type', typeName);

  var isValue = field.isForValue();
  if (isValue) {
    container.setAttribute('id', id);
    container.setAttribute('isvalue', 'true');
    container.setAttribute('workspace-id', field.sourceBlock_.workspace.id);
  } else {
    // The variable is a variable reference.
    container.setAttribute('isvalue', 'false');
    var reference = field.getVariable();
    var value = reference.getBoundValue();
    // If the reference refers to a value existing in the blocks currently
    // being encoded, do not store the reference relation in XML. Otherwise,
    // references on a new block created by decoding block XML could refer to
    // values on the old block.
    if (value && !reference.isCyclicReference(rootBlock)) {
      // Also encode the value this variable reference refers to as XML, and
      // append it.
      var valueDom = goog.dom.createDom('refer-to');
      valueDom.setAttribute('id', value.getId());
      valueDom.setAttribute('workspace-id', value.getWorkspace().id);
      container.appendChild(valueDom);
    }
  }
  return container;
};

/**
 * Encode a field as XML.
 * @param {!Blockly.Field} field The field to encode.
 * @param {!Blockly.Block} rootBlock The root block currently being encoded.
 * @return {Element} XML element, or null if the field did not need to be
 *     serialized.
 * @private
 */
Blockly.Xml.fieldToDom_ = function(field, rootBlock) {
  if (field.isSerializable()) {
    var refersToVariables = field.referencesVariables();
    if (!refersToVariables) {
      var container = Blockly.utils.xml.createElement('field');
      container.appendChild(Blockly.utils.xml.createTextNode(field.getValue()));
      container.setAttribute('name', field.name || '');
      return container;
    } else if (refersToVariables == Blockly.FIELD_VARIABLE_DEFAULT) {
      return Blockly.Xml.fieldToDomVariable_(field);
    } else if (refersToVariables == Blockly.FIELD_VARIABLE_BINDING) {
      return Blockly.Xml.fieldToDomBoundVariable_(field, rootBlock);
    } else {
      throw Error('Unknown field variable type.');
    }
  }
  return null;
};

/**
 * Encode all of a block's fields as XML and attach them to the given tree of
 * XML elements.
 * @param {!Blockly.Block} block A block with fields to be encoded.
 * @param {!Element} element The XML element to which the field DOM should be
 *     attached.
 * @param {!Blockly.Block} rootBlock The root block currently being encoded.
 * @private
 */
Blockly.Xml.allFieldsToDom_ = function(block, element, rootBlock) {
  for (var i = 0, input; (input = block.inputList[i]); i++) {
    for (var j = 0, field; (field = input.fieldRow[j]); j++) {
      var fieldDom = Blockly.Xml.fieldToDom_(field, rootBlock);
      if (fieldDom) {
        element.appendChild(fieldDom);
      }
    }
  }
};

/**
 * Encode a block subtree as XML.
 * @param {!Blockly.Block} block The root block to encode.
 * @param {boolean=} opt_noId True if the encoder should skip the block ID.
 * @param {!Blockly.Block} opt_rootBlock The root block currently being
 *     encoded. Provided only if this is a recursive call.
 * @return {!Element} Tree of XML elements.
 */
Blockly.Xml.blockToDom = function(block, opt_noId, opt_rootBlock) {
  var element =
      Blockly.utils.xml.createElement(block.isShadow() ? 'shadow' : 'block');
  element.setAttribute('type', block.type);
  if (!opt_noId) {
    // It's important to use setAttribute here otherwise IE11 won't serialize
    // the block's id when domToText is called.
    element.setAttribute('id', block.id);
  }

  // Some blocks should be mutated after initializing the block's fields.
  // Since components are restored in the same order of XML nodes, the order of
  // encoding must be changed.
  var mutateAfterFieldDecoded = block.type === 'function_app_typed';

  if (!mutateAfterFieldDecoded) {
    Blockly.Xml.blockMutationToDom_(block, element);
  }

  var rootBlock = opt_rootBlock ? opt_rootBlock : block;
  Blockly.Xml.allFieldsToDom_(block, element, rootBlock);

  if (mutateAfterFieldDecoded) {
    Blockly.Xml.blockMutationToDom_(block, element);
  }

  var commentText = block.getCommentText();
  if (commentText) {
    var size = block.commentModel.size;
    var pinned = block.commentModel.pinned;

    var commentElement = Blockly.utils.xml.createElement('comment');
    commentElement.appendChild(Blockly.utils.xml.createTextNode(commentText));
    commentElement.setAttribute('pinned', pinned);
    commentElement.setAttribute('h', size.height);
    commentElement.setAttribute('w', size.width);

    element.appendChild(commentElement);
  }

  if (block.data) {
    var dataElement = Blockly.utils.xml.createElement('data');
    dataElement.appendChild(Blockly.utils.xml.createTextNode(block.data));
    element.appendChild(dataElement);
  }

  for (var i = 0, input; (input = block.inputList[i]); i++) {
    var container;
    var empty = true;
    if (input.type == Blockly.DUMMY_INPUT) {
      continue;
    } else {
      var childBlock = input.connection.targetBlock();
      if (input.type == Blockly.INPUT_VALUE) {
        container = Blockly.utils.xml.createElement('value');
      } else if (input.type == Blockly.NEXT_STATEMENT) {
        container = Blockly.utils.xml.createElement('statement');
      }
      var shadow = input.connection.getShadowDom();
      if (shadow && (!childBlock || !childBlock.isShadow())) {
        container.appendChild(Blockly.Xml.cloneShadow_(shadow, opt_noId));
      }
      if (childBlock) {
        var childBlockXml = Blockly.Xml.blockToDom(childBlock, opt_noId,
            rootBlock);
        container.appendChild(childBlockXml);
        empty = false;
      }
    }
    container.setAttribute('name', input.name);
    if (!empty) {
      element.appendChild(container);
    }
  }
  if (block.inputsInline != undefined &&
      block.inputsInline != block.inputsInlineDefault) {
    element.setAttribute('inline', block.inputsInline);
  }
  if (block.isCollapsed()) {
    element.setAttribute('collapsed', true);
  }
  if (block.isTransferable()) {
    element.setAttribute('transferable', true);
  }
  if (typeof block.isRecursive == 'function') {
    var value = block.isRecursive();
    element.setAttribute('rec', value ? 'true' : 'false');
  }
  if (typeof block.getIsStatement == 'function') {
    var value = block.getIsStatement();
    element.setAttribute('statement', value ? 'true' : 'false');
  }

  if (!block.isEnabled()) {
    element.setAttribute('disabled', true);
  }
  if (!block.isDeletable() && !block.isShadow()) {
    element.setAttribute('deletable', false);
  }
  if (!block.isMovable() && !block.isShadow()) {
    element.setAttribute('movable', false);
  }
  if (!block.isEditable()) {
    element.setAttribute('editable', false);
  }

  var nextBlock = block.getNextBlock();
  if (nextBlock) {
    var nextBlockXml = Blockly.Xml.blockToDom(nextBlock, opt_noId, rootBlock);
    var container = Blockly.utils.xml.createElement('next');
    container.appendChild(nextBlockXml);
    element.appendChild(container);
  }
  var shadow = block.nextConnection && block.nextConnection.getShadowDom();
  if (shadow && (!nextBlock || !nextBlock.isShadow())) {
    container.appendChild(Blockly.Xml.cloneShadow_(shadow, opt_noId));
  }

  return element;
};

/**
 * Store custom data for an advanced block to the container.
 * @param {!Blockly.Block} block The block
 * @param {!Element} container
 * @private
 */
Blockly.Xml.blockMutationToDom_ = function(block, container) {
  if (!block.mutationToDom) {
    return;
  }
  var mutation = block.mutationToDom();
  if (mutation && (mutation.hasChildNodes() || mutation.hasAttributes())) {
    container.appendChild(mutation);
  }
};

/**
 * Deeply clone the shadow's DOM so that changes don't back-wash to the block.
 * @param {!Element} shadow A tree of XML elements.
 * @param {boolean=} opt_noId True if the encoder should skip the block ID.
 * @return {!Element} A tree of XML elements.
 * @private
 */
Blockly.Xml.cloneShadow_ = function(shadow, opt_noId) {
  shadow = shadow.cloneNode(true);
  // Walk the tree looking for whitespace.  Don't prune whitespace in a tag.
  var node = shadow;
  var textNode;
  while (node) {
    if (opt_noId && node.nodeName == 'shadow') {
      // Strip off IDs from shadow blocks.  There should never be a 'block' as
      // a child of a 'shadow', so no need to check that.
      node.removeAttribute('id');
    }
    if (node.firstChild) {
      node = node.firstChild;
    } else {
      while (node && !node.nextSibling) {
        textNode = node;
        node = node.parentNode;
        if (textNode.nodeType == Blockly.utils.dom.Node.TEXT_NODE &&
            textNode.data.trim() == '' && node.firstChild != textNode) {
          // Prune whitespace after a tag.
          Blockly.utils.dom.removeNode(textNode);
        }
      }
      if (node) {
        textNode = node;
        node = node.nextSibling;
        if (textNode.nodeType == Blockly.utils.dom.Node.TEXT_NODE && textNode.data.trim() == '') {
          // Prune whitespace before a tag.
          Blockly.utils.dom.removeNode(textNode);
        }
      }
    }
  }
  return shadow;
};

/**
 * Converts a DOM structure into plain text.
 * Currently the text format is fairly ugly: all one line with no whitespace,
 * unless the DOM itself has whitespace built-in.
 * @param {!Node} dom A tree of XML nodes.
 * @return {string} Text representation.
 */
Blockly.Xml.domToText = function(dom) {
  var text = Blockly.utils.xml.domToText(dom);
  // Replace line breaks in text content with '&#10;' to make them single line.
  // E.g. <foo>hello\nworld</foo> -> <foo>hello&#10;world</foo>
  // Do not replace line breaks between tags.
  // E.g. ...</foo>\n</bar> is unchanged.
  // Can't use global flag on regexp since backtracking is needed.
  var regexp = /(<[^/](?:[^>]*[^/])?>[^<]*)\n([^<]*<\/)/;
  var oldText;
  do {
    oldText = text;
    text = text.replace(regexp, '$1&#10;$2');
  } while (text != oldText);
  return text;
};

/**
 * Converts a DOM structure into properly indented text.
 * @param {!Node} dom A tree of XML elements.
 * @return {string} Text representation.
 */
Blockly.Xml.domToPrettyText = function(dom) {
  // This function is not guaranteed to be correct for all XML.
  // But it handles the XML that Blockly generates.
  var blob = Blockly.Xml.domToText(dom);
  // Place every open and close tag on its own line.
  var lines = blob.split('<');
  // Indent every line.
  var indent = '';
  for (var i = 1; i < lines.length; i++) {
    var line = lines[i];
    if (line[0] == '/') {
      indent = indent.substring(2);
    }
    lines[i] = indent + '<' + line;
    if (line[0] != '/' && line.slice(-2) != '/>') {
      indent += '  ';
    }
  }
  // Pull simple tags back together.
  // E.g. <foo></foo>
  var text = lines.join('\n');
  text = text.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, '$1</$2>');
  // Trim leading blank line.
  return text.replace(/^\n/, '');
};

/**
 * Converts an XML string into a DOM structure.
 * @param {string} text An XML string.
 * @return {!Element} A DOM object representing the singular child of the
 *     document element.
 * @throws if the text doesn't parse.
 */
Blockly.Xml.textToDom = function(text) {
  var doc = Blockly.utils.xml.textToDomDocument(text);
  if (!doc || !doc.documentElement ||
      doc.getElementsByTagName('parsererror').length) {
    throw Error('textToDom was unable to parse: ' + text);
  }
  return doc.documentElement;
};

/**
 * Clear the given workspace then decode an XML DOM and
 * create blocks on the workspace.
 * @param {!Element} xml XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {Array.<string>} An array containing new block ids.
 */
Blockly.Xml.clearWorkspaceAndLoadFromXml = function(xml, workspace) {
  workspace.setResizesEnabled(false);
  workspace.clear();
  var blockIds = Blockly.Xml.domToWorkspace(xml, workspace);
  workspace.setResizesEnabled(true);
  return blockIds;
};

/**
 * Decode an XML DOM and create blocks on the workspace.
 * @param {!Element} xml XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @return {!Array.<string>} An array containing new block IDs.
 * @suppress {strictModuleDepCheck} Suppress module check while workspace
 *     comments are not bundled in.
 */
Blockly.Xml.domToWorkspace = function(xml, workspace) {
  if (xml instanceof Blockly.Workspace) {
    var swap = xml;
    // Closure Compiler complains here because the arguments are reversed.
    /** @suppress {checkTypes} */
    xml = workspace;
    workspace = swap;
    console.warn('Deprecated call to Blockly.Xml.domToWorkspace, ' +
                 'swap the arguments.');
  }

  var width;  // Not used in LTR.
  if (workspace.RTL) {
    width = workspace.getWidth();
  }
  var newBlockIds = [];  // A list of block IDs added by this call.
  Blockly.utils.dom.startTextWidthCache();
  var existingGroup = Blockly.Events.getGroup();
  if (!existingGroup) {
    Blockly.Events.setGroup(true);
  }

  // Disable workspace resizes as an optimization.
  if (workspace.setResizesEnabled) {
    workspace.setResizesEnabled(false);
  }
  var variablesFirst = true;
  try {
    for (var i = 0, xmlChild; (xmlChild = xml.childNodes[i]); i++) {
      var name = xmlChild.nodeName.toLowerCase();
      var xmlChildElement = /** @type {!Element} */ (xmlChild);
      if (name == 'block' ||
          (name == 'shadow' && !Blockly.Events.recordUndo)) {
        // Allow top-level shadow blocks if recordUndo is disabled since
        // that means an undo is in progress.  Such a block is expected
        // to be moved to a nested destination in the next operation.
        var block = Blockly.Xml.domToBlock(xmlChildElement, workspace);
        newBlockIds.push(block.id);
        var blockX = xmlChildElement.hasAttribute('x') ?
            parseInt(xmlChildElement.getAttribute('x'), 10) : 10;
        var blockY = xmlChildElement.hasAttribute('y') ?
            parseInt(xmlChildElement.getAttribute('y'), 10) : 10;
        if (!isNaN(blockX) && !isNaN(blockY)) {
          block.moveBy(workspace.RTL ? width - blockX : blockX, blockY);
        }
        variablesFirst = false;
      } else if (name == 'shadow') {
        throw TypeError('Shadow block cannot be a top-level block.');
      } else if (name == 'comment') {
        if (workspace.rendered) {
          if (!Blockly.WorkspaceCommentSvg) {
            console.warn('Missing require for Blockly.WorkspaceCommentSvg, ' +
                'ignoring workspace comment.');
          } else {
            Blockly.WorkspaceCommentSvg.fromXml(
                xmlChildElement, workspace, width);
          }
        } else {
          if (!Blockly.WorkspaceComment) {
            console.warn('Missing require for Blockly.WorkspaceComment, ' +
                'ignoring workspace comment.');
          } else {
            Blockly.WorkspaceComment.fromXml(xmlChildElement, workspace);
          }
        }
      } else if (name == 'variables') {
        if (variablesFirst) {
          Blockly.Xml.domToVariables(xmlChildElement, workspace);
        } else {
          throw Error('\'variables\' tag must exist once before block and ' +
              'shadow tag elements in the workspace XML, but it was found in ' +
              'another location.');
        }
        variablesFirst = false;
      }
    }
  } finally {
    if (!existingGroup) {
      Blockly.Events.setGroup(false);
    }
    Blockly.utils.dom.stopTextWidthCache();
  }
  // Re-enable workspace resizing.
  if (workspace.setResizesEnabled) {
    workspace.setResizesEnabled(true);
  }
  Blockly.Events.fire(new Blockly.Events.FinishedLoading(workspace));
  return newBlockIds;
};

/**
 * Decode an XML DOM and create blocks on the workspace. Position the new
 * blocks immediately below prior blocks, aligned by their starting edge.
 * @param {!Element} xml The XML DOM.
 * @param {!Blockly.Workspace} workspace The workspace to add to.
 * @return {Array.<string>} An array containing new block IDs.
 */
Blockly.Xml.appendDomToWorkspace = function(xml, workspace) {
  var bbox;  // Bounding box of the current blocks.
  // First check if we have a workspaceSvg, otherwise the blocks have no shape
  // and the position does not matter.
  if (workspace.hasOwnProperty('scale')) {
    bbox = workspace.getBlocksBoundingBox();
  }
  // Load the new blocks into the workspace and get the IDs of the new blocks.
  var newBlockIds = Blockly.Xml.domToWorkspace(xml, workspace);
  if (bbox && bbox.top != bbox.bottom) {  // check if any previous block
    var offsetY = 0;  // offset to add to y of the new block
    var offsetX = 0;
    var farY = bbox.bottom;  // bottom position
    var topX = workspace.RTL ? bbox.right : bbox.left;  // x of bounding box
    // Check position of the new blocks.
    var newLeftX = Infinity;  // x of top left corner
    var newRightX = -Infinity;  // x of top right corner
    var newY = Infinity;  // y of top corner
    var ySeparation = 10;
    for (var i = 0; i < newBlockIds.length; i++) {
      var blockXY =
          workspace.getBlockById(newBlockIds[i]).getRelativeToSurfaceXY();
      if (blockXY.y < newY) {
        newY = blockXY.y;
      }
      if (blockXY.x < newLeftX) {  // if we left align also on x
        newLeftX = blockXY.x;
      }
      if (blockXY.x > newRightX) {  // if we right align also on x
        newRightX = blockXY.x;
      }
    }
    offsetY = farY - newY + ySeparation;
    offsetX = workspace.RTL ? topX - newRightX : topX - newLeftX;
    for (var i = 0; i < newBlockIds.length; i++) {
      var block = workspace.getBlockById(newBlockIds[i]);
      block.moveBy(offsetX, offsetY);
    }
  }
  return newBlockIds;
};

/**
 * Decode an XML block tag and create a block (and possibly sub blocks) on the
 * workspace.
 * @param {!Element} xmlBlock XML block element.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @param {boolean=} opt_disableTypeCheck If true, disable type-expr checks
 *     while building a block.
 * @return {!Blockly.Block} The root block created.
 */
Blockly.Xml.domToBlock = function(xmlBlock, workspace, opt_disableTypeCheck) {
  if (xmlBlock instanceof Blockly.Workspace) {
    var swap = xmlBlock;
    // Closure Compiler complains here because the arguments are reversed.
    /** @suppress {checkTypes} */
    xmlBlock = /** @type {!Element} */ (workspace);
    workspace = swap;
    console.warn('Deprecated call to Blockly.Xml.domToBlock, ' +
                 'swap the arguments.');
  }
  // Create top-level block.
  Blockly.Events.disable();
  var variablesBeforeCreation = workspace.getAllVariables();
  try {
    var topBlock = Blockly.Xml.domToBlockHeadless_(xmlBlock, workspace,
        opt_disableTypeCheck);
    // Generate list of all blocks.
    var blocks = topBlock.getDescendants(false);
    if (workspace.rendered) {
      // Wait to track connections to speed up assembly.
      topBlock.setConnectionTracking(false);
      // Render each block.
      for (var i = blocks.length - 1; i >= 0; i--) {
        blocks[i].initSvg();
      }
      for (var i = blocks.length - 1; i >= 0; i--) {
        blocks[i].render(false);
      }
      // Populating the connection database may be deferred until after the
      // blocks have rendered.
      setTimeout(function() {
        if (!topBlock.disposed) {
          topBlock.setConnectionTracking(true);
        }
      }, 1);
      topBlock.updateDisabled();
      // Allow the scrollbars to resize and move based on the new contents.
      // TODO(@picklesrus): #387. Remove when domToBlock avoids resizing.
      workspace.resizeContents();
    } else {
      for (var i = blocks.length - 1; i >= 0; i--) {
        blocks[i].initModel();
      }
    }
  } finally {
    Blockly.Events.enable();
  }
  if (Blockly.Events.isEnabled()) {
    var newVariables = Blockly.Variables.getAddedVariables(workspace,
        variablesBeforeCreation);
    // Fire a VarCreate event for each (if any) new variable created.
    for (var i = 0; i < newVariables.length; i++) {
      var thisVariable = newVariables[i];
      Blockly.Events.fire(new Blockly.Events.VarCreate(thisVariable));
    }
    // Block events come after var events, in case they refer to newly created
    // variables.
    Blockly.Events.fire(new Blockly.Events.BlockCreate(topBlock));
  }
  return topBlock;
};


/**
 * Decode an XML list of variables and add the variables to the workspace.
 * @param {!Element} xmlVariables List of XML variable elements.
 * @param {!Blockly.Workspace} workspace The workspace to which the variable
 *     should be added.
 */
Blockly.Xml.domToVariables = function(xmlVariables, workspace) {
  for (var i = 0, xmlChild; (xmlChild = xmlVariables.childNodes[i]); i++) {
    if (xmlChild.nodeType != Blockly.utils.dom.Node.ELEMENT_NODE) {
      continue;  // Skip text nodes.
    }
    var type = xmlChild.getAttribute('type');
    var id = xmlChild.getAttribute('id');
    var name = xmlChild.textContent;

    workspace.createVariable(name, type, id);
  }
};

/**
 * Decode an XML block tag and create a block (and possibly sub blocks) on the
 * workspace.
 * @param {!Element} xmlBlock XML block element.
 * @param {!Blockly.Workspace} workspace The workspace.
 * @param {boolean=} opt_disableTypeCheck If true, disable type-expr checks
 *     while building a block.
 * @return {!Blockly.Block} The root block created.
 * @private
 */
Blockly.Xml.domToBlockHeadless_ = function(xmlBlock, workspace,
    opt_disableTypeCheck) {
  var block = null;
  var prototypeName = xmlBlock.getAttribute('type');
  if (!prototypeName) {
    throw TypeError('Block type unspecified: ' + xmlBlock.outerHTML);
  }
  var id = xmlBlock.getAttribute('id');
  block = workspace.newBlock(prototypeName, id);

  var statementFlag = xmlBlock.getAttribute('statement');
  if (statementFlag && typeof block.setIsStatement == 'function') {
    block.setIsStatement(statementFlag == 'true');
  }

  var blockChild = null;
  var disableTypeCheck = opt_disableTypeCheck === true;
  for (var i = 0, xmlChild; (xmlChild = xmlBlock.childNodes[i]); i++) {
    if (xmlChild.nodeType == Blockly.utils.dom.Node.TEXT_NODE) {
      // Ignore any text at the <block> level.  It's all whitespace anyway.
      continue;
    }
    var input;

    // Find any enclosed blocks or shadows in this tag.
    var childBlockElement = null;
    var childShadowElement = null;
    for (var j = 0, grandchild; (grandchild = xmlChild.childNodes[j]); j++) {
      if (grandchild.nodeType == Blockly.utils.dom.Node.ELEMENT_NODE) {
        if (grandchild.nodeName.toLowerCase() == 'block') {
          childBlockElement = /** @type {!Element} */ (grandchild);
        } else if (grandchild.nodeName.toLowerCase() == 'shadow') {
          childShadowElement = /** @type {!Element} */ (grandchild);
        }
      }
    }
    // Use the shadow block if there is no child block.
    if (!childBlockElement && childShadowElement) {
      childBlockElement = childShadowElement;
    }

    var name = xmlChild.getAttribute('name');
    var xmlChildElement = /** @type {!Element} */ (xmlChild);
    switch (xmlChild.nodeName.toLowerCase()) {
      case 'mutation':
        // Custom data for an advanced block.
        if (block.domToMutation) {
          block.domToMutation(xmlChildElement);
          if (block.initSvg) {
            // Mutation may have added some elements that need initializing.
            block.initSvg();
          }
        }
        break;
      case 'comment':
        if (!Blockly.Comment) {
          console.warn('Missing require for Blockly.Comment, ' +
              'ignoring block comment.');
          break;
        }
        var text = xmlChildElement.textContent;
        var pinned = xmlChildElement.getAttribute('pinned') == 'true';
        var width = parseInt(xmlChildElement.getAttribute('w'), 10);
        var height = parseInt(xmlChildElement.getAttribute('h'), 10);

        block.setCommentText(text);
        block.commentModel.pinned = pinned;
        if (!isNaN(width) && !isNaN(height)) {
          block.commentModel.size = new Blockly.utils.Size(width, height);
        }

        if (pinned && block.getCommentIcon && !block.isInFlyout) {
          setTimeout(function() {
            block.getCommentIcon().setVisible(true);
          }, 1);
        }
        break;
      case 'data':
        block.data = xmlChild.textContent;
        break;
      case 'title':
        // Titles were renamed to field in December 2013.
        // Fall through.
      case 'field':
        Blockly.Xml.domToField_(block, name, xmlChildElement);
        break;
      case 'value':
      case 'statement':
        input = block.getInput(name);
        if (!input) {
          console.warn('Ignoring non-existent input ' + name + ' in block ' +
                       prototypeName);
          break;
        }
        if (childShadowElement) {
          input.connection.setShadowDom(childShadowElement);
        }
        if (childBlockElement) {
          blockChild = Blockly.Xml.domToBlockHeadless_(childBlockElement,
              workspace, disableTypeCheck);
          if (blockChild.outputConnection) {
            input.connection.connect(blockChild.outputConnection,
                disableTypeCheck);
          } else if (blockChild.previousConnection) {
            input.connection.connect(blockChild.previousConnection,
                disableTypeCheck);
          } else {
            throw TypeError(
                'Child block does not have output or previous statement.');
          }
        }
        break;
      case 'next':
        if (childShadowElement && block.nextConnection) {
          block.nextConnection.setShadowDom(childShadowElement);
        }
        if (childBlockElement) {
          if (!block.nextConnection) {
            throw TypeError('Next statement does not exist.');
          }
          // If there is more than one XML 'next' tag.
          if (block.nextConnection.isConnected()) {
            throw TypeError('Next statement is already connected.');
          }
          blockChild = Blockly.Xml.domToBlockHeadless_(childBlockElement,
              workspace, disableTypeCheck);
          if (!blockChild.previousConnection) {
            throw TypeError('Next block does not have previous statement.');
          }
          block.nextConnection.connect(blockChild.previousConnection,
              disableTypeCheck);
        }
        break;
      default:
        // Unknown tag; ignore.  Same principle as HTML parsers.
        console.warn('Ignoring unknown tag: ' + xmlChild.nodeName);
    }
  }

  var inline = xmlBlock.getAttribute('inline');
  if (inline) {
    block.setInputsInline(inline == 'true');
  }
  var disabled = xmlBlock.getAttribute('disabled');
  if (disabled) {
    block.setEnabled(disabled != 'true' && disabled != 'disabled');
  }
  var deletable = xmlBlock.getAttribute('deletable');
  if (deletable) {
    block.setDeletable(deletable == 'true');
  }
  var movable = xmlBlock.getAttribute('movable');
  if (movable) {
    block.setMovable(movable == 'true');
  }
  var editable = xmlBlock.getAttribute('editable');
  if (editable) {
    block.setEditable(editable == 'true');
  }
  var collapsed = xmlBlock.getAttribute('collapsed');
  if (collapsed) {
    block.setCollapsed(collapsed == 'true');
  }
  var transferable = xmlBlock.getAttribute('transferable');
  if (transferable) {
    block.setTransferable(transferable == 'true');
  }
  var recFlag = xmlBlock.getAttribute('rec');
  if (recFlag && typeof block.setRecursiveFlag == 'function') {
    block.setRecursiveFlag(recFlag == 'true');
  }
  if (xmlBlock.nodeName.toLowerCase() == 'shadow') {
    // Ensure all children are also shadows.
    var children = block.getChildren(false);
    for (var i = 0, child; (child = children[i]); i++) {
      if (!child.isShadow()) {
        throw TypeError('Shadow block not allowed non-shadow child.');
      }
    }
    // Ensure this block doesn't have any variable inputs.
    if (block.getVarModels().length) {
      throw TypeError('Shadow blocks cannot have variable references.');
    }
    block.setShadow(true);
  }
  return block;
};

/**
 * Decode an XML variable field tag and set the value of that field.
 * @param {!Blockly.Workspace} workspace The workspace that is currently being
 *     deserialized.
 * @param {!Element} xml The field tag to decode.
 * @param {string} text The text content of the XML tag.
 * @param {!Blockly.FieldVariable} field The field on which the value will be
 *     set.
 * @private
 */
Blockly.Xml.domToFieldVariable_ = function(workspace, xml, text, field) {
  var type = xml.getAttribute('variabletype') || '';
  // TODO (fenichel): Does this need to be explicit or not?
  if (type == '\'\'') {
    type = '';
  }

  var variable = Blockly.Variables.getOrCreateVariablePackage(workspace, xml.id,
      text, type);

  // This should never happen :)
  if (type != null && type !== variable.type) {
    throw Error('Serialized variable type with id \'' +
        variable.getId() + '\' had type ' + variable.type + ', and ' +
        'does not match variable field that references it: ' +
        Blockly.Xml.domToText(xml) + '.');
  }

  field.setValue(variable.getId());
};

/**
 * Decode an XML bound-variable field tag and set the value of that field.
 * @param {!Blockly.Workspace} block The workspace that is currently being
 *     deserialized.
 * @param {!Element} xml The field tag to decode.
 * @param {string} text The text content of the XML tag.
 * @param {!Blockly.FieldBoundVariable} field The field on which the value will be
 *     set.
 */
Blockly.Xml.domToFieldBoundVariable_ = function(block, xml, text, field) {
  var isForValue = xml.getAttribute('isvalue') == 'true';
  var typeName = xml.getAttribute('variable-type');
  var inlineComment = xml.getAttribute('inline-comment');
  if (isForValue != field.isForValue()) {
    throw Error('Inconsistant variable type (value or reference).');
  }
  if (Blockly.BoundVariableAbstract.nameToLabel(typeName) != field.label_) {
    throw Error('Inconsistant variable type (variable, constructor, or etc).');
  }
  if (inlineComment) {
    field.inlineComment = inlineComment;
  }
  function getWorkspaceFromDom(xml) {
    var workspaceId = xml.getAttribute('workspace-id');
    var workspace = Blockly.Workspace.getById(workspaceId);
    if (!workspace) {
      throw Error('Refers to an undefined workspace.');
    }
    return workspace;
  }
  field.initModel();
  var variable = field.getVariable();
  variable.setVariableName(text);
  if (isForValue) {
    if (xml.hasAttribute('workspace-id')) {
      var workspace = getWorkspaceFromDom(xml);
      var variableInDB =
          Blockly.BoundVariables.getValueById(field.label_, workspace, xml.id);

      if (!workspace.isFlyout && variableInDB) {
        // Copy the existing variable to this field's variable because a single
        // bound-variable can not be shared by multiple blocks.
        variableInDB.copyTo(variable);
      }
    }
  } else {
    var childDom = xml.children.length && xml.children[0];
    // Build the variable binding if <refer-to> DOM is specified.
    if (childDom && childDom.nodeName.toLowerCase() == 'refer-to') {
      var valuesWorkspace = getWorkspaceFromDom(childDom);
      var value = Blockly.BoundVariables.getValueById(field.label_,
          valuesWorkspace, childDom.id);
      if (!valuesWorkspace.isFlyout) {
        if (!value) {
          throw Error('The variable value is not found.');
        }
        variable.removeBoundValue();
        variable.setBoundValue(value);
      }
    }
  }
};

/**
 * Decode an XML field tag and set the value of that field on the given block.
 * @param {!Blockly.Block} block The block that is currently being deserialized.
 * @param {string} fieldName The name of the field on the block.
 * @param {!Element} xml The field tag to decode.
 * @private
 */
Blockly.Xml.domToField_ = function(block, fieldName, xml) {
  var field = block.getField(fieldName);
  if (!field) {
    console.warn('Ignoring non-existent field ' + fieldName + ' in block ' +
        block.type);
    return;
  }

  var workspace = block.workspace;
  var text = xml.textContent;
  var refersToVariables = field.referencesVariables();
  if (!refersToVariables) {
    field.setValue(text);
  } else if (refersToVariables == Blockly.FIELD_VARIABLE_DEFAULT) {
    Blockly.Xml.domToFieldVariable_(workspace, xml, text, field);
  } else if (refersToVariables == Blockly.FIELD_VARIABLE_BINDING) {
    Blockly.Xml.domToFieldBoundVariable_(block, xml, text, field);
  } else {
    throw Error('Unknown field variable type.');
  }
};

/**
 * Remove any 'next' block (statements in a stack).
 * @param {!Element} xmlBlock XML block element.
 */
Blockly.Xml.deleteNext = function(xmlBlock) {
  for (var i = 0, child; (child = xmlBlock.childNodes[i]); i++) {
    if (child.nodeName.toLowerCase() == 'next') {
      xmlBlock.removeChild(child);
      break;
    }
  }
};
