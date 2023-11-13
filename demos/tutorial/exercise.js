
var questions = [
    "(5-2)*3のブロックを作ってみましょう。",
    "widthという名前の値が800の変数と、heightという名前の値が500の変数を作りましょう。",
    "好きな大きさのゲーム画面を作ってみましょう。",
    "四角の位置や大きさ、色を変えてみましょう。<br>outlineにしてみましょう。",
    "横幅がwidth、縦幅がheightの空の風景に、半径が30、色がpinkの円を(400, 250)の位置に載せた風景を描画してみましょう。",
    "横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景を描画してみましょう。",
    "横幅がwidth、縦幅がheightの空の風景に、そらの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景の上に、鳥の画像を横幅150、縦幅144で(400, 428)の位置に載せ、その上に文字列\"0\"を大きさ50、色がblackで(400, 458)の位置に、さらに上に、りんご、バナナ、メロンの画像を横幅と縦幅が100でそれぞれ(200, 50)、（400, 50)、(600, 50)の位置に、載せた風景を描画してみましょう。<br><br><table style='text-align:center'><tr><th></th><th>画像</th><th>座標</th><th>大きさ</th><th>URL / 色</th></tr><tr><td>上<br>↑</td><td>りんご</td><td>(200, 50)</td><td>横100, 縦100</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\");'>URLをコピー</button></td></tr><tr><td></td><td>バナナ</td><td>(400, 50)</td><td>横100, 縦100</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\");'>URLをコピー</button></td></tr><tr><td></td><td>メロン</td><td>(600, 50)</td><td>横100, 縦100</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\");'>URLをコピー</button></td></tr><tr><td></td><td>文字列 \"0\"</td><td>(400, 458)</td><td>50</td><td>文字色：black</td></tr><tr><td></td><td>鳥</td><td>(400, 428)</td><td>横150, 縦144</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\");'>URLをコピー</button></td></tr><tr><td></td><td>そら</td><td>(400, 250)</td><td>横width, 縦height</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\");'>URLをコピー</button></td></tr><tr><td>↓<br>下</td><td>empty_ scene</td><td>-</td><td>横width, 縦height</td><td>-</td></tr></table>",
    "bing_bangブロックにつながっている初期値を色々な数に変えて実行してみましょう。",
    "rateを色々な数に変えてみましょう。",
    "on_tick関数で返す値をworld+2、rateを100にした時(1)と、on_tick関数で返す値をworld+20、rateを1000にした時(2)の動きの違いを比べてみましょう。",
    "fruit_t型のレコードを受け取ったら、appleフィールドを20、bananaフィールドを30増やしたレコードを返す関数addを作りましょう。",
    "type world_t = {<br>  apple : int; (* りんごのy座標 *)<br>  banana : int; (* バナナのy座標 *)<br>  melon : int; (* メロンのy座標 *)<br>  bird : int; (* 鳥のx座標 *)<br>  score : int; (* 点数 *)<br>}<br>のworld_tを定義してみましょう。",
    "let initial_world = {<br>  apple = 0;<br>  banana = 0;<br>  melon = 0;<br>  bird = 400;<br>  score = 0;<br>}<br>のinitial_worldを定義してみましょう。",
    "そらの背景の上にりんご、バナナ、メロン、鳥、点数を表示するdraw関数を作りましょう。点数は鳥の上に置くようにしましょう。<br>完成したら実行してみましょう。<br><br><table style='text-align:center'><tr><th></th><th>画像</th><th>座標</th><th>大きさ</th><th>URL / 色</th></tr><tr><td>上<br>↑</td><td>りんご</td><td>(200, ay)</td><td>横100, 縦100</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\");'>URLをコピー</button></td></tr><tr><td></td><td>バナナ</td><td>(400, by)</td><td>横100, 縦100</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\");'>URLをコピー</button></td></tr><tr><td></td><td>メロン</td><td>(600, my)</td><td>横100, 縦100</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\");'>URLをコピー</button></td></tr><tr><td></td><td>scoreの文字列</td><td>(x, 458)</td><td>50</td><td>文字色：black</td></tr><tr><td></td><td>鳥</td><td>(x, 428)</td><td>横150, 縦144</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\");'>URLをコピー</button></td></tr><tr><td></td><td>そら</td><td>(400, 250)</td><td>横width, 縦height</td><td><button onclick='navigator.clipboard.writeText(\"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\");'>URLをコピー</button></td></tr><tr><td>↓<br>下</td><td>empty_ scene</td><td>-</td><td>横width, 縦height</td><td>-</td></tr></table>",
    "りんご、バナナ、メロンの座標をそれぞれ10、15、20下に動かすon_tick関数を作りましょう。modを使って下にはみ出たら上から戻ってくるようにしましょう。<br>完成したら実行してみましょう。",
    "on_tickブロックとbig_bangブロックの間にon_keyブロックを挿入しましょう。<br>on_keyブロックの引数はworld_t型なので、on_key関数の1つ目のコネクタにworld_t型のパラメタをつなぎましょう。",
    "鳥がフルーツをキャッチできているかを判定する関数checkを作りましょう。checkは引数が3つで、フルーツのx座標とy座標と鳥のx座標を受け取ったら、「(フルーツのy座標) ≧ 455 かつ (フルーツのy座標) ≦ 465 かつ (フルーツのx座標) ≧ (鳥のx座標)-50 かつ (フルーツのx座標) ≧ (鳥のx座標)+50」が成り立つかどうかを判定するようにしましょう。",
    "on_tiick関数で返すscoreを、上で作ったcheckを使って各フルーツをキャッチできているかを調べて、キャッチできている場合は10点足した点数になるように変更しましょう。",
    "横幅がwidth、縦幅がheightの空の風景に、文字列\"hello world\"を大きさが20、色がgreenで(400, 250)の位置に載せた風景を描画してみましょう。",
    "鳥がフルーツをキャッチできていたらスコアに10を足す関数add_scoreを作りましょう。<br>フルーツのx座標はりんごが200、バナナが400、メロンが600です。"
];

