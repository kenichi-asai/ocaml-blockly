open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  zahyo1 : int * int;
  zahyo2 : int * int;
}
let width = 1200
let height = 600
let zahyou_naoshi (x, y) =
  (x + width / 2, (height - y) - height / 2)
let initial_world = {zahyo1 = zahyou_naoshi (0, 0); zahyo2 = zahyou_naoshi (0, 0)}
let draw {zahyo1 = (x1, y1); zahyo2 = (x2, y2)} =
  place_image (circle 5 Color.red) (x1, y1) (place_image (circle 5 Color.red) (x2, y2) (place_image (read_image "https://tsukatte.com/wp-content/uploads/2019/01/apple.png" 50 50) (zahyou_naoshi (50, 150)) (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (empty_scene width height)))))
let x_zoukaryo = 2
let y_zokaryou = 6
let f2 (x5, y5) (x6, y6) =
  (x5 - x6, y5 + y6)
let f (x3, y3) (x4, y4) =
  (x3 + x4, y3 - y4)
let on_tick {zahyo1 = (x1, y1); zahyo2 = (x2, y2)} =
  {zahyo1 = f (x1, y1) (x_zoukaryo, y_zokaryou); zahyo2 = f2 (x2, y2) (x_zoukaryo, y_zokaryou)}
let rate = 18
let stopwhen {zahyo1 = zahyo13_v; zahyo2 = zahyo23_v} =
  if zahyo13_v = zahyou_naoshi (50, 150) || zahyo23_v = zahyou_naoshi (50, 150) then true
  else false
let draw_last {zahyo1 = zahyo14_v; zahyo2 = zahyo24_v} =
  place_image (text "clear!" 60 Color.cyan) (zahyou_naoshi (200, 200)) (place_image (circle 5 Color.red) zahyo14_v (place_image (circle 5 Color.red) zahyo24_v (place_image (read_image "https://tsukatte.com/wp-content/uploads/2019/01/apple.png" 100 100) (zahyou_naoshi (50, 150)) (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (empty_scene width height))))))
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:rate
  ~stop_when:stopwhen
  ~to_draw_last:draw_last
