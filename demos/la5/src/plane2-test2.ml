open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  airplane : int * int;
}
let initial_world = {airplane = (50, 200)}
let width = 500
let height = 400
let fx = 250
let fy = 200
let airplane = read_image "./img/air3.png" 100 100
let sora = read_image "./img/sora.png" width height
let flag = read_image "./img/flag.png" 100 100
let draw {airplane = (x, y)} =
  place_image airplane (x, y) (place_image flag (fx, fy) (place_image sora (width / 2, height / 2) (empty_scene width height)))
let on_key {airplane = (x, y)} key =
  {airplane = (?, ?)}
let stop {airplane = (x, y)} =
  if x = fx && y = fy then true
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