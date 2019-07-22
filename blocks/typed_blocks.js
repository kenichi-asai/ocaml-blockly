/**
 * @fileoverview Typed blocks representing basic syntax.
 * @author harukam0416@gmail.com (Haruka Matsumoto)
 */
'use strict';

goog.require('Blockly.Blocks');
goog.require('Blockly');

Blockly.Blocks['empty_scene_typed'] = {
  // empty_scene : int -> int -> scene_t
  init: function() {
    this.setColour(Blockly.Msg['SCENE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.INT())
        .appendField('empty_scene ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(new Blockly.TypeExpr.INT())
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.SCENE());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.EMPTY_SCENE_TOOLTIP);
  },
    infer: function(ctx) {
    var argument1_typed     = this.callInfer('PARAM0', ctx);
    var argument2_typed    = this.callInfer('PARAM1', ctx);
    var expected          = this.outputConnection.typeExpr;
    var argument1_expected = this.getInput('PARAM0').connection.typeExpr;
    var argument2_expected = this.getInput('PARAM1').connection.typeExpr;
    if (argument1_typed)
      argument1_typed.unify(argument1_expected);
    if (argument2_typed)
      argument2_typed.unify(argument2_expected);
    return expected;
  }
};

Blockly.Blocks['rectangle_typed'] = {
  /* rectangle : int -> int -> Color.t -> Image.t */
  init: function() {
    var A     = new Blockly.TypeExpr.INT();
    var B     = new Blockly.TypeExpr.INT();
    var color = new Blockly.TypeExpr.COLOR();
    this.setColour(Blockly.Msg['IMAGE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(A)
        .appendField('rectangle ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(B);
    this.appendValueInput('PARAM2')
        .setTypeExpr(color);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.IMAGE());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.RECTANGLE_TOOLTIP);
  },
  infer: function(ctx) {
    var arg1_typed     = this.callInfer('PARAM0', ctx);
    var arg2_typed     = this.callInfer('PARAM1', ctx);
    var color_typed    = this.callInfer('PARAM2', ctx);
    var expected       = this.outputConnection.typeExpr;
    var color_expected = this.getInput('PARAM2').connection.typeExpr;
    var arg1_expected  = this.getInput('PARAM0').connection.typeExpr;
    var arg2_expected  = this.getInput('PARAM1').connection.typeExpr;
    if (arg1_typed)
      arg1_typed.unify(arg1_expected);
    if (arg2_typed)
      arg2_typed.unify(arg2_expected);
    if (color_typed)
      color_typed.unify(color_expected);
    return expected;
  }
};

Blockly.Blocks['read_image_typed'] = {
  // read_image : string -> Image.t
  init: function() {
    this.setColour(Blockly.Msg['IMAGE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.STRING())
        .appendField('read_image ');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.IMAGE());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.READ_IMAGE_TOOLTIP);
  }
};

Blockly.Blocks['overlay_typed'] = {
  // overlay : Image.t -> (int * int) -> Image.t -> Image.t
  init: function() {
    var img   = new Blockly.TypeExpr.IMAGE();
    var A     = new Blockly.TypeExpr.INT();
    var B     = new Blockly.TypeExpr.INT();
    var pair  = new Blockly.TypeExpr.TUPLE(A, B);
    this.setColour(Blockly.Msg['IMAGE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(img)
        .appendField('overlay ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(pair);
    this.appendValueInput('PARAM2')
        .setTypeExpr(img);
    this.setOutput(true);
    this.setOutputTypeExpr(img);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PLACE_IMAGE_TOOLTIP);
  },
  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var img_typed = this.callInfer('PARAM0', ctx);
    var pair_typed = this.callInfer('PARAM1', ctx);
    var scene_typed = this.callInfer('PARAM2', ctx);
    var pair_expected = this.getInput('PARAM1').connection.typeExpr;
    if (img_typed)
      img_typed.unify(img_typed);
    if (pair_typed)
      pair_typed.unify(pair_expected);
    if (scene_typed)
      scene_typed.unify(expected);
    return expected;
  }
};

Blockly.Blocks['place_image_typed'] = {
  // place_image : Image.t -> (int * int) -> scene_t -> scene_t
  init: function() {
    var img   = new Blockly.TypeExpr.IMAGE();
    var A     = new Blockly.TypeExpr.INT();
    var B     = new Blockly.TypeExpr.INT();
    var pair  = new Blockly.TypeExpr.TUPLE(A, B);
    var scene = new Blockly.TypeExpr.SCENE();
    this.setColour(Blockly.Msg['SCENE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(img)
        .appendField('place_image ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(pair);
    this.appendValueInput('PARAM2')
        .setTypeExpr(scene);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.SCENE());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PLACE_IMAGE_TOOLTIP);
  },
  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var img_typed = this.callInfer('PARAM0', ctx);
    var pair_typed = this.callInfer('PARAM1', ctx);
    var scene_typed = this.callInfer('PARAM2', ctx);
    var pair_expected = this.getInput('PARAM1').connection.typeExpr;
    if (img_typed)
      img_typed.unify(img_typed);
    if (pair_typed)
      pair_typed.unify(pair_expected);
    if (scene_typed)
      scene_typed.unify(expected);
    return expected;
  }
};

Blockly.Blocks['place_images_typed'] = {
  // place_images : Image.t list -> (int * int) list -> scene_t -> scene_t
  init: function() {
    var img      = new Blockly.TypeExpr.IMAGE();
    var img_list  = new Blockly.TypeExpr.LIST(img);
    var A         = new Blockly.TypeExpr.INT();
    var B         = new Blockly.TypeExpr.INT();
    var pair      = new Blockly.TypeExpr.TUPLE(A, B);
    var pair_list = new Blockly.TypeExpr.LIST(pair);
    var scene     = new Blockly.TypeExpr.SCENE();
    this.setColour(Blockly.Msg['SCENE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(img_list)
        .appendField('place_images ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(pair_list);
    this.appendValueInput('PARAM2')
        .setTypeExpr(scene);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.SCENE());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PLACE_IMAGES_TOOLTIP);
  },
  infer: function(ctx) {
    var imglist_typed     = this.callInfer('PARAM0', ctx);
    var pairlist_typed    = this.callInfer('PARAM1', ctx);
    var scene_typed       = this.callInfer('PARAM2', ctx);
    var expected          = this.outputConnection.typeExpr;
    var imglist_expected = this.getInput('PARAM0').connection.typeExpr;
    var pairlist_expected = this.getInput('PARAM1').connection.typeExpr;
    if (imglist_typed)
      imglist_typed.unify(imglist_expected);
    if (pairlist_typed)
      pairlist_typed.unify(pairlist_expected);
    if (scene_typed)
      scene_typed.unify(expected);
    return expected;
  }
};

Blockly.Blocks['andmap_typed'] = {
  // andmap : ('a -> bool) -> 'a list -> bool
  init: function() {
    var A      = Blockly.TypeExpr.generateTypeVar();
    var bool   = new Blockly.TypeExpr.BOOL();
    var fun    = new Blockly.TypeExpr.FUN(A, bool)
    var A_listType = new Blockly.TypeExpr.LIST(A);
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(fun)
        .appendField('andmap ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A_listType);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ANDMAP_TOOLTIP);
  },
  infer: function(ctx) {
    var expected      = this.outputConnection.typeExpr;
    var fun_type      = this.callInfer('PARAM0', ctx);
    var arg_type1     = this.callInfer('PARAM1', ctx);
    var fun_expected  = this.getInput('PARAM0').connection.typeExpr;
    var alist_expected = this.getInput('PARAM1').connection.typeExpr;
    if (fun_type)
      fun_type.unify(fun_expected);
    if (arg_type1)
      arg_type1.unify(alist_expected);
    return expected;
  }
};

Blockly.Blocks['ormap_typed'] = {
  // ormap : ('a -> bool) -> 'a list -> bool
  init: function() {
    var A      = Blockly.TypeExpr.generateTypeVar();
    var bool   = new Blockly.TypeExpr.BOOL();
    var fun    = new Blockly.TypeExpr.FUN(A, bool)
    var A_list = new Blockly.TypeExpr.LIST(A);
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(fun)
        .appendField('ormap ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A_list);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ORMAP_TOOLTIP);
  },
  infer: function(ctx) {
    var fun_typed     = this.callInfer('PARAM0', ctx);
    var Alist_typed   = this.callInfer('PARAM1', ctx);
    var expected      = this.outputConnection.typeExpr;
    var fun_expected  = this.getInput('PARAM0').connection.typeExpr;
    var Alist_expected = this.getInput('PARAM1').connection.typeExpr;
    if (fun_typed)
      fun_typed.unify(fun_expected);
    if (Alist_typed)
      Alist_typed.unify(Alist_expected);
    return expected;
  }
};

Blockly.Blocks['circle_typed'] = {
  // circle : int -> Color.t -> Image.t
  init: function() {
    var IMAGES =
        [['circle', 'CIRCLE'],
         ['circle_outline', 'CIRCLE_OUTLINE']];
    var A     = new Blockly.TypeExpr.INT();
    var color = new Blockly.TypeExpr.COLOR();
    this.setColour(Blockly.Msg['IMAGE_HUE']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(IMAGES), 'IMAGE');
    this.appendValueInput('PARAM0')
        .setTypeExpr(A)
        .appendField(' ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(color)
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.IMAGE());
    this.setInputsInline(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var images = thisBlock.getFieldValue('IMAGE');
      var TOOLTIPS = {
        'CIRCLE': Blockly.Msg.CIRCLE_TOOLTIP,
        'CIRCLE_OUTLINE': Blockly.Msg.CIRCLE_OUTLINE_TOOLTIP
      };
      return TOOLTIPS[images];
    });
  },
  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var arg_type1 = this.callInfer('PARAM0', ctx);
    var color_typed = this.callInfer('PARAM1', ctx);
    var a_expected = this.getInput('PARAM0').connection.typeExpr;
    if (arg_type1)
      arg_type1.unify(a_expected);
    if (color_typed)
      color_typed.unify(color_typed);
    return expected;
  }
};

Blockly.Blocks['line_typed'] = {
  /* line : (int * int) list -> Color.t -> Image.t */
  init: function() {
      var A         = new Blockly.TypeExpr.INT();
      var B         = new Blockly.TypeExpr.INT();
      var pair      = new Blockly.TypeExpr.TUPLE(A, B);
      var pair_list = new Blockly.TypeExpr.LIST(pair);
      var color     = new Blockly.TypeExpr.COLOR();
      this.setColour(Blockly.Msg['IMAGE_HUE']);
      this.appendValueInput('PARAM0')
            .setTypeExpr(pair_list)
            .appendField('line ');
      this.appendValueInput('PARAM1')
            .setTypeExpr(color);
      this.setOutput(true);
      this.setOutputTypeExpr(new Blockly.TypeExpr.IMAGE());
      this.setInputsInline(true);
      this.setTooltip(Blockly.Msg.LINE_TOOLTIP);
  },
  infer: function(ctx) {
      var pairlist_typed    = this.callInfer('PARAM0', ctx);
      var color_typed       = this.callInfer('PARAM1', ctx);
      var expected          = this.outputConnection.typeExpr;
      var color_expected    = this.getInput('PARAM1').connection.typeExpr;
      var pairlist_expected = this.getInput('PARAM0').connection.typeExpr;
      if (pairlist_typed)
          pairlist_typed.unify(pairlist_expected);
      if (color_typed)
          color_typed.unify(color_expected);
      return expected;
  }
};

Blockly.Blocks['polygon_typed'] = {
  /* polygon : (int * int) list -> Color.t -> Image.t */
  init: function() {
    var IMAGES =
        [['polygon', 'POLYGON'],
        ['polygon_outline', 'POLYGON_OUTLINE']];
    var A         = new Blockly.TypeExpr.INT();
    var B         = new Blockly.TypeExpr.INT();
    var pair      = new Blockly.TypeExpr.TUPLE(A, B);
    var pair_list = new Blockly.TypeExpr.LIST(pair);
    var color     = new Blockly.TypeExpr.COLOR();
    this.setColour(Blockly.Msg['IMAGE_HUE']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(IMAGES), 'IMAGE');
    this.appendValueInput('PARAM0')
        .setTypeExpr(pair_list)
        .appendField(' ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(color);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.IMAGE());
    this.setInputsInline(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var images = thisBlock.getFieldValue('IMAGE');
      var TOOLTIPS = {
        'POLYGON': Blockly.Msg.POLYGON_TOOLTIP,
        'POLYGON_OUTLINE': Blockly.Msg.POLYGON_OUTLINE_TOOLTIP
      };
      return TOOLTIPS[images];
    });
  },
  infer: function(ctx) {
    var pairlist_typed    = this.callInfer('PARAM0', ctx);
    var color_typed       = this.callInfer('PARAM1', ctx);
    var expected          = this.outputConnection.typeExpr;
    var color_expected    = this.getInput('PARAM1').connection.typeExpr;
    var pairlist_expected = this.getInput('PARAM0').connection.typeExpr;
    if (pairlist_typed)
      pairlist_typed.unify(pairlist_expected);
    if (color_typed)
      color_typed.unify(color_expected);
    return expected;
  }
};

Blockly.Blocks['make_color_typed'] = {
  /* make_color : int -> int -> int -> Color.t */
  init: function() {
    var r = new Blockly.TypeExpr.INT();
    var g = new Blockly.TypeExpr.INT();
    var b = new Blockly.TypeExpr.INT();
    this.setColour(Blockly.Msg['COLOR_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(r)
        .appendField('make_color ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(g);
    this.appendValueInput('PARAM2')
        .setTypeExpr(b);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.COLOR());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MAKE_COLOR_TOOLTIP);
  },
  infer: function(ctx) {
    var r_typed    = this.callInfer('PARAM0', ctx);
    var g_typed    = this.callInfer('PARAM1', ctx);
    var b_typed    = this.callInfer('PARAM2', ctx);
    var expected   = this.outputConnection.typeExpr;
    var r_expected = this.getInput('PARAM0').connection.typeExpr;
    var g_expected = this.getInput('PARAM1').connection.typeExpr;
    var b_expected = this.getInput('PARAM2').connection.typeExpr;
    if (r_typed)
      r_typed.unify(r_expected);
    if (g_typed)
      g_typed.unify(g_expected);
    if (b_typed)
      b_typed.unify(b_expected);
    return expected;
  }
};

Blockly.Blocks['make_color2_typed'] = {
  /* make_color : ?alpha:int -> int -> int -> int -> Color.t */
  init: function() {
    var a = new Blockly.TypeExpr.INT();
    var r = new Blockly.TypeExpr.INT();
    var g = new Blockly.TypeExpr.INT();
    var b = new Blockly.TypeExpr.INT();
    this.setColour(Blockly.Msg['COLOR_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(r)
        .appendField('make_color2 ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(g);
    this.appendValueInput('PARAM2')
        .setTypeExpr(b);
    this.appendValueInput('PARAM3')
        .setTypeExpr(a);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.COLOR());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MAKE_COLOR2_TOOLTIP);
  },
  infer: function(ctx) {
    var a_typed    = this.callInfer('PARAM3', ctx);
    var r_typed    = this.callInfer('PARAM0', ctx);
    var g_typed    = this.callInfer('PARAM1', ctx);
    var b_typed    = this.callInfer('PARAM2', ctx);
    var expected   = this.outputConnection.typeExpr;
    var r_expected = this.getInput('PARAM0').connection.typeExpr;
    var g_expected = this.getInput('PARAM1').connection.typeExpr;
    var b_expected = this.getInput('PARAM2').connection.typeExpr;
    var a_expected = this.getInput('PARAM3').connection.typeExpr;
    if (r_typed)
      r_typed.unify(r_expected);
    if (g_typed)
      g_typed.unify(g_expected);
    if (b_typed)
      b_typed.unify(b_expected);
    if (a_typed)
      a_typed.unify(a_expected);
    return expected;
  }
};

Blockly.Blocks['color_typed'] = {
  /**
   * Block for color data type.
   * @this Blockly.Block
   */
  init: function() {
    var COLORS =
        [['red', 'RED'], ['blue', 'BLUE'], ['black', 'BLACK'], ['white', 'WHITE'],
         ['yellow', 'YELLOW'], ['green', 'GREEN'], ['pink', 'PINK'], ['cyan', 'CYAN']];
    this.setColour(Blockly.Msg['COLOR_HUE']);
    this.setOutput(true);
    // TODO(harukam): Define a function to create a type expression in the same
    // way as makeConnection_ in block.js and block_svg.js.
    this.setOutputTypeExpr(new Blockly.TypeExpr.COLOR());
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(COLORS), 'COLOR');
  }
};

Blockly.Blocks['text_typed'] = {
  // text : string -> int -> Color.t -> Image.t
  init: function() {
    var A     = new Blockly.TypeExpr.STRING();
    var B     = new Blockly.TypeExpr.INT();
    var color = new Blockly.TypeExpr.COLOR();
    this.setColour(Blockly.Msg['IMAGE_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(A)
        .appendField('text ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(B);
    this.appendValueInput('PARAM2')
        .setTypeExpr(color)
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.IMAGE());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.TEXT_TOOLTIP);
  },
  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var arg_type1 = this.callInfer('PARAM0', ctx);
    var arg_type2 = this.callInfer('PARAM0', ctx);
    var color_typed = this.callInfer('PARAM2', ctx);
    var a_expected = this.getInput('PARAM0').connection.typeExpr;
    var b_expected = this.getInput('PARAM0').connection.typeExpr;
    if (arg_type1)
      arg_type1.unify(a_expected);
    if (arg_type2)
      arg_type2.unify(b_expected);
    if (color_typed)
      color_typed.unify(color_typed);
    return expected;
  }
};

Blockly.Blocks['logic_boolean_typed'] = {
  /**
   * Block for boolean data type: true and false.
   * @this Blockly.Block
   */
  init: function() {
    var BOOLEANS =
        [[Blockly.Msg.LOGIC_BOOLEAN_TRUE, 'TRUE'],
         [Blockly.Msg.LOGIC_BOOLEAN_FALSE, 'FALSE']];
    this.setHelpUrl(Blockly.Msg.LOGIC_BOOLEAN_HELPURL);
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.setOutput(true, 'Boolean');
    // TODO(harukam): Define a function to create a type expression in the same
    // way as makeConnection_ in block.js and block_svg.js.
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(BOOLEANS), 'BOOL');
    this.setTooltip(Blockly.Msg.LOGIC_BOOLEAN_TOOLTIP);
  }
};

Blockly.Blocks['logic_operator_typed'] = {
  /**
   * Block for logical operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [['&&', 'AND'],
         ['||', 'OR']];
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.setOutput(true, 'Boolean');
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.BOOL());
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr.BOOL())
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP_BOOL');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP_BOOL');
      var TOOLTIPS = {
        'AND': Blockly.Msg.LOGIC_OPERATION_AND,
        'OR': Blockly.Msg.LOGIC_OPERATION_OR
      };
      return TOOLTIPS[mode];
    });
  },

  infer: function(ctx) {
    var expected_left = new Blockly.TypeExpr.BOOL();
    var left = this.callInfer('A', ctx);
    var right = this.callInfer('B', ctx);
    if (left)
      left.unify(expected_left);
    if (right)
      right.unify(expected_left);
    return expected_left;
  }
}

Blockly.Blocks['not_operator_typed'] = {
  /**
   * Block for "not" operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.setOutput(true, 'Boolean');
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.BOOL())
        .appendField('not');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LOGIC_NEGATE_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = new Blockly.TypeExpr.BOOL();
    var arg = this.callInfer('A', ctx);
    if (arg)
      arg.unify(expected);
    return expected;
  }
};

Blockly.Blocks['logic_compare_typed'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS = Blockly.RTL ? [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['>', 'LT'],
          ['\u2265', 'LTE'],
          ['<', 'GT'],
          ['\u2264', 'GTE']
        ] : [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['<', 'LT'],
          ['\u2264', 'LTE'],
          ['>', 'GT'],
          ['\u2265', 'GTE']
        ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.setOutput(true, 'Boolean');
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    var A = Blockly.TypeExpr.generateTypeVar();
    this.appendValueInput('A')
        .setTypeExpr(A);
    this.appendValueInput('B')
        .setTypeExpr(A)
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
  },

  infer: function(ctx) {
    var expected_left = this.getInput('A').connection.typeExpr;
    var left = this.callInfer('A', ctx);
    var right = this.callInfer('B', ctx);
    if (left)
      left.unify(expected_left);
    if (right)
      right.unify(expected_left);
    return new Blockly.TypeExpr.BOOL();
  }
};

Blockly.Blocks['logic_ternary_typed'] = {
  /**
   * Block for ternary operator.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.LOGIC_TERNARY_HELPURL);
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    this.appendValueInput('IF')
        .setTypeExpr(new Blockly.TypeExpr.BOOL())
        .appendField('if')
    this.appendValueInput('THEN')
        .setTypeExpr(A)
        .appendField('then')
    this.appendValueInput('ELSE')
        .setTypeExpr(A)
        .appendField('else');
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setTooltip(Blockly.Msg.LOGIC_TERNARY_TOOLTIP);
  },

  infer: function(ctx) {
    var cond_expected = new Blockly.TypeExpr.BOOL();
    var cond_type = this.callInfer('IF', ctx);
    if (cond_type)
      cond_type.unify(cond_expected);
    var expected = this.outputConnection.typeExpr;
    var then_type = this.callInfer('THEN', ctx);
    var else_type = this.callInfer('ELSE', ctx);
    if (then_type)
      then_type.unify(expected);
    if (else_type)
      else_type.unify(expected);
    return expected;
  }
};

Blockly.Blocks['max_int_typed'] = {
  init: function() {
    var INTS =
        [['max_int', 'MAX_INT'],
         ['min_int', 'MIN_INT']];
    this.setColour(Blockly.Msg['INT_HUE']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(INTS), 'INT');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    var thisBlock = this;
    this.setTooltip(function() {
      var ints = thisBlock.getFieldValue('INT');
      var TOOLTIPS = {
        'MAX_INT': Blockly.Msg.MATH_SPECIALINT_MAX,
        'MIN_INT': Blockly.Msg.MATH_SPECIALINT_MIN
      };
      return TOOLTIPS[ints];
    });
  }
};

Blockly.Blocks['infinity_typed'] = {
  init: function() {
    var FLOATS =
        [['infinity', 'INFINITY'],
         ['neg_infinity', 'NEG_INFINITY'],
         ['nan', 'NAN']];
    this.setColour(Blockly.Msg['FLOAT_HUE']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown(FLOATS), 'FLOAT');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.FLOAT());
    var thisBlock = this;
    this.setTooltip(function() {
      var floats = thisBlock.getFieldValue('FLOAT');
      var TOOLTIPS = {
        'INFINITY': Blockly.Msg.MATH_SPECIALFLOAT_INFINITY,
        'NEG_INFINITY': Blockly.Msg.MATH_SPECIALFLOAT_NEGINFINITY,
        'NAN': Blockly.Msg.MATH_SPECIALFLOAT_NAN
      };
      return TOOLTIPS[floats];
    })
  }
};

Blockly.Blocks['int_typed'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg['INT_HUE']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0',
        Blockly.FieldTextInput.intValidator), 'INT');
    this.setOutput(true, 'Int');
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['int_arithmetic_typed'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [['+', 'ADD_INT'],
         ['-', 'MINUS_INT'],
         ['*', 'MULTIPLY_INT'],
         ['/', 'DIVIDE_INT'],
         ['mod', 'MOD_INT']];
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Msg['INT_HUE']);
    this.setOutput(true, 'Int');
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.INT())
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr.INT())
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP_INT');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP_INT');
      var TOOLTIPS = {
        'ADD_INT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS_INT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY_INT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE_INT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'MOD_INT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MOD
      };
      return TOOLTIPS[mode];
    });
  },

  infer: function(ctx) {
    var expected_left = new Blockly.TypeExpr.INT();
    var left = this.callInfer('A', ctx);
    var right = this.callInfer('B', ctx);
    if (left)
      left.unify(expected_left);
    if (right)
      right.unify(expected_left);
    return expected_left;
  }
};

Blockly.Blocks['int_abs_typed'] = {
  /**
   * Block for Pervasives.abs function.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Msg['INT_HUE']);
    this.setOutput(true, 'Int');
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.INT())
        .appendField('abs');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ABS);
  },

  infer: function(ctx) {
    var expected = new Blockly.TypeExpr.INT();
    var arg = this.callInfer('A', ctx);
    if (arg)
      arg.unify(expected);
    return expected;
  }
};

Blockly.Blocks['float_typed'] = {
  /**
   * Block for numeric value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(Blockly.Msg['FLOAT_HUE']);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('0.',
        Blockly.FieldTextInput.floatValidator), 'Float');
    this.setOutput(true, 'Float');
    this.setOutputTypeExpr(new Blockly.TypeExpr.FLOAT());
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};

Blockly.Blocks['float_arithmetic_typed'] = {
  /**
   * Block for basic arithmetic operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS =
        [['+.', 'ADD_FLOAT'],
         ['-.', 'MINUS_FLOAT'],
         ['*.', 'MULTIPLY_FLOAT'],
         ['/.', 'DIVIDE_FLOAT'],
         ['**', 'POWER_FLOAT']];
    this.setHelpUrl(Blockly.Msg.MATH_ARITHMETIC_HELPURL);
    this.setColour(Blockly.Msg['FLOAT_HUE']);
    this.setOutput(true, 'Float');
    this.setOutputTypeExpr(new Blockly.TypeExpr.FLOAT());
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.FLOAT())
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr.FLOAT())
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP_FLOAT');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var mode = thisBlock.getFieldValue('OP_FLOAT');
      var TOOLTIPS = {
        'ADD_FLOAT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_ADD,
        'MINUS_FLOAT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MINUS,
        'MULTIPLY_FLOAT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
        'DIVIDE_FLOAT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
        'POWER_FLOAT': Blockly.Msg.MATH_ARITHMETIC_TOOLTIP_POWER
      };
      return TOOLTIPS[mode];
    });
  },

  infer: function(ctx) {
    var expected_left = new Blockly.TypeExpr.FLOAT();
    var left = this.callInfer('A', ctx);
    var right = this.callInfer('B', ctx);
    if (left)
      left.unify(expected_left);
    if (right)
      right.unify(expected_left);
    return expected_left;
  }
};

Blockly.Blocks['float_sqrt_typed'] = {
  /**
   * Block for Pervasives.sqrt function.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Msg['FLOAT_HUE']);
    this.setOutput(true, 'Float');
    this.setOutputTypeExpr(new Blockly.TypeExpr.FLOAT());
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.FLOAT())
        .appendField('sqrt');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_SINGLE_TOOLTIP_ROOT);
  },

  infer: function(ctx) {
    var expected = new Blockly.TypeExpr.FLOAT();
    var arg = this.callInfer('A', ctx);
    if (arg)
      arg.unify(expected);
    return expected;
  }
};

Blockly.Blocks['string_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['STRING_HUE']);
    this.appendDummyInput()
        .appendField('"')
        .appendField(new Blockly.FieldTextInput('foo'), 'STRING')
        .appendField('"');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.STRING());
  }
};

Blockly.Blocks['concat_string_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['STRING_HUE']);
    this.appendValueInput('A')
        .setTypeExpr(new Blockly.TypeExpr.STRING());
    this.appendValueInput('B')
        .setTypeExpr(new Blockly.TypeExpr.STRING())
        .appendField('^');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.STRING());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.STRING_CONCAT);
  },

  infer: function(ctx) {
    var expected_left = new Blockly.TypeExpr.STRING();
    var left = this.callInfer('A', ctx);
    var right = this.callInfer('B', ctx);
    if (left)
      left.unify(expected_left);
    if (right)
      right.unify(expected_left);
    return expected_left;
  }
};

Blockly.Blocks['string_of_int_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['STRING_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.INT())
        .appendField('string_of_int');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.STRING());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.STRING_OF_INT);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.INT();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.STRING();
  }
};

Blockly.Blocks['int_of_string_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['MATH_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.STRING())
        .appendField('int_of_string');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.INT_OF_STRING_TOOLTIP);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.STRING();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.INT();
  }
};

Blockly.Blocks['string_of_float_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['STRING_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.FLOAT())
        .appendField('string_of_float');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.STRING());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_STRING_OF_FLOAT);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.FLOAT();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.STRING();
  }
};

Blockly.Blocks['float_of_int_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['FLOAT_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.INT())
        .appendField('float_of_int');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.FLOAT());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_FLOAT_OF_INT);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.INT();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.FLOAT();
  }
};

Blockly.Blocks['int_of_float_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['INT_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.FLOAT())
        .appendField('int_of_float');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.MATH_INT_OF_FLOAT);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.FLOAT();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.INT();
  }
};

Blockly.Blocks['string_of_bool_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['STRING_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.BOOL())
        .appendField('string_of_bool');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.STRING());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.STRING_OF_BOOL);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.BOOL();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.STRING();
  }
};

Blockly.Blocks['bool_of_string_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LOGIC_HUE']);
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.STRING())
        .appendField('string_of_bool');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.BOOL());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.STRING_OF_BOOL);
  },

  infer: function(ctx) {
    var expected_param = new Blockly.TypeExpr.STRING();
    var param = this.callInfer('PARAM0', ctx);
    if (param)
      param.unify(expected_param);
    return new Blockly.TypeExpr.BOOL();
  }
};

Blockly.Blocks['option_none_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['OPTION_HUE']);
    var element_type = Blockly.TypeExpr.generateTypeVar();
    var optionType = new Blockly.TypeExpr.OPTION(element_type);
    this.appendDummyInput()
        .appendField('None');
    this.setOutput(true);
    this.setOutputTypeExpr(optionType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.OPTION_NONE_TOOLTIP);
  }
};

Blockly.Blocks['option_some_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['OPTION_HUE']);
    var element_type = Blockly.TypeExpr.generateTypeVar();
    var optionType = new Blockly.TypeExpr.OPTION(element_type);
    this.appendValueInput('PARAM')
        .setTypeExpr(element_type)
        .appendField('Some');
    this.setOutput(true);
    this.setOutputTypeExpr(optionType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.OPTION_SOME_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expectedElementType = expected.element_type;
    var elementType = this.callInfer('PARAM', ctx);
    if (elementType) {
      expectedElementType.unify(elementType);
    }
    return expected;
  }
}

Blockly.Blocks['lists_create_with_typed'] = {
  /**
   * Block for creating a list with any number of elements of any type.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var element_type = Blockly.TypeExpr.generateTypeVar();
    this.appendDummyInput('LPAREN')
        .appendField('[');
    this.appendValueInput('ADD0')
        .setTypeExpr(element_type);
    this.appendValueInput('ADD1')
        .setTypeExpr(element_type)
        .appendField(';');
    this.appendValueInput('ADD2')
        .setTypeExpr(element_type)
        .appendField(';');
    this.appendDummyInput('RPAREN')
        .appendField(']');
    this.setOutput(true, 'Array');
    this.setOutputTypeExpr(new Blockly.TypeExpr.LIST(element_type));
    this.setMutator(new Blockly.Mutator(['lists_create_with_item']));
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_TOOLTIP);
    this.itemCount_ = 3;
    // https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
    this.setInputsInline(true);
  },
  /**
   * Create XML to represent list inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the list inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    // xmlElement = <mutation items="n"></mutation>
    // where n is the number of elements.
    // returns a list block with n elements
    this.removeInput('LPAREN');
    for (var x = 0; x < this.itemCount_; x++) {
      this.removeInput('ADD' + x);
    }
    this.removeInput('RPAREN');
    this.itemCount_ = parseInt(xmlElement.getAttribute('items'), 10);
    this.appendDummyInput('LPAREN')
        .appendField('[');
    var element_type = this.outputConnection.typeExpr.element_type;
    for (var x = 0; x < this.itemCount_; x++) {
      var input = this.appendValueInput('ADD' + x)
                      .setTypeExpr(element_type);
      if (x != 0) {
        input.appendField(';');
      }
    }
    this.appendDummyInput('RPAREN')
        .appendField(']');
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('lists_create_with_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = workspace.newBlock('lists_create_with_item');
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
    // Disconnect all input blocks and remove all inputs.
    this.removeInput('RPAREN');
    for (; 0 < this.itemCount_; this.itemCount_--) {
      var index = this.itemCount_ - 1;
      this.removeInput('ADD' + index);
    }
    // Rebuild the block's inputs.
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var element_type = this.outputConnection.typeExpr.element_type;
    while (itemBlock) {
      var input = this.appendValueInput('ADD' + this.itemCount_)
                      .setTypeExpr(element_type);
      if (this.itemCount_ != 0) {
        input.appendField(';');
      }
      // Reconnect any child blocks.
      this.itemCount_++;
      // The length of items should be updated in advance of connecting two
      // blocks. This is because type inference, which depends on the length
      // of items, occurs when connecting two blocks.
      if (itemBlock.valueConnection_) {
        input.connection.connect(itemBlock.valueConnection_);
      }
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
    this.appendDummyInput('RPAREN')
        .appendField(']');
  },
  /**
   * Store pointers to any connected child blocks.
   * @param {!Blockly.Block} containerBlock Root block in mutator.
   * @this Blockly.Block
   */
  saveConnections: function(containerBlock) {
    var itemBlock = containerBlock.getInputTargetBlock('STACK');
    var x = 0;
    while (itemBlock) {
      var input = this.getInput('ADD' + x);
      itemBlock.valueConnection_ = input && input.connection.targetConnection;
      x++;
      itemBlock = itemBlock.nextConnection &&
          itemBlock.nextConnection.targetBlock();
    }
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    for (var x = 0; x < this.itemCount_; x++) {
      var type = this.callInfer('ADD' + x, ctx);
      if (type)
        type.unify(expected.element_type);
    }
    return expected;
  }
};

Blockly.Blocks['list_empty_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var element_type = Blockly.TypeExpr.generateTypeVar();
    var listType = new Blockly.TypeExpr.LIST(element_type);
    this.appendDummyInput()
        .appendField('[ ]');
    this.setOutput(true);
    this.setOutputTypeExpr(listType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_EMPTY_TOOLTIP);
  }
};

Blockly.Blocks['list_cons_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var element_type = Blockly.TypeExpr.generateTypeVar();
    var listType = new Blockly.TypeExpr.LIST(element_type);
    this.appendValueInput('FIRST')
        .setTypeExpr(element_type);
    this.appendValueInput('CONS')
        .setTypeExpr(listType)
        .appendField('::');
    this.setOutput(true);
    this.setOutputTypeExpr(listType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expectedElementType = expected.element_type;
    var listType = this.callInfer('CONS', ctx);
    var elementType = this.callInfer('FIRST', ctx);
    if (listType) {
      expected.unify(listType);
    }
    if (elementType) {
      expectedElementType.unify(elementType);
    }
    return expected;
  }
};

Blockly.Blocks['list_map_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    // List.map : ('a -> 'b) -> 'a list -> 'b list
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var A_listType = new Blockly.TypeExpr.LIST(A);
    var B_listType = new Blockly.TypeExpr.LIST(B);
    var functionType = new Blockly.TypeExpr.FUN(A, B);
    this.appendValueInput('PARAM0')
        .setTypeExpr(functionType)
        .appendField('List.map');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A_listType);
    this.setOutput(true);
    this.setOutputTypeExpr(B_listType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_MAP_TOOLTIP);
  },

  infer: function(ctx) {
    var a_listType = this.callInfer('PARAM1', ctx);
    var fun_type = this.callInfer('PARAM0', ctx);
    var expected = this.outputConnection.typeExpr;
    var expected_arg_fun = this.getInput('PARAM0').connection.typeExpr;
    var expected_arg_lst = this.getInput('PARAM1').connection.typeExpr;

    if (fun_type) {
      expected_arg_fun.unify(fun_type);
    }
    if (a_listType) {
      expected_arg_lst.unify(a_listType);
    }
    return expected;
  }
};

Blockly.Blocks['list_map2_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    // List.map2 : ('a -> 'b -> 'c) -> 'a list -> 'b list -> 'c list
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var C = Blockly.TypeExpr.generateTypeVar();
    var A_listType = new Blockly.TypeExpr.LIST(A);
    var B_listType = new Blockly.TypeExpr.LIST(B);
    var C_listType = new Blockly.TypeExpr.LIST(C);
    var funcType1 = new Blockly.TypeExpr.FUN(B,C);
    var funcType2 = new Blockly.TypeExpr.FUN(A, funcType1);
    this.appendValueInput('PARAM0')
        .setTypeExpr(funcType2)
        .appendField('List.map2');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A_listType);
    this.appendValueInput('PARAM2')
        .setTypeExpr(B_listType);
    this.setOutput(true);
    this.setOutputTypeExpr(C_listType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_MAP2_TOOLTIP);
  },

  infer: function(ctx) {
    var a_listType = this.callInfer('PARAM1', ctx);
    var b_listType = this.callInfer('PARAM2', ctx);
    var fun_type = this.callInfer('PARAM0', ctx);
    var expected = this.outputConnection.typeExpr;
    var expected_arg_fun = this.getInput('PARAM0').connection.typeExpr;
    var expected_a_lst = this.getInput('PARAM1').connection.typeExpr;
    var expected_b_lst = this.getInput('PARAM2').connection.typeExpr;

    if (fun_type) {
      expected_arg_fun.unify(fun_type);
    }
    if (a_listType) {
      expected_a_lst.unify(a_listType);
    }
    if (b_listType) {
      expected_b_lst.unify(b_listType);
    }
    return expected;
  }
};

