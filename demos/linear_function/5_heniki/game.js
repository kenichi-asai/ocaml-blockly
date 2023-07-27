var before = function(){/*
open UniverseJs
open Color
open Image
open World
open Utility

type world_t = {
  zahyo : int * int;
}
let width = 600
let height = 600
let minus_y (x, y) =
  (x, height - y)
let place_image2 image (x, y) scene =
  place_image image (minus_y (x, y)) scene
let place_images2 image_list zahyou_list scene =
  place_images image_list (List.map minus_y zahyou_list) scene
let background_scene = place_images2 [text "O" 25 Color.black; text "100" 20 Color.black; text "300" 20 Color.black; text "500" 20 Color.black; text "x" 25 Color.black; text "100" 20 Color.black; text "300" 20 Color.black; text "500" 20 Color.black; text "y" 25 Color.black] [(10, 10); (100, 10); (300, 10); (500, 10); (590, 10); (20, 100); (20, 300); (20, 500); (10, 590)] (place_images2 [line [(0, 0); (0, 600)] Color.black; line [(0, 0); (0, 600)] Color.black; line [(0, 0); (0, 600)] Color.black; line [(0, 0); (0, 600)] Color.black; line [(0, 0); (0, 600)] Color.black; line [(0, 0); (0, 600)] Color.black; line [(0, 0); (0, 600)] Color.black] [(0, height / 2); (100, height / 2); (200, height / 2); (300, height / 2); (400, height / 2); (500, height / 2); (600, height / 2)] (place_images2 [line [(0, 0); (600, 0)] Color.black; line [(0, 0); (600, 0)] Color.black; line [(0, 0); (600, 0)] Color.black; line [(0, 0); (600, 0)] Color.black; line [(0, 0); (600, 0)] Color.black; line [(0, 0); (600, 0)] Color.black; line [(0, 0); (600, 0)] Color.black] [(width / 2, 0); (width / 2, 100); (width / 2, 200); (width / 2, 300); (width / 2, 400); (width / 2, 500); (width / 2, 600)] (empty_scene width height)))
let initial_zahyo = (0, 0)
let dx = 5

*/}.toString().split("\n").slice(1,-1).join("\n");


var main = function(){/*
let f x =
  x
let domain_x_lower = 200
let domain_x_upper = 400
let y_lower = ?
let y_upper = ?
*/}.toString().split("\n").slice(1,-1).join("\n");


var after = function(){/*
let domain_y_lower = f domain_x_lower
let domain_y_upper = f domain_x_upper
let draw_domain (x, y) scene =
  if x >= domain_x_lower && x <= domain_x_upper then place_images2 [polygon [(0, 0); (x - domain_x_lower, 0); (0, 0 - y); (domain_x_lower - x, y - domain_y_lower)] (make_color 255 0 0 ~alpha:100); polygon [(0, 0); (0, domain_y_lower - y); (x, 0); (domain_x_lower - x, y - domain_y_lower)] (make_color 0 0 255 ~alpha:100); line [(0, 0); (x - domain_x_lower, 0)] Color.red; line [(0, 0); (-10, 10); (10, 10)] Color.red; line [(0, 0); (10, 10); (-10, 10)] Color.red] [((x + domain_x_lower) / 2, y / 2); (x / 2, (y + domain_y_lower) / 2); ((x + domain_x_lower) / 2, 10); (domain_x_lower + 5, 10); (x - 5, 10)] scene
  else if x >= domain_x_upper then place_images2 [polygon [(0, 0); (domain_x_upper - domain_x_lower, 0); (0, 0 - domain_y_upper); (domain_x_lower - domain_x_upper, domain_y_upper - domain_y_lower)] (make_color 255 0 0 ~alpha:100); polygon [(0, 0); (0, domain_y_lower - domain_y_upper); (domain_x_upper, 0); (domain_x_lower - domain_x_upper, domain_y_upper - domain_y_lower)] (make_color 0 0 255 ~alpha:100); line [(0, 0); (domain_x_upper - domain_x_lower, 0)] Color.red; line [(0, 0); (-10, 10); (10, 10)] Color.red; line [(0, 0); (10, 10); (-10, 10)] Color.red] [((domain_x_lower + domain_x_upper) / 2, domain_y_upper / 2); (domain_x_upper / 2, (domain_y_lower + domain_y_upper) / 2); ((domain_x_lower + domain_x_upper) / 2, 10); (domain_x_lower + 5, 10); (domain_x_upper - 5, 10)] scene
  else scene
let draw {zahyo = (x, y)} =
  place_images2 [line [(0, 0); (0, y_lower - y_upper)] Color.blue; line [(0, 0); (10, -10); (10, 10)] Color.blue; line [(0, 0); (10, 10); (10, -10)] Color.blue] [(10, (y_lower + y_upper) / 2); (10, y_upper - 5); (10, y_lower + 5)] (draw_domain (x, y) (place_image2 (circle 10 Color.red) (x, y) (place_image2 (line [(0, 0); (width, 0 - f width)] Color.black) (width / 2, f width / 2) background_scene)))
let on_tick {zahyo = (x, y)} =
  {zahyo = (x + dx, f (x + dx))}
let stop_when {zahyo = (x, y)} =
  x >= width || y >= height
let draw_last {zahyo = (x, y)} =
  place_image2 (text (if y_lower = domain_y_lower && y_upper = domain_y_upper then "GAME CLEAR!!"
  else "GAME OVER...") 50 Color.black) (width / 2, height / 2) (place_images2 [line [(0, 0); (0, y_lower - y_upper)] Color.blue; line [(0, 0); (10, -10); (10, 10)] Color.blue; line [(0, 0); (10, 10); (10, -10)] Color.blue] [(10, (y_lower + y_upper) / 2); (10, y_upper - 5); (10, y_lower + 5)] (draw_domain (x, y) (place_image2 (circle 10 Color.red) (x, y) (place_image2 (line [(0, 0); (width, 0 - f width)] Color.black) (width / 2, f width / 2) background_scene))))
;; big_bang {zahyo = initial_zahyo}
  ~name:"universe_domain"
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:100
  ~stop_when:stop_when
  ~to_draw_last:draw_last
  ~onload:false;;
*/}.toString().split("\n").slice(1,-1).join("\n");
