open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  shima1 : int * int;
  shima2 : int * int;
  shima3 : int * int;
}
let start1 = (50, 260)
let start2 = (50, 370)
let start3 = (50, 480)
let initial_world = {shima1 = start1; shima2 = start2; shima3 = start3}
let width = 720
let height = 540
let shima = read_image "img/shimauma.png" 100 100
let lion = read_image "img/lion.png" 200 200
let back = read_image "img/back.png" width height
let gameover = read_image "img/gameover.png" 500 500
let draw {shima1 = s1; shima2 = s2; shima3 = s3} =
  place_images [shima; shima; shima] [s1; s2; s3] (place_images [lion; lion] [(600, 440); (630, 300)] (place_image back (width / 2, height / 2) (empty_scene width height)))
let stop_when {shima1 = (x1, y1); shima2 = (x2, y2); shima3 = (x3, y3)} =
  x1 > 550 || x2 > 550 || x3 > 550
let on_tick {shima1 = (x1, y1); shima2 = (x2, y2); shima3 = (x3, y3)} =
  {shima1 = (x1 + 50, y1); shima2 = (x2 + 30, y2); shima3 = (x3 + 70, y3)}
let mouse_check (sx, sy) (x, y) start =
  if x >= sx - 20 && x <= sx + 20 && y >= sy - 20 && y <= sy + 20 then start
  else (sx, sy)
let on_mouse {shima1 = s1; shima2 = s2; shima3 = s3} mouse_x mouse_y event =
  {shima1 = ?;
   shima2 = mouse_check s2 (mouse_x, mouse_y) start2;
   shima3 = mouse_check s3 (mouse_x, mouse_y) start3}
let to_draw_last {shima1 = s1; shima2 = s2; shima3 = s3} =
  place_image (text "ゲームオーバー" 50 Color.red) (width / 2, 50) (place_image gameover (width / 2, height / 2) (place_image (rectangle 600 500 Color.white) (width / 2, height / 2) (place_images [shima; shima; shima] [s1; s2; s3] (place_images [lion; lion] [(600, 440); (630, 300)] (place_image back (width / 2, height / 2) (empty_scene width height))))))
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~on_mouse:on_mouse
  ~stop_when:stop_when
  ~to_draw_last:to_draw_last
