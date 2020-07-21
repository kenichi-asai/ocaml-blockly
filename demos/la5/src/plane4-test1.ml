open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  airplane : int * int;
}
let initial_world = {airplane = (50, 300)}
let width = 500
let height = 400
let fx = 450
let fy = 50
let airplane = read_image "./img/air3.png" 100 100
let sora = read_image "./img/sora.png" width height
let flag = read_image "./img/flag.png" 100 100
let draw {airplane = (x, y)} =
  place_image airplane (x, y) (place_image flag (fx, fy) (place_image sora (width / 2, height / 2) (empty_scene width height)))
let on_key {airplane = (x, y)} key =
  if key = "right" then {airplane = (x + 5, y)}
  else if key = "" then {airplane = (x - 5, y)}
  else if key = "" then {airplane = (x, y - 5)}
  else if key = "" then {airplane = (x, y + 5)}
  else {airplane = (x, y)}
let stop {airplane = (x, y)} =
  if fx - 50 < x && x < fx + 50 && fy - 50 < y && y < fy + 50 then true
  else false
let last_draw {airplane = (x, y)} =
  place_image (text "CLEAR" 50 Color.red) (width / 2, height / 2) (empty_scene width height)
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_key_press:on_key
  ~stop_when:stop
  ~to_draw_last:last_draw