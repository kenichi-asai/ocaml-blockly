var Tutorial = {};
var sisoku;
var trash;
var download;
var uploadfile;
var upload;
var run;
var step = 0;
var f;
Tutorial.intro = introJs();


var box = document.createElement("div");
var box2 = document.createElement("div");
var box3 = document.createElement("div");
var box4 = document.createElement("div");

function draw_rect(rec) {
    rect = rec.getBoundingClientRect();
    box.setAttribute("style", "width:" + (rect.width+10) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box2.setAttribute("style", "width:" + (rect.width+15) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.bottom+5) + "px; background:red;");
    box3.setAttribute("style", "width:5px; height:" + (rect.height+10) + "px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box4.setAttribute("style", "width:5px; height:" + (rect.height+15) + "px; left:" + (rect.right+5) + "px; top:" + (rect.top-5) + "px; background:red;");
	box.setAttribute("class", "a");
	box2.setAttribute("class", "a");
	box3.setAttribute("class", "a");
	box4.setAttribute("class", "a");
	document.querySelector("body").appendChild(box);
	document.querySelector("body").appendChild(box2);
	document.querySelector("body").appendChild(box3);
	document.querySelector("body").appendChild(box4);
}

function draw_rect2(x, y, width, height) {
    x2 = x + Blockly.mainWorkspace.toolbox_.width-10;
    box.setAttribute("style", "width:" + (width+10) + "px; height:5px; left:" + x2 + "px; top:" + (y-5) + "px; background:red;");
    box2.setAttribute("style", "width:" + (width+15) + "px; height:5px; left:" + x2 + "px; top:" + (y+height+5) + "px; background:red;");
    box3.setAttribute("style", "width:5px; height:" + (height+10) + "px; left:" + x2 + "px; top:" + (y-5) + "px; background:red;");
    box4.setAttribute("style", "width:5px; height:" + (height+15) + "px; left:" + (x2+width+10) + "px; top:" + (y-5) + "px; background:red;");
    box.setAttribute("class", "a");
    box2.setAttribute("class", "a");
    box3.setAttribute("class", "a");
    box4.setAttribute("class", "a");
    document.querySelector("body").appendChild(box);
    document.querySelector("body").appendChild(box2);
    document.querySelector("body").appendChild(box3);
    document.querySelector("body").appendChild(box4);
}
function clear_rect() {
    if (document.querySelector("div[class='a']") != null) {
	document.querySelector("body").removeChild(box);
	document.querySelector("body").removeChild(box2);
	document.querySelector("body").removeChild(box3);
	document.querySelector("body").removeChild(box4);
    }
}

function error() {
    step = 0;
    Tutorial.intro.setOptions({'steps': [{intro: 'エラー！最初からやり直してください'}, {element: sisoku, intro: '四則演算をクリック'}]}).start().onchange(Tutorial.t1);
    Blockly.mainWorkspace.clear();
}

Tutorial.t1 = function() {
    draw_rect(sisoku);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == "四則演算") {
	    Tutorial.intro.exit();
	    Tutorial.intro.onchange(function(){});
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t2();
	}
    });
}

Tutorial.t2 = function() {
    Tutorial.intro.setOptions({'steps': [{element: Blockly.mainWorkspace.toolbox_.flyout_.mats_[1], intro: "四則演算ブロックをドラッグ"}]}).start();
    draw_rect(Blockly.mainWorkspace.toolbox_.flyout_.mats_[1]);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == "int_arithmetic_typed"){
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t3();
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': [{element: sisoku, intro: '四則演算をクリック'}]}).start();
	    Tutorial.t1();
	}
    });
}

Tutorial.t3 = function() {
    Tutorial.intro.setOptions({'steps': [{element: sisoku, intro: '四則演算をクリック'}]}).start();
    draw_rect(sisoku);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == "四則演算") {
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t4();
	}
    });
}

Tutorial.t4 = function() {
    Tutorial.intro.setOptions({'steps': [{element: Blockly.mainWorkspace.toolbox_.flyout_.mats_[0], intro: "整数ブロックをドラッグ"}]}).start();
    draw_rect(Blockly.mainWorkspace.toolbox_.flyout_.mats_[0]);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == "int_typed"){
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    blocks = Blockly.mainWorkspace.getBlocksByType("int_arithmetic_typed", true);
	    var block = undefined;
	    for (var i=0, b, flg; b = blocks[i] || flg; i++) {
		if (b.getParent() == null) {
		    flg = null;
		    block = b;
		}
	    }
	    if (block == undefined) {
		error();
	    }
	    else {
		Tutorial.t5(block);
	    }
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t3();
	}
    });
}

Tutorial.t5 = function(b) {
    if (step == 0) {
	Tutorial.intro.setOptions({'steps': [{element: b.svgGroup_, intro: '四則演算ブロックの左側にはめる'}]}).start();
	draw_rect2(b.inputList[0].connection.x_, b.inputList[0].connection.y_, b.inputList[0].renderWidth, b.inputList[0].renderHeight);
    }
    else if (step == 1) {
	Tutorial.intro.setOptions({'steps': [{element: b.svgGroup_, intro: '四則演算ブロックの右側にはめる'}]}).start();
	draw_rect2(b.inputList[1].connection.x_, b.inputList[1].connection.y_, b.inputList[1].renderWidth, b.inputList[1].renderHeight);
    }
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	block = Blockly.mainWorkspace.getBlockById(e.blockId);
	if (e.__proto__.type == "move" && block.type == "int_typed" && e.newParentId && Blockly.mainWorkspace.getBlockById(e.newParentId).type == "int_arithmetic_typed") {
	    if ((step == 0 && e.newInputName == "A") || (step == 1 && e.newInputName == "B")) {
		Tutorial.intro.exit();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.t6(block);
	    }
	}
	else if (e.__proto__.type == "move") {
		Tutorial.intro.exit();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.t5(b);
	}
    });
}

