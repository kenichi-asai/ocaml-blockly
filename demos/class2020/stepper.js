'use strict';

var Stepper = {};

Stepper.url = 'https://www.is.ocha.ac.jp:49139/stepper';

/* これまでのステップ実行の結果を格納する配列 */
Stepper.results = [];

/* ステッパの出力 lastStep から、次に実行すべきプログラムを取り出す */
Stepper.nextProgram = function (lastStep) {
  var count = 0;
  var startPos = lastStep.lastIndexOf('[@@@stepper.process');
  for (var i = startPos; i < lastStep.length; i++) {
    // TODO: "..." の中の [, ] は無視するように変更すべき
    if (lastStep.charAt(i) === '[') {
      count++;
    } else if (lastStep.charAt(i) === ']') {
      count--;
      if (count === 0) {
        var next = lastStep.substring(startPos + 20, i);
        return (next);
      }
    }
  }
}

/* ステップ実行の表示を消す */
Stepper.clearResult = function () {
  var div = document.getElementById('stepResult');
  var newDiv = document.createElement("div");
  newDiv.id = 'stepResult';
  div.replaceWith(newDiv); // remove old div
}

/* ステップ実行の結果 msg を表示する */
Stepper.showStep = function (msg) {
  Stepper.clearResult();

  // コードを表示するための pre を生成
  const pre = document.createElement('pre');

  // pre の中に code タグを作り、OCaml であることと msg を入れる
  pre.innerHTML += '<code class="language-ocaml">' + msg + '</code>';

  // コードが入った pre を div の中に入れる
  var div = document.getElementById('stepResult');
  div.appendChild(pre);

  // コードをハイライトさせる
  Prism.highlightAll();
}

/* ステッパサーバにプログラムを送って、結果を表示する */
Stepper.stepRequest = function (mode, program) {
  var data = {'mode':mode, 'program':program};
  var stringData = JSON.stringify(data);

  // 参考：https://so-zou.jp/web-app/tech/programming/javascript/ajax/post.htm
  const xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    var READYSTATE_COMPLETED = 4;
    var HTTP_STATUS_OK = 200;

    if (this.readyState == READYSTATE_COMPLETED &&
        this.status == HTTP_STATUS_OK) {
        // レスポンスの表示
        var json = JSON.parse(this.responseText);
        var out = json.stdout;
        if (out == '') {
          var err = json.stderr.replace(/".*"/, "\"file.ml\"");
          Stepper.showStep(err);
        } else {
          Stepper.results.push(out);
          Stepper.showStep(out);
        }
    }
  }
  xmlhttp.open('POST', Stepper.url);

  // サーバに対して解析方法を指定する
  xmlhttp.setRequestHeader('content-type', 'application/json');

  // データをリクエスト ボディに含めて送信する
  xmlhttp.send(stringData);
}

/* Prev ボタン */
Stepper.prev = function() {
  var len = Stepper.results.length;
  if (len > 1) {
    Stepper.results.pop();
    Stepper.showStep(Stepper.results[len - 2]);
  }
}

/* Next ボタン */
Stepper.next = function() {
  var len = Stepper.results.length;
  if (len === 0) {
    Stepper.showStep("Cannot happen in Stepper.next.");
  } else {
    var lastStep = Stepper.results[len - 1];
    var program = Stepper.nextProgram(lastStep);
    console.log('next:\n' + program);
    Stepper.stepRequest('next', program);
  }
}

/* ステッパ開始時の処理 */
Stepper.stepStorageCode = function() {
  var program = sessionStorage.getItem('key');
  console.log('lanunch:\n' + program);
  Stepper.stepRequest('next', program);
}

/* インクリメンタルモードの stepper の入力の形式 */
/*
  [@@@stepper.counter 0]
  let rec fac n = if n = 0 then 1 else n * (fac (n - 1))[@@stepper.evaluated
                                                          ]
  let test =
    ((fac)
      [@stepper.letrec
        let rec fac n = if n = 0 then 1 else n * (fac (n - 1)) in fac]
      [@stepper.level 0]) 2
*/

/* インクリメンタルモードの stepper の出力の形式 */

/*
(* Step 0 *)
[@@@stepper.process
  [@@@stepper.counter 0]
  let rec fac n = if n = 0 then 1 else n * (fac (n - 1))[@@stepper.evaluated
                                                          ]
  let test =
    ((fac)
      [@stepper.letrec
        let rec fac n = if n = 0 then 1 else n * (fac (n - 1)) in fac]
      [@stepper.level 0]) 2]

let test = ((fac 2)[@x ])

(* Step 1 *)
[@@@stepper.process
  [@@@stepper.counter 1]
  let rec fac n = if n = 0 then 1 else n * (fac (n - 1))[@@stepper.evaluated
                                                          ]
  let test =
    if 2 = 0
    then 1
    else
      2 *
        (((fac)
           [@stepper.letrec
             (let rec fac n = if n = 0 then 1 else n * (fac (n - 1)) in fac)])
           (2 - 1))]

let test = ((if 2 = 0 then 1 else 2 * (fac (2 - 1)))[@t ])
*/
