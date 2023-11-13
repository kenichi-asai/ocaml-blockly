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
	       pair_pattern_typed : ["VAR"],
	       record_pattern_typed : ["VAR"],
	       empty_construct_pattern_typed : ["VAR"],
	       cons_construct_pattern_typed : ["VAR"],
	       option_none_pattern_typed : ["VAR"],
	       option_some_pattern_typed : ["VAR"],
	       function_app_typed : []};

function eqbyid (id1, id2) {
    return (eq(Blockly.mainWorkspace.getBlockById(id1), Blockly.mainWorkspace.getBlockById(id2)));
}

function eq (b1, b2) {
    if (!(b1 || b2))
	return true;
    if (!((b1.type.startsWith("let") && b2.type.startsWith("let")) || (b1.type ==  b2.type)))
	return false;
    var f = typelst[b1.type];
    for (var i=0; i<f.length; i++) {
	if (b1.getField(f[i]).getText() != b2.getField(f[i]).getText())
	    return false;
    }
    var l1 = b1.inputList.map(x => x.name);
    var l2 = b2.inputList.map(x => x.name);
    if (l1.length != l2.length)
	return false;
    for (var i=0; i<l1.length; i++) {
	if (l1[i] != l2[i])
	    return false;
	if (!(eq(b1.getInputTargetBlock(l1[i]), b2.getInputTargetBlock(l2[i]))))
	    return false;
    }
    return true;
}

function f () {
    //return new Promise((resolve, reject) => {
	var code = "let a = 2 - 1\nlet dummy = ?";
        openModal();
        setTimeout(function() {
            BlockOfOCamlUtils.codeToBlock(code);
            closeModal();
	    //resolve();
        }, 100);
    //})
}
    
function eq3 (id) {
	//await f();
	letblock1 = Blockly.mainWorkspace.getBlocksByType("let_fun_pattern_typed", true);
	letblock2 = Blockly.mainWorkspace.getBlocksByType("letstatement_fun_pattern_typed", true);
	letblock = letblock1.concat(letblock2);
	dummy = letblock.filter(x=>x.getField("VAR").getText() == "dummy")[0];
	console.log(dummy);
	block = dummy.getRootBlock();
	dummy.dispose();
    return (eq(Blockly.mainWorkspace.getBlockById(id), block));
    //const result = await f();
    //return (result);
    //f().then((res)=>{console.log(res)});
}

    f();
