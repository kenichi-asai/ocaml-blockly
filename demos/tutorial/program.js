
var query = location.search;
var values = query.split("=");
var value = decodeURIComponent(values[1]);
console.log(value)

function runcode() {
    var program;
    if (value == 0) {
	program = pgm2;
    }
    else {
	program = pgm;
    }
    Typed.runCode2(program);
}

var pgm = function(){/*
open UniverseJs
open Color
open Image
open World
open Utility

let stop = 4
type xyl = {
  field : (int * int) list;
}
type draw_t = {
  x : int;
  a : int;
  canv : int * int;
  pic : int;
}
type t = {
  stage : int;
  time : int;
  bigbang : int * int;
  worldxy : int * int;
  draw : draw_t;
  tick : int;
  key : int;
  world : int * int;
  screenworld : int * int;
}
let initialbb = (400, 280)
let initialw = (350, 280)
let initialc = (-100, -100)
let initial_world = {stage = -1; time = 0; bigbang = initialbb; worldxy = initialw; draw = {x = 10; a = 200; canv = initialc; pic = 80}; tick = 200; key = 200; world = (0, 50); screenworld = (1000, 1000)}
let width = 800
let height = 600
let txtlst0 = [("ゲームはbig_bangより始まります。", (-1, 0)); ("big_bangが引数として受け取った値や関数を使うことでゲームが動きます。", (-1, 2)); ("世界は現在のゲームの状態を表すものです。", (-1, 3)); ("ゲームを進ませるときは世界を更新します。", (-1, 3)); ("big_bangの１つめの引数は世界の初期値(initial_world)です。", (-1, 5)); ("ゲーム開始時の世界はこのinitial_worldになります。", (-1, 7)); ("big_bangにwidth、heightが指定されていたら、", (-1, 9)); ("ゲーム画面の横幅がwidth、縦幅がheightになります。", (-1, 9)); ("ゲームが始まると、big_bangに登録された", (-1, 11)); ("draw、on_tick、on_keyなどの関数を呼び出します。", (-1, 11)); ("ゲーム開始時にdraw関数を呼び出してゲーム画面に画像を描画します。", (-1, 13))]
let txtlst1 = [("draw関数に世界が渡されます。", (0, 2)); ("draw関数は受け取った世界を使った風景を返します。", (0, 3)); ("返ってきた風景はゲーム画面に描画されます。", (0, 16))]
let txtlst2 = [("on_tick関数は一定時間（rateミリ秒）ごとに呼び出される関数です。", (1, 0)); ("on_tick関数に世界が渡されます。", (1, 3)); ("on_tick関数は受け取った世界から新しい世界を作ります。", (1, 5)); ("新しい世界が返ってきました。", (1, 11)); ("世界が書き換わると、draw関数が呼び出されます。", (1, 14))]
let txtlst3 = [("on_key関数はキーが押されたら呼び出される関数です。", (3, 0)); ("いずれかのキーが押されると、on_tick関数に", (3, 5)); ("世界と押されたキーを表す文字列が渡されます。", (3, 5)); ("on_tick関数は受け取った世界とキーから新しい世界を作ります。", (3, 9)); ("新しい世界が返ってきました。", (3, 15)); ("世界が書き換わると、draw関数が呼び出されます。", (3, 18))]
let txtlst = List.fold_right (let f v11 v13 =
  List.fold_right (let f v15 v16 =
  v15 :: v16
  in f) v11 v13
  in f) [txtlst0; txtlst1; txtlst2; txtlst3] []
let imlst = [read_image "https://3.bp.blogspot.com/-mvJYx2ielS8/UOFJ618SKjI/AAAAAAAAKC0/YcgZSz-8ru0/s1600/bunbougu_hake_penki.png" 77 112; read_image "https://4.bp.blogspot.com/-Bu3khFKFeZ4/Uf8zrYCYL4I/AAAAAAAAWvE/_7M-Tv87a_E/s400/mezamashidokei.png" 84 100; read_image "https://1.bp.blogspot.com/-4FXQNU7cK0Y/Xr325DNMgQI/AAAAAAABY4w/GUMW7pgPNXIrtC-mnVIYeJwAkdd-rinvACNcBGAsYHQ/s500/computer_keyboard_white.png" 125 87; rectangle 100 80 ~fill:false Color.black]
let xylst = [(80, 150); (330, 150); (580, 150); (400, 400)]
let getxy v =
  let f {field = first3 :: (c :: (e :: (g :: i)))} =
  if v = "d" then first3
  else if v = "t" then c
  else if v = "k" then e
  else g
  in f {field = xylst}
let face = [circle 3 Color.black; circle 3 Color.black; text "︶" 20 Color.black]
let facexy = [(-12, 2); (12, 2); (0, 25)]
let add_xy (x6, y6) (x5, y5) =
  (x6 + x5, y6 + y5)
let filtertxt (x3, y3) (x4, y4) =
  ((if x3 mod 2 = 0 then 0
  else x3), y3) = y4
let draw {stage = stage_v; time = time_v; bigbang = bigbang_v; worldxy = worldxy_v; draw = {x = x2_v; a = a2_v; canv = (x2, y2); pic = pic2_v}; tick = v2; key = a; world = (x7, y7); screenworld = (d, l)} =
  if stage_v <= -2 then place_image (if stage_v = -2 then text "もう一度見る ⟲" 30 Color.red
  else text "クリック" 30 Color.red) (400, 300) (empty_scene width height)
  else place_image (overlay (text "→" 18 Color.black) (width / 2 - 25, 40) (overlay (List.fold_right (let f (x, y) v7 =
  if image_width v7 = 0 then text x 20 Color.black
  else overlay v7 ((image_width v7 - image_width (text x 20 Color.red)) / 2, 25) (text x 20 Color.black)
  in f) (List.filter (filtertxt (stage_v, time_v)) txtlst) (text "" 12 Color.red)) (0, 0) (rectangle (width - 20) 100 (make_color 200 200 200)))) (width / 2, height - 55) (if stage_v = -1 && time_v <= 10 then (let p = [((overlay (text ("bird:" ^ string_of_int y7) 12 Color.blue) (2, 20) (text ("apple:" ^ string_of_int x7) 12 Color.blue), worldxy_v), 8); ((overlay (circle 25 (make_color 256 256 256 ~alpha:120)) (0, 4) (overlay (text "世界" 12 Color.black) (0, -30) (read_image "https://3.bp.blogspot.com/-rxGpy3sFcRE/UdYhIQxFOpI/AAAAAAAAV4w/cna44PTl1tw/s400/chikyuu.png" 55 54)), add_xy worldxy_v (0, -4)), 4); ((overlay (text "big_bang" 12 Color.black) (0, 48) (read_image "https://4.bp.blogspot.com/-TalVsZX9oJU/U0pS4v8f_mI/AAAAAAAAe-w/YA6n6klmR6s/s400/kamisama.png" 114 133), bigbang_v), 1); ((text "←       width       →" 12 Color.black, (400, 354)), 10); ((overlay (overlay (text "↓" 12 Color.black) (0, 65) (text "↑" 12 Color.black)) (10, 0) (text "height" 12 Color.black), (330, 400)), 10); ((text "ゲーム画面" 12 Color.black, (400, 455)), 10); ((rectangle 100 80 ~fill:false Color.black, (400, 400)), 10)]
  in place_images ((if time_v >= 5 && time_v <= 7 then overlay (overlay (overlay (text "appleフィールドが0、" 12 Color.red) (0, -14) (text "birdフィールドが50のレコード" 12 Color.red)) (0, -3) (read_image "https://4.bp.blogspot.com/-uOgL0v6fT0w/UZoVd4537DI/AAAAAAAATig/077Nr8Aimnk/s800/fukidashi03.png" 230 60)) (80, -55) (overlay (text "initial_world" 12 Color.black) (2, -35) (overlay (overlay (text ("bird:" ^ string_of_int y7) 12 Color.blue) (0, 20) (text ("apple:" ^ string_of_int x7) 12 Color.blue)) (0, 0) (circle 25 (make_color 120 120 255) ~fill:false)))
  else text "" 12 Color.red) :: (let f (x16, y15) =
  time_v >= y15 - 1
  in (let g ((x14, y14), y12) =
  x14
  in List.map g (List.filter f p)))) (add_xy bigbang_v (150, -35) :: (let f (x17, y16) =
  time_v >= y16 - 1
  in (let g ((x21, y20), y19) =
  y20
  in List.map g (List.filter f p)))) (empty_scene width height))
  else place_images [rectangle 77 112 (make_color 255 255 255 ~alpha:a2_v); rectangle 84 100 (make_color 255 255 255 ~alpha:v2); rectangle 125 87 (make_color 255 255 255 ~alpha:a); (if stage_v = 1 && 6 <= time_v && time_v <= 8 || stage_v = 3 && 10 <= time_v && time_v <= 12 then text "" 20 Color.red
  else overlay (text ("bird:" ^ string_of_int y7) 12 Color.blue) (2, 20) (text ("apple:" ^ string_of_int x7) 12 Color.blue)); circle 25 (make_color 256 256 256 ~alpha:120); (if stage_v = 3 && time_v >= 5 && time_v <= 17 then overlay (text "キー" 10 Color.black) (0, 13) (overlay (text "right" 12 Color.black) (0, 0) (rectangle 30 15 (make_color 200 200 200)))
  else text "" 12 Color.red)] [add_xy (getxy "d") (x2_v, 0); getxy "t"; getxy "k"; worldxy_v; worldxy_v; add_xy worldxy_v (0, 41)] (place_images (read_image "https://3.bp.blogspot.com/-rxGpy3sFcRE/UdYhIQxFOpI/AAAAAAAAV4w/cna44PTl1tw/s400/chikyuu.png" 55 54 :: List.fold_right (let f v28 v27 =
  List.fold_right (let f v33 v34 =
  v33 :: v34
  in f) v28 v27
  in f) [face; face; face] []) (let f v22 =
  List.map (add_xy (add_xy (getxy v22) (if v22 = "d" then (x2_v, 15)
  else if v22 = "t" then (0, 0)
  else (0, -10)))) facexy
  in worldxy_v :: List.fold_right (let f v29 v37 =
  List.fold_right (let f v38 v39 =
  v38 :: v39
  in f) v29 v37
  in f) [f "d"; f "t"; f "k"] []) (place_images (text "big_bang" 12 Color.black :: (read_image "https://4.bp.blogspot.com/-TalVsZX9oJU/U0pS4v8f_mI/AAAAAAAAe-w/YA6n6klmR6s/s400/kamisama.png" 114 133 :: imlst)) (add_xy bigbang_v (0, 48) :: (bigbang_v :: (let f {field = first6 :: rest5} =
  add_xy first6 (x2_v, 0) :: rest5
  in f {field = xylst}))) (place_images [rectangle 100 80 ~fill:false Color.black; rectangle 100 pic2_v Color.white; read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png" 25 25; read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png" 30 30] [(x2, y2); (x2, (y2 + 40) - pic2_v / 2); (x2, (y2 - 25) + x7); ((x2 - 50) + y7, y2 + 25)] (place_images [read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png" 25 25; read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png" 30 30] [(400, 375 + d); (350 + l, 425)] (place_images [text "draw" 12 Color.black; text "on_tick" 12 Color.black; text "on_key" 12 Color.black; text "世界" 12 Color.black; text "ゲーム画面" 12 Color.black] [add_xy (getxy "d") (15, -70); add_xy (getxy "t") (0, -70); add_xy (getxy "k") (5, -60); add_xy worldxy_v (0, -30); add_xy (getxy "g") (0, 55)] (place_images (if stage_v = 3 && time_v >= 1 && time_v <= 5 then [read_image "https://2.bp.blogspot.com/-bD10xk22-q0/Vy2vtrrtF7I/AAAAAAAA6a8/rLIsHKqpe2wn_79L7-87a6XwIdrSalvwACLcB/s800/body_hand_hitosashiyubi2.png" 45 60; overlay (overlay (rectangle 50 8 Color.white) (0, 22) (overlay (rectangle 4 50 Color.white) ((if time_v <= 2 then 54
  else 48), 0) (rectangle 4 50 Color.white))) (0, (if time_v <= 2 then 2
  else -5)) (overlay (text "→" 25 Color.white) (0, -10) (read_image "https://1.bp.blogspot.com/-6Gu4rNrfJ4I/WCqd6WBIeiI/AAAAAAAA_p8/H-QHyk_1SKU2v79WxJz4C1HKqdZd5SPoACLcB/s800/shortcut_keys_blank2.png" 50 50))]
  else []) (if stage_v = 3 && time_v >= 1 && time_v <= 5 then [(590, (if time_v <= 2 then 420
  else 425)); (600, 400)]
  else []) (let f (x8, (x10, (q, r))) =
  place_image (if x8 <> "" then overlay (overlay (text x8 12 Color.red) (0, -21) (overlay (text x10 12 Color.red) (0, -14) (text q 12 Color.red))) (0, -3) (read_image "https://4.bp.blogspot.com/-uOgL0v6fT0w/UZoVd4537DI/AAAAAAAATig/077Nr8Aimnk/s800/fukidashi03.png" 280 90)
  else text "" 12 Color.red) (if r = "" then (650, 330)
  else add_xy (getxy r) (90, -105)) (empty_scene width height)
  in f (if stage_v mod 2 = 0 && time_v >= 2 && time_v <= 15 then ("受け取った世界が{apple: y; bird: x}のとき、", ("背景画像の上に、りんごの画像を(50, y)に、", ("鳥の画像を(x, 50)に置いた風景を返す", "d")))
  else if stage_v = 1 && time_v >= 3 && time_v <= 12 then ("受け取った世界の", ("appleフィールドを", ("20増やした世界を返す", "t")))
  else if stage_v = 3 && time_v >= 8 && time_v <= 16 then ("受け取った世界のbirdフィールドを、", ("受け取ったキーが\"right\"の場合は20増やし、", ("\"left\"の場合は20減らした世界を返す", "k")))
  else if stage_v = 3 && time_v >= 3 && time_v <= 5 then ("キーボードの「→キー」が押された！", ("⤋", ("\"right\"！", "")))
  else ("", ("", ("", ""))))))))))))
let movebwc {stage = stage7_v; time = time7_v; bigbang = bigbang7_v; worldxy = worldxy7_v; draw = {x = x9_v; a = a9_v; canv = canv8_v; pic = pic9_v}; tick = v8; key = h; world = v17; screenworld = t} (b, (w, c)) v5 =
  if v5 then {stage = stage7_v; time = time7_v + 1; bigbang = add_xy bigbang7_v b; worldxy = add_xy worldxy7_v w; draw = {x = x9_v; a = a9_v; canv = add_xy canv8_v c; pic = pic9_v}; tick = v8; key = h; world = v17; screenworld = t}
  else {stage = stage7_v; time = time7_v + 1; bigbang = b; worldxy = w; draw = {x = x9_v; a = a9_v; canv = c; pic = pic9_v}; tick = v8; key = h; world = v17; screenworld = t}

(* bigbangを隣に移動 worldを渡す world、風景を返す 画面の隣に移動 風景を画面に描画 *)
let ontick1_1 w (x9, y9) =
  if x9 mod 2 = 0 && y9 = 0 || x9 = 1 && y9 = 1 || x9 = 3 && y9 = 6 then (let n = if x9 mod 2 = 0 then "d"
  else if x9 = 1 then "t"
  else "k"
  in movebwc w (add_xy (getxy n) (if x9 = 3 then (150, 0)
  else (130, 0)), (add_xy (getxy n) (if x9 = 3 then (100, 0)
  else (80, 0)), (-100, -100))) false)
  else if x9 mod 2 = 0 && y9 = 4 || x9 = 1 && y9 = 4 || x9 = 3 && y9 = 8 then (let j = if x9 mod 2 = 0 then (-20, 0)
  else if x9 = 1 then (-80, 30)
  else (-100, 25)
  in movebwc w ((0, 0), (j, (0, 0))) true)
  else if x9 mod 2 = 0 && y9 = 14 || x9 = 1 && y9 = 10 || x9 = 3 && y9 = 14 then (let c1 = if x9 mod 2 = 0 then (20, 0)
  else if x9 = 1 then (80, -30)
  else (100, -25)
  in movebwc w ((0, 0), (c1, (100, 0))) true)
  else if x9 mod 2 = 0 && y9 = 17 then movebwc w (add_xy (getxy "") (-200, 0), (add_xy (getxy "") (-250, 0), add_xy (getxy "") (-110, 0))) false
  else if x9 mod 2 = 0 && y9 = 18 then (let f {stage = stage2_v; time = time2_v; bigbang = bigbang2_v; worldxy = worldxy2_v; draw = draw_v; tick = tick_v; key = key_v; world = world_v; screenworld = screenworld_v} =
  {stage = stage2_v; time = time2_v; bigbang = bigbang2_v; worldxy = worldxy2_v; draw = draw_v; tick = tick_v; key = key_v; world = world_v; screenworld = world_v}
  in f (movebwc w ((0, 0), ((0, 0), (110, 0))) true))
  else movebwc w ((0, 0), ((0, 0), (0, 0))) true

(* 風景を描画 *)
let ontick1_2 {x = x5_v; a = a5_v; canv = canv4_v; pic = pic5_v} =
  {x = 0 - x5_v; a = 0; canv = add_xy (getxy "d") (0, 60); pic = pic5_v - 10}
let nextstage v23 v26 v25 =
  let f {stage = stage5_v; time = time5_v; bigbang = bigbang5_v; worldxy = worldxy5_v; draw = draw4_v; tick = v9; key = k; world = v18; screenworld = z} =
  {stage = (if v23 = stop then -2
  else v23 + 1); time = time5_v; bigbang = bigbang5_v; worldxy = worldxy5_v; draw = draw4_v; tick = v9; key = k; world = v26; screenworld = v25}
  in f initial_world

(* 起こす/寝かす   igbangを元の位置に戻す   worldを書き換える *)
let on_tick {stage = stage3_v; time = time3_v; bigbang = bigbang3_v; worldxy = worldxy3_v; draw = draw2_v; tick = v3; key = m; world = v19; screenworld = b1} =
  if ormap (filtertxt (stage3_v, time3_v)) txtlst then {stage = stage3_v; time = time3_v; bigbang = bigbang3_v; worldxy = worldxy3_v; draw = draw2_v; tick = v3; key = m; world = v19; screenworld = b1}
  else if stage3_v mod 2 = 0 && (time3_v = 1 || time3_v = 15) || stage3_v = 1 && (time3_v = 2 || time3_v = 12) || stage3_v = 3 && (time3_v = 7 || time3_v = 16) || stage3_v = -1 && (time3_v = 10 || time3_v = 12) then {stage = stage3_v; time = time3_v + 1; bigbang = bigbang3_v; worldxy = worldxy3_v; draw = (let f {x = x_v; a = a_v; canv = canv_v; pic = pic_v} =
  {x = x_v; a = 100 - a_v; canv = canv_v; pic = pic_v}
  in (if stage3_v mod 2 = 0 || stage3_v = -1 then f draw2_v
  else draw2_v)); tick = (if stage3_v = 1 || stage3_v = -1 then 100 - v3
  else v3); key = (if stage3_v = 3 || stage3_v = -1 then 100 - m
  else m); world = v19; screenworld = b1}
  else if stage3_v mod 2 = 0 && time3_v = 19 || stage3_v = 1 && time3_v = 13 || stage3_v = 3 && time3_v = 17 then (let f v4 v31 v30 v32 {stage = stage15_v; time = time15_v; bigbang = bigbang15_v; worldxy = worldxy15_v; draw = draw13_v; tick = tick11_v; key = key11_v; world = world9_v; screenworld = screenworld9_v} =
  {stage = v4; time = v31 + 1; bigbang = bigbang15_v; worldxy = worldxy15_v; draw = draw13_v; tick = tick11_v; key = key11_v; world = v30; screenworld = v32}
  in f stage3_v time3_v v19 b1 initial_world)
  else if stage3_v mod 2 = 0 && 5 <= time3_v && time3_v <= 13 then {stage = stage3_v; time = time3_v + 1; bigbang = bigbang3_v; worldxy = worldxy3_v; draw = ontick1_2 draw2_v; tick = v3; key = m; world = v19; screenworld = b1}
  else if stage3_v mod 2 = 0 && time3_v = 20 || stage3_v = 1 && time3_v = 15 || stage3_v = 3 && time3_v = 19 || stage3_v = -1 && time3_v = 14 then nextstage stage3_v v19 b1
  else if stage3_v = 1 && time3_v = 8 || stage3_v = 3 && time3_v = 12 then {stage = stage3_v; time = time3_v + 1; bigbang = bigbang3_v; worldxy = worldxy3_v; draw = draw2_v; tick = v3; key = m; world = add_xy v19 (if stage3_v = 1 then (20, 0)
  else (0, 20)); screenworld = b1}
  else ontick1_1 {stage = stage3_v; time = time3_v; bigbang = bigbang3_v; worldxy = worldxy3_v; draw = draw2_v; tick = v3; key = m; world = v19; screenworld = b1} (stage3_v, time3_v)
let nexttime {stage = stage4_v; time = time4_v; bigbang = bigbang4_v; worldxy = worldxy4_v; draw = draw3_v; tick = tick2_v; key = key2_v; world = v20; screenworld = d1} =
  {stage = stage4_v; time = time4_v + 1; bigbang = bigbang4_v; worldxy = worldxy4_v; draw = draw3_v; tick = tick2_v; key = key2_v; world = v20; screenworld = d1}
let isstop {stage = stage8_v; time = time8_v; bigbang = bigbang8_v; worldxy = worldxy8_v; draw = draw6_v; tick = tick4_v; key = key4_v; world = v21; screenworld = f1} =
  ormap (filtertxt (stage8_v, time8_v)) txtlst
let on_key v6 key =
  if key = "\\r" && isstop v6 then nexttime v6
  else v6
let on_mouse v12 mouse_x mouse_y event =
  let f {stage = stage6_v; time = time6_v; bigbang = bigbang6_v; worldxy = worldxy6_v; draw = draw5_v; tick = tick3_v; key = key3_v; world = world2_v; screenworld = screenworld2_v} =
  if event = "button_down" && stage6_v <= -2 then initial_world
  else if event = "button_down" && isstop v12 then nexttime v12
  else v12
  in f v12
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~on_mouse:on_mouse
  ~on_key_press:on_key
  ~rate:500
  ~onload:false;;
*/}.toString().split("\n").slice(1,-1).join("\n");


var pgm2 = function(){/*
open UniverseJs
open Color
open Image
open World
open Utility

type world_t = {
  apple : int;
  banana : int;
  melon : int;
  bird : int;
  score : int;
}
let initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}
let width = 800
let height = 500
let draw {apple = ay; banana = by; melon = my; bird = x; score = score} =
  place_image (read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png" 100 100) (200, ay) (place_image (read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png" 100 100) (400, by) (place_image (read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png" 150 144) (x, 428) (place_image (read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png" width height) (400, 250) (empty_scene width height))))))
let check fx fy bx =
  fy >= 455 && fy <= 465 && fx >= bx - 50 && fx <= bx + 50
let add_score {apple = ay; banana = by; melon = my; bird = x; score = score} =
  if check 200 ay x || check 400 by x || check 600 my x then score + 10
  else score
let on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =
  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = add_score {apple = ay; banana = by; melon = my; bird = x; score = score}}
let on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =
  {apple = ay; banana = by; melon = my; bird = (if key = "right" then x + 10
  else if key = "left" then x - 10
  else x); score = score}
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~on_key_press:on_key
  ~rate:500
  ~onload:false;;
*/}.toString().split("\n").slice(1,-1).join("\n");
