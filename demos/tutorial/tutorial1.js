var Tutorial = {};
var sisoku;
var step = 0;
Tutorial.intro = introJs();

var lst;
var a;
var menulst;
var blocklst;
var idlst = [];
var introlst = [];
var observe;
var flg = 0;
var func;

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

menulst = ["四則演算", "文字列", "論理演算と条件文", "色", "画像", "風景", "リスト", "座標と世界の定義", "ゲーム用の定義", "一般の変数と関数"];

blocklst = [[["int_typed", "整数", "INT"],
	     ["int_arithmetic_typed", "四則演算", "OP_INT"],
	     ["int_abs_typed", "abs"],
	     ["random_int_typed", "乱数"]],
	    [["string_typed", "文字列", "STRING"],
	     ["concat_string_typed", "文字列結合"],
	     ["string_of_int_typed", "string_of_int"]],
	    [["logic_compare_typed", "比較演算", "OP"],
	     ["logic_operator_typed", "論理演算", "OP_BOOL"],
	     ["not_operator_typed", "not"],
	     ["logic_ternary_typed", "if"],
	     ["logic_boolean_typed", "true", "BOOL"]],
	    [["color_typed", "color", "COLOR"],
	     ["make_color_typed", "make_color"],
	     ["make_color2_typed", "make_color2"]],
	    [["image_width_typed", "image_width"],
	     ["image_height_typed", "image_height"],
	     ["read_image_typed", "read_image"],
	     ["rectangle_typed", "rectangle", "IMAGE"],
	     ["circle_typed", "circle", "IMAGE"],
	     ["line_typed", "line"],
	     ["polygon_typed", "polygon", "IMAGE"],
	     ["text_typed", "text"],
	     ["overlay_typed", "overlay"]],
	    [["empty_scene_typed", "empty_scene"],
	     ["place_image_typed", "place_image"],
	     ["place_images_typed", "place_images"]],
	    [["lists_create_with_typed", "リスト"],
	     ["list_cons_typed", "cons"],
	     ["list_map_typed", "map"],
	     ["andmap_typed", "andmap"],
	     ["ormap_typed", "ormap"],
	     ["sum_typed", "sum"],
	     ["list_filter_typed", "filter"]],
	    [["pair_create_typed", "組"],
	     ["defined_recordtype_typed", "world_t", "DATANAME", "FIELDn"],
	     ["defined_recordtype_typed", "レコード定義", "DATANAME"]],
	    [["letstatement_typed", "initial_world", "VAR"],
	     ["letstatement_typed", "width", "VAR"],
	     ["letstatement_typed", "height", "VAR"],
	     ["letstatement_fun_pattern_typed", "draw", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_tick", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_key", "VAR"],
	     ["letstatement_fun_pattern_typed", "on_mouse", "VAR"],
	     ["letstatement_typed", "rate", "VAR"],
	     ["big_bang_typed", "big_bang"]],
	    [["let_fun_pattern_typed", "変数定義", "VAR"],
	     ["let_fun_pattern_typed", "関数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所変数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所関数定義", "VAR"]]];

Tutorial.obs = function() {
    if (flg == 0) {
	flg = 1;
	observe.textContent = "チュートリアル作成終了";
	introlst = [];
	introidlst = [];
	func = Blockly.mainWorkspace.addChangeListener(function(e){
	    if (e.element == "category") {
		element = {};
		element.category = menulst.indexOf(e.newValue);
		introlst.push(element);
	    }
	    else if (e.__proto__.type == "create") {
		block = Blockly.mainWorkspace.getBlockById(e.blockId);
		if (block.type == "defined_recordtype_typed") {
		    if (e.xml.innerText == "world_tzahyo1") {
			e.block = 1;
		    }
		    else {
			e.block = 2;
		    }
		}
		else if (block.type == "letstatement_typed" || block.type == "letstatement_fun_pattern_typed") {
		    element.block = blocklst[element.category].map(item => item[1]).indexOf(e.xml.innerText);
		}
		else {
		    element.block = blocklst[element.category].map(item => item[0]).indexOf(block.type);
		}
		introidlst.push(e.blockId);
	    }
	    else if (e.__proto__.type == "move" && e.newParentId != undefined) {
		element.target = [];
		element.target[0] = introidlst.indexOf(e.newParentId);
		element.target[1] = e.newInputName;
	    }
	    else if (e.__proto__.type == "change") {
		element.value = Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[element.category][element.block][2]).getText();
	    }
	});
    }
    else {
	Blockly.mainWorkspace.removeChangeListener(func);
	flg = 0;
	observe.textContent = "チュートリアル作成開始";
	console.log(introlst);
    }
}

Tutorial.clear = function() {
    Tutorial.intro.setOptions({'steps': [{intro: "チュートリアルクリア"}]}).start();
}

Tutorial.f = function(l) {
    lst = l;
    Tutorial.f0();
}

Tutorial.f0 = function() {
    if (a = lst[step]) {
	Tutorial.f1();
    }
    else {
	Tutorial.clear();
    }
}

Tutorial.f1 = function() {
    x = a.category;
    target = document.querySelector("div[aria-labelledby=':"+(x+1)+".label']");
    Tutorial.intro.setOptions({'steps': [{element: target, intro: menulst[x]+"をクリック"}]}).start();
    draw_rect(target);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == menulst[x]) {
	    Tutorial.intro.exit();
	    Tutorial.intro.onchange(function(){});
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.f2();
	}
    });
}