Blockly.Blocks['list_length_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    // List.length : 'a list -> int
    var A = Blockly.TypeExpr.generateTypeVar();
    var listType = new Blockly.TypeExpr.LIST(A);
    this.appendValueInput('PARAM0')
        .setTypeExpr(listType)
        .appendField('List.length');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_LENGTH_TOOLTIP);
  },

  infer: function(ctx) {
    var listType = this.callInfer('PARAM0', ctx);
    var expected = this.outputConnection.typeExpr;
    var expected_arg_lst = this.getInput('PARAM0').connection.typeExpr;

    if (listType) {
      expected_arg_lst.unify(listType);
    }
    return expected;
  }
};

Blockly.Blocks['list_filter_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var element_bool = new Blockly.TypeExpr.BOOL()
    var element_A = Blockly.TypeExpr.generateTypeVar()
    var funType = new Blockly.TypeExpr.FUN(element_A,element_bool)
    var listType = new Blockly.TypeExpr.LIST(element_A);
    this.appendValueInput('PARAM0')
        .setTypeExpr(funType)
        .appendField('List.filter');
    this.appendValueInput('PARAM1')
        .setTypeExpr(listType);
    this.setOutput(true);
    this.setOutputTypeExpr(listType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_FILTER_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;//a list
    var expectedElementType = expected.element_type;//a
    var expectedlist = new Blockly.TypeExpr.FUN(expectedElementType,
        new Blockly.TypeExpr.BOOL())
    var funType = this.callInfer('PARAM0', ctx);//a->bool
    var listType = this.callInfer('PARAM1', ctx);//a list
    if (listType) {
      expected.unify(listType);
    }
    if (funType) {
      expectedlist.unify(funType);
    }
    return expected;
  }
};

