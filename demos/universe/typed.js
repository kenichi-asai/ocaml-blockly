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
    "(* 目的：この関数の目的を書く *)\n" +
    "(* f : 型 -> 型 *)\n" +
    "let f 引数 =\n" +
    "  ...\n" +
    "\n" +
    "(* テスト *)\n" +
    "let test1 = f 値 = 値\n" +
    "let test2 = f 値 = 値\n" +
    "let test3 = f 値 = 値";

Typed.init = function() {
  Typed.setDocumentTitle_();

  var input = document.querySelector(".ocamlCode");
  input.value = Typed.defaultCode;

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

Typed.showCode = function() {
  try {
    var code = Blockly.TypedLang.workspaceToCode(Typed.workspace);
    var input = document.querySelector(".generatedCode");
    input.value = code;
  } catch (e) {
    console.warn('Some of blocks are not supported for converting.');
  }
}

Typed.runGame = function() {
  // var gameWindow = window.open("", "game");
  // var input = document.querySelector(".generatedCode");
  // runGame(input.value);
  runGame(' \
open UniverseJs \
open Color \
open Image \
open World \
 \
(* constants *) \
let radius =  30.               (* initial radius of balls *) \
let width  = 500.               (* window width *) \
let height = 400.               (* window height *) \
 \
(* ball_t : type of balls *) \
type ball_t = { \
  center : float * float; \
  vector : float * float; \
  radius : float; \
  color : Color.t; \
} \
 \
(* make_random_ball : float -> Color.t -> ball_t *) \
let make_random_ball radius color = { \
  center = (Random.float width, Random.float height); \
  vector = (Random.float 3. -. 1., Random.float 3. -. 1.); \
  radius = radius; \
  color = color; \
} \
 \
(* ball_image : ball_t -> Image.t *) \
let ball_image ball = match ball with \
  {radius = r; color = c} -> circle r c \
 \
(* ball_top_left : ball_t -> float * float *) \
let ball_top_left ball = match ball with \
  {center = (x, y); radius = r} -> (x -. r, y -. r) \
 \
(* type of world *) \
type world_t = ball_t list      (* a list of balls *) \
 \
(* initial value of the world *) \
let initial_world : world_t = \
  [make_random_ball radius red; \
   make_random_ball radius red; \
   make_random_ball radius red] \
 \
(* background : Image.t *) \
let background = \
  place_image (rectangle 50. 25. (make_color 0xbb 0xbb 0xbb)) \
              (width /. 2. -. 25., height /. 2. -. 12.) \
              (empty_scene width height) \
 \
(* draw : world_t -> Image.t *) \
let draw lob = \
  place_images (List.map ball_image lob) \
               (List.map ball_top_left lob) \
               background \
 \
(* draw_game_over : world_t -> Image.t *) \
let draw_game_over world = \
  place_image (text "Game Finished" ~size:30 black) \
              (width /. 2., height /. 2.) \
              (draw world) \
 \
(* handle mouse event *) \
 \
(* check if (x, y) is within r from (x0, y0) *) \
(* is_inside : float -> float -> float * float -> float -> bool *) \
let is_inside x y (x0, y0) r = \
  (x -. x0) *. (x -. x0) +. (y -. y0) *. (y -. y0) <= r *. r  \
 \
(* change_ball : ball_t -> ball_t *) \
let change_ball {center = p; vector = v; radius = r; color = c} = \
  if r <= 5. \
  then make_random_ball radius c \
  else make_random_ball (r -. 5.) c \
 \
(* change_world_on_mouse : world_t -> float -> float -> string -> \
                           (world_t, \'a) World.t *) \
let change_world_on_mouse world x y event = match event with \
    "button_down" -> \
      let is_inside_ball ball = is_inside x y ball.center ball.radius in \
      let change ball = if is_inside_ball ball \
                        then change_ball ball \
                        else ball in \
      List.map change world \
  | _ -> world \
 \
(* handle tick event *) \
 \
(* mod, but the result is always between 0 and b *) \
(* mymod : float -> float -> float *) \
let rec mymod a b = \
  if a < 0. then mymod (a +. b) b \
  else if b <= a then mymod (a -. b) b \
  else a \
 \
(* add_posn : float * float -> float * float -> float * float *) \
let add_posn posn vector = match (posn, vector) with \
  ((x1, x2), (v1, v2)) -> \
    (mymod (x1 +. v1) width, mymod (x2 +. v2) height) \
 \
(* move_ball_on_tick : ball_t -> ball_t *) \
let move_ball_on_tick {center = p; vector = v; radius = r; color = c} = \
  {center = add_posn p v; vector = v; radius = r; color = c}  \
 \
(* change_world_on_tick : world_t -> (world_t, \'a) World.t *) \
let change_world_on_tick world = \
  List.map move_ball_on_tick world \
 \
(* andmap : (\'a -> bool) -> \'a list -> bool *) \
let rec andmap f lst = match lst with \
    [] -> true \
  | first :: rest -> f first && andmap f rest \
 \
(* game_finished : world_t -> bool *) \
let game_finished lob = \
  andmap (fun ball -> ball.radius <= 5.) lob \
 \
(* game start *) \
let () = \
  big_bang initial_world \
           ~name:"Ball Game" \
           ~to_draw:draw \
           ~width:(int_of_float width) \
           ~height:(int_of_float height) \
           ~on_mouse:change_world_on_mouse \
           (* ~on_key_press:change_world_on_key *) \
           ~on_tick:change_world_on_tick \
           ~rate:0.1 \
           ~stop_when:game_finished \
           ~to_draw_last:draw_game_over \
	   ~onload:false \
  ');
}

Typed.runCode = function() {
  //  alert('Not implemented yet.');
}

Typed.onClickConvert = function(event) {
  event.preventDefault();
  var input = document.querySelector(".ocamlCode");
  var check1 = document.querySelector(".checkbox1").checked;
  var check2 = document.querySelector(".checkbox2").checked;
  var check3 = document.querySelector(".checkbox3").checked;
  var check4 = document.querySelector(".checkbox4").checked;
  var check5 = document.querySelector(".checkbox5").checked;
  var check6 = document.querySelector(".checkbox6").checked;
  var check7 = document.querySelector(".checkbox7").checked;
  var code = '';
  if (check1) {
    code += 'type ekimei_t = {\n' +
            '  kanji   : string; (* 漢字の駅名 *)\n' +
            '  kana    : string; (* 読み *)\n' +
            '  romaji  : string; (* ローマ字 *)\n' +
            '  ken     : string; (* 県名 *)\n' +
            '  shozoku : string; (* 所属路線名 *)\n' +
            '}\n'
  }
  if (check2) {
    code += 'type ekikan_t = {\n' +
            '  kiten  : string; (* 起点 *)\n' +
            '  kenk   : string; (* 起点の県名 *)\n' +
            '  shuten : string; (* 終点 *)\n' +
            '  kens   : string; (* 終点の県名 *)\n' +
            '  keiyu  : string; (* 経由路線名 *)\n' +
            '  kyori  : float;  (* 距離 *)\n' +
            '  jikan  : int;    (* 所要時間 *)\n' +
            '}\n'
  }
  if (check3) {
    code += 'type eki_t = {\n' +
            '  namae        : string * string;        (* 駅名ペア *)\n' +
            '  saitan_kyori : float;                  (* 最短距離 *)\n' +
            '  temae_list   : (string * string) list; (* 手前リスト *)\n' +
            '}\n'
  }
  if (check4) {
    code += '(* 目的：lst の各要素に f を施したリストを返す *)\n' +
            '(* map : (\'a -> \'b) -> \'a list -> \'b list *)\n' +
            'let rec map f lst = match lst with\n' +
            '    [] -> []\n' +
            '  | first :: rest -> f first :: map f rest\n'
  }
  if (check5) {
    code += '(* 目的：lst の要素の中で p を満たすもののみのリストを返す *)\n' +
            '(* filter : (\'a -> bool) -> \'a list -> \'a list *)\n' +
            'let rec filter p lst = match lst with\n' +
            '    [] -> []\n' +
            '  | first :: rest -> if p first then first :: filter p rest\n' +
            '                     else filter p rest\n'
  }
  if (check6) {
    code += '(* 目的：init から始めて lst の要素を右から f 施し込む *)\n' +
            '(* fold_right : (\'a -> \'b -> \'b) -> \'a list -> \'b -> \'b *)\n' +
            'let rec fold_right f lst init = match lst with\n' +
            '    [] -> init\n' +
            '  | first :: rest -> f first (fold_right f rest init)\n'
  }
  if (check7) {
    code += '(* 目的：lst の長さを返す *)\n' +
            '(* length : \'a list -> int *)\n' +
            'let rec length lst = match lst with\n' +
            '    [] -> 0\n' +
            '  | first :: rest -> 1 + length rest\n'
  }
  code += input.value;
  if (code) {
    BlockOfOCamlUtils.codeToBlock(code);
  }
}

window.addEventListener('load', Typed.init);
