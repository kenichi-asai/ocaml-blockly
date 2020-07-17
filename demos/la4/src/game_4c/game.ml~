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
let dog = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628015743.png"  50 100
let foot = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628014933.png" 30 30



let draw {dog = (dx, dy)} =
  (place_image dog (dx, dy)
     (place_image foot (280, 70)
     (place_image foot (280, 140)
     (place_image foot (280, 210)
     (place_image foot (280, 280)
     (place_image foot (280, 350)
     (place_image foot (280, 420)
     (place_image foot (280, 490)
     (place_image (rectangle 560 560 Color.white) (280,280) (empty_scene width height))))))))))
    
let on_tick {dog = (dx, dy)} =
  {dog = (dx,?)}


    
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