Blockly.Blocks['list_assoc_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var a_type = Blockly.TypeExpr.generateTypeVar();
    var b_type = Blockly.TypeExpr.generateTypeVar();
    var pair_t = new Blockly.TypeExpr.TUPLE(a_type, b_type);
    var listType = new Blockly.TypeExpr.LIST(pair_t);
    this.appendValueInput('PARAM0')
        .setTypeExpr(a_type)
        .appendField('List.assoc');
    this.appendValueInput('PARAM1')
        .setTypeExpr(listType);
    this.setOutput(true);
    this.setOutputTypeExpr(b_type);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LISTS_ASSOC_TOOLTIP);
  },

  infer: function(ctx) {
    var listType = this.callInfer('PARAM1', ctx);
    var a_type = this.callInfer('PARAM0', ctx);
    var expected = this.outputConnection.typeExpr;
    var expected_arg_a = this.getInput('PARAM0').connection.typeExpr;
    var expected_arg_lst = this.getInput('PARAM1').connection.typeExpr;

    if (a_type) {
      expected_arg_a.unify(a_type);
    }
    if (listType) {
      expected_arg_lst.unify(listType);
    }
    return expected;
  }
};

Blockly.Blocks['list_append_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var element_type = Blockly.TypeExpr.generateTypeVar();
    var listType = new Blockly.TypeExpr.LIST(element_type);
    this.appendValueInput('PARAM0')
        .setTypeExpr(listType);
    this.appendValueInput('PARAM1')
        .setTypeExpr(listType)
        .appendField('@');
    this.setOutput(true);
    this.setOutputTypeExpr(listType);
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var leftType = this.callInfer('PARAM0', ctx);
    var rightType = this.callInfer('PARAM1', ctx);
    if (leftType) {
      expected.unify(leftType);
    }
    if (rightType) {
      expected.unify(rightType);
    }
    return expected;
  }
}

