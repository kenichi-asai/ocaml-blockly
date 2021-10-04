var Tutorial = {};
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
var f;
var alertflg = 0;
var textarea;
var num = 0;

var box = document.createElement("div");
var box2 = document.createElement("div");
var box3 = document.createElement("div");
var box4 = document.createElement("div");
var box5 = document.createElement("div");
var box6 = document.createElement("div");
var box7 = document.createElement("div");
var box8 = document.createElement("div");
var count = 0;
function draw_rect(rec) {
    rect = rec.getBoundingClientRect();
    box.setAttribute("style", "width:" + (rect.width+10) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box2.setAttribute("style", "width:" + (rect.width+15) + "px; height:5px; left:" + (rect.left-5) + "px; top:" + (rect.bottom+5) + "px; background:red;");
    box3.setAttribute("style", "width:5px; height:" + (rect.height+10) + "px; left:" + (rect.left-5) + "px; top:" + (rect.top-5) + "px; background:red;");
    box4.setAttribute("style", "width:5px; height:" + (rect.height+15) + "px; left:" + (rect.right+5) + "px; top:" + (rect.top-5) + "px; background:red;");
	box.setAttribute("class", "tutorialBox");
	box2.setAttribute("class", "tutorialBox");
	box3.setAttribute("class", "tutorialBox");
	box4.setAttribute("class", "tutorialBox");
	document.querySelector("body").appendChild(box);
	document.querySelector("body").appendChild(box2);
	document.querySelector("body").appendChild(box3);
	document.querySelector("body").appendChild(box4);
}

function draw_rect2(x, y, width, height) {
    scale = Blockly.mainWorkspace.scale;
    x2 = Blockly.mainWorkspace.toolbox_.width + Blockly.mainWorkspace.scrollX + (x - 10) * scale;
    box5.setAttribute("style", "width:" + ((width+10)*scale) + "px; height:5px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box6.setAttribute("style", "width:" + ((width+10)*scale+5) + "px; height:5px; left:" + x2 + "px; top:" + ((y+height+5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box7.setAttribute("style", "width:5px; height:" + ((height+10)*scale) + "px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box8.setAttribute("style", "width:5px; height:" + ((height+10)*scale+5) + "px; left:" + (x2+(width+10)*scale) + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue;");
    box5.setAttribute("class", "tutorialBox");
    box6.setAttribute("class", "tutorialBox");
    box7.setAttribute("class", "tutorialBox");
    box8.setAttribute("class", "tutorialBox");
    document.querySelector("body").appendChild(box5);
    document.querySelector("body").appendChild(box6);
    document.querySelector("body").appendChild(box7);
    document.querySelector("body").appendChild(box8);
}

function dark() {
    rect = document.body.getBoundingClientRect();
    div = document.createElement("div");
    div.setAttribute("style", "width:" + rect.width + "px; height:" + rect.height + "px; left:" + rect.left + "px; top:" +rect.top + "px; background:Black; opacity: 0.4");
    div.setAttribute("class", "tutorialBox");
    document.body.appendChild(div);
}

function clear_rect() {
    while ((div = document.querySelector("div[class='tutorialBox']")) != null) {
	document.querySelector("body").removeChild(div);
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
	    [["letstatement_fun_pattern_typed", "変数定義", "VAR"],
	     ["letstatement_fun_pattern_typed", "関数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所変数定義", "VAR"],
	     ["let_fun_pattern_typed", "局所関数定義", "VAR"]],
	    [["pattern_typed", "パラメータ", "VAR"]]];
var patternlst = [
    "variable_pattern_typed",
    "pair_pattern_typed",
    "record_pattern_typed",
    "empty_construct_pattern_typed",
    "cons_construct_pattern_typed",
    "option_none_pattern_typed",
    "option_some_pattern_typed",
];

Tutorial.obs = function() {
    if (flg == 0) {
	flg = 1;
	observe.textContent = "チュートリアル作成終了";
	introlst = [];
	introidlst = [];
	func = Blockly.mainWorkspace.addChangeListener(function(e){
	    if (e.element == "category") {
		element = {text: [[], [], [], [], []]};
		element.category = menulst.indexOf(e.newValue);
		introlst.push(element);
		num = 1;
	    }
	    else if (e.__proto__.type == "create") {
		if (element.variable == undefined && element.workbench == undefined) {
		    block = Blockly.mainWorkspace.getBlockById(e.blockId);
		    if (block.type == "defined_recordtype_typed") {
			if (e.xml.innerText == "world_tzahyo1") {
			    element.block = 1;
			}
			else {
			    element.block = 2;
			}
		    }
		    else if (element.category == 9) {
			if (block.type == "letstatement_fun_pattern_typed") {
			    if (block.getInput("ARG0") == null) {
				element.block = 0;
			    }
			    else {
				element.block = 1;
			    }
			}
			else if (block.getInput("ARG0") == null) {
			    element.block = 2;
			}
			else {
			    element.block = 3;
			}
		    }
		    else if (block.type == "letstatement_typed" || block.type == "letstatement_fun_pattern_typed") {
			element.block = blocklst[element.category].map(item => item[1]).indexOf(e.xml.innerText);
		    }
		    else {
			element.block = blocklst[element.category].map(item => item[0]).indexOf(block.type);
		    }
		}
		else {
		    element.category = 10;
		    element.block = 0;
		}
		element.id = introidlst.push(e.blockId);
		num = 2;
	    }
	    else if (e.__proto__.type == "move" && e.newParentId != undefined) {
		element.target = [];
		element.target[0] = introidlst.indexOf(e.newParentId);
		if (e.newInputName == undefined) {
		    element.target[1] = "NEXT";
		}
		else {
		    element.target[1] = e.newInputName;
		}
		num = 3;
	    }
	    else if (e.__proto__.type == "change" && e.element == "field") {
		element.value = [Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[element.category][element.block][2]).getText(), e.newValue];
		num = 4;
	    }
	    else if (e.__proto__.type == "ui" && e.element == "mutatorOpen") {
		element = {text: [[], [], [], [], []]};
		introlst.push(element);
		element.mutator = [introidlst.indexOf(e.blockId)];
		if (!e.oldValue) {
		    num = 1;
		}
		else {
		    element.mutator.push(false);
		    num = 0;
		}
	    }
	    else if (e.__proto__.type == "change" && e.element == "mutation") {
		element.newvalue = e.newValue.slice(54, -13);
		element.oldvalue = e.oldValue.slice(54, -13);
		element.add = element.newvalue > element.oldvalue;
		num = 3;
	    }
	    else if (e.__proto__.type == "bound_var_rename") {
		element.name = e.newName;
		num = 0;
	    }
	    else if (e.__proto__.type == "ui_with_undo" && e.element == "workbenchOpen") {
		element = {text: [[], [], [], [], []]};
		introlst.push(element);
		element.workbench = [introidlst.indexOf(e.blockId)];
		if (e.newValue) {
		    num = 1;
		}
		else {
		    element.workbench.push(false);
		    num = 0;
		}
	    }
	    else if (e.__proto__.type == "change" && e.element == "inline") {
		if (element.workbench) {
		    mat = Blockly.mainWorkspace.getBlockById(introidlst[element.workbench[0]]).workbenches[1].workspace_.flyout_.mats_;
		    length = mat.length;
		    for (var i=0; i<length; i++) {
			if (mat[i] && mat[i].tooltip.type == Blockly.mainWorkspace.getBlockById(e.blockId).type) {
			    element.workbench.push(i);
			}
		    }
		}
		else {
		    element = {text: [[], [], [], [], []]};
		    introlst.push(element);
		    id = Blockly.mainWorkspace.getBlockById(e.blockId).typedReference.VAR.value_.sourceBlock_.id;
		    element.variable = introidlst.indexOf(id);
		}
		num = 2;
	    }
	    else if (e.__proto__.type == "delete") {
		element = {text: [[], [], [], [], []]};
		introlst.push(element);
		element.trash = introidlst.indexOf(e.blockId);
		num = 0;
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

Tutorial.loadtext = function() {
    if (flg) {
	if (newtext = textarea.value) {
	    if (introlst.length == 0) {
		element = {text: [[]]};
		introlst.push(element);
	    }
	    else {
		element = introlst[introlst.length-1];
	    }
	    element.text[num].push({intro: newtext});
	}
	textarea.value = null;
    }
}

Tutorial.clear = function() {
    Tutorial.intro.addSteps([{intro: "チュートリアルクリア"}]).onchange(function(){}).start();
}

Tutorial.error = function() {
    alert("エラー！最初からやり直してください");
    Blockly.mainWorkspace.clear();
    Tutorial.f(lst);
}

Tutorial.cancel = function(e, f, g) {
    console.log(count);
    console.log(e);
    console.log(g);
    console.log(alertflg);
    if (e.__proto__.type == "change" && e.element == "field" && lst[idlst.indexOf(e.blockId)]) {
	b = lst.filter(function(x){x.id == idlst.indexOf(e.blockId)})[0];
	if (b.value == undefined) {
	    value = Blockly.FieldTextInput.htmlInput_.defaultValue;
	}
	else value = b.value[1];
	if (e.newValue == value) {
	    alertflg = 0;
	}
	else if (alertflg == 0) {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.selected.unselect();
	    Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[b.category][b.block][2]).setValue(value);
	    Blockly.FieldTextInput.htmlInput_.value = value;
	    g();
	}
	else {
	}
    }
    else if (e.__proto__.type == "create" || e.__proto__.type == "delete" || ((e.__proto__.type == "move" && (e.newParentId != undefined || e.oldParentId != undefined)) || e.__proto__.type == "change" || e.__proto__.type == "bound_var_rename")) {
	if (alertflg == 1) {
	    alertflg = 0;
	}
	else {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.mainWorkspace.undo();
	    if (e.__proto__.type != "create" && Blockly.mainWorkspace.getBlockById(e.blockId) == null) {
		window.setTimeout(Tutorial.error, 11);
	    }
	    else {
		g();
	    }
	}
    }
}

function ondrag(x, y, s, g, n) {
    if (dragflg != n) {
    }
    else if (x == Blockly.mainWorkspace.scrollX &&
	     y == Blockly.mainWorkspace.scrollY &&
	     s == Blockly.mainWorkspace.scale) {
	window.setTimeout(function(){ondrag(x, y, s, g, n);}, 1000);
    }
    else {
	Tutorial.intro.exit();
	Blockly.mainWorkspace.removeChangeListener(f);
	g();
    }
}

Tutorial.f = function(l) {
    idlst = [];
    step = 0;
    lst = l;
    if (lst.length > 0 && lst[0].text.length == 1) {
	Tutorial.intro.setOptions({'steps': lst[0].text[0].slice()});
	step++;
    }
    else {
	Tutorial.intro.setOptions({'steps': []});
    }
    Tutorial.f0();
}

Tutorial.f0 = function() {
    console.log("f0");
    if (a = lst[step]) {
	if (a.trash != undefined) {
	    Tutorial.f9();
	}
	else if (a.variable == undefined && a.workbench == undefined && a.mutator == undefined) {
	    Tutorial.f1();
	}
	else {
	    Tutorial.f6(null);
	}
    }
    else {
	Tutorial.clear();
    }
}

Tutorial.f1 = function() {
    console.log("f1");
    x = a.category;
    if (x < 9) {
	x2 = x+1;
    }
    else {
	x2 = "a";
    }
    target = document.querySelector("div[aria-labelledby=':"+(x2)+".label']");
    Tutorial.intro.addSteps([{element: target, intro: menulst[x]+"をクリック"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if(e.element == "category" && e.newValue == menulst[x]) {
	    Tutorial.intro.exit();
	    Tutorial.intro.onchange(function(e1){console.log(e1)});
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[1].slice()});
	    Tutorial.f2();
	}
    });
}

Tutorial.f2 = function() {
    console.log("f2");
    x = a.category;
    y = a.block;
    target = Blockly.mainWorkspace.toolbox_.flyout_.mats_[y];
    Tutorial.intro.addSteps([{element: target, intro: blocklst[x][y][1]+"ブロックをメインスペースにドラッグ"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == blocklst[x][y][0]){
	    idlst.push(e.blockId);
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[2].slice()});
	    Tutorial.f3();
	}
	else if (e.__proto__.type == "ui") {
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.setOptions({'steps': []});
	    Tutorial.f1();
	}
	else {
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f2);
	}
    });
}

Tutorial.f3 = function() {
    console.log("f3");
    if (a.target) {
	dragflg = 1;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f3, 1);
	target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
	if (a.target[1] == "NEXT") {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.nextConnection;draw_rect2(input.x_-15, input.y_, 24, 0);}}).start();
	}
	else {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.getInput(a.target[1]);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).start();
	}
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    block = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (e.__proto__.type == "move" && block.type == blocklst[a.category][a.block][0] && e.newParentId == target.id && (e.newInputName == a.target[1] || (a.target[1] == "NEXT" && e.newInputName == undefined))) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[3].slice()});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f3();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f3);
	    }
	});
    }
    else {
	Tutorial.f4();
    }
}

Tutorial.f4 = function() {
    console.log("f4");
    if (a.value) {
	dragflg = 2;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f4, 2);
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[a.category][a.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: a.value[0]+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "change" && e.newValue == a.value[1]) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[4].slice()});
		Tutorial.f5();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f4();
	    }
	    else if (e.__proto__.type == "change" && e.element == "field" && e.blockId == idlst[idlst.length-1]) {
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f4);
	    }
	});
    }
    else {
	Tutorial.f5();
    }
}

Tutorial.f5 = function() {
    if (a.name != undefined) {
	dragflg = 3;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f5, 3);
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[a.category][a.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: '名前を'+a.name+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "bound_var_rename" && field.getText() == a.name) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[0].slice()});
		step++;
		Tutorial.f0();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f5();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f5);
	    }
	});

    }
    else {
	Tutorial.f5();
    }
}

Tutorial.f6 = function() {
    if (a.workbench || a.mutator != undefined) {
	dragflg = 4;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f6, 4);
	if (a.workbench) {
	    block = Blockly.mainWorkspace.getBlockById(idlst[a.workbench[0]]);
	    icon = block.workbenches[1].iconGroup_;
	    str = "「パ」";
	    el = "workbenchOpen";
	    next = function(){Tutorial.f7(null);};
	}
	else {
	    block = Blockly.mainWorkspace.getBlockById(idlst[a.mutator[0]]);
	    icon = block.mutator.iconGroup_;
	    str = "設定";
	    el = "mutatorOpen";
	    next = Tutorial.f8;
	}
	if ((a.workbench && a.workbench[1] == false) || (a.mutator && a.mutator[1] == false)) {
	    txt = "メニューを閉じる";
	    next = function(){step++; Tutorial.f0();};
	}
	else {
	    txt = str+'ボタンをクリック'
	}
	Tutorial.intro.addSteps([{element: icon, intro: txt}]).onchange(function(e){if(e!=icon){dark();}else{clear_rect();draw_rect(icon);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.element == el && e.blockId == block.id) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': a.text[1].slice()});
		next();
	    }
	    else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.f6();
	    }
	    else {
		dragflg = 0;
		Tutorial.intro.setOptions({'steps': []});
		Tutorial.cancel(e, f, Tutorial.f6);
	    }
	});
    }
    else {
	Tutorial.f7(null);
    }
}

