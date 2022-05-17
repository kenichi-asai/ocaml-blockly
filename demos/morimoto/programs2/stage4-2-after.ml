(* on_tick関数 *)
let move_on_tick {airplane = airplane; sun = sun; lop = lop} =
  {airplane = move_airplane_on_tick airplane
  ;sun = sun
  ;lop = move_airplane_on_tick airplane :: lop};;

(* 終了条件（ゴールorぶつかるor外）*)
let in_goal_or_collides {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop} =
  airplane_x = 800 && airplane_y = 512
  || (abs (airplane_x - sun_x) < 50 && abs (airplane_y - sun_y) < 50)
  || airplane_x  >= 1200 || airplane_y >= 600;;

(* 終了画面 *)
let draw_last {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop} =
  if airplane_x = 800 && airplane_y = 512
  then place_image2 (text "GAME CLEAR!!" 50 Color.white) (width / 2, height / 2)
         (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2)
            (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}))
  else  place_image2 (text "GAME OVER..." 50 Color.white) (width / 2, height / 2)
         (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2)
            (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}));;
  
;; big_bang {airplane = initial_airplane; sun = initial_sun; lop = initial_lop}
  ~name:"Risa's game"
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:move_on_tick
  ~rate:100
  ~stop_when:in_goal_or_collides
  ~to_draw_last:draw_last
  ~onload:false;;