var initcodes = [,,,
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:500",
		 "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:500",
		 "type fruit_t = {\n  apple : int;\n  banana : int;\n}\nlet add ? = \n  ?",,
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick ? =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",,
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet check fx fy bx =\n fy >= 455 && fy <= 465 && fx >= bx - 50 && fx <= bx + 50\nlet add_score {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  if check 200 ay x || check 400 by x || check 600 my x then score + 10\n  else score\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = ?}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  {apple = ay; banana = by; melon = my; bird = (if key = \"right\" then x + 10\n  else if key = \"left\" then x - 10\n  else x); score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key\n  ~rate:500",
		 "let width = 800\nlet height = 500\nlet draw world =\n  ?\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
		 "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet check fx fy bx =\n fy >= 455 && fy <= 465 && fx >= bx - 50 && fx <= bx + 50\nlet add_score ? =\n  ?"
		];

var answers = [
    "let dummy = (5 - 2) * 3",
    "let width = 800\nlet height = 500",
    "let width = 600\nlet height = 1000\n;; big_bang 0\n  ~width:width\n  ~height:height",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (rectangle 50 100 ~fill:false Color.yellow) (500, 300) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (circle 30 Color.pink) (400, 250) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, 50) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, 50) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, 50) (place_image (text \"0\" 50 Color.black) (400, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (400, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\n;; big_bang 300\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 10\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:200",
    ["let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 2\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:100",
     "let width = 800\nlet height = 500\nlet draw world =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (100, world) (empty_scene width height)\nlet on_tick world =\n  world + 20\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~rate:1000"],
    "type fruit_t = {\n  apple : int;\n  banana : int;\n}\nlet add {apple = ay; banana = by} =\n  {apple = ay + 20; banana = by + 30}",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = score}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  ?\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick",
    "let check fx fy bx =\n fy >= 455 && fy <= 465 && fx >= bx - 50 && fx <= bx + 50",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet initial_world = {apple = 0; banana = 0; melon = 0; bird = 400; score = 0}\nlet width = 800\nlet height = 500\nlet draw {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png\" 100 100) (200, ay) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png\" 100 100) (400, by) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.png\" 100 100) (600, my) (place_image (text (string_of_int score) 50 Color.black) (x, 458) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.png\" 150 144) (x, 428) (place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" width height) (400, 250) (empty_scene width height))))))\nlet check fx fy bx =\n fy >= 455 && fy <= 465 && fx >= bx - 50 && fx <= bx + 50\nlet add_score {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  if check 200 ay x || check 400 by x || check 600 my x then score + 10\n  else score\nlet on_tick {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  {apple = (ay + 10) mod height; banana = (by + 15) mod height; melon = (my + 20) mod height; bird = x; score = add_score {apple = ay; banana = by; melon = my; bird = x; score = score}}\nlet on_key {apple = ay; banana = by; melon = my; bird = x; score = score} key =\n  {apple = ay; banana = by; melon = my; bird = (if key = \"right\" then x + 10\n  else if key = \"left\" then x - 10\n  else x); score = score}\n;; big_bang initial_world\n  ~width:width\n  ~height:height\n  ~to_draw:draw\n  ~on_tick:on_tick\n  ~on_key_press:on_key\n  ~rate:500",
    "let width = 800\nlet height = 500\nlet draw world =\n  place_image (text \"hello world\" 20 Color.green) (400, 250) (empty_scene width height)\n;; big_bang 0\n  ~width:width\n  ~height:height\n  ~to_draw:draw",
    "type world_t = {\n  apple : int;\n  banana : int;\n  melon : int;\n  bird : int;\n  score : int;\n}\nlet check fx fy bx =\n fy >= 455 && fy <= 465 && fx >= bx - 50 && fx <= bx + 50\nlet add_score {apple = ay; banana = by; melon = my; bird = x; score = score} =\n  if check 200 ay x || check 400 by x || check 600 my x then score + 10\n  else score"
];

var query = location.search;
var value = query.split("=");
var isAnswer = decodeURIComponent(value[1]).startsWith("r");
var num;
if (isAnswer)　{
    num = decodeURIComponent(value[1]).slice(1);
    Typed.server_log('t_log', 'solution r' + num);
}
else {
    num = decodeURIComponent(value[1]);
    Typed.server_log('t_log', 'start r' + num);
}

question = document.createElement("div");
question.style.cssText += "overflow-wrap:break-word; word-wrap:break-word";
question.innerHTML = "<br><br>"+questions[num]+"<br>";
document.querySelector("div[class='blockToCode']").appendChild(question);

if (!isAnswer) {
    answerbtn = document.createElement("button");
    answerbtn.textContent = "解答例を見る";
    answerbtn.setAttribute("class", "btn");
    answerbtn.setAttribute("onclick", "window.open('dev_2_2.html' + '?num=r' + num, 'newwindow', 'width=window.innerWidth, height=innerHeight')");
    if(num == 9) {
	//answer.setAttribute("onclick", "window.open('dev_2_2.html' + '?num=r' + num + '=' + sl.value, 'newwindow', 'width=window.innerWidth, height=innerHeight')");
    answerbtn.setAttribute("onclick", "window.open('dev_2_2.html' + '?num=r' + num + '=0', 'newwindow', 'width=window.innerWidth, height=innerHeight');window.open('dev_2_2.html' + '?num=r' + num + '=1', 'newwindow2', 'width=window.innerWidth, height=innerHeight')");
    }
    document.querySelector("div[class='blockToCode']").appendChild(answerbtn);
    //
    if (num == 9) {
	var sl = document.createElement("select");
	sl.id = "qnum";
	for (var i=0; i<2; i++) {
	    var op = document.createElement("option");
	    op.value = i;
	    op.textContent = "(" + (i+1) + ")";
	    sl.appendChild(op);
	}
	document.querySelector("div[class='blockToCode']").appendChild(sl);
    }
    //
    div = document.createElement("div");
    div.innerHTML = "<br><br>";
    document.querySelector("div[class='blockToCode']").appendChild(div);
    back = document.createElement("button");
    back.textContent = "チュートリアルページに戻る";
    back.setAttribute("class", "btn");
    back.setAttribute("onclick",
      "if(confirm('ページを移動するとブロックが消えます。移動しますか？')) {\
         Typed.server_log('t_log', 'end r' + num, function () {\
           window.location.href = 'tutorial.html#'+num;\
         });\
       }");
    document.querySelector("div[class='blockToCode']").appendChild(back);
}

var code = null;

if (isAnswer) {
    code = answers[num];
    if (num == 9) {
	code = answers[num][decodeURIComponent(value[2])];
    }
}
else {
    code = initcodes[num];
}

if (code) {
    openModal();
    setTimeout(function() {
	BlockOfOCamlUtils.codeToBlock(code);
	closeModal();
    }, 100);
}



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

var idlst = [];
var idlst2 = [];
var errorlst = [];
var error;
var errormsg;

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
	}////
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


var test = document.createElement("button");
test.textContent =  "答え合わせ"//"test";
test.setAttribute("class", "btn");
test.id = "test";
test.setAttribute("onclick",
		     //"console.log(check(answer))");
		     "if(qnum=document.getElementById('qnum')) {console.log(anslst[qmaplst[num]][qnum.value]);console.log(check(anslst[qmaplst[num]][qnum.value]));} else {console.log('!');console.log(check(anslst[qmaplst[num]]));}");
answerbtn.before(test);


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
    [[//11. "fruit_t型のレコードを受け取ったら、appleフィールドを20、bananaフィールドを30増やしたレコードを返す関数addを作りましょう。"
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
            "VAR": "add"
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
                                    "INT": "20"
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
                                    "INT": "30"
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
	//"\nlet a = check 200 460 250\nlet b = check 400 460 350\nlet c = not (check 500 454 500)\nlet d = not (check 100 466 120)\nlet e = check 300 465 330\nlet f = check 600 455 580\nlet g = not (check 1000 458 949)\nlet h = not (check 800 462 851)\n;;"
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
    [//18. on_tiick関数で返すscoreを、上で作ったcheckを使って各フルーツをキャッチできているかを調べて、キャッチできている場合は10点足した点数になるように変更しましょう。フルーツのx座標はりんごが200、バナナが400、メロンが600です。
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
	    "好きな大きさのゲーム画面を作ってみましょう。",
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
	    "鳥がフルーツをキャッチできていたらスコアに10を足す関数add_scoreを作りましょう。"
	   ];

var qmaplst = [0, 1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 6, 19];
//var question = document.createElement("div");
//question.innerHTML = qlst[qmaplst[num]]+"<br><br><br><br><br><br><br><br><br>";
//document.querySelector("div[class='blockToCode']").appendChild(question);

var div2 = document.createElement("div");
div2.innerHTML = "<br><br>";
document.querySelector("div[class='blockToCode']").appendChild(div2);

var helplst = ["変数を使いたい", "関数の引数を増やしたい", "引数ブロックを出したい", "引数を使いたい", "関数を使いたい"];
var helpmenu = document.createElement("div");
for (var i=0; i<helplst.length; i++) {
    var help = document.createElement("div");
    help.textContent = helplst[i];
    help.id = "help" + i;
    help.style.backgroundColor = "#efefef";
    if (i)
	help.style.borderTop = "1px solid #dddddd";
    help.onclick = function(e){helpstart(e);};
    help.addEventListener("mouseover", function(e){e.target.style.backgroundColor="#b0c4de";});help.addEventListener("mouseleave", function(e){e.target.style.backgroundColor="#efefef";});
    helpmenu.appendChild(help);
}
var tail = document.createElement("div");

var helpbtn = document.createElement("button");
helpbtn.textContent = "?"
helpbtn.id = "help";
helpbtn.style = "border-radius: 50%; border: solid; font-weight: bold; width: 25px; height: 25px; font-size: 17px; line-height: 0.6; padding: 3px; position: relative";
helpbtn.onclick = function(e){if(e.target.id == "help")if(helpmenu.style.display=="block"){helpmenu.style.display="none"; tail.style.display= "none";} else {helpmenu.style.display = "block"; tail.style.display = "block";}};
document.querySelector("div[class='blockToCode']").appendChild(helpbtn);

helpmenu.style = "display: none; position: absolute; bottom: 30px; left: -10px; right: -268px; line-height: 1.2";
tail.style = "display: none; position: absolute; bottom: 15px; border-top: 10px solid #efefef; border-bottom: 5px solid transparent; border-left: 5px solid transparent; border-right: 5px solid transparent;";
helpbtn.appendChild(helpmenu);
helpbtn.appendChild(tail);

function helpstart(e) {
    helpmenu.style.display = "none";
    tail.style.display = "none";
    e.target.style.backgroundColor = "#efefef";
    console.log(tail.style.display);
    window.open('dev_2.html?num=h' + e.target.id.charAt(4), 'newwindow', 'width=window.innerWidth, height=window.innerHeight');
}

var keys = [
    //[{text: "", url: ["dev_2.html?num="], btntxt: [""]}]
    //0.(5-2)*3のブロックを作ってみましょう。
    [{text: "四則演算メニューから演算ブロックを出そう！"},
     {text: "演算ブロックを入れ子にしよう！"},
     {text: "四則演算メニューから数字ブロックを出そう！"},
     {text: "数字や演算の値を変更しよう！", url: ["dev_2.html?num=0"], btntxt: ["足し算"]},],
    //1.widthという名前の値が800の変数と、heightという名前の値が500の変数を作りましょう。
    [{text: "ゲーム用の定義メニューからwidthブロックとheightブロックを出そう！"},
     {text: "数字ブロックを使って変数の値を設定しよう！", url: ["dev_2.html?num=1"], btntxt: ["変数"]}],
    //2."好きな大きさのゲーム画面を作ってみましょう。"
    [{text: "width, heightを定義しよう！", url: ["dev_2.html?num=1"], btntxt: ["変数"]},
     {text: "big_bangブロックに数字ブロックをつなげよう！", url: ["dev_2.html?num=14"], btntxt: ["big_bang"]},
     {text: "width, heightをbig_bangに登録しよう！", url: ["dev_2.html?num=3"], btntxt: ["width,heightを登録"]},
     {text: "widthとheightを色々な値に変更して実行してみよう！"}],
    //3."四角の位置や大きさ、色を変えてみましょう。outlineにしてみましょう。",
    [{text: "place_imageにつながっている座標を変更してみよう！"},
     {text: "rectangle_blockにつながっている数字を変更してみよう！"},
     {text: "rectangleブロックの「rectangle」とかいてある部分をクリックしてrectangle_outlineに変えてみよう！"}],
    //4."横幅がwidth、縦幅がheightの空の風景に、半径が30、色がpinkの円を(400, 250)の位置に載せた風景を描画してみましょう。"
    [{text: "drawブロックにplace_imageブロックをつなげよう！"},
     {text: "place_imageブロックにcirleブロックと座標ブロック、empty_sceneブロックをつなげよう！", url: ["dev_2.html?num=16"], btntxt: ["画像の描画"]},
     {text: "円の大きさや色、座標を指定のものに変更しよう！"}],
    //5."横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景を描画してみましょう。"
    [{text: "drawブロックにplace_imageブロックをつなげよう！"},
     {text: "place_imageブロックにread_imageブロックと座標ブロック、empty_sceneブロックをつなげよう！", url: ["dev_2.html?num=16"], btntxt: ["画像の描画"]},
     {text: "画像の大きさや座標を指定のものに変更しよう！"}],
    //6."横幅がwidth、縦幅がheightの空の風景に、文字列\"hello world\"を大きさが20、色がgreenで(400, 250)の位置に載せた風景を描画してみましょう。"
    [{text: "drawブロックにplace_imageブロックをつなげよう！"},
     {text: "place_imageブロックにtextブロックと座標ブロック、empty_sceneブロックをつなげよう！", url: ["dev_2.html?num=16"], btntxt: ["画像の描画"]},
     {text: "文字列や大きさ、色、座標を指定のものに変更しよう！"}],
    //7."横幅がwidth、縦幅がheightの空の風景に、http://pllab.is.ocha.ac.jp/~asai/picture/images/background.pngの画像を横幅width、縦幅heightで(400, 250)の位置に載せた風景の上に、さらに、http://pllab.is.ocha.ac.jp/~asai/picture/images/apple.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/banana.png、http://pllab.is.ocha.ac.jp/~asai/picture/images/melon.pngを横幅と縦幅が100でそれぞれ(200, 50)、（400, 50)、(600, 50)の位置に、http://pllab.is.ocha.ac.jp/~asai/picture/images/bird.pngを横幅150、縦幅144で(400, 428)の位置に、文字列\"0\"を大きさ50、色がblackで(400, 458)の位置に載せた風景を描画してみましょう。"
    [{text: "drawブロックにplace_imageブロックをつなごう！"},
     {text: "place_imageブロックを入れ子にしよう！"},
     {text: "上から順にりんご、バナナ、メロン、文字列 \"0\"、鳥、そらの画像を風景の上に重ねよう！", url: ["dev_2.html?num=34"], btntxt: ["複数の画像を重ねる"]}],
    //8."bing_bangブロックにつながっている初期値を色々な数に変えて実行してみましょう。"
    [{text: "big_bangブロックにつながっている数字ブロックの値を変更しよう！"}],
    //9."rateを色々な数に変えてみましょう。"
    [{text: "big_bangブロックのrateコネクタにつながっている数字ブロックの値を変更しよう！"}],
    //10."on_tick関数で返す値をworld+2、rateを100にした時(1)と、on_tick関数で返す値をworld+20、rateを1000にした時(2)の動きの違いを比べてみましょう。"
    [{text: "on_tick関数の返す値を変更しよう！"},
     {text: "rateの値を変更しよう！"},
     {text: "実行結果を見比べてみよう！"}],
    //11."fruit_t型のレコードを受け取ったら、appleフィールドを20、bananaフィールドを30増やしたレコードを返す関数addを作りましょう。"
    [{text: "add関数の引数をレコードにしよう！"},
     {text: "返す値をfruit_t型のレコードにしよう！"},
     {text: "appleフィールドを20、bananaフィールドを30足したレコードを返すようにしよう！", url: ["dev_2.html?num=13"], btntxt: ["レコードを受け取る関数"]}],
    //12."type world_t = {<br>  apple : int; (* りんごのy座標 *)<br>  banana : int; (* バナナのy座標 *)<br>  melon : int; (* メロンのy座標 *)<br>  bird : int; (* 鳥のx座標 *)<br>  score : int; (* 点数 *)<br>}<br>のworld_tを定義してみましょう。"
    [{text: "座標と世界の定義メニューからレコードブロックを出そう！"},
     {text: "フィールドを5つに増やそう！"},
     {text: "フィールドの型を指定しよう！", url: ["dev_2.html?num=12"], btntxt: ["レコード定義"]}],
    //13."let initial_world = {<br>  apple = 0;<br>  banana = 0;<br>  melon = 0;<br>  bird = 400;<br>  score = 0;<br>}<br>のinitial_worldを定義してみましょう。"
    [{text: "ゲーム用の定義メニューからinitial_worldブロックを出そう！"},
     {text: "initial_worldをworld_t型のレコードにしよう！"},
     {text: "各フィールドの値を指定しよう！", url: ["dev_2.html?num=24"], btntxt: ["レコードの使用"]}],
    //14."そらの背景の上にりんご、バナナ、メロン、鳥、点数を表示するdraw関数を作りましょう。点数は鳥の上に置くようにしましょう。<br>完成したら実行してみましょう。"
    [{text: "place_imageを5つつなげて、5つの画像を重ねよう！"},
     {text: "各place_imageブロックにread_imageブロックやtextブロックをつなげて、上からりんご、バナナ、メロン、点数、鳥、そらの画像になるように画像のURLや大きさを指定しよう！", url: ["dev_2.html?num=26"], btntxt: ["得点の表示"]},
     {text: "それぞれの画像の座標を指定しよう！", url: ["dev_2.html?num=25"], btntxt: ["レコードを使うdraw関数"]}],
    //15."りんご、バナナ、メロンの座標をそれぞれ10、15、20下に動かすon_tick関数を作りましょう。modを使って下にはみ出たら上から戻ってくるようにしましょう。完成したら実行してみましょう。"
    [{text: "on_tickブロックにworld_t型の引数ブロックをつなげよう！"},
     {text: "world_t型のレコードを返すようにしよう！"},
     {text: "bird、scoreフィールドは受け取った値をそのまま返し、apple、banana、melonフィールドは値を増やそう！", url: ["dev_2.html?num=27"], btntxt: ["レコードを使うon_tick関数"]},
     {text: "apple、banana、melonフィールドはmodを使って、下にはみ出たら上から戻るようにしよう！", url: ["dev_2.html?num=23"], btntxt: ["mod"]}],
    //16."on_tickブロックとbig_bangブロックの間にon_keyブロックを挿入しましょう。on_keyブロックの引数はworld_t型なので、on_key関数の1つ目のコネクタにworld_t型のパラメタをつなぎましょう。"
    [{text: "ゲーム用の定義メニューからon_keyブロックを出そう！"},
     {text: "on_tickブロックの下にon_keyブロックをつなげよう！"},
     {text: "onkey_ブロックの一番上のコネクタにworld_t型の引数ブロックをつなげよう", url: ["dev_2.html?num=13"], btntxt: ["レコードを受け取る関数"]}],
    //17."鳥がフルーツをキャッチできているかを判定する関数checkを作りましょう。checkは引数が3つで、フルーツのx座標とy座標と鳥のx座標を受け取ったら、フルーツのy座標が455以上かつ465以下で、かつフルーツのx座標から鳥のx座標を引いた数が-50以上かつ50以下の場合は10を返し、そうでない場合は0を返す関数にしましょう。"
    [{text: "関数ブロックを出し、関数名をcheckにしよう！", url: ["dev_2.html?num=2"], btntxt: ["関数"]},
     {text: "引数を3つにしよう！", url: ["dev_2.html?num=h1"], btntxt: ["引数を増やす"]},
     {text: "かつブロックを出し、4つの式のかつをとれるようにしよう！", url: ["dev_2.html?num="], btntxt: ["複数のかつ、または"]},
     {text: "=ブロックを使い、フルーツの座標を(fx, fy)、鳥のx座標をbxとしたときに、fy ≧ 455 かつ fy ≦ 465 かつ fx ≧ bx-50 かつ fx ≦ bx+50を返すようにしよう！", url: ["dev_2.html?num=32"], btntxt: ["かつ、または"]},],
    //18."on_tiick関数で返すscoreを、上で作ったcheckを使って各フルーツをキャッチできているかを調べて、キャッチできている場合は10点足した点数になるように変更しましょう。フルーツのx座標はりんごが200、バナナが400、メロンが600です。"
    [{text: "on_tick関数の返すレコードのscoreフィールドでadd_score関数を使おう！", url: ["dev_2.html?num=h4"], btntxt: ["関数の使用"]},
     {text: "add_scoreに渡す引数をworld_t型のレコードにしよう！"}],
    //19."鳥がフルーツをキャッチできていたらスコアに10を足す関数add_scoreを作りましょう。"
    [{text: "add_scoreの引数をレコードにしよう！", url: ["dev_2.html?num=13"], btntxt: ["レコードを受け取る関数"]},
     {text: "ifブロックを使って場合分けしよう！"},
     {text: "条件部分では、またはブロックを使おう！"},
     {text: "各フルーツをキャッチできているか調べよう！check関数にフルーツのx座標、y座標、鳥のy座標をわたすとキャッチできているか判定できるよ！"},
     {text: "条件が成り立っていたら、scoreに10を足した数を、成り立っていなかったらscoreをそのまま返そう！", url: ["dev_2.html?num=33"], btntxt: ["キャッチの判定"]}]
];

var keybtn = document.createElement("button");
//keybtn.textContent = "!";
keybtn.id = "key";
keybtn.style = "border-radius: 50%; border: solid; font-weight: bold; width: 25px; height: 25px; padding: 0.5px; position: relative; top: 2.8px; margin-left: 10px";
var keyimg = document.createElement("img");
keyimg.src = "01028.png";
keyimg.style = "height: 100%; left: -30px";
keybtn.appendChild(keyimg);
//keybtn.innerHTML = "img src='01028.png' width='20px'>";
keybtn.onclick = function(e){key.style.display = "block";};
document.querySelector("div[class='blockToCode']").appendChild(keybtn);

var key = document.createElement("div");
key.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: 100000; background: rgba(0,0,0,.2); display: none";
document.querySelector("body").appendChild(key);
var keymain = document.createElement("div");
keymain.style.cssText = "position: fixed; top: 25%; right: 10px; width: 280px;background: white; text-align: center;";
key.appendChild(keymain);
var keytext = document.createElement("div");
keytext.style.cssText = "display: inline-block; text-align: left; margin: 15px 10px 5px 10px;";
var keystr = "<table>";
for (var i=0, kys; kys = keys[qmaplst[num]][i]; i++) {
    var str = "<tr><td valign='top'><big>&#1010" + (i+2) + "</big> </td><td>" + kys.text + "<br>";
    for (var j=0; kys.url && kys.url[j]; j++) {
	str += "<button onclick=window.open('" + kys.url[j] + "','newwindow','width=window.innerWidth,height=window.innerHeight')>" + kys.btntxt[j] + "</button><br>";
    }
    str += "</td></tr>"
    keystr += str;
}
keytext.innerHTML = keystr + "</table>";
keymain.appendChild(keytext);
var keyspan = document.createElement("span");
keyspan.textContent = "×";
keyspan.style.cssText = "right: 10px; top: 3px; position: absolute; cursor: pointer";
keyspan.setAttribute("onclick",
		     "key.style.display='none';");
keymain.appendChild(keyspan);

var h = [[//0. 変数を使いたい
    {
        "text": [
            [
                {
                    "intro": "変数を使うには、使いたい変数の変数名の部分をドラッグします。bをa+2にしてみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "A"
        ]
    }
],[//1. 関数の引数を増やしたい
    {
        "text": [
            [
                {
                    "intro": "関数の引数を増やすには、歯車ボタンを使います。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0
        ],
        "open": false,
        "newvalue": "2",
        "oldvalue": "1",
        "add": true
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "mutator": [
            0,
            false
        ]
    }
],[//2. 引数ブロックを出したい
    {
        "text": [
            [
                {
                    "intro": "引数ブロックはパターンボタンを押すと出てきます。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            1
        ],
        "category": 10,
        "block": 0,
        "id": 1,
        "target": [
            0,
            "ARG0"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "workbench": [
            0,
            -1
        ]
    }
],[//3. 引数を使いたい
    {
        "text": [
            [
                {
                    "intro": "引数を使うには、使いたい引数ブロックの引数名の部分をドラッグします。関数fをx+1にしてみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "A"
        ]
    }
],[//4. 関数を使いたい
    {
        "text": [
            [
                {
                    "intro": "関数を使うには、使いたい関数ブロックの関数名の部分をドラッグします。aをf(0)にしてみましょう。"
                }
            ]
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [
                {
                    "intro": "fのブロックには穴が空いています。ここには引数が入ります。f(0)を計算する場合、0を入れます。"
                }
            ],
            []
        ],
        "variable": 0,
        "category": 10,
        "block": 0,
        "id": 2,
        "target": [
            1,
            "EXP1"
        ]
    },
    {
        "text": [
            [],
            [],
            [],
            [],
            []
        ],
        "category": 0,
        "block": 0,
        "id": 3,
        "target": [
            2,
            "PARAM0"
        ]
    }
]
]



var hh = [
    //0. 変数を使いたい
    "let a = 1\nlet b = ? + 2",
    //1. 関数の引数を増やしたい
    "let f x =\n  x + 1",
    //2. 引数ブロックを出したい
    "let f ? =  ?",
    //3. 引数を使いたい
    "let f x =  ? + 1",
    //4. 関数を使いたい
    "let f x =\n  x + 1\nlet a = ?"
]