Tutorial.t6 = function(b) {
    if (step == 0) {
	Tutorial.intro.setOptions({'steps': [{element: b.svgGroup_, intro: '値を2に変更しましょう'}]}).start();
    }
    else {
	Tutorial.intro.setOptions({'steps': [{element: b.svgGroup_, intro: '値を3に変更しましょう'}]}).start();}
    draw_rect(b.svgGroup_);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "change") {
	    if ((step == 0 && e.newValue == "2") || (step == 1 && e.newValue == "3")) {
		Tutorial.intro.exit();
		Blockly.mainWorkspace.removeChangeListener(f);
		if (step == 0) {
		    step = 1;
		    Tutorial.t3();
		}
		else {
		    block = Blockly.mainWorkspace.getBlockById(e.blockId).getParent();
		    if(block.getParent() == null && block.type == "int_arithmetic_typed" && block.getChildren(true)[0].inputList[0].fieldRow[0].text_ == "2" && block.getChildren(true)[1].inputList[0].fieldRow[0].text_ == "3" && block.inputList[1].fieldRow[0].text_ == "+") {
			Tutorial.intro.setOptions({'steps': [{intro: '2+3のブロックが完成しました！'}, {intro: 'ページをリロードすると作ったブロックは消えてしまいます。作ったプログラムは保存しておきましょう'}, {element: download, intro: '保存ボタンをクリック'}]}).start().onchange(function(e){if(e.getAttribute("id") == "download"){draw_rect(download); download.setAttribute("onclick", "Typed.saveCode(), Tutorial.t7()")}});
		    }
		    else {
			error();
		    }
		}
	    }
	}
	else if (e.__proto__.type == "move") {
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    if (e.blockId == b.id) {
		error();
	    }
	    else {
		Tutorial.t6(b);
	    }
	}
    });
}

Tutorial.t7 = function() {
    download.setAttribute("onclick", "Typed.saveCode()");
    Tutorial.intro.exit();
    Tutorial.intro.setOptions({'steps': [{intro: 'いらないブロックはゴミ箱にドラッグして捨てることができます'}, {element: Blockly.mainWorkspace.getTopBlocks(true)[0].svgGroup_, intro: 'ブロックをゴミ箱にドラッグ'}]}).start().onchange(function(e){if(e.getAttribute("class") == "blocklyDraggable"){draw_rect(trash); Tutorial.t8();}});
}

Tutorial.t8 = function() {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.__proto__.type == "delete") {
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t9();
	}
    })
}

Tutorial.t9 = function() {
    Tutorial.intro.setOptions({'steps': [{intro: 'ブロックを消せました'}, {intro: '保存したファイルを読み込むとブロックを復元することができます'}, {element: uploadfile, intro: '先ほど保存したファイルを選んでください'}]}).start().onchange(function(e){if(e.getAttribute("id") == "upload-file"){draw_rect(uploadfile); uploadfile.onchange = Tutorial.t10;}})
}

Tutorial.t10 = function() {
    uploadfile.onchange = function(){};
    Tutorial.intro.exit();
    Tutorial.intro.setOptions({'steps': [{element: upload, intro: '読み込みボタンをクリック'}]}).start();
    draw_rect(upload);
    upload.setAttribute("onclick", "Typed.loadCode(), Tutorial.t11()");
}

Tutorial.t11 = function() {
    upload.setAttribute("onclick", "Typed.loadCode()");
    Tutorial.intro.exit();
    Tutorial.intro.setOptions({'steps': [{intro: 'ファイルを読み込めました'}, {element:run, intro: '完成したプログラムを実行させてみましょう'}]}).start();
    draw_rect(run);
    run.setAttribute("onclick", "Typed.newToplevel(), Tutorial.t12()")
}

Tutorial.t12 = function() {
    run.setAttribute("onclick", "Typed.newToplevel()");
    Tutorial.intro.exit();
    Tutorial.intro.setOptions({'steps': [{intro: 'おめでとうございます！プログラムを実行できました！'}, {intro: 'チュートリアルクリア！'}]}).start();
}

Tutorial.main = function() {
    sisoku = document.querySelector("div[aria-labelledby=':1.label']");
    download = document.getElementById("download");
    uploadfile = document.getElementById("upload-file");
    upload = document.querySelector("button[onclick='Typed.loadCode()']");
    run = document.querySelector("button[onclick='Typed.newToplevel()']");
    trash = document.querySelector("g[class='blocklyTrash']");
    Blockly.mainWorkspace.addChangeListener(function(e){console.log(e)});
    Tutorial.intro.setOptions({
  steps: [
  {
    intro: 'ブロックの置き方の章へようこそ！ブロックで2+3を作ってみましょう！'
  }, {element: sisoku, intro: '四則演算をクリック'}]
    }).start().onchange(Tutorial.t1).oncomplete(clear_rect).onexit(function(){clear_rect(); Blockly.mainWorkspace.removeChangeListener(f);});
	console.log(Blockly.mainWorkspace);
}
