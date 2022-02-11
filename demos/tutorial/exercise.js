
var questions = [
    "(5-2)*3のブロックを作ってみましょう。",
    "widthという名前の値が800の変数と、heightという名前の値が500の変数を作りましょう。",
    "ゲーム画面の大きさを好きな大きさにしてみましょう。",
    "四角の位置や大きさ、色を変えてみましょう。<br>outlineにしてみましょう。",
    "横幅がwidth、縦幅がheightの空の風景に、半径が30、色がpinkの円を(400, 250)の位置に載せた風景を描画してみましょう。",
    "横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景を描画してみましょう。",
    '横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景の上に、さらに、http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.pngを横幅と縦幅が100でそれぞれ(200, 50)、（400, 50)、(600, 50)の位置に、http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.pngを横幅150、縦幅144で(400, 428)の位置に、文字列"0"を大きさ50、色がblackで(400, 458)の位置に載せた風景を描画してみましょう。',
    "bing_bangブロックにつながっている初期値を色々な数に変えて実行してみましょう。",
    "rateを色々な数に変えてみましょう。",
    "on_tick関数で返す値をworld+5、rateを250にした時と、on_tick関数で返す値をworld+20、rateを1000にした時の動きの違いを比べてみましょう。",
    "on_tick関数で増やす座標の大きさを変えてみましょう。",
    "type world_t = {<br>  apple : int; (* りんごのy座標 *)<br>  banana : int; (* バナナのy座標 *)<br>  melon : int; (* メロンのy座標 *)<br>  bird : int; (* 鳥のx座標 *)<br>  score : int; (* 点数 *)<br>}<br>のworld_tを定義してみましょう。",
    "let initial_world = {<br>  apple = 0;<br>  banana = 0;<br>  melon = 0;<br>  bird = 400;<br>  score = 0;<br>}<br>のinitial_worldを定義してみましょう。",
    "そらの背景の上にりんご、バナナ、メロン、鳥、点数を表示するdraw関数を作りましょう。点数は鳥の上に置くようにしましょう。<br>完成したら実行してみましょう。<br>画像のURL：<br>http://pllab.is.ocha.ac.jp/~asai/picture/images/〇〇.png<br>(apple, banana, melon, bird, background)",
    "りんご、バナナ、メロンの座標をそれぞれ10、15、20下に動かすon_tick関数を作りましょう。modを使って下にはみ出たら上から戻ってくるようにしましょう。<br>完成したら実行してみましょう。",
    "on_tickブロックとbig_bangブロックの間にon_keyブロックを挿入しましょう。<br>on_keyブロックの引数はworld_t型なので、on_key関数の1つ目のコネクタにworld_t型のパラメタをつなぎましょう。",
    "鳥がフルーツをキャッチできているかを判定する関数checkを作りましょう。checkは引数が3つで、フルーツのx座標とy座標と鳥のx座標を受け取ったら、フルーツのy座標が455以上かつ465以下で、かつフルーツのx座標から鳥のx座標を引いた数が-50以上かつ50以下の場合は10を返し、そうでない場合は0を返す関数にしましょう。",
    "on_tiick関数で返すscoreを、上で作ったcheckを使って各フルーツをキャッチできているかを調べて、キャッチできている場合は10点足した点数になるように変更しましょう。<br>フルーツのx座標はりんごが200、バナナが400、メロンが600です。",
    "横幅がwidth、縦幅がheightの空の風景に、文字列\"hello world\"を大きさが20、色がgreenで(400, 250)の位置に載せた風景を描画してみましょう。"
];

var initcodes = [,,,
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:500",
		 "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:500",
		 "type fruit_t = {\n  apple : int;\n  banana : int;\n}\nlet add10 {apple = ay; banana = by} =\n  {apple = ay + 10; banana = by + 10}",,
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (empty_scene width height))\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick ? =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",,
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet check fx fy bx =\n  if 455 <= fy && fy <= 465 && -50 <= fx - bx && fx - bx <= 50 then 10\n  else 0\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = ?}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  {apple = ay; banana = by; melon = my; bird = (if key = \"right\" then x + 10\n  else if key = \"left\" then x - 10\n  else x); score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key\n  ~rate:500",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw"
		];

var answers = [
    "let dummy = (5 - 2) * 3",
    "let width = 800\nlet height = 500",
    "let width = 600\nlet height = 1000\n;; big_bang 0\n  ~width:width\n  ~height:height",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (rectangle 50 100 ~fill:false Color.yellow) (500, 300) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (circle 30 Color.pink) (400, 250) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, 50) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (400, 50) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, 50) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (400, 428) (place_image (text \"0\" 50 Color.black) (400, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\n;; big_bang 300\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:200",
    ["let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 5\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:250",
     "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 20\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:1000"],
    "type fruit_t = {\n  apple : int;\n  banana : int;\n}\nlet add10 {apple = ay; banana = by} =\n  {apple = ay + 30; banana = by + 15}",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",
    "let check fx fy bx =\n  if 455 <= fy && fy <= 465 && -50 <= fx - bx && fx - bx <= 50 then 10\n  else 0",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet check fx fy bx =\n  if 455 <= fy && fy <= 465 && -50 <= fx - bx && fx - bx <= 50 then 10\n  else 0\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score + check 200 ay x + check 400 by x + check 600 my x}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  {apple = ay; banana = by; melon = my; bird = (if key = \"right\" then x + 10\n  else if key = \"left\" then x - 10\n  else x); score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key\n  ~rate:500",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (text \"hello world\" 20 Color.green) (400, 250) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw"
];

var query = location.search;
var value = query.split("=");
var isAnswer = decodeURIComponent(value[1]).startsWith("r");
if (isAnswer)
    i = decodeURIComponent(value[1]).slice(1);
else
    i = decodeURIComponent(value[1]);
console.log(i);

question = document.createElement("div");
question.innerHTML = "<br><br>"+questions[i]+"<br>";
document.querySelector("div[class='blockToCode']").appendChild(question);

if (!isAnswer) {
    answer = document.createElement("button");
    answer.textContent = "解答例を見る";
    answer.setAttribute("class", "btn");
    answer.setAttribute("onclick", "window.open('dev_2_2.html' + '?num=r' + i, 'newwindow', 'width=window.innerWidth, height=innerHeight')");
    if(i == 9) {
    answer.setAttribute("onclick", "window.open('dev_2_2.html' + '?num=r' + i + '=0', 'newwindow', 'width=window.innerWidth, height=innerHeight');window.open('dev_2_2.html' + '?num=r' + i + '=1', 'newwindow2', 'width=window.innerWidth, height=innerHeight')");
    }
    document.querySelector("div[class='blockToCode']").appendChild(answer);
}

else {
    div = document.createElement("div");
    div.innerHTML = "<br><br>";
    document.querySelector("div[class='blockToCode']").appendChild(div);
    back = document.createElement("button");
    back.textContent = "チュートリアルページに戻る";
    back.setAttribute("class", "btn");
    back.setAttribute("onclick", "window.location.href = 'tutorial.html'");
    document.querySelector("div[class='blockToCode']").appendChild(back);
}

var code = null;

if (isAnswer) {
    code = answers[i];
    if (i == 9) {
	code = answers[i][decodeURIComponent(value[2])];
    }
}
else {
    code = initcodes[i];
}

if (code) {
    openModal();
    setTimeout(function() {
	BlockOfOCamlUtils.codeToBlock(code);
	closeModal();
    }, 100);
}

