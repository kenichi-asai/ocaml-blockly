open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  bremen : int * int;
  tori : int * int;
}

let initial_world = {tori = (280, 150);bremen = (280, 360)}
let width = 560
let height = 560
let tori = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628012815.png"  100 100
let bremen = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200628/20200628012734.png"  300 400
let background = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200712/20200712170045.png" 560 560
let owari = read_image "https://cdn-ak.f.st-hatena.com/images/fotolife/k/k____oss/20200712/20200712170006.png" 560 560



let draw {tori = (tx, ty);bremen = (bx, by)} =
  (place_image tori (tx, ty)
     (place_image bremen (bx, by)
        (place_image background (280,280) (empty_scene width height))))
    
let on_tick {tori = (tx, ty);bremen = (bx, by)} =
  {tori = (tx,ty);
   bremen = if true then (bx+50, by) else (bx - 50, by)}

let on_key_press {tori = (tx, ty);bremen = (bx, by)} key =
  if key = "left" then {tori = (?, ty);bremen = (?, by)}
  else if key = "right" then {tori = (?, ty);bremen = (?, by)}
  else {tori = (?, ty);bremen = (?, by)}



;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~on_key_press:on_key_press 
  ~rate:500
