open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  shin : int * int;
  gi : int * int;
}

let length = 560
let center = length / 2
             
let initial_world = {shin = (center, center);
                     gi = (center, center)}
                    
let shin = read_image "img/la6a_true.png" length length
    
let gi = read_image "img/la6a_false.png" length length
    
let draw {shin = shin_v; gi = gi_v} =
  if ? then place_image shin shin_v (empty_scene length length)
  else place_image gi gi_v (empty_scene length length)
      
;; big_bang initial_world
  ~width:length
  ~height:length
  ~to_draw:draw