Blockly.Blocks['list_fold_left_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    // List.fold_left : ('a -> 'b -> 'a) -> 'a -> 'b list -> 'a
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var B_listType = new Blockly.TypeExpr.LIST(B);
    var functionType1 = new Blockly.TypeExpr.FUN(B, A);
    var functionType2 = new Blockly.TypeExpr.FUN(A, functionType1);
    this.appendValueInput('PARAM0')
        .setTypeExpr(functionType2)
        .appendField('List.fold_left ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.appendValueInput('PARAM2')
        .setTypeExpr(B_listType)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var fun_type = this.callInfer('PARAM0', ctx);
    var arg_type1 = this.callInfer('PARAM1', ctx);
    var arg_type2 = this.callInfer('PARAM2', ctx);
    var fun_expected = this.getInput('PARAM0').connection.typeExpr;
    var a_expected = this .getInput('PARAM1').connection.typeExpr;
    var blist_expected = this.getInput('PARAM2').connection.typeExpr;
    if (fun_type)
      fun_type.unify(fun_expected);
    if (arg_type1)
      arg_type1.unify(a_expected);
    if (arg_type2)
      arg_type2.unify(blist_expected);
    return expected;
  }
}

Blockly.Blocks['list_fold_right_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
      // List.fold_right : ('b -> 'a -> 'a) -> 'b list -> 'a -> 'a
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var B_listType = new Blockly.TypeExpr.LIST(B);
    var functionType1 = new Blockly.TypeExpr.FUN(A, A);
    var functionType2 = new Blockly.TypeExpr.FUN(B, functionType1);
    this.appendValueInput('PARAM0')
        .setTypeExpr(functionType2)
        .appendField('List.fold_right ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(B_listType)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.appendValueInput('PARAM2')
        .setTypeExpr(A)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var fun_type = this.callInfer('PARAM0', ctx);
    var arg_type1 = this.callInfer('PARAM1', ctx);
    var arg_type2 = this.callInfer('PARAM2', ctx);
    var fun_expected = this.getInput('PARAM0').connection.typeExpr;
    var blist_expected = this .getInput('PARAM1').connection.typeExpr;
    var a_expected = this.getInput('PARAM2').connection.typeExpr;
    if (fun_type)
      fun_type.unify(fun_expected);
    if (arg_type1)
      arg_type1.unify(blist_expected);
    if (arg_type2)
      arg_type2.unify(a_expected);
    return expected;
  }
}

Blockly.Blocks['list_fold_left2_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    // List.fold_left2: ('a -> 'b -> 'c -> 'a) -> 'a -> 'b list -> 'c list -> 'a
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var C = Blockly.TypeExpr.generateTypeVar();
    var B_listType = new Blockly.TypeExpr.LIST(B);
    var C_listType = new Blockly.TypeExpr.LIST(C);
    var functionType1 = new Blockly.TypeExpr.FUN(C, A);
    var functionType2 = new Blockly.TypeExpr.FUN(B, functionType1);
    var functionType3 = new Blockly.TypeExpr.FUN(A, functionType2);
    this.appendValueInput('PARAM0')
        .setTypeExpr(functionType3)
        .appendField('List.fold_left2 ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.appendValueInput('PARAM2')
        .setTypeExpr(B_listType)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.appendValueInput('PARAM3')
        .setTypeExpr(C_listType)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var fun_type = this.callInfer('PARAM0', ctx);
    var arg_type1 = this.callInfer('PARAM1', ctx);
    var arg_type2 = this.callInfer('PARAM2', ctx);
    var arg_type3 = this.callInfer('PARAM3', ctx);
    var fun_expected = this.getInput('PARAM0').connection.typeExpr;
    var a_expected = this .getInput('PARAM1').connection.typeExpr;
    var blist_expected = this.getInput('PARAM2').connection.typeExpr;
    var clist_expected = this.getInput('PARAM3').connection.typeExpr;
    if (fun_type)
      fun_type.unify(fun_expected);
    if (arg_type1)
      arg_type1.unify(a_expected);
    if (arg_type2)
      arg_type2.unify(blist_expected);
    if (arg_type3)
      arg_type3.unify(clist_expected);
    return expected;
  }
}

Blockly.Blocks['list_fold_right2_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
      // List.fold_right2 : ('a -> 'b -> 'c -> 'c) -> 'a list -> 'b list -> 'c -> 'c
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var C = Blockly.TypeExpr.generateTypeVar();
    var A_listType = new Blockly.TypeExpr.LIST(A);
    var B_listType = new Blockly.TypeExpr.LIST(B);
    var funcType1 = new Blockly.TypeExpr.FUN(C, C);
    var funcType2 = new Blockly.TypeExpr.FUN(B, funcType1);
    var funcType3 = new Blockly.TypeExpr.FUN(A, funcType2);
    this.appendValueInput('PARAM0')
        .setTypeExpr(funcType3)
        .appendField('List.fold_right2 ');
    this.appendValueInput('PARAM1')
        .setTypeExpr(A_listType)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.appendValueInput('PARAM2')
        .setTypeExpr(B_listType)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.appendValueInput('PARAM3')
        .setTypeExpr(C)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(C);
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var fun_type = this.callInfer('PARAM0', ctx);
    var alist_type = this.callInfer('PARAM1', ctx);
    var blist_type = this.callInfer('PARAM2', ctx);
    var arg_type = this.callInfer('PARAM3', ctx);
    var fun_expected = this.getInput('PARAM0').connection.typeExpr;
    var alist_expected = this.getInput('PARAM1').connection.typeExpr;
    var blist_expected = this.getInput('PARAM2').connection.typeExpr;
    var arg_expected = this.getInput('PARAM3').connection.typeExpr;
    if (fun_type)
      fun_type.unify(fun_expected);
    if (alist_type)
      alist_type.unify(alist_expected);
    if (blist_type)
      blist_type.unify(blist_expected);
    if (arg_type)
      arg_type.unify(arg_expected);
    return expected;
  }
}

Blockly.Blocks['list_partition_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['LISTS_HUE']);
    var boolType = new Blockly.TypeExpr.BOOL();
    var elementType = Blockly.TypeExpr.generateTypeVar();
    var funType = new Blockly.TypeExpr.FUN(elementType, boolType);
    var listType = new Blockly.TypeExpr.LIST(elementType);
    var pairType = new Blockly.TypeExpr.TUPLE([listType, listType]);
    this.appendValueInput('PARAM0')
        .setTypeExpr(funType)
        .appendField('List.partition');
    this.appendValueInput('PARAM1')
        .setTypeExpr(listType);
    this.setOutput(true);
    this.setOutputTypeExpr(pairType);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.LIST_PARTITION_TOOLTIP);
  },

  infer: function(ctx) {
    var expectedPairType = this.outputConnection.typeExpr;
    var expectedListType = expectedPairType.firstType();
    var expectedElementType = expectedListType.element_type;
    var expectedFunType = new Blockly.TypeExpr.FUN(expectedElementType,
        new Blockly.TypeExpr.BOOL());
    var funType = this.callInfer('PARAM0', ctx);
    var listType = this.callInfer('PARAM1', ctx);
    if (funType) {
      expectedFunType.unify(funType);
    }
    if (listType) {
      expectedListType.unify(listType);
    }
    return expectedPairType;
  }
}

/**
 * module Random
 */

Blockly.Blocks['random_int_typed'] = {
/**
 * Block for Random.int function.
 * @this Blockly.Block
 */
  init: function() {
    this.setColour(Blockly.Msg['INT_HUE']);
    this.setOutput(true, 'Int');
    this.setOutputTypeExpr(new Blockly.TypeExpr.INT());
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.INT())
        .appendField('Random.int');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.RANDOM_INT_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = new Blockly.TypeExpr.INT();
    var arg = this.callInfer('PARAM0', ctx);
    if (arg)
      arg.unify(expected);
    return expected;
  }
};

Blockly.Blocks['random_float_typed'] = {
  /**
   * Block for Random.float function.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Msg['FLOAT_HUE']);
    this.setOutput(true, 'Float');
    this.setOutputTypeExpr(new Blockly.TypeExpr.FLOAT());
    this.appendValueInput('PARAM0')
        .setTypeExpr(new Blockly.TypeExpr.FLOAT())
        .appendField('Random.float');
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.RANDOM_FLOAT_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = new Blockly.TypeExpr.FLOAT();
    var arg = this.callInfer('PARAM0', ctx);
    if (arg)
      arg.unify(expected);
    return expected;
  }
};

/**
 * Pairs
 */

Blockly.Blocks['pair_create_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PAIRS_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    this.appendValueInput('FIRST')
        .setTypeExpr(A)
        .appendField('(');
    this.appendValueInput('SECOND')
        .setTypeExpr(B)
        .appendField(',');
    this.appendDummyInput()
        .appendField(')');
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.TUPLE(A, B));
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var first = this.callInfer('FIRST', ctx);
    var second = this.callInfer('SECOND', ctx);
    if (first)
      first.unify(expected.firstType());
    if (second)
      second.unify(expected.secondType());
    return expected;
  }
};

