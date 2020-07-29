open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  mario : (int * int) list;
}
let initial_world = {mario = [(20, 50); (20, 150); (20, 250); (20, 350); (20, 450)]}
let width = 700
let height = 500
let mwidth = 50
let mheight = 50
let mario = read_image "./img/mario4.png" mwidth mheight
let marios = [mario; mario; mario; mario; mario]
let draw {mario = list} =
  place_images marios list (place_image (rectangle 10 500 Color.blue) (30, 250) (place_image (rectangle 10 500 Color.red) (670, 250) (place_image (rectangle 700 500 Color.green) (350, 250) (empty_scene width height))))
let xplus (mx, my) =
  (mx + Random.int 50, my)
let on_tick {mario = list} =
  {mario = List.map xplus list}
let stopfunc (mx, my) =
  if mx > 500 then true
  else false
let stop {mario = list} =
  andmap stopfunc list
let last_draw {mario = list} =
  place_image (text "Finish!!" 50 Color.red) (350, 250) (place_image (rectangle 700 500 Color.white) (350, 250) (empty_scene width height))
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
  ~stop_when:stop
  ~to_draw_last:last_draw