Tutorial.f7 = function(arg) {
    dragflg = 5;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, function(){Tutorial.f7(arg)}, 5);
    target = Blockly.mainWorkspace.getBlockById(idlst[a.target[0]]);
    input = target.getInput(a.target[1]);
    if (a.variable == undefined) {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.workbench[0]]).workbenches[1].workspace_.flyout_.mats_[a.workbench[1]];
    }
    else {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.variable]).getField("VAR").fieldGroup_;
    }
    Tutorial.intro.onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();draw_rect(block);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).start();
    id = arg;
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "move" && (a.workbench != undefined || idlst[a.variable]) && e.blockId == id && e.newParentId == target.id && e.newInputName == a.target[1]) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[3].slice()});
	    if (a.workbench != undefined && a.name != undefined) {
		Tutorial.f5();
	    }
	    else {
		step++
		Tutorial.f0();
	    }
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f7(id);
	}
	else if (e.__proto__.type == "change" && e.element == "inline" && ((a.variable != undefined && Blockly.mainWorkspace.getBlockById(e.blockId).typedReference.VAR.value_.sourceBlock_.id == idlst[a.variable]) || (a.workbench != undefined && block.tooltip.type == Blockly.mainWorkspace.getBlockById(e.blockId).type))) {
	    id = e.blockId;
	    idlst.push(id);
	}
	else if (e.__proto__.type == "create" && e.blockId == id) {
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, function(){Tutorial.f7(null)});
	}
    });
}