Blockly.Blocks['pair_first_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PAIRS_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var pair_t = new Blockly.TypeExpr.TUPLE(A, B);
    this.appendValueInput('FIRST')
        .setTypeExpr(pair_t)
        .appendField('fst (');
    this.appendDummyInput()
        .appendField(')');
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PAIR_GET_FIRST_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expected_arg = this.getInput('FIRST').connection.typeExpr;
    var arg = this.callInfer('FIRST', ctx);
    if (arg) {
      arg.unify(expected_arg);
    }
    return expected;
  }
};

Blockly.Blocks['pair_second_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PAIRS_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var pair_t = new Blockly.TypeExpr.TUPLE(A, B);
    this.appendValueInput('SECOND')
        .setTypeExpr(pair_t)
        .appendField('snd (');
    this.appendDummyInput()
        .appendField(')');
    this.setOutput(true);
    this.setOutputTypeExpr(B);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.PAIR_GET_SECOND_TOOLTIP);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var expected_arg = this.getInput('SECOND').connection.typeExpr;
    var arg = this.callInfer('SECOND', ctx);
    if (arg) {
      arg.unify(expected_arg);
    }
    return expected;
  }
};

Blockly.Blocks['function_app_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['VARIABLES_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.FieldBoundVariable.newReference(A), 'VAR')

    this.paramFixed_ = false;
    this.paramCount_ = 0;
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(A);
  },

  /**
   * Update the type expressions of bound-variable fields on this block.
   * Would be called if the block's type expressions are replaced with other
   * ones, and a type expression this field's variable refers to is no longer
   * up-to-date.
   * @param {Blockly.Block} block The source block to replace this block with.
   *     Could be used to additionally replace the type expression of fields.
   */
  typeExprReplaced: function(block) {
    var variable = this.typedReference['VAR'];
    var typeOwner = block ? block.typedReference['VAR'] : null;

    if (typeOwner) {
      variable.setTypeExpr(typeOwner.getTypeExpr());
    } else {
      variable.setTypeExpr(null);
    }
  },

  resizeStructure: function(newParamCount) {
    var variable = this.typedReference['VAR'];
    while (newParamCount < this.paramCount_) {
      var index = this.paramCount_ - 1;
      this.removeInput('PARAM' + index);
      this.paramCount_--;
    }
    if (this.paramFixed_) {
      this.paramFixed_ = false;
    } else {
      for (var i = 0; i < newParamCount; i++) {
        var inputName = 'PARAM' + i;
        if (this.paramCount_ <= i) {
          var rendered = this.rendered;
          this.rendered = false;
          this.appendValueInput(inputName);
          this.rendered = rendered;
          this.paramCount_++;
        }
      }
    }
  },

  updateStructure: function() {
    var variable = this.typedReference['VAR'];
    var currentValue = variable.getBoundValue();
    if (currentValue && currentValue.getMainFieldName() === 'VAR') {
      // resize only when variable is a function (not an argument)
      var newParamCount = currentValue.sourceBlock_.argumentCount_;
      this.resizeStructure(newParamCount);
    }
    this.updateFunArgTypes();
    // if updateFunArgTypes is not called, f will have higher-order type
  },

  // Can be called after binding is resolved.
  updateFunArgTypes: function() {
    var variable = this.typedReference['VAR'];
    var type = variable.getTypeExpr();
    var types = Blockly.TypeExpr.functionToArray(type);
    //goog.asserts.assert(2 <= types.length, 'Function type is expected.');

    if (2 <= types.length) {
      var returnType = types.pop();
      var argTypes = types;
    } else {
      var returnType = type;
      var argTypes = [];
    }

    while (argTypes.length < this.paramCount_) {
      var t1 = Blockly.TypeExpr.generateTypeVar();
      var t2 = Blockly.TypeExpr.generateTypeVar();
      returnType.unify(new Blockly.TypeExpr.FUN(t1, t2));
      argTypes.push(t1);
      returnType = t2;
    }
    for (var i = 0; i < this.paramCount_; i++) {
      var inputName = 'PARAM' + i;
      var input = this.getInput(inputName);
      if (input) {
        var type = argTypes.shift();
        input.setTypeExpr(type, true);
      }
    }
    if (0 < argTypes.length) {
      argTypes.push(returnType);
      returnType = Blockly.TypeExpr.createFunType(argTypes);
    }
    this.setOutputTypeExpr(returnType, true);
  },

  increaseDecreaseHole: function(delta) {
    this.paramFixed_ = false;
    this.resizeStructure(this.paramCount_ + delta);

    this.updateTypeInference();
    this.workspace.renderTypeChangedWorkspaces();
  },

  customContextMenu: function(options) {
    if (this.isInFlyout) {
      return;
    }

    // TODO: Enable only when increasing/decreasing a hole is type safe.
    var option = {enabled: true};
    option.text = Blockly.Msg['INCREASE_HOLE'];
    option.callback = this.increaseDecreaseHole.bind(this, 1);
    options.push(option);

    var isEnabled = 0 < this.paramCount_;
    var option = {enabled: isEnabled};
    option.text = Blockly.Msg['DECREASE_HOLE'];
    option.callback = this.increaseDecreaseHole.bind(this, -1);
    options.push(option);
    // TODO: When a hole is removed, remove the block inside the hole, too.
  },

  /**
   * Create XML to represent application inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('params', this.paramCount_);
    return container;
  },

  /**
   * Parse XML to restore the application inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    // xmlElement = <mutation params="n"></mutation>
    // where n is the number of arguments.
    // returns an application block with n arguments
    var newParamCount = parseInt(xmlElement.getAttribute('params'), 10);
    // Remove params.  Necessary if paramCount_ is set to >0 in init.
    while (newParamCount < this.paramCount_) {
      var index = --this.paramCount_;
      this.removeInput('PARAM' + index);
    }
    // The type of the reference value might not be determined yet. For such
    // cases (e.g., [let f x y = <> in f <[0]> <[0]>]), append dummy parameter
    // inputs.
    for (var i = this.paramCount_; i < newParamCount; i++) {
      var inputName = 'PARAM' + i;
      var rendered = this.rendered;
      this.rendered = false;
      var input = this.appendValueInput(inputName);
      input.setTypeExpr(Blockly.TypeExpr.generateTypeVar());
      this.rendered = rendered;
      this.paramCount_++;
    }
    this.paramFixed_ = true;
    this.setOutputTypeExpr(Blockly.TypeExpr.generateTypeVar(), true);
  },

  clearInnerTypes: function() {
    this.typedReference['VAR'].getTypeExpr().clear();
  },

  infer: function(ctx) {
    var variable = this.typedReference['VAR'];
    var varName = variable.getVariableName();
    var schemeInEnv = ctx.getTypeInEnv(varName);
    if (schemeInEnv) {
      // Fix: let rec c = ... c
      schemeInEnv.unify(variable.getTypeExpr());
      this.updateFunArgTypes();
    } else if (ctx.canUnifyOrphan()) {
      variable.unifyTypeExpr();
      this.updateFunArgTypes();
    }

    for (var i = 0; i < this.paramCount_; i++) {
      var paramType = this.callInfer('PARAM' + i, ctx);
      var input = this.getInput('PARAM' + i);
      var expectedParamType = input.connection.typeExpr;
      if (paramType) {
        expectedParamType.unify(paramType);
      }
    }
    return this.outputConnection.typeExpr;
  }
},

Blockly.Blocks['lambda_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['HIGHER_ORDER_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    var variable_field = Blockly.FieldBoundVariable.newValue(A);
    this.appendDummyInput()
        .appendField('fun ')
        .appendField(variable_field, 'VAR');
    this.appendValueInput('RETURN')
        .setTypeExpr(B)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField('->')
        .setWorkbench(new Blockly.Workbench());
    this.setOutput(true);
    this.setOutputTypeExpr(new Blockly.TypeExpr.FUN(A, B));
  },

  /**
   * Update the type expressions of bound-variable fields on this block.
   * Would be called if the block's type expressions are replaced with other
   * ones, and a type expression this field's variable refers to is no longer
   * up-to-date.
   * @param {Blockly.Block} block The source block to replace this block with.
   *     Could be used to additionally replace the type expression of fields.
   */
  typeExprReplaced: function(block) {
    var outputType = this.outputConnection.typeExpr;
    var argType = outputType ? outputType.arg_type : null;
    var variable = this.typedValue['VAR'];
    variable.setTypeExpr(argType);
  },

  /**
   * Store variables of which is declared in this block, and can be used
   * later the given connection's input.
   * @param {!Blockly.Connection} connection Connection to specify a scope.
   * @param {!Blockly.Block.VariableContext} ctx The variable context.
   */
  updateVariableEnv: function(conn, ctx) {
    var returnInput = this.getInput('RETURN');
    if (conn && returnInput.connection == conn) {
      var variable = this.typedValue['VAR'];
      ctx.addVariable(variable);
    }
  },

  getTypeScheme: function(fieldName) {
    var scheme = null;
    if (fieldName === 'VAR') {
      var variable = this.typedValue['VAR'];
      var outType = this.outputConnection.typeExpr;
      goog.asserts.assert(outType.arg_type == variable.getTypeExpr());
      scheme = Blockly.Scheme.monoType(outType.arg_type);
    }
    return scheme;
  },

  clearInnerTypes: function() {
    var variable = this.typedValue['VAR'];
    goog.asserts.assert(this.outputConnection.typeExpr.arg_type ==
        variable.getTypeExpr());
    variable.getTypeExpr().clear();
  },

  infer: function(ctx) {
    var variable = this.typedValue['VAR'];
    var var_name = variable.getVariableName();
    var expected = this.outputConnection.typeExpr;
    var ctx2 = ctx.copy();
    ctx2.addTypeToEnv(var_name, Blockly.Scheme.monoType(expected.arg_type));
    var return_type = this.callInfer('RETURN', ctx2);
    if (return_type)
      return_type.unify(expected.return_type);
    return expected;
  }
}

Blockly.Blocks['lambda_app_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['HIGHER_ORDER_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    this.appendValueInput('FUN')
        .setTypeExpr(new Blockly.TypeExpr.FUN(A, B))
    this.appendValueInput('ARG')
        .setTypeExpr(A)
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(' ');
    this.setInputsInline(true);
    this.setOutput(true);
    this.setOutputTypeExpr(B);
    this.setInputsInline(true);
  },

  infer: function(ctx) {
    var expected = this.outputConnection.typeExpr;
    var fun_expected = this.getInput('FUN').connection.typeExpr;
    var fun_type = this.callInfer('FUN', ctx);
    var arg_type = this.callInfer('ARG', ctx);
    if (fun_type)
      fun_type.unify(fun_expected);
    if (arg_type)
      arg_type.unify(fun_expected.arg_type);
    return expected;
  }
}

