(* on_tick関数 *) 
let move_airplane_on_tick {airplane_zahyou = airplane_zahyou; sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou} =
  f airplane_zahyou;;
let move_on_tick {airplane_zahyou = airplane_zahyou; sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou} =
  {airplane_zahyou = move_airplane_on_tick {airplane_zahyou = airplane_zahyou; sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou}
  ;sun_zahyou = sun_zahyou
  ;lop = move_airplane_on_tick {airplane_zahyou = airplane_zahyou; sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou} :: lop
  ;airplane_houkou = airplane_houkou};;

(*   終了条件（ゴールor外) *)
let in_goal {airplane_zahyou = (airplane_x, airplane_y); sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou} =
  airplane_x = 1180 && airplane_y = 40
|| airplane_x  >= 1200 || airplane_y >= 600;;

(*   終了画面 *)
let draw_last {airplane_zahyou = (airplane_x, airplane_y); sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou} =
  if airplane_x = 1180 && airplane_y = 40 then place_image2 (text "GAME CLEAR!!" 50 Color.white) (width / 2, height / 2) (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2) (draw {airplane_zahyou = (airplane_x, airplane_y); sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou}))
  else place_image2 (text "GAME OVER..." 50 Color.white) (width / 2, height / 2)
         (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2)
            (place_image2 (line [(0, 0); (1100, 0)] ~size:4 Color.red) (630, 40)
            (place_image2 (polygon [(0, 12); (12, -6); (-12, -6)] Color.red) (1180, 40)
               (draw {airplane_zahyou = (airplane_x, airplane_y); sun_zahyou = sun_zahyou; lop = lop; airplane_houkou = airplane_houkou}))));;
;; big_bang {airplane_zahyou = initial_airplane_zahyou; sun_zahyou = initial_sun_zahyou; lop = initial_lop; airplane_houkou = (dx, dy)}
  ~name:"Risa's game"
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:move_on_tick
  ~rate:100
  ~stop_when:in_goal
  ~to_draw_last:draw_last
  ~onload:false;;
