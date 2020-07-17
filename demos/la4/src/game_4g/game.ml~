open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  dog1 : int * int;
  dog2 : int * int;
}
let initial_world = {dog1 = (150, 150);dog2 = (300,300)}
let width = 560
let height = 560
let dog1 = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628010115.png"  100 100
let dog2 = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628112734.png"  100 100



let draw {dog1 = (dx1, dy1);dog2 = (dx2, dy2)} =
  (place_image dog1 (dx1, dy1)
     (place_image dog2 (dx2, dy2)
     (place_image (rectangle 560 560 Color.white) (280,280) (empty_scene width height))))


let on_tick {dog1 = (dx1, dy1);dog2 = (dx2, dy2)} =
  {dog1 = (dx1 + 40, dy1);dog2 = (dx2 - 5, dy2)}
  

;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