Blockly.Blocks['match_typed'] = {
  init: function() {
    this.setColour(Blockly.Msg['PROCEDURES_HUE']);

    var A = Blockly.TypeExpr.generateTypeVar();
    var B = Blockly.TypeExpr.generateTypeVar();
    this.appendDummyInput()
        .appendField('match');
    this.appendValueInput('INPUT')
        .setTypeExpr(A);
    this.appendDummyInput()
        .appendField('with')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setOutput(true);
    this.setOutputTypeExpr(B);

    this.itemCount_ = 0;
    this.appendPatternInput();

    this.setInputsInline(false);
    this.setMutator(new Blockly.Mutator(['match_pattern_item']));
    this.setWorkbench(new Blockly.PatternWorkbench());
  },

  updateVariableEnv: function(conn, ctx) {
    if (!conn) {
      return;
    }
    var target = null;
    for (var i = 0; i < this.itemCount_; i++) {
      var outputConn = this.getInput('OUTPUT' + i).connection;
      if (outputConn == conn) {
        target = this.getInputTargetBlock('PATTERN' + i);
        break;
      }
    }
    if (target && goog.isFunction(target.updateUpperContext)) {
      target.updateUpperContext(ctx); // obtain pattern variables
    }
  },

  appendPatternInput: function() {
    var inputType = this.getInput('INPUT').connection.typeExpr;
    var index = this.itemCount_++;
    this.appendValueInput('PATTERN' + index)
        .setTypeExpr(new Blockly.TypeExpr.PATTERN(inputType));
    var input = this.appendValueInput('OUTPUT' + index)
        .setTypeExpr(this.outputConnection.typeExpr)
        .appendField('->')
        .setAlign(Blockly.ALIGN_RIGHT)
        .setWorkbench(new Blockly.Workbench());
    return input;
  },

  resizePatternInput: function(expectedCount) {
    // Stop rendering to avoid rendering objects which are already destroyed.
    var storedRendered = this.rendered;
    this.rendered = false;
    while (expectedCount < this.itemCount_) {
      var index = this.itemCount_ - 1;
      var outputInput = this.getInput('OUTPUT' + index);
      var workbench = outputInput.connection.contextWorkbench;
      // dispose outputBlock
      var outputConnection = outputInput.connection;
      var outputBlock = outputConnection.targetBlock();
      if (outputBlock) {
        outputConnection.disconnect();
        outputBlock.dispose();
        // We have to dispose the block, because the scope workbench
        // is disposed, too, and is no longer existent.
      }
      // dispose pattern
      var patternInput = this.getInput('PATTERN' + index);
      var patternConnection = patternInput.connection;
      var patternBlock = patternConnection.targetBlock();
      if (patternBlock) {
        patternConnection.disconnect();
        patternBlock.dispose();
        // TODO: move the block to type workbench rather than dispose.
      }
      // Decrement the size of items first. The function this.removeInput()
      // might disconnect some blocks from this block, and disconnecting blocks
      // triggers type inference, which causes a null pointer exception. To
      // avoid the type inference for the removed input, update the size of
      // items first.
      this.itemCount_--;
      this.removeInput('PATTERN' + index);
      this.removeInput('OUTPUT' + index);
      // dispose workbench.  Have to dispose after removing Inputs to
      // avoid a null pointer exception (the one different from the
      // above comment).
      workbench && workbench.dispose();
    }
    this.rendered = storedRendered;
    while (this.itemCount_ < expectedCount) {
      this.appendPatternInput();
    }
  },

  /**
   * Create XML to represent pattern inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.itemCount_);
    return container;
  },
  /**
   * Parse XML to restore the pattern inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var newItemCount = parseInt(xmlElement.getAttribute('items')) || 2;
    this.resizePatternInput(newItemCount);
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('match_pattern_container');
    containerBlock.initSvg();
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.itemCount_; x++) {
      var itemBlock = workspace.newBlock('match_pattern_item');
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
    this.resizePatternInput(itemCount);
  },

  /**
   * Would this block be changed based on the mutator blocks?
   * @this Blockly.Block
   */
  wouldChange: function(containerBlock) {
    return containerBlock.getItemCount() != this.itemCount_;
  },

  isAutoMatchAvailable: function(name) {
    var inputType = this.getInput('INPUT').connection.typeExpr;
    switch (name) {
      case 'list':
        var A = Blockly.TypeExpr.generateTypeVar();
        return inputType.ableToUnify(new Blockly.TypeExpr.LIST(A));
      case 'pair':
        var A = Blockly.TypeExpr.generateTypeVar();
        var B = Blockly.TypeExpr.generateTypeVar();
        return inputType.ableToUnify(new Blockly.TypeExpr.TUPLE(A, B));
      default:
        return false;
    }
  },

  applyAutoMatch: function(name) {
    var patternValueNames;
    switch (name) {
      case 'list':
        this.mutator.setVisible(false);
        this.resizePatternInput(2);
        // Initialize icons SVG.
        this.initSvg();
        // set pattern for empty
        var xml = Blockly.PatternWorkbench.createEmptyListDom();
        var valueBlock = Blockly.Xml.domToBlock(xml, this.workspace, true);
        valueBlock.initSvg();
        valueBlock.render();
        var patternConn = this.getInput('PATTERN' + 0).connection;
        patternConn.connect(valueBlock.outputConnection);
        // set pattern for cons
        var b1 = Blockly.PatternWorkbench.createVariableDom('first', 'true');
        var v1 = Blockly.PatternWorkbench.createValueDom('FIRST', b1);
        var b2 = Blockly.PatternWorkbench.createVariableDom('rest', 'true');
        var v2 = Blockly.PatternWorkbench.createValueDom('CONS', b2);
        var xml = Blockly.PatternWorkbench.createConsDom([v1, v2]);
        var valueBlock = Blockly.Xml.domToBlock(xml, this.workspace, true);
        valueBlock.initSvg();
        valueBlock.render();
        var patternConn = this.getInput('PATTERN' + 1).connection;
        patternConn.connect(valueBlock.outputConnection);
        break;
      case 'pair':
        this.mutator.setVisible(false);
        this.resizePatternInput(1);
        // Initialize icons SVG.
        this.initSvg();
        // set pattern
        var b1 = Blockly.PatternWorkbench.createVariableDom('a', 'true');
        var v1 = Blockly.PatternWorkbench.createValueDom('LEFT', b1);
        var b2 = Blockly.PatternWorkbench.createVariableDom('b', 'true');
        var v2 = Blockly.PatternWorkbench.createValueDom('RIGHT', b2);
        var xml = Blockly.PatternWorkbench.createPairDom([v1, v2]);
        var valueBlock = Blockly.Xml.domToBlock(xml, this.workspace, true);
        valueBlock.initSvg();
        valueBlock.render();
        var patternConn = this.getInput('PATTERN' + 0).connection;
        patternConn.connect(valueBlock.outputConnection);
        break;
      default:
        goog.asserts.fail('Unknown auto match operator.');
    }
  },

  customContextMenu: function(options) {
    if (this.isInFlyout) {
      return;
    }
    var patternAlreadyConnected = false;
    for (var i = 0; i < this.itemCount_; i++) {
      if (this.getInputTargetBlock('PATTERN' + i)) {
        patternAlreadyConnected = true;
      }
    }
    var autoMatchNames = ['list', 'pair'];
    for (var i = 0, name; name = autoMatchNames[i]; i++) {
      var isEnabled =
          patternAlreadyConnected ? false : this.isAutoMatchAvailable(name);
      var option = {enabled: isEnabled, text: 'Auto match ' + name};
      if (isEnabled) {
        option.callback = this.applyAutoMatch.bind(this, name);
      }
      options.push(option);
    }
  },

  infer: function(ctx) {
    var inputExpected = this.getInput('INPUT').connection.typeExpr;
    var inputType = this.callInfer('INPUT', ctx);
    if (inputType)
      inputExpected.unify(inputType);

    var expected = this.outputConnection.typeExpr;
    for (var i = 0; i < this.itemCount_; i++) {
      var patternType = this.callInfer('PATTERN' + i, ctx);
      var outputType = this.callInfer('OUTPUT' + i, ctx);
      var expectedPatternType = this.getInput('PATTERN' + i).connection.typeExpr;
      var expectedOutputType = this.getInput('OUTPUT' + i).connection.typeExpr;
      goog.asserts.assert(expected === expectedOutputType);

      if (patternType)
        expectedPatternType.unify(patternType);
      if (outputType)
        expectedOutputType.unify(outputType);
    }
    return expected;
  }
}

/**
 * Typed variables
 */

Blockly.Blocks['variables_get_typed'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(Blockly.Msg['VARIABLES_HUE']);
    var A = Blockly.TypeExpr.generateTypeVar();
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        .appendField(Blockly.FieldBoundVariable.newReference(A), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true);
    this.setOutputTypeExpr(A);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
  },

  /**
   * Update the type expressions of bound-variable fields on this block.
   * Would be called if the block's type expressions are replaced with other
   * ones, and a type expression this field's variable refers to is no longer
   * up-to-date.
   * @param {Blockly.Block} block The source block to replace this block with.
   *     Could be used to additionally replace the type expression of fields.
   */
  typeExprReplaced: function(block) {
    var A = this.outputConnection.typeExpr;
    var variable = this.typedReference['VAR'];
    variable.setTypeExpr(A);
  },

  clearInnerTypes: function() {
    var variable = this.typedReference['VAR'];
    goog.asserts.assert(this.outputConnection.typeExpr ==
        variable.getTypeExpr());

    variable.getTypeExpr().clear();
  },

  infer: function(ctx) {
    var variable = this.typedReference['VAR'];
    var expected = this.outputConnection.typeExpr;
    var varName = variable.getVariableName();

    var schemeInEnv = ctx.getTypeInEnv(varName);
    var scheme;
    if (schemeInEnv) {
      // Fix: let rec c = <c> + c.
      // If this is recursive reference on the exp1, unifyTypeExpr() does not
      // work correctly because getTypeScheme() always return null.
      schemeInEnv.unify(variable.getTypeExpr());
      // TODO(harukam): Check the equality between a type scheme in existing
      // in the env and that of the binding value.
    } else if (ctx.canUnifyOrphan()) {
      variable.unifyTypeExpr();
    }
    goog.asserts.assert(expected == variable.getTypeExpr());
    return expected;
  }
};

