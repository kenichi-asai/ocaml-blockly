open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  airplain : int * int;
}
let initial_world = {airplain = (50, 200)}
let width = 500
let height = 400
let fx = 450
let fy = 200
let airplain = read_image "./img/air3.png" 100 100
let flag = read_image "./img/flag.png" 100 100
let sora = read_image "./img/sora.png" width height
let draw {airplain = (x, y)} =
  place_image airplain (x, y) (place_image flag (fx, fy) (place_image sora (width / 2, height / 2) (empty_scene width height)))
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw