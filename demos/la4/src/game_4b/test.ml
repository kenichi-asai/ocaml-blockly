open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  dog_hungry : int * int;
  hone : int * int;
  dog_goal : int * int;
}
let initial_world = {dog_hungry = (280, 280);hone = (280,30);dog_goal = (-50,-50)}
let width = 560
let height = 560
let dog_hungry = read_image "https://1.bp.blogspot.com/-fHOjzIc2HW0/W6DTpZ-LcaI/AAAAAAABO-A/bRA-NTo28usbq_JDO3jv8Pb0R5eoz5TrwCLcBGAs/s800/pet_dog_hungry.png" 100 100
let hone = read_image "image/hone.png" 100 100
let dog_goal = read_image "image/dog_goal.png" 100 100
let background = read_image "image/arrow.png" 100 100
let draw {dog_hungry = (dhx, dhy);hone = (hx,hy);dog_goal = (dgx,dgy)} =
  (place_image dog_hungry (dhx, dhy)
     (place_image hone (hx, hy)
     (place_image dog_goal (dgx, dgy)
     (place_image background (280, 150)
        (place_image (rectangle 560 560 Color.red) (280,280) (empty_scene width height))))))

let on_tick {dog_hungry = (dhx, dhy);hone = (hx,hy);dog_goal = (dgx,dgy)} =
  if (hx = dhx) && (hy = dhy)
  then
    {dog_hungry = (-50, -50);
     hone = (-50,-50);
     dog_goal = (280,280)}
  else
    {dog_hungry = (dhx, dhy);
     hone = (hx,hy);
     dog_goal = (dgx,dgy)}


;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:500
