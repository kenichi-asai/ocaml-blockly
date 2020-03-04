/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2018 Google Inc.
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
 * @fileoverview Classes for all types of variable events.
 * @author fenichel@google.com (Rachel Fenichel)
 */
'use strict';

goog.provide('Blockly.Events.BoundVarBase');
goog.provide('Blockly.Events.BoundVarRename');

goog.require('Blockly.Events');
goog.require('Blockly.Events.Abstract');


/**
 * Abstract class for a variable event.
 * @param {Blockly.BoundVariableAbstract} variable The variable this event corresponds
 *     to.
 * @extends {Blockly.Events.Abstract}
 * @constructor
 */
Blockly.Events.BoundVarBase = function(variable) {
  Blockly.Events.BoundVarBase.superClass_.constructor.call(this);

  /**
   * The variable id for the variable this event pertains to.
   * @type {string}
   */
  this.varId = variable.getId();
  this.variable = variable;
  this.workspaceId = variable.workspace_.id;
};
Blockly.utils.object.inherits(Blockly.Events.BoundVarBase,
    Blockly.Events.Abstract);

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
Blockly.Events.BoundVarBase.prototype.toJson = function() {
  var json = Blockly.Events.BoundVarBase.superClass_.toJson.call(this);
  json['varId'] = this.varId;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
Blockly.Events.BoundVarBase.prototype.fromJson = function(json) {
  Blockly.Events.BoundVarBase.superClass_.toJson.call(this);
  this.varId = json['varId'];
};

/**
 * Class for a variable rename event.
 * @param {Blockly.BoundVariableAbstract} variable The renamed variable.
 *     Null for a blank event.
 * @param {string} newName The new name the variable will be changed to.
 * @extends {Blockly.Events.BoundVarBase}
 * @constructor
 */
Blockly.Events.BoundVarRename = function(variable, newName) {
  if (!variable) {
    return;  // Blank event to be populated by fromJson.
  }
  Blockly.Events.BoundVarRename.superClass_.constructor.call(this, variable);
  this.oldName = variable.getVariableName();
  this.newName = newName;
};
Blockly.utils.object.inherits(Blockly.Events.BoundVarRename,
    Blockly.Events.BoundVarBase);

/**
 * Type of this event.
 * @type {string}
 */
Blockly.Events.BoundVarRename.prototype.type = Blockly.Events.BOUND_VAR_RENAME;

/**
 * Encode the event as JSON.
 * @return {!Object} JSON representation.
 */
Blockly.Events.BoundVarRename.prototype.toJson = function() {
  var json = Blockly.Events.BoundVarRename.superClass_.toJson.call(this);
  json['oldName'] = this.oldName;
  json['newName'] = this.newName;
  return json;
};

/**
 * Decode the JSON event.
 * @param {!Object} json JSON representation.
 */
Blockly.Events.BoundVarRename.prototype.fromJson = function(json) {
  Blockly.Events.BoundVarRename.superClass_.fromJson.call(this, json);
  this.oldName = json['oldName'];
  this.newName = json['newName'];
};

/**
 * Run a variable rename event.
 * @param {boolean} forward True if run forward, false if run backward (undo).
 */
Blockly.Events.BoundVarRename.prototype.run = function(forward) {
  var workspace = this.getEventWorkspace_();
  if (forward) {
    var changed = Blockly.BoundVariables.renameVariableImpl_(this.variable,
        this.newName);
        if (!changed) {
          // TODO: Define the message in the Blockly.Msg class.
          var msg = 'Invalid variable name!';
          Blockly.alert(msg, promptAndCheckWithAlert.bind(null, defaultName));
        }
    //workspace.renameVariableById(this.varId, this.newName);
  } else {
    var changed = Blockly.BoundVariables.renameVariableImpl_(this.variable,
        this.oldName);
        if (!changed) {
          // TODO: Define the message in the Blockly.Msg class.
          var msg = 'Invalid variable name!';
          Blockly.alert(msg, promptAndCheckWithAlert.bind(null, defaultName));
        }
    //workspace.renameVariableById(this.varId, this.oldName);
  }
};
