'use strict';

var Typed = {};

Typed.DEVMODE = true;
// Note: This demo page must be located in either of the two directories:
// demos/typed and docs/. The DEVMODE must be enabled if this page exists in
// the first one. Otherwise, it must be disabled.

Typed.SCRIPTS_FOR_DEV = [
  "../../blockly_uncompressed.js",
  "../../blocks/lists.js",
  "../../blocks/typed_blocks.js",
  "../../blocks/parameters.js",
  "../../blocks/datatypes.js",
  "../../generators/typedlang.js",
  "../../generators/typedlang/blocks.js",
  "../../msg/js/ja.js",
  "../../block_of_ocaml/converter.js",
  "../../block_of_ocaml/utils.js",
];

Typed.SCRIPTS_FOR_PROD = [
  "blockly_compressed.js",
  "blocks_compressed.js",
  "typedlang_compressed.js",
  "en.js",
  "ja.js",
  "converter.js",
  "block_of_ocaml_utils.js",
];

Typed.BOOT = (function() {
  var scripts = document.getElementsByTagName('script');
  var re = new RegExp('(.+)[\/]typed\.js$');
  var dir;
  for (var i = 0, script; script = scripts[i]; i++) {
    var match = re.exec(script.src);
    if (match) {
      dir = match[1];
    }
  }
  if (!dir) {
    alert('Could not detect the directory name.');
    return;
  }
  var scripts = Typed.DEVMODE ? Typed.SCRIPTS_FOR_DEV : Typed.SCRIPTS_FOR_PROD;
  for (var i = 0, src; src = scripts[i]; i++) {
    document.write(
        '<script type="text/javascript" src="' + src + '"></' +
        'script>');
  }
})();


Typed.workspace = null;

Typed.defaultCode =
    "(* 目的：この関数の目的を書く *)\n" +
    "(* f : 型 -> 型 *)\n" +
    "let f 引数 =\n" +
    "  ...\n" +
    "\n" +
    "(* テスト *)\n" +
    "let test1 = f 値 = 値\n" +
    "let test2 = f 値 = 値\n" +
    "let test3 = f 値 = 値";

Typed.init = function() {
  Typed.setDocumentTitle_();

  var input = document.querySelector(".ocamlCode");
  input.value = Typed.defaultCode;

  var onresize = function(e) {
    var container = document.getElementById('workspaceArea');
    var bBox = Typed.getBBox_(container);
    var workspaceDiv = document.getElementById('blocklyDiv');
    workspaceDiv.style.top = bBox.y + 'px';
    workspaceDiv.style.left = bBox.x + 'px';
    // Height and width need to be set, read back, then set again to
    // compensate for scrollbars.
    workspaceDiv.style.height = bBox.height + 'px';
    workspaceDiv.style.height = (2 * bBox.height - workspaceDiv.offsetHeight) + 'px';
    workspaceDiv.style.width = bBox.width + 'px';
    workspaceDiv.style.width = (2 * bBox.width - workspaceDiv.offsetWidth) + 'px';
  };
  window.addEventListener('resize', onresize, false);

  Typed.workspace = Blockly.inject(document.getElementById('blocklyDiv'),
      Typed.getWorkspaceOptions_());
  onresize();
  Blockly.svgResize(Typed.workspace);
};

Typed.setDocumentTitle_ = function() {
  var title = "Blockly Demo";
  if (Typed.DEVMODE) {
    title += " (dev)";
  }
  document.title = title;
};

Typed.getWorkspaceOptions_ = function() {
  var options =
      {toolbox: document.getElementById('toolbox'),
       grid:
           {spacing: 25,
            length: 3,
            colour: '#ccc',
            snap: true},
       trashcan: true,
       rtl: false, /*not support RTL */
       zoom:
           {controls: true,
            wheel: true},
       collapse: false,
       typedVersion: true
      };
  // Use local media files if the DEVMODE is enabled.
  if (Typed.DEVMODE) {
    options['path'] = '../../';
    options['media'] = '../../media/';
  }
  return options;
};

Typed.getBBox_ = function(element) {
  var height = element.offsetHeight;
  var width = element.offsetWidth;
  var x = 0;
  var y = 0;
  do {
    x += element.offsetLeft;
    y += element.offsetTop;
    element = element.offsetParent;
  } while (element);
  return {
    height: height,
    width: width,
    x: x,
    y: y
  };
}

Typed.showCode = function() {
  try {
    var code = Blockly.TypedLang.workspaceToCode(Typed.workspace);
    var input = document.querySelector(".generatedCode");
    input.value = code;
  } catch (e) {
    console.warn('Some of blocks are not supported for converting.');
  }
}

Typed.runCode = function() {
  //  alert('Not implemented yet.');
}

Typed.onClickConvert = function(event) {
  event.preventDefault();
  var input = document.querySelector(".ocamlCode");
  var check1 = document.querySelector(".checkbox1").checked;
  var check2 = document.querySelector(".checkbox2").checked;
  var check3 = document.querySelector(".checkbox3").checked;
  var check4 = document.querySelector(".checkbox4").checked;
  var code = '';
  if (check1) {
    code += 'type ekimei_t = {\n' +
            '  kanji   : string; (* 漢字の駅名 *)\n' +
            '  kana    : string; (* 読み *)\n' +
            '  romaji  : string; (* ローマ字 *)\n' +
            '  ken     : string; (* 県名 *)\n' +
            '  shozoku : string; (* 所属路線名 *)\n' +
            '}\n'
  }
  if (check2) {
    code += 'type ekikan_t = {\n' +
            '  kiten  : string; (* 起点 *)\n' +
            '  kenk   : string; (* 起点の県名 *)\n' +
            '  shuten : string; (* 終点 *)\n' +
            '  kens   : string; (* 終点の県名 *)\n' +
            '  keiyu  : string; (* 経由路線名 *)\n' +
            '  kyori  : float;  (* 距離 *)\n' +
            '  jikan  : int;    (* 所要時間 *)\n' +
            '}\n'
  }
  if (check3) {
    code += 'type eki_t = {\n' +
            '  namae        : string * string;        (* 駅名ペア *)\n' +
            '  saitan_kyori : float;                  (* 最短距離 *)\n' +
            '  temae_list   : (string * string) list; (* 手前リスト *)\n' +
            '}\n'
  }
  if (check4) {
    code += '(* 目的：lst の各要素に f を施したリストを返す *)\n' +
            '(* map : (\'a -> \'b) -> \'a list -> \'b list *)\n' +
            'let rec map f lst = match lst with\n' +
            '    [] -> []\n' +
            '  | first :: rest -> f first :: map f rest\n'
  }
  code += input.value;
  if (code) {
    BlockOfOCamlUtils.codeToBlock(code);
  }
}

window.addEventListener('load', Typed.init);
