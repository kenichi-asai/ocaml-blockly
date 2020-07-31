open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  mario : (int * int) list;
}
let initial_world = {mario = [?; ?; ?; ?; ?]}
let width = 700
let height = 500
let mwidth = 50
let mheight = 50
let mario = read_image "./img/mario4.png" mwidth mheight
let marios = [mario; mario; mario; mario; mario]
let draw {mario = list} =
  place_images marios list (place_image (rectangle 10 500 Color.blue) (30, 250) (place_image (rectangle 10 500 Color.red) (670, 250) (place_image (rectangle 700 500 Color.green) (350, 250) (empty_scene width height))))
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~rate:500