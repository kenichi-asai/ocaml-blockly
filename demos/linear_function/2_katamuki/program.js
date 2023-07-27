var before = function(){/*
			
			  type world_t = {
			  zahyo1 : int * int;
			  zahyo2 : int * int;
			  }
			  let width = 1200
			  let height = 600
			  let zahyou_naoshi (x, y) =
			  (x + width / 2, (height - y) - height / 2)
			  let initial_world = {zahyo1 = zahyou_naoshi (0, 0); zahyo2 = zahyou_naoshi (0, 0)}
			  let draw {zahyo1 = (x1, y1); zahyo2 = (x2, y2)} =
			  place_image (circle 5 Color.red) (x1, y1) (place_image (circle 5 Color.red) (x2, y2) (place_image (read_image "block/apple.png" 50 50) (zahyou_naoshi (50, 150)) (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (empty_scene width height)))))
			*/}.toString().split("\n").slice(1,-1).join("\n");


var code = function(){/*
			let x_zoukaryo = 1
			let y_zoukaryo = 5
		      */}.toString().split("\n").slice(1,-1).join("\n");



var after = function(){/* 

let f2 (x5, y5) (x6, y6) =
  (x5 - x6, y5 + y6)
let f (x3, y3) (x4, y4) =
  (x3 + x4, y3 - y4)
let on_tick {zahyo1 = (x1, y1); zahyo2 = (x2, y2)} =
  {zahyo1 = f (x1, y1) (x_zoukaryo, y_zoukaryo); zahyo2 = f2 (x2, y2) (x_zoukaryo, y_zoukaryo)}
let rate = 18
let stopwhen {zahyo1 = (x1, y1); zahyo2 = (x2, y2)} =
  if (x1, y1) = zahyou_naoshi (50, 150) || 
     (x2, y2) = zahyou_naoshi (50, 150) ||
     x1 > width || y2 > height
  then true
  else false
let draw_last {zahyo1 = (x1, y1); zahyo2 = (x2, y2)} =
 if (x1, y1) = zahyou_naoshi (50, 150) || 
    (x2, y2) = zahyou_naoshi (50, 150) 
then
  (place_image (text ("clear! "^ "y = " ^ string_of_int x_zoukaryo ^ "/" ^ string_of_int y_zoukaryo ^ "x") 60 Color.cyan) (zahyou_naoshi (200, 200)) (place_image (circle 5 Color.red) (x1, y1) (place_image (circle 5 Color.red) (x2,y2) (place_image (read_image "block/apple2.png" 50 50) (zahyou_naoshi (50, 150)) (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (empty_scene width height)))))))
else
   (place_image (text ("Not Clear! "^ "y = " ^ string_of_int x_zoukaryo ^ "/" ^ string_of_int y_zoukaryo ^ "x") 60 Color.cyan) (zahyou_naoshi (200, 200)) (place_image (circle 5 Color.red) (x1, y1) (place_image (circle 5 Color.red) (x2,y2) (place_image (read_image "block/apple.png" 50 50) (zahyou_naoshi (50, 150)) (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (empty_scene width height)))))))
;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:rate
  ~stop_when:stopwhen
  ~to_draw_last:draw_last
  ~onload:false;;
*/}.toString().split("\n").slice(1,-1).join("\n");
