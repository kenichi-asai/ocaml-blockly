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
  "../codemirror/lib/codemirror.js",
  "../codemirror/mode/mllike/mllike.js",
  "../codemirror/addon/runmode/runmode.js",
  "eval.js",
];

Typed.SCRIPTS_FOR_PROD = [
  "blockly_compressed.js",
  "blocks_compressed.js",
  "typedlang_compressed.js",
  "en.js",
  "ja.js",
  "converter.js",
  "block_of_ocaml_utils.js",
  "eval.js",
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
  "let width = 100\n" +
  "let height = 200\n" +
  "type world_t = {\n" +
  "  zahyo1 : int * int;\n" +
  "}\n" +
  "\n" +
  "let initial_world = {zahyo1 = (50, 50)}\n" +
  "\n";

Typed.codeEditor = null;

Typed.init = function() {
  Typed.setDocumentTitle_();

  var input = document.querySelector(".ocamlCode");
  if (input) {
    input.value = Typed.defaultCode;
    Typed.codeEditor = CodeMirror.fromTextArea(input, {
      mode: 'text/x-ocaml',
      theme: "gruvbox-dark",
      lineNumbers: true,
      matchBrackets: true
    });
  }

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

Typed.switchArea = function() {
  const workspaceArea = document.getElementById('workspaceArea');
  const workspaceClasses = workspaceArea.classList;
  workspaceClasses.toggle('--narrow');
  const rightArea = document.getElementById('rightArea');
  const rightClasses = rightArea.classList;
  rightClasses.toggle('--wide');
  const buttonElement = document.getElementById('switchButton');
  buttonElement.innerText =
    buttonElement.innerText === '<<' ? '>>' : '<<';
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

/**
 * 今のワークスペースから生成されるコードをダウンロードさせる
 */
Typed.saveCode = function() {
  const fileContent = Blockly.TypedLang.workspaceToCode(Typed.workspace);
  const fileNameElement = document.getElementById('filename');
  const fileName = fileNameElement.value + '.ml';
  // 以下 https://qiita.com/kerupani129/items/99fd7a768538fcd33420 より
  const a = document.createElement('a');
  a.href = 'data:text/plain,' + encodeURIComponent(fileContent);
  a.download = fileName;
  a.style.display = 'none';
  document.body.appendChild(a); // ※ DOM が構築されてからでないとエラーになる
  a.click();
  document.body.removeChild(a);
  // TODO: （古川）ファイルダイアログが出るようにする（無理説↓あり）
  // https://ja.stackoverflow.com/questions/12081/javascriptchrome%E3%83%96%E3%83%A9%E3%82%A6%E3%82%B6%E3%81%A7-%E5%90%8D%E5%89%8D%E3%82%92%E4%BB%98%E3%81%91%E3%81%A6%E4%BF%9D%E5%AD%98-%E3%83%80%E3%82%A4%E3%82%A2%E3%83%AD%E3%82%B0%E3%82%92%E8%A1%A8%E7%A4%BA%E3%81%97%E4%BF%9D%E5%AD%98%E3%81%99%E3%82%8B%E3%82%88%E3%81%86%E3%81%AB%E3%81%97%E3%81%9F%E3%81%84
}

/**
 * ファイルをロードしてワークスペースにそのプログラムを追加する
 */
Typed.loadCode = function() {
  // https://kuroeveryday.blogspot.com/2015/07/javascript-upload-download.html より
  const uploadFile = document.getElementById('upload-file');
  const file = uploadFile.files[0];
  if (!file) alert('ファイルを選択してください。');
  else if (file.name.slice(-3) !== '.ml') alert('.ml ファイルを選択してください。');
  else {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (() => {
      // 以下 onClickConvert と同じ処理
      const code = reader.result;
      if (code) {
        BlockOfOCamlUtils.codeToBlock(code);
      }
    });
    const fileName = file.name.slice(0, -3);
    const fileNameElement = document.getElementById('filename');
    fileNameElement.value = fileName;
  }
}

Typed.programTop =
  "open UniverseJs;;\n" +
  "open Color;;\n" +
  "open Image;;\n" +
  "open World;;\n" +
  "open TransformToInt;;\n" +
  "\n";

Typed.clearCanvas = function () {
  var canvas = document.getElementById('CanvasForUniverse');
  var newCanvas = document.createElement("canvas");
  newCanvas.id = 'CanvasForUniverse';
  canvas.replaceWith(newCanvas); // remove old canvas
}

Typed.programToRun = function () {
  try {
    Blockly.PrintSemiSemi = true;
    var code = Blockly.TypedLang.workspaceToCode(Typed.workspace);
    Blockly.PrintSemiSemi = false;
    var program = Typed.programTop + code;
    return program;
  } catch (e) {
    console.warn('Some of blocks are not supported for converting:');
    console.warn(e);
    return null;
  }
}

Typed.runCode = function() {
  Typed.clearCanvas();
  var program = Typed.programToRun();
  console.log(program);
  evaluator.runCode(program);
  const element = document.getElementById('toplevel');
  element.insertAdjacentHTML('beforeend', '<hr>');
}

Typed.runGame = function() {
  Typed.clearCanvas();
  var program = Typed.programToRun() +
//    program.substr(program.indexOf('let width =')) +
//    "\n" +
      "let() =\n" +
      "  big_bang initial_world\n";
  if (program.indexOf('let draw ') !== -1) {
    program += "           ~to_draw:draw\n";
  }
  if (program.indexOf('let width =') !== -1) {
    program += "           ~width:width\n";
  }
  if (program.indexOf('let height =') !== -1) {
    program += "           ~height:height\n";
  }
  if (program.indexOf('let on_mouse ') !== -1) {
    program += "           ~on_mouse:on_mouse\n";
  }
  if (program.indexOf('let on_key ') !== -1) {
    program += "           ~on_key_press:on_key\n";
  }
  if (program.indexOf('let on_tick ') !== -1) {
    program += "           ~on_tick:on_tick\n";
  }
  if (program.indexOf('let rate =') !== -1) {
    program += "           ~rate:rate\n";
  }
  if (program.indexOf('let finished ') !== -1) {
    program += "           ~stop_when:finished\n";
  }
  if (program.indexOf('let draw_last ') !== -1) {
    program += "           ~to_draw_last:draw_last\n";
  }
  program += "           ~onload:false;;\n";
  console.log(program);
  evaluator.runCode(program);
  const element = document.getElementById('toplevel');
  element.insertAdjacentHTML('beforeend', '<hr>');
}

Typed.clearToplevel = function() {
  Typed.clearCanvas();
  const element = document.getElementById('toplevel');
  element.innerHTML = '';
}

Typed.onClickConvert = function(event) {
  event.preventDefault();
  var input = document.querySelector(".ocamlCode");
  var code = Typed.codeEditor.getValue();
  if (code) {
    BlockOfOCamlUtils.codeToBlock(code);
  }
}

window.addEventListener('load', Typed.init);
