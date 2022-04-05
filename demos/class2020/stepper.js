'use strict';

var Stepper = {};

Stepper.clearResult = function () {
  var div = document.getElementById('stepResult');
  var newDiv = document.createElement("div");
  newDiv.id = 'stepResult';
  div.replaceWith(newDiv); // remove old div
}

Stepper.stepStorageCode = function() {
  Stepper.clearResult();
  var program = sessionStorage.getItem('key');
  console.log(program);
  var socket = io.connect('https://www.is.ocha.ac.jp:49139');
  socket.emit('stepper', program);
  socket.on('result', function (msg) {
    // コードを表示するための pre を生成
    const pre = document.createElement('pre');

    // pre の中に code タグを作り、OCaml であることと msg を入れる
    pre.innerHTML += '<code class="language-ocaml">' + msg + '</code>';

    // コードが入った pre を div の中に入れる
    var div = document.getElementById('stepResult');
    div.appendChild(pre);

    // コードをハイライトさせる
    Prism.highlightAll();
  });
}
