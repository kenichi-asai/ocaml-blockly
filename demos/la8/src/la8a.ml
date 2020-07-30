open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  shima : int * int;
}
let initial_world = {shima = (50, 360)}
let width = 720
let height = 540
let shima = read_image "img/shimauma.png" 100 100
let back = read_image "img/back.png" width height
let draw {shima = shima_v} =
  place_image shima shima_v (place_image back (width / 2, height / 2) (empty_scene width height))
let on_tick {shima = (sx, sy)} =
  {shima = (sx + 20, sy)}
let on_mouse {shima = (sx, sy)} mouse_x mouse_y event =
  {shima = (?, ?)}
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~on_mouse:on_mouse
