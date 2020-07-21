open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  airplane : int * int;
  ball : int * int;
}
let initial_world = {airplane = (50, 300); ball = (600, 600)}
let width = 500
let height = 400
let fx = 450
let fy = 50
let airplane = read_image "./img/air3.png" 100 100
let sora = read_image "./img/sora.png" width height
let flag = read_image "./img/flag.png" 100 100
let draw {airplane = (x, y); ball = (bx, by)} =
  place_image airplane (x, y) (place_image (circle 20 Color.red) (bx, by) (place_image flag (fx, fy) (place_image sora (width / 2, height / 2) (empty_scene width height))))
let on_key {airplane = (x, y); ball = (bx, by)} key =
  if key = "right" then {airplane = (x + 5, y); ball = (bx, by)}
  else if key = "left" then {airplane = (x - 5, y); ball = (bx, by)}
  else if key = "up" then {airplane = (x, y - 5); ball = (bx, by)}
  else if key = "down" then {airplane = (x, y + 5); ball = (bx, by)}
  else if key = "A" then {airplane = (x, y); ball = (x, y)}
  else {airplane = (x, y); ball = (bx, by)}
let on_tick {airplane = (x, y); ball = (bx, by)} =
  {airplane = (x, y); ball = (if bx > 600 then (601, 601)
  else (bx + 5, by))}
let stop {airplane = (x, y); ball = (bx, by)} =
  if fx - 50 < x && x < fx + 50 && fy - 50 < y && y < fy + 50 then true
  else false
let last_draw {airplane = (x, y); ball = (bx, by)} =
  place_image (text "CLEAR" 50 Color.red) (width / 2, height / 2) (empty_scene width height)
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~on_key_press:on_key
  ~rate:10
  ~stop_when:stop
  ~to_draw_last:last_draw