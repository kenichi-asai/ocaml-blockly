
var Tutorial = {};

var text = "変数定義";
var introlst = 
	[
    {
        "text": [
            [
                {
                    "intro": "ここでは、width という名前の変数を定義します。\nまず、左側のメニューからゲーム用の定義をクリック"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "次に、出てきたブロックの中から width を定義する let ブロックをドラッグ\nしてメインスペースへ"
                }
            ],
            [
                {
                    "intro": "これで変数 width を定義する let ブロックを配置できました。\n変数 width の値は 500 にしてみましょう。\nそれには、四則演算のメニューから数字ブロックを使います。"
                }
            ],
            [],
            []
        ],
        "category": 8,
        "block": 1
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "数字ブロックを let ブロックにつなげましょう。"
                }
            ],
            [],
            [
                {
                    "intro": "そして、数字を 500 に変更します。"
                }
            ],
            [
                {
                    "intro": "これで width という変数を定義して、その値を 500 とすることが\nできました。\nwidth という変数は、この let ブロックの下で使うことができます。\n例えば、width の半分を表す half という変数を定義してみましょう。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "target": [
            0,
            "EXP1"
        ],
        "value": [
            "500",
            "500"
        ]
    },
    {
        "text": [
            [
                {
                    "intro": "half の値は width の半分にしたいので、\n四則演算ブロックを使います。"
                }
            ],
            [
                {
                    "intro": "let ブロックをドラッグして、width を定義する let ブロックの下に\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "次に、変数名を half に変更します。\n変数名をクリックして、Rename variable... を選択します。\n出てきたダイアログの入力欄にhalf と入力して OK を押します。"
                }
            ],
            []
        ],
        "category": 9,
        "block": 0,
        "target": [
            0,
            "NEXT"
        ],
        "name": "half"
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "足し算ブロックをドラッグして half を定義する let ブロックに\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "+ をクリックして / に変更します。"
                }
            ],
            [
                {
                    "intro": "ここで、いよいよ変数 width を使います。\nwidth をドラッグして、割り算ブロックの左側につなぎます。\n（変数ブロックは、自分の下のブロックでしか使えません。）"
                }
            ]
        ],
        "category": 0,
        "block": 1,
        "target": [
            2,
            "EXP1"
        ],
        "value": [
            "/",
            "DIVIDE_INT"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "割り算ブロックの右側には、数字の 2 を入れます。"
                }
            ],
            []
        ],
        "variable": [
            true,
            0
        ],
        "target": [
            3,
            "A"
        ]
    },
    {
        "text": [
            [],
            [
                {
                    "intro": "整数ブロックをドラッグして、割り算ブロックの右側に\nつなぎます。"
                }
            ],
            [],
            [
                {
                    "intro": "最後に数字を 2 に変更します。"
                }
            ],
            [
                {
                    "intro": "これで width の半分を示す変数 half を定義できました。"
                }
            ]
        ],
        "category": 0,
        "block": 0,
        "target": [
            3,
            "B"
        ],
        "value": [
            "2",
            "2"
        ]
    }
	];

var step = 0;
Tutorial.intro = introJs();

var lst;
var elm;
var menulst;
var blocklst;
var idlst = [];
var func;
var f;
var alertflg = 0;
var textarea;

