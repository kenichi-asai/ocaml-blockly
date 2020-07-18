open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  neko : int * int;
  tori : int * int;
}
let initial_world = {neko = (200,200);tori = (100, 100)}
let width = 560
let height = 560

let neko = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628111923.png"  180 180
let tori = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628012815.png"  100 100
let bremen = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628111854.png"  300 400



let draw {neko = (nx, ny);tori = (dx, dy)} =
  (place_image neko (?, ?)
  (place_image tori (?, ?)
     (place_image bremen (280, 360)
     (place_image (rectangle 560 560 Color.white) (280,280) (empty_scene width height)))))
    
let on_tick {neko = (nx, ny);tori = (dx, dy)} =
  {neko = (nx, ny);tori = (dx,dy)}

;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
