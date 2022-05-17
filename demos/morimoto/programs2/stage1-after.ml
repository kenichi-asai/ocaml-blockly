(*  on_tick関数 *)
let move_on_tick {airplane = airplane; sun = sun; lop = lop} =
  {airplane = move_airplane_on_tick airplane; sun = sun; lop = move_airplane_on_tick airplane :: lop};;

(*  終了条件（点D上に飛行機が置かれるorそれ以外） *)
let on_D {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop} =
  airplane_x >= 0 && airplane_y >= 0;;

(*  終了画面 *)
let draw_last {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop} =
  if airplane_x = 200 && airplane_y = 100 then place_image2 (text "A CLEAR!!" 50 Color.white) (width / 2, height / 2) (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2) (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}))
  else if airplane_x = 400 && airplane_y = 400 then place_image2 (text "B CLEAR!!" 50 Color.white) (width / 2, height / 2) (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2) (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}))
  else if airplane_x = 700 && airplane_y = 500 then place_image2 (text "C CLEAR!!" 50 Color.white) (width / 2, height / 2) (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2) (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}))
  else if airplane_x = 1000 && airplane_y = 300 then place_image2 (text "GAME CLEAR!!" 50 Color.white) (width / 2, height / 2) (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2) (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}))
  else place_image2 (text "GAME OVER..." 50 Color.white) (width / 2, height / 2) (place_image2 (rectangle width height (make_color 204 204 204 ~alpha:100)) (width / 2, height / 2) (place_image2 (circle 15 Color.red ~fill:false) (200, 100) (place_image2 (circle 20 Color.red ~fill:false) (200, 100) (draw {airplane = (airplane_x, airplane_y); sun = (sun_x, sun_y); lop = lop}))));;
;; big_bang {airplane = initial_airplane; sun = initial_sun; lop = initial_lop}
  ~name:"Risa's game"
  ~width:width
  ~height:height
  ~to_draw:draw
  ~rate:100
  ~stop_when:on_D
  ~to_draw_last:draw_last
  ~onload:false;;