Tutorial.f8 = function() {
    dragflg = 6;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f8, 6);
    block = Blockly.mainWorkspace.getBlockById(idlst[a.mutator]);
    console.log(block);
    console.log(block.mutator);
    ws = block.mutator.workspace_;
    b = ws.getTopBlocks(true)[0];
    for (var i=0; i<a.oldvalue; i++) {
	b = b.getChildren()[0];
    }
    console.log(b);
    if (a.add) {
	if (a.oldvalue == 0) {
	    connection = b.inputList[1].connection;
	}
	else {
	    connection = b.nextConnection;
	}
	el = block.mutator.workspace_.flyout_.mats_[0];
	Tutorial.intro.addSteps([{element: el, intro: 'ブロックをくっつける', position: 'top'}]).onchange(function(e){if(e!=el){dark();}else{clear_rect();draw_rect(el);draw_rect2(connection.x_+ws.workspaceArea_.left-Blockly.mainWorkspace.toolbox_.width-15, connection.y_+ws.workspaceArea_.top, 24, 0)}}).start();
    }
    else {
	console.log("#");
	for (var i=1; i<a.oldvalue-a.newvalue; i++) {
	    b = b.getParent();
	}
	el = b.svgGroup_;
	Tutorial.intro.addSteps([{element: el, intro: 'ブロックを外す', position: 'top'}]).onchange(function(e){if(e!=el){dark();}else{clear_rect();draw_rect(el)}}).start();
    }
    newvalue = '<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"'+a.newvalue+'"></mutation>';
    oldvalue = '<mutation xmlns=\"http://www.w3.org/1999/xhtml\" items=\"'+a.oldvalue+'"></mutation>';
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "change" && e.element == "mutation" && e.blockId == idlst[a.mutator] && e.newValue == newvalue && e.oldValue == oldvalue) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f8();
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f8);
	}
    });
}

