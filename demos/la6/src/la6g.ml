open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  usagi : int * int;
  kame : int * int;
}
let width = 560
let height = 560
let length = 100
let start = (210, 70)
let goal = (350, 490)
let initial_world = {usagi = start; kame = start}
let usagi_right = read_image "img/usagi_right.png" 100 100
let usagi_left = read_image "img/usagi_left.png" 100 100
let usagi_break = read_image "img/usagi_break.png" 100 100
let kame_right = read_image "img/kame_right.png" 100 100
let kame_left = read_image "img/kame_left.png" 100 100
let goalzone = read_image "img/goal.png" 210 70
let back = read_image "img/ground.png" width height
let fin = read_image "img/usagitokame.png" width height
let stop_image = read_image "img/stop.png" width height
let direction (x, y) =
  if y = height / 2 then true
  else false
let break (ux, uy) (kx, ky) =
  if uy = 280 && ky <= 350 then true
  else false
let draw {usagi = usagi_v; kame = kame_v} =
  place_image (if direction kame_v then kame_left
               else kame_right) kame_v
    (place_image (if break usagi_v kame_v then usagi_break
                  else if direction usagi_v then usagi_left
                  else usagi_right) usagi_v
       (place_image (text "(490, 280)" 25 Color.black) (490, 280)
          (place_image (text "(210, 350)" 25 Color.black) (210, 350)
             (place_image (text "(350, 490)" 25 Color.black) (350, 480)
                (place_image goalzone (350, 525)
                   (place_image back (280, 280)
                      (empty_scene width height)))))))
let move_u = 30
let move_k = 10
let move (x, y) v =
  if y < 280 then (x + v, (x + v) - 140)
  else if x > 140 && y = 280 then (x - v, y)
  else (x + v, x + v + 140)
let move_break (ux, uy) (kx, ky) move_u =
  if uy = 280 && ky <= 350 then (490, 280)
  else move (ux, uy) move_u
let on_tick {usagi = usagi4_v; kame = kame4_v} =
  {usagi = move_break usagi4_v kame4_v move_u; kame = move kame4_v move_k}
let kame_width = ?
let kame_height = ?
let stop {usagi = (ux, uy); kame = (kx, ky)} =
  if ((? - ? / 2) > 490) then true
  else false
let stopdraw {usagi = (ux, uy); kame = (kx, ky)} =
  place_image stop_image (280, 280) (empty_scene width height)
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:100
  ~stop_when:stop
  ~to_draw_last:stopdraw