Blockly.Blocks['let_typed'] = {
  /**
   * Block for let expression (original).
   * @param {boolean} opt_recur True if declare recursive function.
   * @this Blockly.Block
   */
  init: function(opt_recur, opt_statement) {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(Blockly.Msg['VARIABLES_HUE']);
    var varType = Blockly.TypeExpr.generateTypeVar();
    var exp1Type = Blockly.TypeExpr.generateTypeVar();
    var exp2Type = Blockly.TypeExpr.generateTypeVar();
    var variable_field = Blockly.FieldBoundVariable.newValue(varType);
    this.appendDummyInput('VARIABLE')
        .appendField('let', 'LET_LABEL')
        .appendField(variable_field, 'VAR')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('EXP1')
        .setTypeExpr(exp1Type)
        .appendField('=')
        .setWorkbench(new Blockly.Workbench())
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setMutator(new Blockly.Mutator(['parameters_arg_item']));
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.DEFINE_VARIABLE_TOOLTIP);

    var defaultRecFlag = opt_recur === true;
    this.isRecursive_ = false;
    this.setRecursiveFlag(defaultRecFlag);
    this.setIsStatement(opt_statement === true);

    this.argumentCount_ = 0;
    exp1Type.unify(varType);

    /**
     * The object mapping name of variable field to the type scheme which was
     * created while the latest type inference were triggered on this block.
     * @type {!Object}
     */
    this.lastTypeScheme_ = {'VAR': Blockly.Scheme.monoType(varType)};
  },

  /**
   * Update the type expressions of bound-variable fields on this block.
   * Would be called if the block's type expressions are replaced with other
   * ones, and a type expression this field's variable refers to is no longer
   * up-to-date.
   * @param {Blockly.Block} block The source block to replace this block with.
   *     Could be used to additionally replace the type expression of fields.
   */
  typeExprReplaced: function(block) {
    var variable = this.typedValue['VAR'];
    var typeOwner = block ? block.typedValue['VAR'] : null;

    if (typeOwner) {
      variable.setTypeExpr(typeOwner.getTypeExpr());
    } else {
      variable.setTypeExpr(null);
    }
  },

  /**
   * Store variables of which is declared in this block, and can be used
   * later the given connection's input.
   * @param {!Blockly.Connection} connection Connection to specify a scope.
   * @param {!Blockly.Block.VariableContext} ctx The variable context.
   */
  updateVariableEnv: function(conn, ctx) {
    if (!conn) {
      return;
    }
    var isExp1 = this.getInput('EXP1').connection == conn;
    var isNext = !isExp1 && this.nextConnection == conn;
    var isExp2 = !isExp1 && !isNext &&
        this.getInput('EXP2').connection == conn;

    if (isNext || isExp2 || isExp1 && this.isRecursive_) {
      var variable = this.typedValue['VAR'];
      var name = variable.getVariableName();
      ctx.addVariable(variable);
    }
    if (isExp1) {
      for (var x = 0; x < this.argumentCount_; x++) {
        var variable = this.typedValue['ARG' + x];
        var name = variable.getVariableName();
        ctx.addVariable(variable);
      }
    }
  },

  getTypeScheme: function(fieldName, opt_reference) {
    if (fieldName.startsWith('ARG')) {
      var numstr = fieldName.substring(3);
      var x = parseInt(numstr);
      if (!isNaN(x) && x < this.argumentCount_) {
        var argname = 'ARG' + x;
        var argv = this.typedValue[argname];
        return Blockly.Scheme.monoType(argv.getTypeExpr());
      }
    }
    if (fieldName !== 'VAR') {
      return null;
    }
    if ('REC_VAR' in this.lastTypeScheme_ && opt_reference) {
      var refs = this.getRecursiveReferences();
      if (refs.indexOf(opt_reference) != -1) {
        return this.lastTypeScheme_['REC_VAR'];
      }
    }
    return this.lastTypeScheme_['VAR'];
  },

  canToggleIsStatement: function() {
    if (this.isStatement_) {
      return !this.previousConnection.isConnected() &&
          !this.nextConnection.isConnected();
    }
    return !this.outputConnection.isConnected();
  },

  getIsStatement: function() {
    return this.isStatement_;
  },

  setIsStatement: function(newIsStatement) {
    if (this.isStatement_ == newIsStatement) {
      return;
    }
    var storedRendered = this.rendered;
    this.rendered = false;
    if (newIsStatement) {
      var exp2Input = this.getInput('EXP2');
      if (exp2Input) {
        var workbench = exp2Input.connection.contextWorkbench;
        workbench && workbench.dispose();
        this.removeInput('EXP2');
      }
      this.setOutput(false);
      this.setTypedStatements(true);
    } else {
      this.setTypedStatements(false);
      this.setOutput(true);
      var exp2Type = Blockly.TypeExpr.generateTypeVar();
      this.appendValueInput('EXP2')
          .setTypeExpr(exp2Type)
          .appendField('in')
          .setWorkbench(new Blockly.Workbench())
          .setAlign(Blockly.ALIGN_RIGHT);
      // Initialize SVG icon.
      this.initSvg && this.initSvg();
      this.setOutputTypeExpr(exp2Type);
    }
    this.rendered = storedRendered;
    if (this.rendered) {
      this.render();
    }
    this.isStatement_ = newIsStatement;
  },

  isRecursive: function() {
    return this.isRecursive_;
  },

  setRecursiveFlag: function(flag) {
    if (this.isRecursive_ != flag) {
      var input = this.getInput('VARIABLE');
      if (flag) {
        var recLabel = new Blockly.FieldLabel('rec');
        input.insertFieldAt(1, recLabel, 'REC_LABEL');
        this.setTooltip(Blockly.Msg.DEFINE_LET_REC_TOOLTIP);
      } else {
        var refs = this.getRecursiveReferences();
        for (var i = 0, ref; ref = refs[i]; i++) {
          ref.getSourceBlock().dispose();
        }
        input.removeField('REC_LABEL');
        this.setTooltip(Blockly.Msg.DEFINE_LET_REC_TOOLTIP);
      }
      this.isRecursive_ = flag;

      if (this.rendered) {
        this.render();
        this.updateWorkbenchFlyout();
      }
    }
  },

  getRecursiveReferences: function() {
    var variable = this.typedValue['VAR']
    var inputExp1 = this.getInput('EXP1');
    if (!inputExp1) {
      return [];
    }
    return Blockly.BoundVariables.findReferencesInside(variable, inputExp1.connection);
  },

  customContextMenu: function(options) {
    if (this.isInFlyout) {
      return;
    }
    var canBeToggled = true;
    // It's possible to set canBeToggled false if this.getRecursiveReferences()
    // returns non empty array.
    var option = {enabled: canBeToggled};
    if (this.isRecursive_) {
      option.text = Blockly.Msg['REMOVE_REC'];
    } else {
      option.text = Blockly.Msg['ADD_REC'];
    }
    option.callback = this.setRecursiveFlag.bind(this, !this.isRecursive_);
    options.push(option);

    var option = {enabled: this.canToggleIsStatement()};
    if (this.isStatement_) {
      option.text = Blockly.Msg['ADD_IN'];
    } else {
      option.text = Blockly.Msg['REMOVE_IN'];
    }
    option.callback = this.setIsStatement.bind(this, !this.isStatement_);
    options.push(option);
  },

  /**
   * Create XML to represent argument inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    for (var x = 0; x < this.argumentCount_; x++) {
      var itemDom = document.createElement('item');
      var variable = this.typedValue['ARG' + x];
      var textNode = document.createTextNode(variable.getVariableName());
      itemDom.appendChild(textNode);
      container.appendChild(itemDom);
    }
    return container;
  },
  /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var input = this.getInput('VARIABLE');
    var fields = [].concat(input.fieldRow);
    for (var i = 0, field; field = fields[i]; i++) {
      if (!field.name.startsWith('ARG')) {
        continue;
      }
      goog.array.remove(input.fieldRow, field);
      field.dispose(true);
    }
    var childNodes = xmlElement.childNodes;
    this.argumentCount_ = childNodes.length;
    for (var x = 0; x < this.argumentCount_; x++) {
      var text = childNodes[x].textContent;
      var A = Blockly.TypeExpr.generateTypeVar();
      var field = Blockly.FieldBoundVariable.newValue(A);

      input.appendField(field, 'ARG' + x);
      if (this.rendered) {
        field.init();
      } else {
        field.initModel();
      }
    }
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('parameters_arg_container');
    if (containerBlock.initSvg) {
      containerBlock.initSvg();
    }
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.argumentCount_; x++) {
      var itemBlock = workspace.newBlock('parameters_arg_item');
      if (itemBlock.initSvg) {
        itemBlock.initSvg();
      }
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
    var input = this.getInput('VARIABLE');
    var contextChanged = itemCount != this.argumentCount_;

    while (itemCount < this.argumentCount_) {
      var index = this.argumentCount_ - 1;
      var name = 'ARG' + index;
      var field = this.getField(name);
      field.dispose(true);
      goog.array.remove(input.fieldRow, field);
      this.argumentCount_--;
    }
    while (this.argumentCount_ < itemCount) {
      var A = Blockly.TypeExpr.generateTypeVar();
      var field = Blockly.FieldBoundVariable.newValue(A);
      input.appendField(field, 'ARG' + this.argumentCount_);
      if (this.rendered) {
        field.init();
      } else {
        field.initModel();
      }
      this.argumentCount_++;
    }
    if (contextChanged) {
      var variable = this.typedValue['VAR'];
      variable.updateReferenceStructure();
      this.updateTypeInference(true);
      // Do not call the following functions. Newly created fields are not
      // initialized yet. They will be called by mutator instance after the
      // fields initialization.
      //   this.updateWorkbenchFlyout();
      //   this.workspace.renderTypeChangedWorkspaces();
    }
  },
  /**
   * Find if this block is currently able to be mutated by user.
   * @return {boolean} True if this block can accept an additional argument.
   * @this Blockly.Block
   */
  canBeMutated: function() {
    var typeExpr = this.typedValue['VAR'].getTypeExpr();
    var type = typeExpr.deref();
    if (type.isTypeVar()) {
      return true;
    }
  },
  /**
   * Would this block be changed based on the mutator blocks?
   * @this Blockly.Block
   */
  wouldChange: function(containerBlock) {
    return containerBlock.getItemCount() != this.argumentCount_;
  },

  clearInnerTypes: function() {
    this.typedValue['VAR'].getTypeExpr().clear();
    for (var x = 0; x < this.argumentCount_; x++) {
      var variable = this.typedValue['ARG' + x];
      variable.getTypeExpr().clear();
    }
    delete this.lastTypeScheme_['VAR'];
    delete this.lastTypeScheme_['REC_VAR'];
  },

  infer: function(ctx) {
    var variable = this.typedValue['VAR'];
    var var_name = variable.getVariableName();
    var expected_exp1 = this.getInput('EXP1').connection.typeExpr;

    if (this.argumentCount_ == 0) {
      var exp1Type = this.getInput('EXP1').connection.typeExpr;
      var varType = this.typedValue['VAR'].getTypeExpr();
      exp1Type.unify(varType);
    } else {
      var funTypes = [];
      for (var x = 0; x < this.argumentCount_; x++) {
        var argVar = this.typedValue['ARG' + x];
        funTypes.push(argVar.getTypeExpr());
      }
      funTypes.push(expected_exp1);
      var funType = Blockly.TypeExpr.createFunType(funTypes);
      variable.getTypeExpr().unify(funType);
    }
    // Create the context for the EXP1 input.
    var ctx1 = ctx.copy();
    var monoScheme = Blockly.Scheme.monoType(variable.getTypeExpr());
    if (this.isRecursive_) {
      ctx1.addTypeToEnv(var_name, monoScheme);
    }
    for (var x = 0; x < this.argumentCount_; x++) {
      var argVar = this.typedValue['ARG' + x];
      var varName = argVar.getVariableName();
      var argScheme = Blockly.Scheme.monoType(argVar.getTypeExpr());
      ctx1.addTypeToEnv(varName, argScheme);
    }
    var exp1 = this.callInfer('EXP1', ctx1);

    if (exp1)
      exp1.unify(expected_exp1);

    var applyPolyType = variable.getTypeExpr().deref().isFunction();
    var schemeForExp2;
    var ctx2 = ctx.copy();
    if (applyPolyType) {
      if (this.isRecursive_) {
        // Prevent recursive reference blocks to be unified with poly-type.
        // All of recursive reference must be mono-type.
        this.lastTypeScheme_['REC_VAR'] = monoScheme;
      }
      schemeForExp2 = ctx.createPolyType(variable.getTypeExpr());
    } else {
      schemeForExp2 = monoScheme;
    }
    this.lastTypeScheme_['VAR'] = schemeForExp2;

    ctx2.addTypeToEnv(var_name, schemeForExp2);
    if (this.isStatement_) {
      this.callInfer(this.nextConnection, ctx2);
      return null;
    }

    var expected_exp2 = this.getInput('EXP2').connection.typeExpr;
    var exp2 = this.callInfer('EXP2', ctx2);
    if (exp2)
      exp2.unify(expected_exp2);

    return expected_exp2;
  }
};