var box = document.createElement("div");
var box2 = document.createElement("div");
var box3 = document.createElement("div");
var box4 = document.createElement("div");
var box5 = document.createElement("div");
var box6 = document.createElement("div");
var box7 = document.createElement("div");
var box8 = document.createElement("div");

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
    box5.setAttribute("style", "width:" + ((width+10)*scale) + "px; height:5px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightBlue; opacity:0.9;");
    box6.setAttribute("style", "width:" + ((width+10)*scale+5) + "px; height:5px; left:" + x2 + "px; top:" + ((y+height+5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue; opacity:0.9;");
    box7.setAttribute("style", "width:5px; height:" + ((height+10)*scale) + "px; left:" + x2 + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue; opacity:0.9;");
    box8.setAttribute("style", "width:5px; height:" + ((height+10)*scale+5) + "px; left:" + (x2+(width+10)*scale) + "px; top:" + ((y-5)*scale+Blockly.mainWorkspace.scrollY) + "px; background:LightSkyBlue; opacity:0.9;");
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
	     ["let_fun_pattern_typed", "局所関数定義", "VAR"]]];
var patternlst = [
    "variable_pattern_typed",
    "pair_pattern_typed",
    "record_pattern_typed",
    "empty_construct_pattern_typed",
    "cons_construct_pattern_typed",
    "option_none_pattern_typed",
    "option_some_pattern_typed",
];

Tutorial.clear = function() {
    Tutorial.intro.addSteps([{intro: "チュートリアルクリア"}]).onchange(function(){}).start();
}

Tutorial.error = function() {
    alert("エラー！最初からやり直してください");
    Blockly.mainWorkspace.clear();
    Tutorial.f(lst);
}

Tutorial.cancel = function(e, f, g) {
    if (e.__proto__.type == "change" && e.element == "field" && lst[idlst.indexOf(e.blockId)]) {
	block = lst[idlst.indexOf(e.blockId)];
	if (block.value == undefined) {
	    value = Blockly.FieldTextInput.htmlInput_.defaultValue;
	}
	else value = block.value[1];
	if (alertflg == 1 && e.newValue == value) {
	    alertflg = 0;
	}
	else if (alertflg == 0) {
	    alertflg = 1;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    window.setTimeout('alert("操作が違います！")', 11);
	    Blockly.selected.unselect();
	    Blockly.mainWorkspace.getBlockById(e.blockId).getField(blocklst[block.category][block.block][2]).setValue(value);
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
    if (elm = lst[step]) {
	if (elm.variable) {
	    Tutorial.f6(null);
	}
	else {
	    Tutorial.f1();
	}
    }
    else {
	Tutorial.clear();
    }
}

Tutorial.f1 = function() {
    x = elm.category;
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
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': elm.text[1].slice()});
	    Tutorial.f2();
	}
    });
}

Tutorial.f2 = function() {
    x = elm.category;
    y = elm.block;
    target = Blockly.mainWorkspace.toolbox_.flyout_.mats_[y];
    Tutorial.intro.addSteps([{element: target, intro: blocklst[x][y][1]+"ブロックをメインスペースにドラッグ"}]).onchange(function(e){if(e!=target){dark();}else{clear_rect();draw_rect(target);}}).start();
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "create" && Blockly.mainWorkspace.getBlockById(e.blockId).type == blocklst[x][y][0]){
	    idlst.push(e.blockId);
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': elm.text[2].slice()});
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
    if (elm.target) {
	dragflg = 1;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f3, 1);
	target = Blockly.mainWorkspace.getBlockById(idlst[elm.target[0]]);
	if (elm.target[1] == "NEXT") {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.nextConnection;draw_rect2(input.x_-15, input.y_, 24, 0);}}).start();
	}
	else {
	    Tutorial.intro.addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();input = target.getInput(elm.target[1]);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).start();
	}
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    block = Blockly.mainWorkspace.getBlockById(e.blockId);
	    if (e.__proto__.type == "move" && block.type == blocklst[elm.category][elm.block][0] && e.newParentId == target.id && (e.newInputName == elm.target[1] || (elm.target[1] == "NEXT" && e.newInputName == undefined))) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': elm.text[3].slice()});
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
    if (elm.value) {
	dragflg = 2;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f4, 2);
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[elm.category][elm.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: elm.value[0]+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "change" && e.newValue == elm.value[1]) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': elm.text[4].slice()});
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
    if (elm.name) {
	dragflg = 3;
	ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f5, 3);
	block = Blockly.mainWorkspace.getBlockById(idlst[idlst.length-1]);
	field = block.getField(blocklst[elm.category][elm.block][2])
	Tutorial.intro.addSteps([{element: field.fieldGroup_, intro: '名前を'+elm.name+'に変更', position: 'top'}]).onchange(function(e){if(e!=field.fieldGroup_){dark();}else{clear_rect();draw_rect(field.fieldGroup_);}}).start();
	Blockly.mainWorkspace.addChangeListener(f = function(e){
	    if (e.__proto__.type == "bound_var_rename" && field.getText() == elm.name) {
		dragflg = 0;
		Tutorial.intro.exit();
		clear_rect();
		Blockly.mainWorkspace.removeChangeListener(f);
		Tutorial.intro.setOptions({'steps': elm.text[0].slice()});
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
	step++;
	Tutorial.f0();
    }
}

Tutorial.f6 = function(arg) {
    dragflg = 4;
    ondrag(Blockly.mainWorkspace.scrollX, Blockly.mainWorkspace.scrollY, Blockly.mainWorkspace.scale, Tutorial.f6, 4);
    target = Blockly.mainWorkspace.getBlockById(idlst[elm.target[0]]);
    input = target.getInput(elm.target[1]);
    block = Blockly.mainWorkspace.getBlockById(idlst[elm.variable[1]]).getField("VAR").fieldGroup_;
    Tutorial.intro.onchange(function(e){if(e!=target.svgGroup_){dark();}else{clear_rect();draw_rect(block);draw_rect2(input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight);}}).addSteps([{element: target.svgGroup_, intro: 'ブロックをはめる'}]).start();
    id = arg;
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.__proto__.type == "move" && idlst[elm.variable[1]] && e.blockId == id && e.newParentId == target.id && e.newInputName == elm.target[1]) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': elm.text[3].slice()});
	    step++
	    Tutorial.f0();
	}
	else if (e.__proto__.type == "move" && e.newParentId == undefined && e.oldParentId == undefined) {
	    dragflg = 0;
	    Tutorial.intro.exit();
	    clear_rect();
	    Blockly.mainWorkspace.removeChangeListener(f);
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.f6(id);
	}
	else if (e.__proto__.type == "change" && e.element == "inline" && Blockly.mainWorkspace.getBlockById(e.blockId).typedReference.VAR.value_.sourceBlock_.id == idlst[elm.variable[1]]) {
	    id = e.blockId;
	}
	else if (e.__proto__.type == "create" && e.blockId == id) {
	}
	else {
	    dragflg = 0;
	    Tutorial.intro.setOptions({'steps': []});
	    Tutorial.cancel(e, f, function(){Tutorial.f6(null)});
	}
    });
}

Tutorial.main = function() {
    div = document.createElement("div");
    div.innerHTML = "<br>"+text;
    document.querySelector("div[class='blockToCode']").appendChild(div);
    start = document.createElement("button");
    start.textContent = "チュートリアルスタート";
    Tutorial.intro.setOptions({
	nextToDone: false,
	exitOnOverlayClick: false}).onexit(function(){clear_rect(); Blockly.mainWorkspace.removeChangeListener(f);});
    start.onclick = function() {
	Tutorial.intro.exit();
	step = 0;
	Tutorial.f(introlst);};
    document.querySelector("div[class='blockToCode']").appendChild(start);
}
