open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  tori : int * int;
}
let initial_world = {tori = (100, 100)}
let width = 560
let height = 560
let tori = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628012815.png"  100 100
let bremen = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628012734.png"  300 400


let draw {tori = (dx, dy)} =
  (place_image tori (280, 150)
     (place_image bremen (280, 360)
     (place_image (rectangle 560 560 Color.white) (280,280) (empty_scene width height))))
    
let on_tick {tori = (dx, dy)} =
  {tori = (dx,dy)}

;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
