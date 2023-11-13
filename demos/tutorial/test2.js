var typelst = {int_typed : ["INT"],
	       int_arithmetic_typed : ["OP_INT"],
	       int_abs_typed : [],
	       random_int_typed : [],
	       string_typed : ["STRING"],
	       concat_string_typed : [],
	       string_of_int_typed : [],
	       logic_compare_typed : ["OP"],
	       logic_operator_typed : ["OP_BOOL"],
	       not_operator_typed : [],
	       logic_ternary_typed : [],
	       logic_boolean_typed : ["BOOL"],
	       color_typed : ["COLOR"],
	       make_color_typed : [],
	       make_color2_typed : [],
	       image_width_typed : [],
	       image_height_typed : [],
	       read_image_typed : [],
	       rectangle_typed : ["IMAGE"],
	       circle_typed : ["IMAGE"],
	       line_typed : [],
	       polygon_typed : ["IMAGE"],
	       text_typed : [],
	       overlay_typed : [],
	       empty_scene_typed : [],
	       place_image_typed : [],
	       place_images_typed : [],
	       lists_create_with_typed : [],
	       list_cons_typed : [],
	       list_map_typed : [],
	       andmap_typed : [],
	       ormap_typed : [],
	       sum_typed : [],
	       list_filter_typed : [],
	       pair_create_typed : [],
	       defined_recordtype_typed : ["DATANAME", "FIELDn"],
	       letstatement_typed : ["VAR"],
	       letstatement_fun_pattern_typed : ["VAR"],
	       big_bang_typed : [],
	       let_fun_pattern_typed : ["VAR"],
	       variable_pattern_typed : ["VAR"],
	       pair_pattern_typed : [],
	       record_pattern_typed : [],
	       empty_construct_pattern_typed : [],
	       cons_construct_pattern_typed : [],
	       option_none_pattern_typed : [],
	       option_some_pattern_typed : [],
	       function_app_typed : []};

//type
//value
//input
//next

var idlst = [];
var idlst2 = [];
var errorlst = [];
var error;
var errormsg;

function blocktoobj (block, opt) {
    var id = block.id;
    var obj = {};
    if (block.getCommentText()) {
	var optlst = block.getCommentText().split(",").map(x=>x.split(":"));
	for (var i=0; i<optlst.length; i++) {
	    if (optlst[i].length == 3) {
		obj[optlst[i][0]] = {};
		obj[optlst[i][0]][optlst[i][1]] = optlst[i][2];
	    }
	    else
		obj[optlst[i][0]] = optlst[i][1];
	}
    }
    if (!opt && obj["disordery"]) {
	obj = scenetoobj(block, obj);
    }
    else {
	obj["id"] = (idlst.push(id)-1);
	obj["type"] = block.type;
	if (block.type =="function_app_typed") {
	    var refid = block.typedReference.VAR.value_.sourceBlock_.id;
	    obj["reference"] = idlst.indexOf(refid);
	}
	else if (block.type =="create_record_typed") {
	    var refid = block.typedStructureReference.RECORD.value_.sourceBlock_.id;
	    obj["reference"] = idlst.indexOf(refid);
	}
	if (typelst[block.type] && typelst[block.type].length) {
	    var field = typelst[block.type][0];
	    if (obj["value"] == undefined)
		obj["value"] = {};
	    console.log(block);
	    console.log(field);
	    obj["value"][field] = block.getField(field).getText();
	    if (block.type == "defined_recordtype_typed") {
		for (var i=0, fld; fld=block.getField("FIELD"+i); i++) {
		    obj["value"]["FIELD"+i] = fld.getText();
		}
	    }
	}
	var lst = block.inputList.map(x => x.name);
	var child;
	for (var i=0; i<lst.length; i++) {
	    if (i == 0)
		obj["input"] = {}
	    if (opt && lst[i] == "PARAM2") {
		obj["input"][lst[i]] = {"anything" : true};
	    }
	    else if (child = block.getInputTargetBlock(lst[i])) {
		obj["input"][lst[i]] = blocktoobj(child, opt);
		//if (child.disabled)
		    //obj["input"][lst[i]]["anything"] = true;
	    }
	    else
		obj["input"][lst[i]] = null;
	}
    }
    return (obj);
}

function scenetoobj (block, obj) {
    obj["blocks"] = [];
    var b = block;
    while (b != null) {
	var opt = {};
	if (b.getCommentText()) {
	    var optlst = b.getCommentText().split(",").map(x=>x.split(":"));
	for (var i=0; i<optlst.length; i++)
	    opt[optlst[i][0]] = optlst[i][1];
	}
	if (!Object.keys(opt).length || opt["disordery"] != obj["disordery"]) {
	    obj["child"] = blocktoobj(b);
	    break;
	}
	obj["blocks"].push(blocktoobj(b, true));
	b = b.getInputTargetBlock("PARAM2");
    }
    return obj;
}

function compare (id, obj, n=0) {
    if (obj.disordery && obj.blocks) {
	if (!comparescenes(id, obj, n))
	    return false;
    }
    else if (!obj.anything) {
	var block = Blockly.mainWorkspace.getBlockById(id);
	if (!((block.type.startsWith("let") && obj.type.startsWith("let")) || (block.type == obj["type"]))) {
	    if (obj["type"].startsWith("let")) {
		var isfun = !!obj["input"]["EXP1"];
		var islocal = !!obj["input"]["EXP2"];
		errorlst.push({category: "type", id: id, answer: obj["type"], name: obj["value"]["VAR"], isfun : isfun, islocal: islocal, n: n});
	    }
	    else
	    errorlst.push({category: "type", id: id, answer: obj["type"], n: n});
	    return false;
	}
	n++;
	if (block.type =="function_app_typed") {
	    var refid = block.typedReference.VAR.value_.sourceBlock_.id;
	    if (obj["reference"] != idlst2.indexOf(refid)) {
		errorlst.push({category: "reference", id: id, answer: obj["reference"], n: n});
		return false;
	    }
	    n++;
	}
	else if (block.type =="create_record_typed") {
	    var refid = block.typedStructureReference.RECORD.value_.sourceBlock_.id;
	    if (obj["reference"] != idlst2.indexOf(refid)) {
		errorlst.push({category: "reference", id: id, answer: obj["reference"], n: n});
		return false;
	    }
	    n++;
	}
	//var field = typelst[block.type];
//	if (block.type == "defined_recordtype_typed") {
//		for (var i=0, fld; obj["value"]["FIELD"+i]; i++) {
//		    field[i+1] = "FIELD"+i;
//		}
	//	}
	if (obj["value"]) {
	    var field = Object.keys(obj["value"]);
	    if (!obj["value"]["anything"]) {
		for (var i=0; i<field.length; i++) {
		    if (block.getField(field[i]).getText() != obj["value"][field[i]]) {
			if (block.type.startsWith("let")) {
			    var isfun = !!obj["input"]["EXP1"];
			    errorlst.push({category: "value", id: id, answer: obj["value"][field[i]], field: field[i], type: block.type, isfun: isfun, n: n});
			}
			else
			    errorlst.push({category: "value", id: id, answer: obj["value"][field[i]], field: field[i], type: block.type, n: n});
			return false;
		    }
		}
		n++;
	    }
	}
	var lst = block.inputList.map(x => x.name);
	if (lst.length < Object.keys(obj["input"]).length) {
	    errorlst.push({category: "noinput", id: id, answer: lst[i], n: n});
	    return false;
	}
	for (var i=0; i<lst.length; i++) {
	    if (obj["input"][lst[i]] === undefined) {
		errorlst.push({category: "undefinedinput", id: id, answer: lst[i], n: n});
		return false;
	    }
	    if (block.getInputTargetBlock(lst[i]) === null) {
		if (obj["input"][lst[i]] !== null) {
		    errorlst.push({category: "nochild", id: id, answer: lst[i], child: obj["input"][lst[i]]["type"], n: n});
		    return false;
		}
	    }
	    else if (!(compare(block.getInputTargetBlock(lst[i]).id, obj["input"][lst[i]], n+1)))
		return false;
	}
    }
    idlst2[obj.id] = id;
    return true;
}

function comparescene (id, lst, n) {
    for (var i=0; i<lst.length; i++) {
	if (compare (id, lst[i], n))
	    return i;
    }
    return false;
}

function comparescenes (id, obj, n) {
    var lst = obj.blocks.concat();
    var block = Blockly.mainWorkspace.getBlockById(id);
    while (lst.length > 0) {
	if (!block)
	    return false;
	var m = comparescene(block.id, lst, n);
	if (m === false)
	    return false;
	lst.splice(m, 1);
	block = block.getInputTargetBlock("PARAM2");
    }
    if(block)
	return (compare (block.id, obj.child, n));
    else {
	if (!obj.child)
	    return true;
	else return false;
    }
}

ctob = function(code, opt_alert, w) {
  if (typeof blockOfOCaml === "undefined") {
    throw "Load script convert.js";
  }
    var result = BlockOfOCamlUtils.codeToBlockImpl_(code, w);
  var errMsg = BlockOfOCamlUtils.getErrorMessage(result);
  if (errMsg) {
    result.errMsg = errMsg;
    if (opt_alert !== false) {
      alert(errMsg);
    }
  }
  return result;
};

function ctb (w) {
    var code = "let dummy = 0";
      if (code) {
        openModal();
        setTimeout(function() {
            ctob(code,true,w);
          closeModal();
        }, 100);
      }
}
//ws = new Blockly.WorkspaceSvg({})

