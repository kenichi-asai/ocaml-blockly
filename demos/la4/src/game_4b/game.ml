open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  dog : int * int;
}
let initial_world = {dog = (280, 280)}
let width = 560
let height = 560
let dog = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628010115.png"  100 100
let foot = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628010123.png" 30 30

let draw {dog = (dx, dy)} =
  (place_image dog (dx, dy)
     (place_image foot (70, 320)
     (place_image foot (140, 320)
     (place_image foot (210, 320)
     (place_image foot (280, 320)
     (place_image foot (350, 320)
     (place_image foot (420, 320)
     (place_image foot (490, 320)
     (place_image (rectangle 560 560 Color.white) (280,280) (empty_scene width height))))))))))
    
let on_tick {dog = (dx, dy)} =
  {dog = (?,dy)}




    
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
