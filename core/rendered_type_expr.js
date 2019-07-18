'use strict';

goog.provide('Blockly.RenderedTypeExpr');

goog.require('Blockly.TypeExpr');

/**
 * Utility methods to render a type expression on screen.
 * @constructor
 */

Blockly.RenderedTypeExpr.shape = {};

Blockly.RenderedTypeExpr.shape['original'] = {
  down: function(steps) {
    steps.push('v 5 c 0,10 -' + Blockly.BlockSvg.TAB_WIDTH +
      ',-8 -' + Blockly.BlockSvg.TAB_WIDTH + ',7.5 s ' +
      Blockly.BlockSvg.TAB_WIDTH + ',-2.5 ' +
      Blockly.BlockSvg.TAB_WIDTH + ',7.5');
  },

  up: function(steps) {
    steps.push('c 0,-10 -' + Blockly.BlockSvg.TAB_WIDTH + ',8 -' +
      Blockly.BlockSvg.TAB_WIDTH + ',-7.5 s ' + Blockly.BlockSvg.TAB_WIDTH +
      ',2.5 ' + Blockly.BlockSvg.TAB_WIDTH + ',-7.5');
  },

  height: function() {
    return Blockly.BlockSvg.TAB_HEIGHT;
  },

  offsetsY: function() {
    return [];
  }
};

Blockly.RenderedTypeExpr.shape['int'] = {
  down: function(steps) {
    steps.push('l 0,5 a 6,6,0,0,0,0,12 l 0,3');
  },

  up: function(steps) {
    steps.push('l 0,-3 a 6,6,0,0,1,0,-12 l 0,-5');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['float'] = {
  down: function(steps) {
    steps.push('l 0,5 -6,0 3,6 -3,6 6,0 0,3');
  },

  up: function(steps) {
    steps.push('l 0,-3 -6,0 3,-6 -3,-6 6,0 0,-5');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['bool'] = {
  down: function(steps) {
    steps.push('l 0,5 -8,7.5 8,7.5');
  },

  up: function(steps) {
    steps.push('l -8,-7.5 8,-7.5 0,-5');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['string'] = {
  down: function(steps) {
    steps.push('v 1 c 5,7 -8,6 -8,9.5 c 0,4 13,3 8,9.5');
  },

  up: function(steps) {
    steps.push('c 5,-7 -8,-6 -8,-9.5 c 0,-4 13,-3 8,-9.5 v -1');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['list'] = {
  down: function(steps) {
    Blockly.RenderedTypeExpr.renderTypeExpr(this.element_type, steps, 1);
    steps.push('l 0,3 -8,0 0,4, 8,0 0,3');
  },

  up: function(steps) {
    steps.push('l 0,-3 -8,0 0,-4, 8,0 0,-3');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.element_type, steps, 2);
  },

  height: function() {
    return Blockly.RenderedTypeExpr.getTypeExprHeight(this.element_type) + 10;
  },

  offsetsY: function() {
    return [0];
  }
};

Blockly.RenderedTypeExpr.shape['option'] = {
  down: function(steps) {
    Blockly.RenderedTypeExpr.renderTypeExpr(this.element_type, steps, 1);
    steps.push('l 0,3 -8,0 0,4, 8,0 0,3');
  },

  up: function(steps) {
    steps.push('l 0,-3 -8,0 0,-4, 8,0 0,-3');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.element_type, steps, 2);
  },

  height: function() {
    return Blockly.RenderedTypeExpr.getTypeExprHeight(this.element_type) + 10;
  },

  offsetsY: function() {
    return [0];
  }
};

Blockly.RenderedTypeExpr.shape['tuple'] = {
  down: function(steps) {
    steps.push('l 0,3 -12,0 0,3 12,0');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.firstType(), steps, 1);
    for (var i = 1; i < this.tuples_.length; i++) {
      steps.push('l -5,3 5,3');
      Blockly.RenderedTypeExpr.renderTypeExpr(this.tuples_[i], steps, 1);
    }
    steps.push('l -12,0 0,3 12,0 0,3');
  },

  up: function(steps) {
    steps.push('l 0,-3 -12,0 0,-3 12,0');
    var last = this.tuples_[this.tuples_.length - 1];
    Blockly.RenderedTypeExpr.renderTypeExpr(last, steps, 2);
    for (var i = this.tuples_.length - 2; 0 <= i; i--) {
      steps.push('l -5,-3 5,-3');
      Blockly.RenderedTypeExpr.renderTypeExpr(this.tuples_[i], steps, 2);
    }
    steps.push('l -12,0 0,-3 12,0 0,-3');
  },

  height: function() {
    var height = 6;
    height += Blockly.RenderedTypeExpr.getTypeExprHeight(this.firstType());
    for (var i = 1; i < this.tuples_.length; i++) {
      height += 6;
      height += Blockly.RenderedTypeExpr.getTypeExprHeight(this.tuples_[i]);
    }
    height += 6;
    return height;
  },

  offsetsY: function() {
    var height = 6;
    var offsets = [height];
    height += Blockly.RenderedTypeExpr.getTypeExprHeight(this.firstType());
    for (var i = 1; i < this.tuples_.length; i++) {
      height += 6;
      offsets.push(height);
      height += Blockly.RenderedTypeExpr.getTypeExprHeight(this.tuples_[i]);
    }
    return offsets;
  }
};

Blockly.RenderedTypeExpr.shape['function'] = {
  down: function(steps) {
    steps.push('l 0,3 -12,0 0,3 12,0');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.arg_type, steps, 1);
    steps.push('l 5,3 -5,3');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.return_type, steps, 1);
    steps.push('l -12,0 0,3 12,0 0,3');
  },

  up: function(steps) {
    steps.push('l 0,-3 -12,0 0,-3 12,0');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.return_type, steps, 2);
    steps.push('l 5,-3 -5,-3');
    Blockly.RenderedTypeExpr.renderTypeExpr(this.arg_type, steps, 2);
    steps.push('l -12,0 0,-3 12,0 0,-3');
  },

  height: function() {
    return Blockly.RenderedTypeExpr.getTypeExprHeight(this.arg_type) +
        Blockly.RenderedTypeExpr.getTypeExprHeight(this.return_type) + 18;
  },

  offsetsY: function() {
    var height = Blockly.RenderedTypeExpr.getTypeExprHeight(this.arg_type);
    return [6, height + 12];
  }
};

Blockly.RenderedTypeExpr.shape['construct'] =
    Object.assign({}, Blockly.RenderedTypeExpr.shape['original']);

Blockly.RenderedTypeExpr.shape['type-constructor'] = {
  down: function(steps) {
    steps.push('l 0,5 -8,0 q 3,3.7 3,7.5 t -3,7.5 l 8,0');
  },

  up: function(steps) {
    steps.push('l -8,0 q 3,-3.7 3,-7.5 t -3,-7.5 l 8,0 l 0,-5');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  }
};

Blockly.RenderedTypeExpr.shape['record'] = {
  down: function(steps) {
    steps.push('v 2 h -3 l -5,3.5 v 4 h 5 v 3 h -5 v 4 l 5,3.5 h 3');
  },

  up: function(steps) {
    steps.push('h -3 l -5,-3.5 v -4 h 5 v -3 h -5 v -4 l 5,-3.5 h 3 v -2');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  }
};

Blockly.RenderedTypeExpr.shape['pattern'] = {
  down: function(steps) {
    steps.push('v 5 h -4 l -4,-4 v 18 l 4,-4 h 4 v 5');
  },

  up: function(steps) {
    steps.push('v -5 h -4 l -4,4 v -18 l 4,4 h 4 v -5');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  }
};

Blockly.RenderedTypeExpr.shape['unknown'] = {
  down: function(steps) {
    steps.push('l 0,4 -8,0 0,14 8,0 0,2');
  },

  up: function(steps) {
    steps.push('l 0,-2 -8,0 0,-14 8,0 0,-4');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },

  tvarHighlight: function() {
    return 'm 0,6 l -8 8 m 0,-8 l 8,8';
  }
};

Blockly.RenderedTypeExpr.shape['Color.t'] = {
  down: function(steps) {
    steps.push('l 0,7 -3,0 a 3,3,0,1,0,0,6 l 3,0 0,7');
  },

  up: function(steps) {
    steps.push('l 0,-7 -3,0 a 3,3,0,1,1,0,-6 l 3,0 0,-7');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['Image.t'] = {
  down: function(steps) {
    steps.push('l 0,2 -3,0 a 3,3,0,1,0,0,6 l 3,0 0,2 -5,0 0,10 5,0');
  },

  up: function(steps) {
    steps.push('l -5,0, 0,-10 5,0 0,-2 -3,0 a 3,3,0,1,1,0,-6 l 3,0 0,-2');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['scene_t'] = {
  down: function(steps) {
    steps.push('c -7,0,-7,6,-3,9 4,3,4,9,-3,9 l 0,2 6,0');
  },

  up: function(steps) {
    steps.push('l -6,0 0,-2 c 7,0,7,-6,3,-9 -4,-3,-4,-9,3,-9');
  },

  height: function() {
    return 20;
  },

  offsetsY: function() {
    return [];
  },
};

Blockly.RenderedTypeExpr.shape['typeVar'] = {
  down: function(steps) {
    steps.push('l 0,5 -8,0 0,15 8,0 0,5');
  },

  up: function(steps) {
    steps.push('l 0,-5 -8,0 0,-15 8,0 0,-5');
  },

  height: function() {
    return 25;
  },

  offsetsY: function() {
    return [];
  },

  tvarHighlight: function() {
    return 'm 0,5 l -8,0 0,15 8,0';
  }
};

/**
 * Create a list of record to present highlights for the type expression.
 * @param {!Blockly.TypeExpr} type
 * @return {Array<{color: string, path: string}>}
 * @static
 */
Blockly.RenderedTypeExpr.typeVarHighlights = function(type) {
  var typeVarHighlights = [];
  Blockly.RenderedTypeExpr.typeVarHighlights_(type, 0, typeVarHighlights);
  return typeVarHighlights;
}

/**
 * Helper function to create a highlight for type variable
 * @param {!Blockly.TypeExpr} type
 * @param {number} y
 * @param {Array<{color: string, path: string}>} typeVarHighlights
 * @private
 * @static
 */
Blockly.RenderedTypeExpr.typeVarHighlights_ = function(type, y, typeVarHighlights) {
  var type = type.deref();
  var typeName = type.getTypeName();
  var shape = Blockly.RenderedTypeExpr.shape[typeName];
  var children = type.getChildren();
  if (type.isTypeVar()) {
    typeVarHighlights.push({
      color: type.color,
      path: "m 0," + y + " " + shape.tvarHighlight.call(type)
    });
  } else if (type.isUnknown()) {
    typeVarHighlights.push({
      color: "#ff0000",
      path: "m 0," + y + " " + shape.tvarHighlight.call(type)
    });
  } else if (children.length != 0) {
    var name = type.getTypeName();
    var offsetsY = shape.offsetsY.call(type);
    for (var i = 0; i < children.length; i++) {
      Blockly.RenderedTypeExpr.typeVarHighlights_(children[i],
          y + offsetsY[i], typeVarHighlights);
    }
  }
}

/*
 * @param {!Blockly.TypeExpr} type
 */
Blockly.RenderedTypeExpr.getTypeExprHeight = function(type) {
  var type = type.deref();
  var typeName = type.getTypeName();
  var shape = Blockly.RenderedTypeExpr.shape[typeName];
  return shape.height.call(type);
}

/**
 * @param {!Blockly.TypeExpr} type
 * @param {!Array.<string>} steps Path of block outline.
 * @param {number} n Specify down, up or highlight (1, 2, or 3).
 */
Blockly.RenderedTypeExpr.renderTypeExpr = function(type, steps, n) {
  var type = type.deref();
  var typeName = type.getTypeName();
  var shape = Blockly.RenderedTypeExpr.shape[typeName]
  switch (n) {
    case 1:
      shape.down.call(type, steps);
      break;
    case 2:
      shape.up.call(type, steps);
      break;
    case 3:
      shape.down.call(type, steps);
      var height = shape.height.call(type, steps);
      var diff = Blockly.BlockSvg.MIN_BLOCK_Y - height;
      if (0 < diff) {
        steps.push('v ' + diff);
      }
      break;
    default:
      goog.asserts.assert(false);
  }
}

/**
 * @param {!Blockly.TypeExpr} type
 * @param {number} n Specify down, up, or highlight (1, 2, or 3).
 * @return {string}
 */
Blockly.RenderedTypeExpr.getPath = function(type, n) {
  var steps = [];
  Blockly.RenderedTypeExpr.renderTypeExpr(type, steps, n);
  return steps.join(' ');
}

/*
 * @param {!Blockly.TypeExpr} type
 */
Blockly.RenderedTypeExpr.getDownPath = function(type) {
  return Blockly.RenderedTypeExpr.getPath(type, 1);
}

/*
 * @param {!Blockly.TypeExpr} type
 */
Blockly.RenderedTypeExpr.getUpPath = function(type) {
  return Blockly.RenderedTypeExpr.getPath(type, 2);
}

/*
 * @param {!Blockly.TypeExpr} type
 */
Blockly.RenderedTypeExpr.getHighlightedPath = function(type) {
  return Blockly.RenderedTypeExpr.getPath(type, 3);
}

/**
 * @param {!Blockly.TypeExpr} type
 * @param {!goog.math.Coordinate} xy
 * @param {number} scaleY
 * @param {!Element} parent
 * @return {!Array.<!Element>}
 */
Blockly.RenderedTypeExpr.createHighlightedSvg = function(type, xy, scaleY,
    parent) {
  /** @type {Array<{color: string, path: string}>} */
  var typeVarHighlights =
      Blockly.RenderedTypeExpr.typeVarHighlights(type);
  var svgList = [];
  for (var i = 0; i < typeVarHighlights.length; i++) {
    var highlight = typeVarHighlights[i];
    svgList.push(
      Blockly.utils.createSvgElement(
        'path', {
          'class': 'blocklyTypeVarPath',
          stroke: highlight.color,
          d: highlight.path,
          transform: 'translate(' + xy.x + ', ' + xy.y + ') ' +
              'scale(1, ' + scaleY + ')'
        },
        parent));
  }
  return svgList;
};
