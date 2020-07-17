open Image
open World
open TransformToInt

type world_t = {
  dog : int * int;
}
let initial_world = {dog = (100, 100)}
let width = 560
let height = 560
let dog = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628010115.png"  100 100
let dog_kage = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628011421.png"  100 100



let draw {dog = (dx, dy)} =
  (place_image dog (dx, dy)
     (place_image dog_kage (280, 280)
     (place_image (rectangle 560 560 Color.white) (280,280) (empty_scene width height))))
    
let on_tick {dog = (dx, dy)} =
  {dog = (dx,dy)}