Tutorial.f2 = function() {
    x = a.category;
    y = a.block;
    target = Blockly.mainWorkspace.toolbox_.flyout_.mats_[y];
    Tutorial.intro.setOptions({'steps': [{element: target, intro: blocklst[x][y][1]+"ブロックをドラッグ"}]}).start();
    draw_rect(target);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == blocklst[x][y][0]){
	    idlst.push(e.blockId);
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.f3();
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.f1();
	}
    });
}

Tutorial.f3 = function() {
    if (a.target) {
	target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
	Tutorial.intro.setOptions({'steps': [{element: target.svgGroup_, intro: 'ブロックをはめる'}]}).start();
	input = target.getInput(a.target[1]);
	draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    block = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (e.__proto__.type == "move" && block.type == blocklst[a.category][a.block][0] && e.newParentId == target.id && e.newInputName == a.target[1]) {
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "move") {
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.f4();
	    }
	});
    }
    else {
	Tutorial.f4();
    }
}

Tutorial.f4 = function() {
    if (a.value) {
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[a.category][a.block][2])
	Tutorial.intro.setOptions({'steps': [{element: field.fieldGroup_, intro: '値を'+a.value+'に変更'}]}).start();
	draw_rect(field.fieldGroup_);
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "change" && field.getText() == a.value) {
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move") {
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.f4();
	}
    });
    }
    else {
	step++;
	Tutorial.f0();
    }
}

Tutorial.t1 = function() {/*
    console.log(Blockly.mainWorkspace.toolbox_.flyout_);*/
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == "四則演算") {
	    Tutorial.intro.exit();
	    Tutorial.intro.onchange(function(){});
	    Tutorial.intro.setOptions({'steps': [{element: Blockly.mainWorkspace.toolbox_.flyout_.mats_[1], intro: "四則演算ブロックをドラッグ"}]}).start();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t2();
	}
    });
}

Tutorial.t2 = function() {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == "int_arithmetic_typed"){
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': [{element: sisoku, intro: '四則演算をクリック'}]}).start();
	    Tutorial.t3();
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    Tutorial.intro.setOptions({'steps': [{element: sisoku, intro: '四則演算をクリック'}]}).start();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t1();
	}
    });
}

Tutorial.t3 = function() {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == "四則演算") {
	    Tutorial.intro.exit();
	    Tutorial.intro.setOptions({'steps': [{element: Blockly.mainWorkspace.toolbox_.flyout_.mats_[0], intro: "整数ブロックをドラッグ"}]}).start();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t4();
	}
    });
}

Tutorial.t4 = function() {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == "int_typed"){
	    Tutorial.intro.exit();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    if ((block = Blockly.mainWorkspace.getBlocksByType("int_arithmetic_typed", true)[0]) == undefined) {
	    }
	    else {
		if (step == 0) {
		    Tutorial.intro.setOptions({'steps': [{element: block.svgGroup_, intro: '四則演算ブロックの左側にはめる'}]}).start();
		}
		else if (step == 1) {
		    Tutorial.intro.setOptions({'steps': [{element: block.svgGroup_, intro: '四則演算ブロックの右側にはめる'}]}).start();
		}
		Tutorial.t5();
	    }
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    Tutorial.intro.setOptions({'steps': [{element: sisoku, intro: '四則演算をクリック'}]}).start();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.t3();
	}
    });
}

Tutorial.t5 = function() {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	block = Blockly.mainWorkspace.getBlockById(e.blockId);
	if (e.__proto__.type == "move" && block.type == "int_typed" && Blockly.mainWorkspace.getBlockById(e.newParentId).type == "int_arithmetic_typed") {
	    if ((step == 0 && e.newInputName == "A") || (step == 1 && e.newInputName == "B")) {
		Tutorial.intro.exit();
		Blockly.mainWorkspace.removeChangeListener(f);
		if (step == 0) {
		    Tutorial.intro.setOptions({'steps': [{element: block.svgGroup_, intro: '値を2に変更'}]}).start();
		}
		else
		    Tutorial.intro.setOptions({'steps': [{element: block.svgGroup_, intro: '値を3に変更'}]}).start();
		Tutorial.t6();
	    }
	}
    });
}

Tutorial.t6 = function() {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "change") {
	    if ((step == 0 && e.newValue == "2") || (step == 1 && e.newValue == "3")) {
		Tutorial.intro.exit();
		Blockly.mainWorkspace.removeChangeListener(f);
		if (step == 0) {
		    Tutorial.intro.setOptions({'steps': [{element: sisoku, intro: '四則演算をクリック'}]}).start();
		    step = 1;
		    Tutorial.t3();
		}
		else
		    Tutorial.intro.setOptions({'steps': [{intro: 'CLEAR'}]}).start();
	    }
	}
    });
}


Tutorial.main = function() {
   sisoku = document.querySelector("div[aria-labelledby=':1.label']");
    var mojiretsu = document.querySelector("div[aria-labelledby=':2.label']");
    var trash = document.querySelector("g[class='blocklyTrash']");
    Blockly.mainWorkspace.addChangeListener(function(e){console.log(e)});
    observe = document.createElement("button");
    observe.textContent = "チュートリアル作成開始";
    observe.onclick = Tutorial.obs;
    start = document.createElement("button");
    start.textContent = "チュートリアルスタート";
    start.onclick = function(){step=0; idlst=[]; Tutorial.f(introlst);};
    document.querySelector("div[class='blockToCode']").appendChild(observe)
    document.querySelector("div[class='blockToCode']").appendChild(start);
}