function cwo () {
    var options = {};
    var mw = Blockly.mainWorkspace;
  options.parentWorkspace = mw;
  options.pathToMedia = mw.options.pathToMedia;
  options.RTL = false;
  options.toolboxPosition = false ? Blockly.TOOLBOX_AT_RIGHT :
      Blockly.TOOLBOX_AT_LEFT;
  options.horizontalLayout = false;
  options.typedVersion = mw.options.typedVersion;
  return options;
};

var objct;

function setw (w) {
    w.addFlyout_('g');
    w.createDom('blocklyMutatorBackground');
}


div = document.createElement("div");
div.innerHTML = "<br><br>";
document.querySelector("div[class='blockToCode']").appendChild(div);

var makeobj = document.createElement("button");
makeobj.textContent = "make obj";
makeobj.setAttribute("class", "btn");
makeobj.id = "makeobj";
makeobj.setAttribute("onclick",
		     "objct = makeans()");
document.querySelector("div[class='blockToCode']").appendChild(makeobj);

var test = document.createElement("button");
test.textContent =  "答え合わせ"//"test";
test.setAttribute("class", "btn");
test.id = "test";
test.setAttribute("onclick",
		     //"console.log(check(answer))");
		     "if(qnum=document.getElementById('qnum')) {console.log(anslst[slct.value][qnum.value]);console.log(check(anslst[slct.value][qnum.value]));} else {console.log('!');console.log(check(anslst[slct.value]));}");
document.querySelector("div[class='blockToCode']").appendChild(test);



//ブロック→文字：Blockly.TypedLang.workspaceToCode(Typed.workspace);
//型：block.outputConnection.typeExpr.toString(true);

function calculate (a, op, b) {
    var r;
    if (op == "+")
	r = a + b;
    else if (op == "-")
	r = a - b;
    else if (op == "*")
	r = a * b;
    else if (op == "/")
	r = Math.floor(a / b);
    else if (op == "mod")
	r = a % b;
    return r;
}

function tovalue (block) {
    if (block.type == "int_typed")
	return Number(block.getField("INT").getText());
    else if (block.type == "int_arithmetic_typed") {
	var a = tovalue(block.getInputTargetBlock("A"));
	var b = tovalue(block.getInputTargetBlock("B"));
	var op = block.getField("OP_INT").getText();
	return calculate(a, op, b);
    }
}

function makeerrmsg(error) {
    var block = Blockly.mainWorkspace.getBlockById(error.id);
    if (error.n == 0) {
	var a, b, c;
	if (error.answer.startsWith("let")) {
	    if (blocklst[8].map(x=>x[1]).indexOf(error.name)+1) {
		a = 9;
		c = error.name;
	    }
	    else {
		a = "a";
		var locstr = "";
		var funstr = "変数";
		if (error.islocal)
		    locstr = "局所";
		if (error.isfun)
		    fun = "関数";
		c = locstr + funstr + "定義";
	    }
	}
	else {
	    for (var i = 0; i < blocklst.length; i++) {
		if (blocklst[i].map(x=>x[0]).indexOf(error.answer)+1) {
		    a = i+1;
		    b = blocklst[i].map(x=>x[0]).indexOf(error.answer);
		    c = blocklst[i][b][1];
		    break;
		}
	    }
	}
	error.highlight = document.querySelector("div[aria-labelledby=':"+a+".label']");
	return (c+"ブロックを出しましょう");
    }
    else if (error.n < 2 && error.category == "value" && error.type.startsWith("let")) {
	var cat;
	var funstr = "変数";
	if (error.type.startsWith("let")) {
	    if (blocklst[8].map(x=>x[1]).indexOf(error.answer)+1) {
		cat = 8;
	    }
	    else {
		cat = 9;
	    }
	    if (error.isfun)
		funstr = "関数";
	}
	error.highlight = document.querySelector("div[aria-labelledby=':"+cat+".label']");
	return (funstr+error.answer+"を定義しましょう");
    }
    else if (error.category == "type") {
	error.highlight = block.svgPath_;
	return ("ブロックが違います");
    }
    else if (error.category == "reference"){
	error.highlight = block.svgPath_;
	return ("ブロックが違います");
    }
    else if (error.category == "value"){
	error.highlight = block.getField(error.field).fieldGroup_;
	var txt;
	if (error.field == "VAR")
	    txt = "名前";
	else
	    txt = "値";
	return (txt+"を"+error.answer+"にしましょう");
    }
    else if (error.category == "noinput"){
	error.highlight = block.mutator.iconGroup_;
	return ("ブロックの穴を追加しましょう");
    }
    else if (error.category == "undefinedinput"){
	error.highlight = block.mutator.iconGroup_;
	return ("ブロックの穴を削除しましょう");
    }
    else if (error.category == "nochild"){
	input = block.getInput(error.answer);
	error.highlight = [input.connection.x_, input.connection.y_, input.renderWidth, input.renderHeight];
	error.rect2 = true;
	return ("ブロックをはめましょう");
    }
}

function checkblock (block, obj) {
    errorlst = [];
    var b = block;
    while (b != null) {
	if(compare(b.id, obj))
	    return true;
	else
	    b = b.getNextBlock();
    }
    if (block.type.startsWith("let"))
	if (block.getInputTargetBlock("EXP1") && compare(block.getInputTargetBlock("EXP1").id, obj))
	    return true;
    var nlst = errorlst.map(x => x.n);
    var max = nlst.reduce((a, b) => Math.max(a, b));
    if (max >= 0) {
	error.push(errorlst.filter(x => x.n == max)[0]);
    }
    return false;
}

function checkblocks(block, objlst) {
    for (var i=0; i<objlst.length; i++)
	if(!checkblock(block, objlst[i]))
	    return false;
    return true;
}

function closemodal() {
    modal.style.display = "none";
    if(modalmain.contains(hintbtn))
	modalmain.removeChild(hintbtn);
    if(modalmain.contains(runbtn))
	modalmain.removeChild(runbtn);
}

var modal = document.createElement("div");
modal.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100000; background: rgba(0,0,0,.5); display: none";
document.querySelector("body").appendChild(modal);
var modalmain = document.createElement("div");
modalmain.style.cssText = "position: fixed; top: 25%; left: 25%; width: 50%; height: 50%; background: rgba(255,255,255,.9)";
modal.appendChild(modalmain);
var modaltext = document.createElement("div");
modaltext.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); textAlign: center";
modalmain.appendChild(modaltext);
var span = document.createElement("span");
span.textContent = "×"
span.style.cssText = "right: 10px; position: absolute; cursor: pointer";
span.setAttribute("onclick",
		  "closemodal();");
modalmain.appendChild(span);
var runbtn = document.createElement("button");
runbtn.style.cssText = "position: absolute; left: 50%; bottom: 0%; transform: translate(-50%, -50%)";
runbtn.textContent = "実行する";
runbtn.setAttribute("onclick",
		    "closemodal(); Typed.newToplevel();");
var hintbtn = document.createElement("button");
hintbtn.style.cssText = "position: absolute; left: 50%; bottom: 0%; transform: translate(-50%, -50%)";
hintbtn.textContent = "ヒントを見る";
hintbtn.setAttribute("onclick",
		      "closemodal(); hinttext.textContent = errormsg; hint.style.display='block'; if(error.rect2) draw_rect2(error.highlight[0], error.highlight[1], error.highlight[2], error.highlight[3]); else draw_rect(error.highlight);");
var hint = document.createElement("div");
hint.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100000; background: rgba(0,0,0,.2); display: none";
document.querySelector("body").appendChild(hint);
var hintmain = document.createElement("div");
hintmain.style.cssText = "position: fixed; top: 25%; right: 10px; width: 280px; height: 30%; background: white";
hint.appendChild(hintmain);
var hinttext = document.createElement("div");
hinttext.style.cssText = "position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); textAlign: center";
hintmain.appendChild(hinttext);
var hintspan = document.createElement("span");
hintspan.textContent = "×";
hintspan.style.cssText = "right: 10px; position: absolute; cursor: pointer";
hintspan.setAttribute("onclick",
		     "hint.style.display='none'; clear_rect()");
hintmain.appendChild(hintspan);

function check (objlsts) {
    error = [];
    var myWindow;
    var blocks = Blockly.mainWorkspace.getTopBlocks(true);
    for (var i=0; i<objlsts.length; i++) {
	var objlst = objlsts[i];
	for (var j=0; j<blocks.length; j++)
	    if(checkblocks(blocks[j], objlst)) {
		modaltext.innerHTML = "<font color='red'size=8>正解！</font><br>実行してみましょう";
		modalmain.appendChild(runbtn);
		modal.style.display = "block";
		return true;
	    }
    }
    if (blocks.length == 0) {
	if (objlst[0]["type"].startsWith("let")) {
	    var isfun = !!objlst[0]["input"]["EXP1"];
	    var islocal = !!objlst[0]["input"]["EXP2"];
	    error.push({category: "type", answer: objlst[0]["type"], name: objlst[0]["value"]["VAR"], isfun : isfun, islocal: islocal, n: 0});
	}
	else 
	    error.push({category: "type", answer: objlst[0]["type"], n: 0});
    }
    var nlst = error.map(x => x.n);
    var max = nlst.reduce((a, b) => Math.max(a, b));
    if (max >= 0) {
	error = error.filter(x => x.n == max)[0];
	errormsg = makeerrmsg(error);
    }
    modaltext.innerHTML = "<font color='blue'size=8>不正解...</font><br>もう一度挑戦してみましょう<br>";
    modalmain.appendChild(hintbtn);
    modal.style.display = "block";
    return false;
}

var answer;
var anslst = [];

function makeans() {
    answer = [];
    idlst = [];
    var blocks = Blockly.mainWorkspace.getTopBlocks(true)[0];
    var block = blocks;
    while (block != null) {
	answer.push(blocktoobj(block));
	block = block.getNextBlock();
    }
    console.log(answer);
}

var anslst = [
    [[//0. (5-2)*3のブロックを作ってみましょう。
    {
        "id": 0,
        "type": "int_arithmetic_typed",
        "value": {
            "OP_INT": "*"
        },
        "input": {
            "A": {
                "id": 1,
                "type": "int_arithmetic_typed",
                "value": {
                    "OP_INT": "-"
                },
                "input": {
                    "A": {
                        "id": 2,
                        "type": "int_typed",
                        "value": {
                            "INT": "5"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "B": {
                        "id": 3,
                        "type": "int_typed",
                        "value": {
                            "INT": "2"
                        },
                        "input": {
                            "": null
                        }
                    }
                }
            },
            "B": {
                "id": 4,
                "type": "int_typed",
                "value": {
                    "INT": "3"
                },
                "input": {
                    "": null
                }
            }
        }
    }
]],
	      [[//1. widthという名前の値が800の変数と、heightという名前の値が500の変数を作りましょう。
    {
        "id": 1,
        "type": "letstatement_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 2,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 3,
        "type": "letstatement_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 4,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    }
	      ]],
    [[//2. ゲーム画面の大きさを好きな大きさにしてみましょう。
    {
        "id": 0,
        "type": "letstatement_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "anything": true,
                    "INT": "100"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "letstatement_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "anything": true,
                    "INT": "100"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 5,
                "type": "int_typed",
                "value": {
                    "anything": true,
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 6,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 7,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//3.四角の位置や大きさ、色を変えてみましょう。outlineにしてみましょう。
    {
        "id": 0,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 5,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "rectangle_typed",
                        "value": {
                            "IMAGE": "rectangle_outline"
                        },
                        "input": {
                            "": null,
                            "PARAM0": {
                                "value": {
                                    "anything": "true",
                                    "INT": "50"
                                },
                                "id": 8,
                                "type": "int_typed",
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "value": {
                                    "anything": "true",
                                    "INT": "100"
                                },
                                "id": 9,
                                "type": "int_typed",
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "value": {
                                    "anything": "true",
                                    "COLOR": "yellow"
                                },
                                "id": 10,
                                "type": "color_typed",
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "value": {
                                    "anything": "true",
                                    "INT": "500"
                                },
                                "id": 12,
                                "type": "int_typed",
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "value": {
                                    "anything": "true",
                                    "INT": "300"
                                },
                                "id": 13,
                                "type": "int_typed",
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "value": {
                    "anything": "true",
                    "INT": "0"
                },
                "id": 18,
                "type": "int_typed",
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 19,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 20,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 21,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//4. 横幅がwidth、縦幅がheightの空の風景に、半径が30、色がpinkの円を(400, 250)の位置に載せた風景を描画してみましょう。
    {
        "id": 0,
        "type": "letstatement_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "letstatement_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "letstatement_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 5,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "world",
		    "anything": true
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "circle_typed",
                        "value": {
                            "IMAGE": "circle"
                        },
                        "input": {
                            "": null,
                            "PARAM0": {
                                "id": 8,
                                "type": "int_typed",
                                "value": {
                                    "INT": "30"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "color_typed",
                                "value": {
                                    "COLOR": "pink"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 10,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 11,
                                "type": "int_typed",
                                "value": {
                                    "INT": "400"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "250"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 13,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 14,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 16,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 17,
                "type": "int_typed",
                "value": {
                    "INT": "0",
		    "anything": true
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 18,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 19,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 20,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//5. 横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景を描画してみましょう。
    {
        "id": 0,
        "type": "letstatement_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "letstatement_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "letstatement_fun_pattern_typed",
        "value": {
            "VAR": "draw",
	    "anything": true
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 5,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "world"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "400"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "int_typed",
                                "value": {
                                    "INT": "250"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 18,
                "type": "int_typed",
                "value": {
                    "anything": true,
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 19,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 20,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 21,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//6. 横幅がwidth、縦幅がheightの空の風景に、文字列"hello world"を大きさが20、色がgreenで(400, 250)の位置に載せた風景を描画してみましょう。
    {
        "id": 0,
        "type": "letstatement_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "letstatement_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "letstatement_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 5,
                "type": "variable_pattern_typed",
                "value": {
                    "anything": true,
                    "VAR": "world"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "text_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "hello world"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "int_typed",
                                "value": {
                                    "INT": "20"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "color_typed",
                                "value": {
                                    "COLOR": "green"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "400"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "int_typed",
                                "value": {
                                    "INT": "250"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 18,
                "type": "int_typed",
                "value": {
                    "anything": true,
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 19,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 20,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 21,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//7. 横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景の上に、さらに、http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.pngを横幅と縦幅が100でそれぞれ(200, 50)、（400, 50)、(600, 50)の位置に、http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.pngを横幅150、縦幅144で(400, 428)の位置に、文字列"0"を大きさ50、色がblackで(400, 458)の位置に載せた風景を描画してみましょう。
    {
        "id": 0,
        "type": "letstatement_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "letstatement_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "letstatement_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 5,
                "type": "variable_pattern_typed",
                "value": {
                    "anything": true,
                    "VAR": "world"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "text_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "0"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "int_typed",
                                "value": {
                                    "INT": "50"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "color_typed",
                                "value": {
                                    "COLOR": "black"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "400"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "int_typed",
                                "value": {
                                    "INT": "458"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "disordery": "1",
                        "blocks": [
                            {
                                "disordery": "1",
                                "id": 14,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 15,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 16,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 17,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "150"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "anything": true
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 18,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 19,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "400"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 20,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "428"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            {
                                "disordery": "1",
                                "id": 21,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 22,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 23,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 24,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "anything": true
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 25,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 26,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "200"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 27,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "50"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            {
                                "disordery": "1",
                                "id": 28,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 29,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 30,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 31,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "anything": true
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 32,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 33,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "400"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 34,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "50"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            {
                                "disordery": "1",
                                "id": 35,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 36,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 37,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 38,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "anything": true
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 39,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 40,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "600"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 41,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "50"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                   "PARAM2": {
                                        "anything": true
                                    }
                                }
                            }
                        ],
                        "child": {
                            "id": 42,
                            "type": "place_image_typed",
                            "input": {
                                "PARAM0": {
                                    "id": 43,
                                    "type": "read_image_typed",
                                    "input": {
                                        "PARAM0": {
                                            "id": 44,
                                            "type": "string_typed",
                                            "value": {
                                                "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png"
                                            },
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "PARAM1": {
                                            "id": 45,
                                            "type": "function_app_typed",
                                            "reference": 0,
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "PARAM2": {
                                            "id": 46,
                                            "type": "function_app_typed",
                                            "reference": 2,
                                            "input": {
                                                "": null
                                            }
                                        }
                                    }
                                },
                                "PARAM1": {
                                    "id": 47,
                                    "type": "pair_create_typed",
                                    "input": {
                                        "FIRST": {
                                            "id": 48,
                                            "type": "int_typed",
                                            "value": {
                                                "INT": "400"
                                            },
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "SECOND": {
                                            "id": 49,
                                            "type": "int_typed",
                                            "value": {
                                                "INT": "250"
                                            },
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "": null
                                    }
                                },
                                "PARAM2": {
                                    "id": 50,
                                    "type": "empty_scene_typed",
                                    "input": {
                                        "PARAM0": {
                                            "id": 51,
                                            "type": "function_app_typed",
                                            "reference": 0,
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "PARAM1": {
                                            "id": 52,
                                            "type": "function_app_typed",
                                            "reference": 2,
                                            "input": {
                                                "": null
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 53,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 54,
                "type": "int_typed",
                "value": {
                    "anything": true,
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 55,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 56,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 57,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//8. bing_bangブロックにつながっている初期値を色々な数に変えて実行してみましょう。
    {
        "id": 0,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 5,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "function_app_typed",
                                "reference": 5,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "value": {
                    "anything": "true",
                    "INT": "300"
                },
                "id": 18,
                "type": "int_typed",
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 19,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 20,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 21,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//9. rateを色々な数に変えてみましょう。
    {
        "id": 0,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 5,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "function_app_typed",
                                "reference": 5,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_tick"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 18,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 19,
                "type": "int_arithmetic_typed",
                "value": {
                    "OP_INT": "+"
                },
                "input": {
                    "A": {
                        "id": 20,
                        "type": "function_app_typed",
                        "reference": 18,
                        "input": {
                            "": null
                        }
                    },
                    "B": {
                        "id": 21,
                        "type": "int_typed",
                        "value": {
                            "INT": "10"
                        },
                        "input": {
                            "": null
                        }
                    }
                }
            }
        }
    },
    {
        "id": 22,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 23,
                "type": "int_typed",
                "value": {
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 24,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 25,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 26,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            },
            "TICK": {
                "id": 27,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            },
            "RATE": {
                "value": {
                    "anything": "true",
                    "INT": "200"
                },
                "id": 28,
                "type": "int_typed",
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [//10(1). on_tick関数で返す値をworld+2、rateを100にした時(1)と、on_tick関数で返す値をworld+20、rateを1000にした時(2)の動きの違いを比べてみましょう。
    [[{
        "id": 0,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 5,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "function_app_typed",
                                "reference": 5,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_tick"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 18,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 19,
                "type": "int_arithmetic_typed",
                "value": {
                    "OP_INT": "+"
                },
                "input": {
                    "A": {
                        "id": 20,
                        "type": "function_app_typed",
                        "reference": 18,
                        "input": {
                            "": null
                        }
                    },
                    "B": {
                        "id": 21,
                        "type": "int_typed",
                        "value": {
                            "INT": "2"
                        },
                        "input": {
                            "": null
                        }
                    }
                }
            }
        }
    },
    {
        "id": 22,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 23,
                "type": "int_typed",
                "value": {
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 24,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 25,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 26,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            },
            "TICK": {
                "id": 27,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            },
            "RATE": {
                "id": 28,
                "type": "int_typed",
                "value": {
                    "INT": "100"
                },
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//10(2). on_tick関数で返す値をworld+2、rateを100にした時(1)と、on_tick関数で返す値をworld+20、rateを1000にした時(2)の動きの違いを比べてみましょう。
    {
        "id": 0,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 1,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 2,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 3,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 4,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 5,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 6,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 7,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 8,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 9,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 10,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 11,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 12,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 13,
                                "type": "function_app_typed",
                                "reference": 5,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 14,
                        "type": "empty_scene_typed",
                        "input": {
                            "PARAM0": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 0,
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 16,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_tick"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "world"
                },
                "id": 18,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 19,
                "type": "int_arithmetic_typed",
                "value": {
                    "OP_INT": "+"
                },
                "input": {
                    "A": {
                        "id": 20,
                        "type": "function_app_typed",
                        "reference": 18,
                        "input": {
                            "": null
                        }
                    },
                    "B": {
                        "id": 21,
                        "type": "int_typed",
                        "value": {
                            "INT": "20"
                        },
                        "input": {
                            "": null
                        }
                    }
                }
            }
        }
    },
    {
        "id": 22,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 23,
                "type": "int_typed",
                "value": {
                    "INT": "0"
                },
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 24,
                "type": "function_app_typed",
                "reference": 0,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 25,
                "type": "function_app_typed",
                "reference": 2,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 26,
                "type": "function_app_typed",
                "reference": 4,
                "input": {
                    "": null
                }
            },
            "TICK": {
                "id": 27,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            },
            "RATE": {
                "id": 28,
                "type": "int_typed",
                "value": {
                    "INT": "1000"
                },
                "input": {
                    "": null
                }
            }
        }
    }
    ]]],
    [[//11. "増やす座標の大きさを変えてみましょう。"
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "fruit_t",
            "FIELD0": "apple",
            "FIELD1": "banana"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 3,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "add10"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 4,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "value": {
                            "anything": "true",
                            "VAR": "ay"
                        },
                        "id": 5,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "value": {
                            "anything": "true",
                            "VAR": "by"
                        },
                        "id": 6,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 7,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 8,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "+"
                        },
                        "input": {
                            "A": {
                                "id": 9,
                                "type": "function_app_typed",
                                "reference": 5,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "value": {
                                    "anything": "true",
                                    "INT": "30"
                                },
                                "id": 10,
                                "type": "int_typed",
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP1": {
                        "id": 11,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "+"
                        },
                        "input": {
                            "A": {
                                "id": 12,
                                "type": "function_app_typed",
                                "reference": 6,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "value": {
                                    "anything": "true",
                                    "INT": "15"
                                },
                                "id": 13,
                                "type": "int_typed",
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    }
    ]],
    [[//12.world_tを定義してみましょう。
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    }
    ]],
    [[//13. initial_worldを定義してみましょう
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 6,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "initial_world"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 7,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 8,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 9,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 10,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 11,
                        "type": "int_typed",
                        "value": {
                            "INT": "400"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 12,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    }
    ]],
    [[//14. そらの背景の上にりんご、バナナ、メロン、鳥、点数を表示するdraw関数を作りましょう。点数は鳥の上に置くようにしましょう。
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 6,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "initial_world"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 7,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 8,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 9,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 10,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 11,
                        "type": "int_typed",
                        "value": {
                            "INT": "400"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 12,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 13,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 14,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 15,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 16,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 18,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 19,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 20,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 21,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 22,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 23,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "disordery": "2",
                "blocks": [
                    {
                        "disordery": "2",
                        "id": 24,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 25,
                                "type": "read_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 26,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 27,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 28,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 29,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "200"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 30,
                                        "type": "function_app_typed",
                                        "reference": 19,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "anything": true
                            }
                        }
                    },
                    {
                        "disordery": "2",
                        "id": 31,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 32,
                                "type": "read_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 33,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 34,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 35,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 36,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "400"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 37,
                                        "type": "function_app_typed",
                                        "reference": 20,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "anything": true
                            }
                        }
                    },
                    {
                        "disordery": "2",
                        "id": 38,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 39,
                                "type": "read_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 40,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 41,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 42,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 43,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "600"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 44,
                                        "type": "function_app_typed",
                                        "reference": 21,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "anything": true
                            }
                        }
                    },
                    {
                        "disordery": "2",
                        "id": 45,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 46,
                                "type": "text_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 47,
                                        "type": "string_of_int_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 48,
                                                "type": "function_app_typed",
                                                "reference": 23,
                                                "input": {
                                                    "": null
                                                }
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 49,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "anything": true
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 50,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 51,
                                        "type": "function_app_typed",
                                        "reference": 22,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 52,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "458"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "anything": true
                            }
                        }
                    }
                ],
                "child": {
                    "id": 53,
                    "type": "place_image_typed",
                    "input": {
                        "PARAM0": {
                            "id": 54,
                            "type": "read_image_typed",
                            "input": {
                                "PARAM0": {
                                    "id": 55,
                                    "type": "string_typed",
                                    "value": {
                                        "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png"
                                    },
                                    "input": {
                                        "": null
                                    }
                                },
                                "PARAM1": {
                                    "id": 56,
                                    "type": "int_typed",
                                    "value": {
                                        "INT": "150"
                                    },
                                    "input": {
                                        "": null
                                    }
                                },
                                "PARAM2": {
                                    "id": 57,
                                    "type": "int_typed",
                                    "value": {
                                        "INT": "144"
                                    },
                                    "input": {
                                        "": null
                                    }
                                }
                            }
                        },
                        "PARAM1": {
                            "id": 58,
                            "type": "pair_create_typed",
                            "input": {
                                "FIRST": {
                                    "id": 59,
                                    "type": "function_app_typed",
                                    "reference": 22,
                                    "input": {
                                        "": null
                                    }
                                },
                                "SECOND": {
                                    "id": 60,
                                    "type": "int_typed",
                                    "value": {
                                        "INT": "428"
                                    },
                                    "input": {
                                        "": null
                                    }
                                },
                                "": null
                            }
                        },
                        "PARAM2": {
                            "id": 61,
                            "type": "place_image_typed",
                            "input": {
                                "PARAM0": {
                                    "id": 62,
                                    "type": "read_image_typed",
                                    "input": {
                                        "PARAM0": {
                                            "id": 63,
                                            "type": "string_typed",
                                            "value": {
                                                "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png"
                                            },
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "PARAM1": {
                                            "id": 64,
                                            "type": "function_app_typed",
                                            "reference": 13,
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "PARAM2": {
                                            "id": 65,
                                            "type": "function_app_typed",
                                            "reference": 15,
                                            "input": {
                                                "": null
                                            }
                                        }
                                    }
                                },
                                "PARAM1": {
                                    "id": 66,
                                    "type": "pair_create_typed",
                                    "input": {
                                        "FIRST": {
                                            "id": 67,
                                            "type": "int_typed",
                                            "value": {
                                                "INT": "400"
                                            },
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "SECOND": {
                                            "id": 68,
                                            "type": "int_typed",
                                            "value": {
                                                "INT": "250"
                                            },
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "": null
                                    }
                                },
                                "PARAM2": {
                                    "id": 69,
                                    "type": "empty_scene_typed",
                                    "input": {
                                        "PARAM0": {
                                            "id": 70,
                                            "type": "function_app_typed",
                                            "reference": 13,
                                            "input": {
                                                "": null
                                            }
                                        },
                                        "PARAM1": {
                                            "id": 71,
                                            "type": "function_app_typed",
                                            "reference": 15,
                                            "input": {
                                                "": null
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 72,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 73,
                "type": "function_app_typed",
                "reference": 6,
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 74,
                "type": "function_app_typed",
                "reference": 13,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 75,
                "type": "function_app_typed",
                "reference": 15,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 76,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//15. りんご、バナナ、メロンの座標をそれぞれ10、15、20下に動かすon_tick関数を作りましょう。modを使って下にはみ出たら上から戻ってくるようにしましょう。
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 6,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "initial_world"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 7,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 8,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 9,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 10,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 11,
                        "type": "int_typed",
                        "value": {
                            "INT": "400"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 12,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 13,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 14,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 15,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 16,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 18,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 19,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 20,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 21,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 22,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 23,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 24,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 25,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 26,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 27,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 28,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 29,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 30,
                                "type": "int_typed",
                                "value": {
                                    "INT": "200"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 31,
                                "type": "function_app_typed",
                                "reference": 19,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 32,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 33,
                                "type": "read_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 34,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 35,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 36,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 37,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 38,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "400"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 39,
                                        "type": "function_app_typed",
                                        "reference": 20,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 40,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 41,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 42,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 43,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "id": 44,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 45,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 46,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "600"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 47,
                                                "type": "function_app_typed",
                                                "reference": 21,
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 48,
                                        "type": "place_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 49,
                                                "type": "text_typed",
                                                "input": {
                                                    "PARAM0": {
                                                        "id": 50,
                                                        "type": "string_of_int_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 51,
                                                                "type": "function_app_typed",
                                                                "reference": 23,
                                                                "input": {
                                                                    "": null
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "PARAM1": {
                                                        "id": 52,
                                                        "type": "int_typed",
                                                        "value": {
                                                            "INT": "50"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "PARAM2": {
                                                        "id": 53,
                                                        "type": "color_typed",
                                                        "value": {
                                                            "COLOR": "black"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    }
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 54,
                                                "type": "pair_create_typed",
                                                "input": {
                                                    "FIRST": {
                                                        "id": 55,
                                                        "type": "function_app_typed",
                                                        "reference": 22,
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "SECOND": {
                                                        "id": 56,
                                                        "type": "int_typed",
                                                        "value": {
                                                            "INT": "458"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "id": 57,
                                                "type": "place_image_typed",
                                                "input": {
                                                    "PARAM0": {
                                                        "id": 58,
                                                        "type": "read_image_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 59,
                                                                "type": "string_typed",
                                                                "value": {
                                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM1": {
                                                                "id": 60,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "150"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM2": {
                                                                "id": 61,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "144"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "PARAM1": {
                                                        "id": 62,
                                                        "type": "pair_create_typed",
                                                        "input": {
                                                            "FIRST": {
                                                                "id": 63,
                                                                "type": "function_app_typed",
                                                                "reference": 22,
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "SECOND": {
                                                                "id": 64,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "428"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "": null
                                                        }
                                                    },
                                                    "PARAM2": {
                                                        "id": 65,
                                                        "type": "place_image_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 66,
                                                                "type": "read_image_typed",
                                                                "input": {
                                                                    "PARAM0": {
                                                                        "id": 67,
                                                                        "type": "string_typed",
                                                                        "value": {
                                                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM1": {
                                                                        "id": 68,
                                                                        "type": "function_app_typed",
                                                                        "reference": 13,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM2": {
                                                                        "id": 69,
                                                                        "type": "function_app_typed",
                                                                        "reference": 15,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "PARAM1": {
                                                                "id": 70,
                                                                "type": "pair_create_typed",
                                                                "input": {
                                                                    "FIRST": {
                                                                        "id": 71,
                                                                        "type": "int_typed",
                                                                        "value": {
                                                                            "INT": "400"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "SECOND": {
                                                                        "id": 72,
                                                                        "type": "int_typed",
                                                                        "value": {
                                                                            "INT": "250"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM2": {
                                                                "id": 73,
                                                                "type": "empty_scene_typed",
                                                                "input": {
                                                                    "PARAM0": {
                                                                        "id": 74,
                                                                        "type": "function_app_typed",
                                                                        "reference": 13,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM1": {
                                                                        "id": 75,
                                                                        "type": "function_app_typed",
                                                                        "reference": 15,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 76,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_tick"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 77,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "value": {
                            "anything": "true",
                            "VAR": "ay"
                        },
                        "id": 78,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "value": {
                            "anything": "true",
                            "VAR": "by"
                        },
                        "id": 79,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "value": {
                            "anything": "true",
                            "VAR": "my"
                        },
                        "id": 80,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "value": {
                            "anything": "true",
                            "VAR": "x"
                        },
                        "id": 81,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "value": {
                            "anything": "true",
                            "VAR": "score"
                        },
                        "id": 82,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 83,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 84,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 85,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 86,
                                        "type": "function_app_typed",
                                        "reference": 78,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 87,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "10"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 88,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP1": {
                        "id": 89,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 90,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 91,
                                        "type": "function_app_typed",
                                        "reference": 79,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 92,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "15"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 93,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP2": {
                        "id": 94,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 95,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 96,
                                        "type": "function_app_typed",
                                        "reference": 80,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 97,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "20"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 98,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP3": {
                        "id": 99,
                        "type": "function_app_typed",
                        "reference": 81,
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 100,
                        "type": "function_app_typed",
                        "reference": 82,
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 101,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 102,
                "type": "function_app_typed",
                "reference": 6,
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 103,
                "type": "function_app_typed",
                "reference": 13,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 104,
                "type": "function_app_typed",
                "reference": 15,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 105,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            },
            "TICK": {
                "id": 106,
                "type": "function_app_typed",
                "reference": 76,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [[//16. on_tickブロックとbig_bangブロックの間にon_keyブロックを挿入しましょう。on_keyブロックの引数はworld_t型なので、on_key関数の1つ目のコネクタにworld_t型のパラメタをつなぎましょう。
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 6,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "initial_world"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 7,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 8,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 9,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 10,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 11,
                        "type": "int_typed",
                        "value": {
                            "INT": "400"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 12,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 13,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 14,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 15,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 16,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 18,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 19,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 20,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 21,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 22,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 23,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 24,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 25,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 26,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 27,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 28,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 29,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 30,
                                "type": "int_typed",
                                "value": {
                                    "INT": "200"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 31,
                                "type": "function_app_typed",
                                "reference": 19,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 32,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 33,
                                "type": "read_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 34,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 35,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 36,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 37,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 38,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "400"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 39,
                                        "type": "function_app_typed",
                                        "reference": 20,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 40,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 41,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 42,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 43,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "id": 44,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 45,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 46,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "600"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 47,
                                                "type": "function_app_typed",
                                                "reference": 21,
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 48,
                                        "type": "place_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 49,
                                                "type": "text_typed",
                                                "input": {
                                                    "PARAM0": {
                                                        "id": 50,
                                                        "type": "string_of_int_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 51,
                                                                "type": "function_app_typed",
                                                                "reference": 23,
                                                                "input": {
                                                                    "": null
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "PARAM1": {
                                                        "id": 52,
                                                        "type": "int_typed",
                                                        "value": {
                                                            "INT": "50"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "PARAM2": {
                                                        "id": 53,
                                                        "type": "color_typed",
                                                        "value": {
                                                            "COLOR": "black"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    }
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 54,
                                                "type": "pair_create_typed",
                                                "input": {
                                                    "FIRST": {
                                                        "id": 55,
                                                        "type": "function_app_typed",
                                                        "reference": 22,
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "SECOND": {
                                                        "id": 56,
                                                        "type": "int_typed",
                                                        "value": {
                                                            "INT": "458"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "id": 57,
                                                "type": "place_image_typed",
                                                "input": {
                                                    "PARAM0": {
                                                        "id": 58,
                                                        "type": "read_image_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 59,
                                                                "type": "string_typed",
                                                                "value": {
                                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM1": {
                                                                "id": 60,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "150"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM2": {
                                                                "id": 61,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "144"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "PARAM1": {
                                                        "id": 62,
                                                        "type": "pair_create_typed",
                                                        "input": {
                                                            "FIRST": {
                                                                "id": 63,
                                                                "type": "function_app_typed",
                                                                "reference": 22,
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "SECOND": {
                                                                "id": 64,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "428"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "": null
                                                        }
                                                    },
                                                    "PARAM2": {
                                                        "id": 65,
                                                        "type": "place_image_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 66,
                                                                "type": "read_image_typed",
                                                                "input": {
                                                                    "PARAM0": {
                                                                        "id": 67,
                                                                        "type": "string_typed",
                                                                        "value": {
                                                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM1": {
                                                                        "id": 68,
                                                                        "type": "function_app_typed",
                                                                        "reference": 13,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM2": {
                                                                        "id": 69,
                                                                        "type": "function_app_typed",
                                                                        "reference": 15,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "PARAM1": {
                                                                "id": 70,
                                                                "type": "pair_create_typed",
                                                                "input": {
                                                                    "FIRST": {
                                                                        "id": 71,
                                                                        "type": "int_typed",
                                                                        "value": {
                                                                            "INT": "400"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "SECOND": {
                                                                        "id": 72,
                                                                        "type": "int_typed",
                                                                        "value": {
                                                                            "INT": "250"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM2": {
                                                                "id": 73,
                                                                "type": "empty_scene_typed",
                                                                "input": {
                                                                    "PARAM0": {
                                                                        "id": 74,
                                                                        "type": "function_app_typed",
                                                                        "reference": 13,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM1": {
                                                                        "id": 75,
                                                                        "type": "function_app_typed",
                                                                        "reference": 15,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 76,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_tick"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 77,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 78,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 79,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 80,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 81,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 82,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 83,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 84,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 85,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 86,
                                        "type": "function_app_typed",
                                        "reference": 78,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 87,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "10"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 88,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP1": {
                        "id": 89,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 90,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 91,
                                        "type": "function_app_typed",
                                        "reference": 79,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 92,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "15"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 93,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP2": {
                        "id": 94,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 95,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 96,
                                        "type": "function_app_typed",
                                        "reference": 80,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 97,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "20"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 98,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP3": {
                        "id": 99,
                        "type": "function_app_typed",
                        "reference": 81,
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 100,
                        "type": "function_app_typed",
                        "reference": 82,
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 101,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_key"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 102,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "value": {
                            "anything": "true",
                            "VAR": "ay"
                        },
                        "id": 103,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "value": {
                            "anything": "true",
                            "VAR": "by"
                        },
                        "id": 104,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "value": {
                            "anything": "true",
                            "VAR": "my"
                        },
                        "id": 105,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "value": {
                            "anything": "true",
                            "VAR": "x"
                        },
                        "id": 106,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "value": {
                            "anything": "true",
                            "VAR": "score"
                        },
                        "id": 107,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "ARG1": {
                "id": 108,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "key"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": null
        }
    },
    {
        "id": 109,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 110,
                "type": "function_app_typed",
                "reference": 6,
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 111,
                "type": "function_app_typed",
                "reference": 13,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 112,
                "type": "function_app_typed",
                "reference": 15,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 113,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            },
            "TICK": {
                "id": 114,
                "type": "function_app_typed",
                "reference": 76,
                "input": {
                    "": null
                }
            }
        }
    }
    ]],
    [//17. 鳥がフルーツをキャッチできているかを判定する関数checkを作りましょう。checkは引数が3つで、フルーツのx座標とy座標と鳥のx座標を受け取ったら、フルーツのy座標が455以上かつ465以下で、かつフルーツのx座標から鳥のx座標を引いた数が-50以上かつ50以下の場合は10を返し、そうでない場合は0を返す関数にしましょう。
    [
    {
        "id": 0,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "check"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "value": {
                    "anything": "true",
                    "VAR": "fx"
                },
                "id": 1,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "ARG1": {
                "value": {
                    "anything": "true",
                    "VAR": "fy"
                },
                "id": 2,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "ARG2": {
                "value": {
                    "anything": "true",
                    "VAR": "bx"
                },
                "id": 3,
                "type": "variable_pattern_typed",
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 4,
                "type": "logic_operator_typed",
                "value": {
                    "OP_BOOL": "&&"
                },
                "input": {
                    "PARAM0": {
                        "id": 5,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≥"
                        },
                        "input": {
                            "A": {
                                "id": 6,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 7,
                                "type": "int_typed",
                                "value": {
                                    "INT": "455"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 8,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≤"
                        },
                        "input": {
                            "A": {
                                "id": 9,
                                "type": "function_app_typed",
                                "reference": 2,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 10,
                                "type": "int_typed",
                                "value": {
                                    "INT": "465"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM2": {
                        "id": 11,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≥"
                        },
                        "input": {
                            "A": {
                                "id": 12,
                                "type": "function_app_typed",
                                "reference": 1,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 13,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "-"
                                },
                                "input": {
                                    "A": {
                                        "id": 14,
                                        "type": "function_app_typed",
                                        "reference": 3,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 15,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "PARAM3": {
                        "id": 16,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≤"
                        },
                        "input": {
                            "A": {
                                "id": 17,
                                "type": "function_app_typed",
                                "reference": 1,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 18,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 19,
                                        "type": "function_app_typed",
                                        "reference": 3,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 20,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
]
    ],
    [[//18. on_tiick関数で返すscoreを、上で作ったcheckを使って各フルーツをキャッチできているかを調べて、キャッチできている場合は10点足した点数になるように変更しましょう。フルーツのx座標はりんごが200、バナナが400、メロンが600です。
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 6,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "initial_world"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 7,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 8,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 9,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 10,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 11,
                        "type": "int_typed",
                        "value": {
                            "INT": "400"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 12,
                        "type": "int_typed",
                        "value": {
                            "INT": "0"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 13,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "width"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 14,
                "type": "int_typed",
                "value": {
                    "INT": "800"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 15,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "height"
        },
        "input": {
            "VARIABLE": null,
            "EXP1": {
                "id": 16,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    },
    {
        "id": 17,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "draw"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 18,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 19,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 20,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 21,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 22,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 23,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 24,
                "type": "place_image_typed",
                "input": {
                    "PARAM0": {
                        "id": 25,
                        "type": "read_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 26,
                                "type": "string_typed",
                                "value": {
                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM1": {
                                "id": 27,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 28,
                                "type": "int_typed",
                                "value": {
                                    "INT": "100"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 29,
                        "type": "pair_create_typed",
                        "input": {
                            "FIRST": {
                                "id": 30,
                                "type": "int_typed",
                                "value": {
                                    "INT": "200"
                                },
                                "input": {
                                    "": null
                                }
                            },
                            "SECOND": {
                                "id": 31,
                                "type": "function_app_typed",
                                "reference": 19,
                                "input": {
                                    "": null
                                }
                            },
                            "": null
                        }
                    },
                    "PARAM2": {
                        "id": 32,
                        "type": "place_image_typed",
                        "input": {
                            "PARAM0": {
                                "id": 33,
                                "type": "read_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 34,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 35,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 36,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "100"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 37,
                                "type": "pair_create_typed",
                                "input": {
                                    "FIRST": {
                                        "id": 38,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "400"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "SECOND": {
                                        "id": 39,
                                        "type": "function_app_typed",
                                        "reference": 20,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "": null
                                }
                            },
                            "PARAM2": {
                                "id": 40,
                                "type": "place_image_typed",
                                "input": {
                                    "PARAM0": {
                                        "id": 41,
                                        "type": "read_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 42,
                                                "type": "string_typed",
                                                "value": {
                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 43,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "id": 44,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "100"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            }
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 45,
                                        "type": "pair_create_typed",
                                        "input": {
                                            "FIRST": {
                                                "id": 46,
                                                "type": "int_typed",
                                                "value": {
                                                    "INT": "600"
                                                },
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "SECOND": {
                                                "id": 47,
                                                "type": "function_app_typed",
                                                "reference": 21,
                                                "input": {
                                                    "": null
                                                }
                                            },
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 48,
                                        "type": "place_image_typed",
                                        "input": {
                                            "PARAM0": {
                                                "id": 49,
                                                "type": "text_typed",
                                                "input": {
                                                    "PARAM0": {
                                                        "id": 50,
                                                        "type": "string_of_int_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 51,
                                                                "type": "function_app_typed",
                                                                "reference": 23,
                                                                "input": {
                                                                    "": null
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "PARAM1": {
                                                        "id": 52,
                                                        "type": "int_typed",
                                                        "value": {
                                                            "INT": "50"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "PARAM2": {
                                                        "id": 53,
                                                        "type": "color_typed",
                                                        "value": {
                                                            "COLOR": "black"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    }
                                                }
                                            },
                                            "PARAM1": {
                                                "id": 54,
                                                "type": "pair_create_typed",
                                                "input": {
                                                    "FIRST": {
                                                        "id": 55,
                                                        "type": "function_app_typed",
                                                        "reference": 22,
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "SECOND": {
                                                        "id": 56,
                                                        "type": "int_typed",
                                                        "value": {
                                                            "INT": "458"
                                                        },
                                                        "input": {
                                                            "": null
                                                        }
                                                    },
                                                    "": null
                                                }
                                            },
                                            "PARAM2": {
                                                "id": 57,
                                                "type": "place_image_typed",
                                                "input": {
                                                    "PARAM0": {
                                                        "id": 58,
                                                        "type": "read_image_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 59,
                                                                "type": "string_typed",
                                                                "value": {
                                                                    "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM1": {
                                                                "id": 60,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "150"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM2": {
                                                                "id": 61,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "144"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            }
                                                        }
                                                    },
                                                    "PARAM1": {
                                                        "id": 62,
                                                        "type": "pair_create_typed",
                                                        "input": {
                                                            "FIRST": {
                                                                "id": 63,
                                                                "type": "function_app_typed",
                                                                "reference": 22,
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "SECOND": {
                                                                "id": 64,
                                                                "type": "int_typed",
                                                                "value": {
                                                                    "INT": "428"
                                                                },
                                                                "input": {
                                                                    "": null
                                                                }
                                                            },
                                                            "": null
                                                        }
                                                    },
                                                    "PARAM2": {
                                                        "id": 65,
                                                        "type": "place_image_typed",
                                                        "input": {
                                                            "PARAM0": {
                                                                "id": 66,
                                                                "type": "read_image_typed",
                                                                "input": {
                                                                    "PARAM0": {
                                                                        "id": 67,
                                                                        "type": "string_typed",
                                                                        "value": {
                                                                            "STRING": "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM1": {
                                                                        "id": 68,
                                                                        "type": "function_app_typed",
                                                                        "reference": 13,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM2": {
                                                                        "id": 69,
                                                                        "type": "function_app_typed",
                                                                        "reference": 15,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                            "PARAM1": {
                                                                "id": 70,
                                                                "type": "pair_create_typed",
                                                                "input": {
                                                                    "FIRST": {
                                                                        "id": 71,
                                                                        "type": "int_typed",
                                                                        "value": {
                                                                            "INT": "400"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "SECOND": {
                                                                        "id": 72,
                                                                        "type": "int_typed",
                                                                        "value": {
                                                                            "INT": "250"
                                                                        },
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "": null
                                                                }
                                                            },
                                                            "PARAM2": {
                                                                "id": 73,
                                                                "type": "empty_scene_typed",
                                                                "input": {
                                                                    "PARAM0": {
                                                                        "id": 74,
                                                                        "type": "function_app_typed",
                                                                        "reference": 13,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    },
                                                                    "PARAM1": {
                                                                        "id": 75,
                                                                        "type": "function_app_typed",
                                                                        "reference": 15,
                                                                        "input": {
                                                                            "": null
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 76,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "check"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 77,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "fx"
                },
                "input": {
                    "": null
                }
            },
            "ARG1": {
                "id": 78,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "fy"
                },
                "input": {
                    "": null
                }
            },
            "ARG2": {
                "id": 79,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "bx"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 80,
                "type": "logic_operator_typed",
                "value": {
                    "OP_BOOL": "&&"
                },
                "input": {
                    "PARAM0": {
                        "id": 81,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≥"
                        },
                        "input": {
                            "A": {
                                "id": 82,
                                "type": "function_app_typed",
                                "reference": 78,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 83,
                                "type": "int_typed",
                                "value": {
                                    "INT": "455"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 84,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≤"
                        },
                        "input": {
                            "A": {
                                "id": 85,
                                "type": "function_app_typed",
                                "reference": 78,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 86,
                                "type": "int_typed",
                                "value": {
                                    "INT": "465"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM2": {
                        "id": 87,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≥"
                        },
                        "input": {
                            "A": {
                                "id": 88,
                                "type": "function_app_typed",
                                "reference": 77,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 89,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "-"
                                },
                                "input": {
                                    "A": {
                                        "id": 90,
                                        "type": "function_app_typed",
                                        "reference": 79,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 91,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "PARAM3": {
                        "id": 92,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≤"
                        },
                        "input": {
                            "A": {
                                "id": 93,
                                "type": "function_app_typed",
                                "reference": 77,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 94,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 95,
                                        "type": "function_app_typed",
                                        "reference": 79,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 96,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 97,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "add_score"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 98,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 99,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 100,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 101,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 102,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 103,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 104,
                "type": "logic_ternary_typed",
                "input": {
                    "IF": {
                        "id": 105,
                        "type": "logic_operator_typed",
                        "value": {
                            "OP_BOOL": "||"
                        },
                        "input": {
                            "PARAM0": {
                                "id": 106,
                                "type": "function_app_typed",
                                "reference": 76,
                                "input": {
                                    "": null,
                                    "PARAM0": {
                                        "id": 107,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "200"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 108,
                                        "type": "function_app_typed",
                                        "reference": 99,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 109,
                                        "type": "function_app_typed",
                                        "reference": 102,
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 110,
                                "type": "function_app_typed",
                                "reference": 76,
                                "input": {
                                    "": null,
                                    "PARAM0": {
                                        "id": 111,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "400"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 112,
                                        "type": "function_app_typed",
                                        "reference": 100,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 113,
                                        "type": "function_app_typed",
                                        "reference": 102,
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM2": {
                                "id": 114,
                                "type": "function_app_typed",
                                "reference": 76,
                                "input": {
                                    "": null,
                                    "PARAM0": {
                                        "id": 115,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "600"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 116,
                                        "type": "function_app_typed",
                                        "reference": 101,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 117,
                                        "type": "function_app_typed",
                                        "reference": 102,
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "THEN": {
                        "id": 118,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "+"
                        },
                        "input": {
                            "A": {
                                "id": 119,
                                "type": "function_app_typed",
                                "reference": 103,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 120,
                                "type": "int_typed",
                                "value": {
                                    "INT": "10"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "ELSE": {
                        "id": 121,
                        "type": "function_app_typed",
                        "reference": 103,
                        "input": {
                            "": null
                        }
                    }
                }
            }
        }
    },
    {
        "id": 122,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_tick"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 123,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 124,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 125,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 126,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 127,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 128,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 129,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 130,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 131,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 132,
                                        "type": "function_app_typed",
                                        "reference": 124,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 133,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "10"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 134,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP1": {
                        "id": 135,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 136,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 137,
                                        "type": "function_app_typed",
                                        "reference": 125,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 138,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "15"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 139,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP2": {
                        "id": 140,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "mod"
                        },
                        "input": {
                            "A": {
                                "id": 141,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 142,
                                        "type": "function_app_typed",
                                        "reference": 126,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 143,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "20"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "B": {
                                "id": 144,
                                "type": "function_app_typed",
                                "reference": 15,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP3": {
                        "id": 145,
                        "type": "function_app_typed",
                        "reference": 127,
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 146,
                        "type": "function_app_typed",
                        "reference": 97,
                        "input": {
                            "": null,
                            "PARAM0": {
                                "id": 147,
                                "type": "create_record_typed",
                                "reference": 0,
                                "input": {
                                    "": null,
                                    "FIELD_INP0": {
                                        "id": 148,
                                        "type": "function_app_typed",
                                        "reference": 124,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "FIELD_INP1": {
                                        "id": 149,
                                        "type": "function_app_typed",
                                        "reference": 125,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "FIELD_INP2": {
                                        "id": 150,
                                        "type": "function_app_typed",
                                        "reference": 126,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "FIELD_INP3": {
                                        "id": 151,
                                        "type": "function_app_typed",
                                        "reference": 127,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "FIELD_INP4": {
                                        "id": 152,
                                        "type": "function_app_typed",
                                        "reference": 128,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "RBRACE": null
                                }
                            }
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 153,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "on_key"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 154,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 155,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "ay"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 156,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "by"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 157,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "my"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 158,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "x"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "id": 159,
                        "type": "variable_pattern_typed",
                        "value": {
                            "VAR": "score"
                        },
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "ARG1": {
                "id": 160,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "key"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 161,
                "type": "create_record_typed",
                "reference": 0,
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "id": 162,
                        "type": "function_app_typed",
                        "reference": 155,
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "id": 163,
                        "type": "function_app_typed",
                        "reference": 156,
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "id": 164,
                        "type": "function_app_typed",
                        "reference": 157,
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "id": 165,
                        "type": "logic_ternary_typed",
                        "input": {
                            "IF": {
                                "id": 166,
                                "type": "logic_compare_typed",
                                "value": {
                                    "OP": "="
                                },
                                "input": {
                                    "A": {
                                        "id": 167,
                                        "type": "function_app_typed",
                                        "reference": 160,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 168,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "right"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "THEN": {
                                "id": 169,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 170,
                                        "type": "function_app_typed",
                                        "reference": 158,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 171,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "10"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "ELSEIF0": {
                                "id": 172,
                                "type": "logic_compare_typed",
                                "value": {
                                    "OP": "="
                                },
                                "input": {
                                    "A": {
                                        "id": 173,
                                        "type": "function_app_typed",
                                        "reference": 160,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 174,
                                        "type": "string_typed",
                                        "value": {
                                            "STRING": "left"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "THEN0": {
                                "id": 175,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "-"
                                },
                                "input": {
                                    "A": {
                                        "id": 176,
                                        "type": "function_app_typed",
                                        "reference": 158,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 177,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "10"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "ELSE": {
                                "id": 178,
                                "type": "function_app_typed",
                                "reference": 158,
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "FIELD_INP4": {
                        "id": 179,
                        "type": "function_app_typed",
                        "reference": 159,
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            }
        }
    },
    {
        "id": 180,
        "type": "big_bang_typed",
        "input": {
            "INITIAL_WORLD": {
                "id": 181,
                "type": "function_app_typed",
                "reference": 6,
                "input": {
                    "": null
                }
            },
            "WIDTH": {
                "id": 182,
                "type": "function_app_typed",
                "reference": 13,
                "input": {
                    "": null
                }
            },
            "HEIGHT": {
                "id": 183,
                "type": "function_app_typed",
                "reference": 15,
                "input": {
                    "": null
                }
            },
            "DRAW": {
                "id": 184,
                "type": "function_app_typed",
                "reference": 17,
                "input": {
                    "": null
                }
            },
            "TICK": {
                "id": 185,
                "type": "function_app_typed",
                "reference": 122,
                "input": {
                    "": null
                }
            },
            "KEYPRESS": {
                "id": 186,
                "type": "function_app_typed",
                "reference": 153,
                "input": {
                    "": null
                }
            },
            "RATE": {
                "id": 187,
                "type": "int_typed",
                "value": {
                    "INT": "500"
                },
                "input": {
                    "": null
                }
            }
        }
    }
]
    ],
    [//19.
    [
    {
        "id": 0,
        "type": "defined_recordtype_typed",
        "value": {
            "DATANAME": "world_t",
            "FIELD0": "apple",
            "FIELD1": "banana",
            "FIELD2": "melon",
            "FIELD3": "bird",
            "FIELD4": "score"
        },
        "input": {
            "": null,
            "FIELD_INP0": {
                "id": 1,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP1": {
                "id": 2,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP2": {
                "id": 3,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP3": {
                "id": 4,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "FIELD_INP4": {
                "id": 5,
                "type": "int_type_typed",
                "input": {
                    "": null
                }
            },
            "RBRACE": null
        }
    },
    {
        "id": 6,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "check"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 7,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "fx"
                },
                "input": {
                    "": null
                }
            },
            "ARG1": {
                "id": 8,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "fy"
                },
                "input": {
                    "": null
                }
            },
            "ARG2": {
                "id": 9,
                "type": "variable_pattern_typed",
                "value": {
                    "VAR": "bx"
                },
                "input": {
                    "": null
                }
            },
            "EXP1": {
                "id": 10,
                "type": "logic_operator_typed",
                "value": {
                    "OP_BOOL": "&&"
                },
                "input": {
                    "PARAM0": {
                        "id": 11,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≥"
                        },
                        "input": {
                            "A": {
                                "id": 12,
                                "type": "function_app_typed",
                                "reference": 8,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 13,
                                "type": "int_typed",
                                "value": {
                                    "INT": "455"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM1": {
                        "id": 14,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≤"
                        },
                        "input": {
                            "A": {
                                "id": 15,
                                "type": "function_app_typed",
                                "reference": 8,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 16,
                                "type": "int_typed",
                                "value": {
                                    "INT": "465"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "PARAM2": {
                        "id": 17,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≥"
                        },
                        "input": {
                            "A": {
                                "id": 18,
                                "type": "function_app_typed",
                                "reference": 7,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 19,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "-"
                                },
                                "input": {
                                    "A": {
                                        "id": 20,
                                        "type": "function_app_typed",
                                        "reference": 9,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 21,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "PARAM3": {
                        "id": 22,
                        "type": "logic_compare_typed",
                        "value": {
                            "OP": "≤"
                        },
                        "input": {
                            "A": {
                                "id": 23,
                                "type": "function_app_typed",
                                "reference": 7,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 24,
                                "type": "int_arithmetic_typed",
                                "value": {
                                    "OP_INT": "+"
                                },
                                "input": {
                                    "A": {
                                        "id": 25,
                                        "type": "function_app_typed",
                                        "reference": 9,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "B": {
                                        "id": 26,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "50"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "id": 27,
        "type": "let_fun_pattern_typed",
        "value": {
            "VAR": "add_score"
        },
        "input": {
            "VARIABLE": null,
            "ARG0": {
                "id": 28,
                "type": "record_pattern_typed",
                "input": {
                    "": null,
                    "FIELD_INP0": {
                        "value": {
                            "anything": "true",
                            "VAR": "ay"
                        },
                        "id": 29,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP1": {
                        "value": {
                            "anything": "true",
                            "VAR": "by"
                        },
                        "id": 30,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP2": {
                        "value": {
                            "anything": "true",
                            "VAR": "my"
                        },
                        "id": 31,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP3": {
                        "value": {
                            "anything": "true",
                            "VAR": "x"
                        },
                        "id": 32,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "FIELD_INP4": {
                        "value": {
                            "anything": "true",
                            "VAR": "score"
                        },
                        "id": 33,
                        "type": "variable_pattern_typed",
                        "input": {
                            "": null
                        }
                    },
                    "RBRACE": null
                }
            },
            "EXP1": {
                "id": 34,
                "type": "logic_ternary_typed",
                "input": {
                    "IF": {
                        "id": 35,
                        "type": "logic_operator_typed",
                        "value": {
                            "OP_BOOL": "||"
                        },
                        "input": {
                            "PARAM0": {
                                "id": 36,
                                "type": "function_app_typed",
                                "reference": 6,
                                "input": {
                                    "": null,
                                    "PARAM0": {
                                        "id": 37,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "200"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 38,
                                        "type": "function_app_typed",
                                        "reference": 29,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 39,
                                        "type": "function_app_typed",
                                        "reference": 32,
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM1": {
                                "id": 40,
                                "type": "function_app_typed",
                                "reference": 6,
                                "input": {
                                    "": null,
                                    "PARAM0": {
                                        "id": 41,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "400"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 42,
                                        "type": "function_app_typed",
                                        "reference": 30,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 43,
                                        "type": "function_app_typed",
                                        "reference": 32,
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            },
                            "PARAM2": {
                                "id": 44,
                                "type": "function_app_typed",
                                "reference": 6,
                                "input": {
                                    "": null,
                                    "PARAM0": {
                                        "id": 45,
                                        "type": "int_typed",
                                        "value": {
                                            "INT": "600"
                                        },
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM1": {
                                        "id": 46,
                                        "type": "function_app_typed",
                                        "reference": 31,
                                        "input": {
                                            "": null
                                        }
                                    },
                                    "PARAM2": {
                                        "id": 47,
                                        "type": "function_app_typed",
                                        "reference": 32,
                                        "input": {
                                            "": null
                                        }
                                    }
                                }
                            }
                        }
                    },
                    "THEN": {
                        "id": 48,
                        "type": "int_arithmetic_typed",
                        "value": {
                            "OP_INT": "+"
                        },
                        "input": {
                            "A": {
                                "id": 49,
                                "type": "function_app_typed",
                                "reference": 33,
                                "input": {
                                    "": null
                                }
                            },
                            "B": {
                                "id": 50,
                                "type": "int_typed",
                                "value": {
                                    "INT": "10"
                                },
                                "input": {
                                    "": null
                                }
                            }
                        }
                    },
                    "ELSE": {
                        "id": 51,
                        "type": "function_app_typed",
                        "reference": 33,
                        "input": {
                            "": null
                        }
                    }
                }
            }
        }
    }
]]
];

var qlst = ["(5-2)*3のブロックを作ってみましょう。",
	    "widthという名前の値が800の変数と、heightという名前の値が500の変数を作りましょう。",
	    "ゲーム画面の大きさを好きな大きさにしてみましょう。",
	    "四角の位置や大きさ、色を変えてみましょう。outlineにしてみましょう。",
	    "横幅がwidth、縦幅がheightの空の風景に、半径が30、色がpinkの円を(400, 250)の位置に載せた風景を描画してみましょう。",
	    "横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景を描画してみましょう。",
	    "横幅がwidth、縦幅がheightの空の風景に、文字列\"hello world\"を大きさが20、色がgreenで(400, 250)の位置に載せた風景を描画してみましょう。",
	    "横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景の上に、さらに、http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.pngを横幅と縦幅が100でそれぞれ(200, 50)、（400, 50)、(600, 50)の位置に、http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.pngを横幅150、縦幅144で(400, 428)の位置に、文字列\"0\"を大きさ50、色がblackで(400, 458)の位置に載せた風景を描画してみましょう。",
	    "bing_bangブロックにつながっている初期値を色々な数に変えて実行してみましょう。",
	    "rateを色々な数に変えてみましょう。",
	    "on_tick関数で返す値をworld+2、rateを100にした時(1)と、on_tick関数で返す値をworld+20、rateを1000にした時(2)の動きの違いを比べてみましょう。",
	    "増やす座標の大きさを変えてみましょう。",
	    "type world_t = {<br>  apple : int; (* りんごのy座標 *)<br>  banana : int; (* バナナのy座標 *)<br>  melon : int; (* メロンのy座標 *)<br>  bird : int; (* 鳥のx座標 *)<br>  score : int; (* 点数 *)<br>}<br>のworld_tを定義してみましょう。",
	    "let initial_world = {<br>  apple = 0;<br>  banana = 0;<br>  melon = 0;<br>  bird = 400;<br>  score = 0;<br>}<br>のinitial_worldを定義してみましょう。",
	    "そらの背景の上にりんご、バナナ、メロン、鳥、点数を表示するdraw関数を作りましょう。点数は鳥の上に置くようにしましょう。<br>完成したら実行してみましょう。<br>画像のURL：<br>http://pllab.is.ocha.ac.jp/~asai/picture/images/〇〇.png<br>(apple, banana, melon, bird, background)",
	    "りんご、バナナ、メロンの座標をそれぞれ10、15、20下に動かすon_tick関数を作りましょう。modを使って下にはみ出たら上から戻ってくるようにしましょう。完成したら実行してみましょう。",
	    "on_tickブロックとbig_bangブロックの間にon_keyブロックを挿入しましょう。on_keyブロックの引数はworld_t型なので、on_key関数の1つ目のコネクタにworld_t型のパラメタをつなぎましょう。",
	    "鳥がフルーツをキャッチできているかを判定する関数checkを作りましょう。checkは引数が3つで、フルーツのx座標とy座標と鳥のx座標を受け取ったら、フルーツのy座標が455以上かつ465以下で、かつフルーツのx座標から鳥のx座標を引いた数が-50以上かつ50以下の場合は10を返し、そうでない場合は0を返す関数にしましょう。",
	    "on_tiick関数で返すscoreを、上で作ったcheckを使って各フルーツをキャッチできているかを調べて、キャッチできている場合は10点足した点数になるように変更しましょう。フルーツのx座標はりんごが200、バナナが400、メロンが600です。",
	    "///"
	   ];

var slct = document.createElement("select");
for (var i=0; i<anslst.length; i++) {
    var opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    slct.appendChild(opt);
}
slct.setAttribute("onchange",
		  "question.innerHTML = qlst[slct.value]+'<br><br>';");
document.querySelector("div[class='blockToCode']").appendChild(slct);
var question = document.createElement("div");
question.innerHTML = qlst[0]+"<br><br><br><br><br><br><br><br><br>";
document.querySelector("div[class='blockToCode']").appendChild(question);

//document.querySelector("div[class='blockToCode']").removeChild(makeobj);

var markedblocks = {};

function markblock (id) {
    var block = Blockly.mainWorkspace.getBlockById(id);
    if (markedblocks[id] == undefined) {
	markedblocks[id] = block.getColour();
	block.setColour("#ff00ff");
    }
    else {
	block.setColour(markedblocks[id]);
	delete markedblocks[id];
    }
}

var slct_option = document.createElement("select");
var optionvalues = ["value:anything", "disordery", "anything"];
var options = ["any_value", "disordery", "any_block"];
for (var i=0; i<options.length; i++) {
    var opt = document.createElement("option");
    opt.value = optionvalues[i];
    opt.textContent = options[i];
    slct_option.appendChild(opt);
}
document.querySelector("div[class='blockToCode']").appendChild(slct_option);

function select_block () {
    Blockly.mainWorkspace.addChangeListener(f = function(e){
	if (e.element == 'click')
	    markblock(e.blockId);
    });
    optbtn.textContent = 'add option';
}

var cnt = 1;
function add_option () {
    Blockly.mainWorkspace.removeChangeListener(f);
    Object.keys(markedblocks).forEach(function(key){
	var block = Blockly.mainWorkspace.getBlockById(key);
	var comment = block.getCommentText();
	if (comment != "") {
	    comment += ",";
	}
	var text;
	if (slct_option.value == "disordery") {
	    text = cnt;
	}
	else text = true;
	comment = comment + slct_option.value + ":" + text;
	block.setCommentText(comment);
	markblock(key);
    });
    optbtn.textContent = 'select block';
    cnt++;
}

var f;
var optbtn = document.createElement("button");
optbtn.textContent = "select block";
optbtn.setAttribute("class", "btn");
optbtn.id = "optbtn";
optbtn.setAttribute("onclick",
		    //"if (optbtn.textContent == 'add option') {Blockly.mainWorkspace.addChangeListener(f = function(e){if (e.element == 'click') markblock(e.blockId);}); optbtn.textContent = 'select block';} else {Blockly.mainWorkspace.removeChangeListener(f); Object.keys(markedblocks).forEach(function(key){markblock(key);}); optbtn.textContent = 'add option';}");
		    "if (optbtn.textContent == 'select block') select_block(); else add_option();");
document.querySelector("div[class='blockToCode']").appendChild(optbtn);




//1,2,3,4,5,18,6,7,8,9,10,11,12,13,14,15,16,17
