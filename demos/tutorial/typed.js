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
  //"base.js",
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

Typed.programTop =
  "open UniverseJs\n" +
  "open Color\n" +
  "open Image\n" +
  "open World\n" +
  "open Utility\n" +
  "\n";

Typed.isTutorial = false;
Typed.logProgram = false;

Typed.server_log = function (chanel, message, callback) {
  if (Typed.logProgram) {
    var socket = io.connect('https://www.is.ocha.ac.jp:49139');
    socket.emit(chanel, message, callback);
  }
}

Typed.init = function() {
  Typed.setDocumentTitle_();

  var input = document.querySelector(".ocamlCode");
  if (input) {
    input.value = Typed.defaultCode;
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
  if (Typed.isTutorial)
    Tutorial.main();
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
       collapse: true,
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

Typed.previousCode = ''

Typed.showCode = function() {
  try {
    var code = Blockly.TypedLang.workspaceToCode(Typed.workspace);
    if (code !== Typed.previousCode) {
      var input = document.querySelector(".generatedCode");
      input.value = code;
      Typed.previousCode = code;
      if (Typed.logProgram) {
        var xml = Blockly.Xml.workspaceToDom(Typed.workspace, true);
        var xmltext = Blockly.Xml.utils.domToText (xml);
        Typed.server_log('t_xml', {xml:xmltext, program:code});
      }
    }
  } catch (e) {
    console.warn('Some of blocks are not supported for converting.');
  }
}

/**
 * 今のワークスペースから生成されるコードをダウンロードさせる
 */
Typed.saveCode = function() {
  const code = Blockly.TypedLang.workspaceToCode(Typed.workspace);
  const fileContent = Typed.programTop + code;
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

/* 読み込み中マーク (spinner) を表示 */
function openModal() {
  var element =
      '<div id="container"></div>' + /* gray background */
      '<div id="container-loader">' +
        '<div class="spinner"></div>' + /* spinner */
      '</div>';
  var target = document.getElementById('blocklyDiv');
  target.insertAdjacentHTML('beforebegin',element);
}

/* 読み込み中マーク (spinner) を削除 */
function closeModal() {
  document.getElementById("container").remove();
  document.getElementById('container-loader').remove();
}

/**
 * ファイルをロードしてワークスペースにそのプログラムを追加する
 */
Typed.loadCode = function() {
  // https://kuroeveryday.blogspot.com/2015/07/javascript-upload-download.html より
  const uploadFile = document.getElementById('upload-file');
  const file = uploadFile.files[0];
  if (!file) {  // ファイルが選ばれていなかった場合
    uploadFile.click();  // ファイル選択ボタンをクリックしたことにする
  } else if (file.name.slice(-3) !== '.ml') {
    alert('.ml ファイルを選択してください。');
  } else {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (() => {
      // 以下 onClickConvert と同じ処理
      const code = reader.result;
      if (code) {
        openModal();
        setTimeout(function() {
          BlockOfOCamlUtils.codeToBlock(code);
          closeModal();
        }, 100);
      }
    });
    const fileName = file.name.slice(0, -3);
    const fileNameElement = document.getElementById('filename');
    fileNameElement.value = fileName;
  }
}

/**
 * 指定された URL にあるテキストをブロックに変換する
 * @param {string} url - 読みたいものの URL
 */
Typed.getAndLoadCode = function(url) {
  // 参考： https://www.ipentec.com/document/javascript-xmlhttprequest-simple-using
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState === 4) {
      if (xmlhttp.status === 200) {
        Typed.workspace.clear();
        openModal();
        setTimeout(function() {
          BlockOfOCamlUtils.codeToBlock(xmlhttp.responseText);
          closeModal();
        }, 100);
      } else {
        alert("読み込みエラー");
      }
    }
  }
  xmlhttp.open("GET", url);
  xmlhttp.send();
}

Typed.selectProgram = function (url) {
  // const url = 'http://pllab.is.ocha.ac.jp/~asai/book2/programs/';
  const file = document.getElementById('program').value;
  Typed.getAndLoadCode(url + file + '.ml');
}

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
  Typed.server_log('t_program', program);
  evaluator.runCode(program);
  const element = document.getElementById('toplevel');
  element.insertAdjacentHTML('beforeend', '<hr>');
}

Typed.runStorageCode = function() {
  Typed.clearCanvas();
  var program = sessionStorage.getItem('key');
  console.log(program);
  Typed.server_log('t_program', program);
  evaluator.runCode(program);
  const element = document.getElementById('toplevel');
  element.insertAdjacentHTML('beforeend', '<hr>');
}

Typed.clearToplevel = function() {
  Typed.clearCanvas();
  const element = document.getElementById('toplevel');
  element.innerHTML = '';
}

Typed.newToplevel = function() {
  sessionStorage.clear();
  var storagecode = Typed.programToRun();
  sessionStorage.setItem('key', storagecode);
  Typed.server_log('t_program', storagecode);
  window.open('canvas.html', '_blank',
    'width=document.body.clientWidth,height=document.body.clientHeight');
}

Typed.onClickConvert = function(event) {
  event.preventDefault();
  var input = document.querySelector(".ocamlCode");
  var code = input.value;
  if (code) {
    BlockOfOCamlUtils.codeToBlock(code);
  }
}

// 矢印キーによるスクロールを無効化
// https://toburau.hatenablog.jp/entry/20140305/1394039412 より
var keydownfunc = function( event ) {
  var code = event.keyCode;
    switch(code) {
    case 37: // ←
    case 38: // ↑
    case 39: // →
    case 40: // ↓
      event.preventDefault();
      console.log(code);
  }
}
// window.addEventListener('keydown', keydownfunc, true);

window.addEventListener('load', Typed.init);