Tutorial.f9 = function() {
    dragflg = 7;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f9, 7);
    if (Blockly.mainWorkspace.getBlockById(idlst[a.trash]) != null) {
	block = Blockly.mainWorkspace.getBlockById(idlst[a.trash]).svgPath_;
    trs = document.querySelector("g[class='blocklyTrash']");
	Tutorial.intro.addSteps([{element: trs, intro: 'ブロックをゴミ箱にドラッグ'}]).onchange(function(e){if(e!=trs){dark();}else{clear_rect();draw_rect(block);}}).start();}
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "delete" && e.blockId == idlst[a.trash]) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': a.text[0].slice()});
	    step++;
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f9();
	}
	else if (e.__proto__.type == "move" && e.blockId == idlst[a.trash]) {
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, Tutorial.f9);
	}
    });
}

Tutorial.main = function() {
    var trash = document.querySelector("g[class='blocklyTrash']");
    Blockly.mainWorkspace.addChangeListener(function(e){console.log(e); count++;console.log(count)});
    observe = document.createElement("button");
    observe.textContent = "チュートリアル作成開始";
    observe.onclick = Tutorial.obs;
    start = document.createElement("button");
    start.textContent = "チュートリアルスタート";
    start.onclick = function(){step=0; idlst=[]; Tutorial.f(introlst);};
    div = document.createElement("div");
    div.setAttribute("class", "box");
    label = document.createElement("label");
    label.textContent = "説明文:";
    div.appendChild(label);
    textarea = document.createElement("textarea");
    textarea.rows = "6";
    textarea.cols = "21";
    label.appendChild(textarea);
    ok = document.createElement("button");
    ok.textContent = "OK";
    ok.onclick = Tutorial.loadtext;
    div.appendChild(ok);
    document.querySelector("div[class='blockToCode']").appendChild(observe);
    document.querySelector("div[class='blockToCode']").appendChild(start);
    document.querySelector("div[class='blockToCode']").appendChild(div);
    Tutorial.intro.setOptions({
	nextToDone: false,
	exitOnOverlayClick: false}).oncomplete(clear_rect).onexit(function(){clear_rect(); Blockly.mainWorkspace.removeChangeListener(f);});;
}