Blockly.Blocks['let_fun_pattern_typed'] = {
  /**
   * Block for let expression
   * Function definition whose arguments are patterns
   * @param {boolean} opt_recur True if declare recursive function.
   * @this Blockly.Block
   */
  init: function(opt_recur, opt_statement) {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(Blockly.Msg['VARIABLES_HUE']);
    var varType = Blockly.TypeExpr.generateTypeVar();
    var exp1Type = Blockly.TypeExpr.generateTypeVar();
    var exp2Type = Blockly.TypeExpr.generateTypeVar();
    var variable_field = Blockly.FieldBoundVariable.newValue(varType);
    this.appendDummyInput('VARIABLE')
        .appendField('let', 'LET_LABEL')
        .appendField(variable_field, 'VAR')
        .setAlign(Blockly.ALIGN_RIGHT);
    this.appendValueInput('EXP1')
        .setTypeExpr(exp1Type)
        .appendField('=')
        .setWorkbench(new Blockly.Workbench())
        .setAlign(Blockly.ALIGN_RIGHT);
    this.setMutator(new Blockly.Mutator(['parameters_arg_item']));
    this.setWorkbench(new Blockly.PatternWorkbench());
    this.setInputsInline(false);
    this.setTooltip(Blockly.Msg.DEFINE_VARIABLE_TOOLTIP);

    var defaultRecFlag = opt_recur === true;
    this.isRecursive_ = false;
    this.setRecursiveFlag(defaultRecFlag);
    this.setIsStatement(opt_statement === true);

    this.argumentCount_ = 0;
    exp1Type.unify(varType);

    /**
     * The object mapping name of variable field to the type scheme which was
     * created while the latest type inference were triggered on this block.
     * @type {!Object}
     */
    this.lastTypeScheme_ = {'VAR': Blockly.Scheme.monoType(varType)};
  },

  /**
   * Update the type expressions of bound-variable fields on this block.
   * Would be called if the block's type expressions are replaced with other
   * ones, and a type expression this field's variable refers to is no longer
   * up-to-date.
   * @param {Blockly.Block} block The source block to replace this block with.
   *     Could be used to additionally replace the type expression of fields.
   */
  typeExprReplaced: function(block) {
    var variable = this.typedValue['VAR'];
    var typeOwner = block ? block.typedValue['VAR'] : null;

    if (typeOwner) {
      variable.setTypeExpr(typeOwner.getTypeExpr());
    } else {
      variable.setTypeExpr(null);
    }
  },

  /**
   * Store variables of which is declared in this block, and can be used
   * later the given connection's input.
   * @param {!Blockly.Connection} connection Connection to specify a scope.
   * @param {!Blockly.Block.VariableContext} ctx The variable context.
   */
  updateVariableEnv: function(conn, ctx) {
    if (!conn) {
      return;
    }
    var isArg = false;
    for (var x = 0; x < this.argumentCount_; x++) {
      if (this.getInput('ARG' + x).connection == conn) {
        isArg = true;
        break;
      }
    }
    var isExp1 = !isArg && this.getInput('EXP1').connection == conn;
    var isNext = !isArg && !isExp1 && this.nextConnection == conn;
    var isExp2 = !isArg && !isExp1 && !isNext && !this.isStatement_ &&
        this.getInput('EXP2').connection == conn;

    if (isNext || isExp2 || isExp1 && this.isRecursive_) {
      var variable = this.typedValue['VAR'];
      var name = variable.getVariableName();
      ctx.addVariable(variable);
    }
    if (isExp1) {
      for (var x = 0; x < this.argumentCount_; x++) {
        var target = this.getInputTargetBlock('ARG' + x);
        if (target && goog.isFunction(target.updateUpperContext)) {
          target.updateUpperContext(ctx);
        }
      }
    }
  },

  getTypeScheme: function(fieldName, opt_reference) {
    if (fieldName.startsWith('ARG')) {
      var numstr = fieldName.substring(3);
      var x = parseInt(numstr);
      if (!isNaN(x) && x < this.argumentCount_) {
        var argname = 'ARG' + x;
        var argv = this.typedValue[argname];
        return Blockly.Scheme.monoType(argv.getTypeExpr());
      }
    }
    if (fieldName !== 'VAR') {
      return null;
    }
    if ('REC_VAR' in this.lastTypeScheme_ && opt_reference) {
      var refs = this.getRecursiveReferences();
      if (refs.indexOf(opt_reference) != -1) {
        return this.lastTypeScheme_['REC_VAR'];
      }
    }
    return this.lastTypeScheme_['VAR'];
  },

  canToggleIsStatement: function() {
    if (this.isStatement_) {
      return !this.previousConnection.isConnected() &&
          !this.nextConnection.isConnected();
    }
    return !this.outputConnection.isConnected();
  },

  getIsStatement: function() {
    return this.isStatement_;
  },

  setIsStatement: function(newIsStatement) {
    if (this.isStatement_ == newIsStatement) {
      return;
    }
    var storedRendered = this.rendered;
    this.rendered = false;
    if (newIsStatement) {
      var exp2Input = this.getInput('EXP2');
      if (exp2Input) {
        var workbench = exp2Input.connection.contextWorkbench;
        workbench && workbench.dispose();
        this.removeInput('EXP2');
      }
      this.setOutput(false);
      this.setTypedStatements(true);
    } else {
      this.setTypedStatements(false);
      this.setOutput(true);
      var exp2Type = Blockly.TypeExpr.generateTypeVar();
      this.appendValueInput('EXP2')
          .setTypeExpr(exp2Type)
          .appendField('in')
          .setWorkbench(new Blockly.Workbench())
          .setAlign(Blockly.ALIGN_RIGHT);
      // Initialize SVG icon.
      this.initSvg && this.initSvg();
      this.setOutputTypeExpr(exp2Type);
    }
    this.rendered = storedRendered;
    if (this.rendered) {
      this.render();
    }
    this.isStatement_ = newIsStatement;
  },

  isRecursive: function() {
    return this.isRecursive_;
  },

  setRecursiveFlag: function(flag) {
    if (this.isRecursive_ != flag) {
      var input = this.getInput('VARIABLE');
      if (flag) {
        var recLabel = new Blockly.FieldLabel('rec');
        input.insertFieldAt(1, recLabel, 'REC_LABEL');
        this.setTooltip(Blockly.Msg.DEFINE_LET_REC_TOOLTIP);
      } else {
        var refs = this.getRecursiveReferences();
        for (var i = 0, ref; ref = refs[i]; i++) {
          ref.getSourceBlock().dispose();
        }
        input.removeField('REC_LABEL');
        this.setTooltip(Blockly.Msg.DEFINE_LET_REC_TOOLTIP);
      }
      this.isRecursive_ = flag;

      if (this.rendered) {
        this.render();
        this.updateWorkbenchFlyout();
      }
    }
  },

  getRecursiveReferences: function() {
    var variable = this.typedValue['VAR']
    var inputExp1 = this.getInput('EXP1');
    if (!inputExp1) {
      return [];
    }
    return Blockly.BoundVariables.findReferencesInside(variable, inputExp1.connection);
  },

  customContextMenu: function(options) {
    if (this.isInFlyout) {
      return;
    }
    var canBeToggled = true;
    // It's possible to set canBeToggled false if this.getRecursiveReferences()
    // returns non empty array.
    var option = {enabled: canBeToggled};
    if (this.isRecursive_) {
      option.text = Blockly.Msg['REMOVE_REC'];
    } else {
      option.text = Blockly.Msg['ADD_REC'];
    }
    option.callback = this.setRecursiveFlag.bind(this, !this.isRecursive_);
    options.push(option);

    var option = {enabled: this.canToggleIsStatement()};
    if (this.isStatement_) {
      option.text = Blockly.Msg['ADD_IN'];
    } else {
      option.text = Blockly.Msg['REMOVE_IN'];
    }
    option.callback = this.setIsStatement.bind(this, !this.isStatement_);
    options.push(option);
  },

  resizePatternArgument: function(expectedCount) {
    // Stop rendering to avoid rendering objects which are already destroyed.
    var storedRendered = this.rendered;
    this.rendered = false;
    while (expectedCount < this.argumentCount_) {
      var index = this.argumentCount_ - 1;
      // dispose pattern
      var patternInput = this.getInput('ARG' + index);
      var patternConnection = patternInput.connection;
      var patternBlock = patternConnection.targetBlock();
      if (patternBlock) {
        patternConnection.disconnect();
        patternBlock.dispose();
        // TODO: move the block to type workbench rather than dispose.
      }
      // Decrement the size of items first. The function this.removeInput()
      // might disconnect some blocks from this block, and disconnecting blocks
      // triggers type inference, which causes a null pointer exception. To
      // avoid the type inference for the removed input, update the size of
      // items first.
      this.argumentCount_--;
      this.removeInput('ARG' + index);
    }
    this.rendered = storedRendered;
    while (this.argumentCount_ < expectedCount) {
      var index = this.argumentCount_++;
      var A = Blockly.TypeExpr.generateTypeVar();
      this.appendValueInputBefore('ARG' + index, 'EXP1')
          .setTypeExpr(new Blockly.TypeExpr.PATTERN(A));
    }
  },

  /**
   * Create XML to represent argument inputs.
   * @return {Element} XML storage element.
   * @this Blockly.Block
   */
  mutationToDom: function() {
    var container = document.createElement('mutation');
    container.setAttribute('items', this.argumentCount_);
    return container;
  },
  /**
   * Parse XML to restore the argument inputs.
   * @param {!Element} xmlElement XML storage element.
   * @this Blockly.Block
   */
  domToMutation: function(xmlElement) {
    var newArgumentCount = parseInt(xmlElement.getAttribute('items')) || 1;
    this.resizePatternArgument(newArgumentCount);
  },
  /**
   * Populate the mutator's dialog with this block's components.
   * @param {!Blockly.Workspace} workspace Mutator's workspace.
   * @return {!Blockly.Block} Root block in mutator.
   * @this Blockly.Block
   */
  decompose: function(workspace) {
    var containerBlock =
        workspace.newBlock('parameters_arg_container');
    if (containerBlock.initSvg) {
      containerBlock.initSvg();
    }
    var connection = containerBlock.getInput('STACK').connection;
    for (var x = 0; x < this.argumentCount_; x++) {
      var itemBlock = workspace.newBlock('parameters_arg_item');
      if (itemBlock.initSvg) {
        itemBlock.initSvg();
      }
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
    var input = this.getInput('VARIABLE');
    var contextChanged = itemCount != this.argumentCount_;

    this.resizePatternArgument(itemCount);
    if (contextChanged) {
      var variable = this.typedValue['VAR'];
      variable.updateReferenceStructure();
      this.updateTypeInference(true);
      // Do not call the following functions. Newly created fields are not
      // initialized yet. They will be called by mutator instance after the
      // fields initialization.
      //   this.updateWorkbenchFlyout();
      //   this.workspace.renderTypeChangedWorkspaces();
    }
  },
  /**
   * Find if this block is currently able to be mutated by user.
   * @return {boolean} True if this block can accept an additional argument.
   * @this Blockly.Block
   */
  canBeMutated: function() {
    var typeExpr = this.typedValue['VAR'].getTypeExpr();
    var type = typeExpr.deref();
    if (type.isTypeVar()) {
      return true;
    }
  },
  /**
   * Would this block be changed based on the mutator blocks?
   * @this Blockly.Block
   */
  wouldChange: function(containerBlock) {
    return containerBlock.getItemCount() != this.argumentCount_;
  },

  clearInnerTypes: function() {
    this.typedValue['VAR'].getTypeExpr().clear();
    // The following really unnecessary?  cf. 'match_typed' does not
    // have clearInnerTypes.
/*  for (var x = 0; x < this.argumentCount_; x++) {
      var variable = this.typedValue['ARG' + x];
      variable.getTypeExpr().clear();
    } */
    delete this.lastTypeScheme_['VAR'];
    delete this.lastTypeScheme_['REC_VAR'];
  },

  infer: function(ctx) {
    var variable = this.typedValue['VAR'];
    var var_name = variable.getVariableName();
    var expected_exp1 = this.getInput('EXP1').connection.typeExpr;

    if (this.argumentCount_ == 0) {
      var exp1Type = this.getInput('EXP1').connection.typeExpr;
      var varType = this.typedValue['VAR'].getTypeExpr();
      exp1Type.unify(varType);
    } else {
      var funTypes = [];
      for (var x = 0; x < this.argumentCount_; x++) {
        var arg = this.callInfer('ARG' + x, ctx);
        var argType = this.getInput('ARG' + x).connection.typeExpr;
        if (arg) {
          arg.unify(argType);
        }
        // argType is a pattern.  Have to extract the type in it.
        funTypes.push(argType.pattExpr);
      }
      funTypes.push(expected_exp1);
      var funType = Blockly.TypeExpr.createFunType(funTypes);
      variable.getTypeExpr().unify(funType);
    }
    // Create the context for the EXP1 input.
    var ctx1 = ctx.copy();
    var monoScheme = Blockly.Scheme.monoType(variable.getTypeExpr());
    if (this.isRecursive_) {
      ctx1.addTypeToEnv(var_name, monoScheme);
    }
    for (var x = 0; x < this.argumentCount_; x++) {
      var target = this.getInputTargetBlock('ARG' + x);
      if (target && goog.isFunction(target.updateUpperTypeContext)) {
        target.updateUpperTypeContext(ctx1);
      }
    }
    var exp1 = this.callInfer('EXP1', ctx1);

    if (exp1)
      exp1.unify(expected_exp1);

    var applyPolyType = variable.getTypeExpr().deref().isFunction();
    var schemeForExp2;
    var ctx2 = ctx.copy();
    if (applyPolyType) {
      if (this.isRecursive_) {
        // Prevent recursive reference blocks to be unified with poly-type.
        // All of recursive reference must be mono-type.
        this.lastTypeScheme_['REC_VAR'] = monoScheme;
      }
      schemeForExp2 = ctx.createPolyType(variable.getTypeExpr());
    } else {
      schemeForExp2 = monoScheme;
    }
    this.lastTypeScheme_['VAR'] = schemeForExp2;

    ctx2.addTypeToEnv(var_name, schemeForExp2);
    if (this.isStatement_) {
      this.callInfer(this.nextConnection, ctx2);
      return null;
    }

    var expected_exp2 = this.getInput('EXP2').connection.typeExpr;
    var exp2 = this.callInfer('EXP2', ctx2);
    if (exp2)
      exp2.unify(expected_exp2);

    return expected_exp2;
  }
};

Blockly.Blocks['letrec_typed'] =
  Object.assign({}, Blockly.Blocks['let_typed']);
Blockly.Blocks['letrec_typed'].init = function() {
  Blockly.Blocks['let_typed'].init.call(this, true);
};

Blockly.Blocks['letstatement_typed'] =
  Object.assign({}, Blockly.Blocks['let_typed']);
Blockly.Blocks['letstatement_typed'].init = function() {
  Blockly.Blocks['let_typed'].init.call(this, false, true);
};

Blockly.Blocks['letstatement_fun_pattern_typed'] =
  Object.assign({}, Blockly.Blocks['let_fun_pattern_typed']);
Blockly.Blocks['letstatement_fun_pattern_typed'].init = function() {
  Blockly.Blocks['let_fun_pattern_typed'].init.call(this, false, true);
};

Blockly.Blocks['dummy_statement_typed'] = {
  init: function() {
    var type = Blockly.TypeExpr.generateTypeVar();
    this.setTypedStatements(true);
    this.appendValueInput('VALUE')
        .setTypeExpr(type);
  },

  infer: function(ctx) {
    var expected = this.getInput('VALUE').connection.typeExpr;
    var valueType = this.callInfer('VALUE', ctx);
    if (valueType) {
      valueType.unify(expected);
    }
  }
};
