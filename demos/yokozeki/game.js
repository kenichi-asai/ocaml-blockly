var before = function(){/*
open UniverseJs
open Color
open Image
open World
open Utility

type world_t = {
  p : int * int;
  q : int * int;
}
let width = 800
let height = 800
let init_zahyou = (-10, -10)
let num_vertical_line = 9
let num_horizontal_line = 9
let x_interval = width / (num_vertical_line + 1)
let y_interval = height / (num_horizontal_line + 1)
let to_coordinate_value_y y =
  let y2 = (y + y_interval / 2) / y_interval - (num_horizontal_line + 1) / 2
  in y2 * (-1)
let to_coordinate_value_x x =
  (x + x_interval / 2) / x_interval - (num_vertical_line + 1) / 2
let to_real_value_x x =
  (x + (num_horizontal_line + 1) / 2) * x_interval
let to_real_value_y y =
  let y2 = y * (-1)
  in (y2 + (num_vertical_line + 1) / 2) * y_interval
let a = let a_maybe = Random.int (num_horizontal_line + 1) - (num_horizontal_line + 1) / 2
  in (if a_maybe = 0 then 1
  else a_maybe)
let b = Random.int (num_horizontal_line + 1) - (num_horizontal_line + 1) / 2
let rec make_vertical_line_zahyou n =
  if n = 0 then []
  else ((width / (num_vertical_line + 1)) * n, height / 2) :: make_vertical_line_zahyou (n - 1)
let rec make_horizontal_line_zahyou n =
  if n = 0 then []
  else (width / 2, (height / (num_horizontal_line + 1)) * n) :: make_horizontal_line_zahyou (n - 1)
let vertical_line_zahyous = make_vertical_line_zahyou num_vertical_line
let horizontal_line_zahyous = make_horizontal_line_zahyou num_horizontal_line
let linear_function_text = let a_hyouji = if a = 1 then "x"
  else string_of_int a ^ " x "
  in (let b_hyouji = if b = 0 then ""
  else if b < 0 then " - " ^ string_of_int (abs b)
  else " + " ^ string_of_int b
  in text (" y = " ^ a_hyouji ^ b_hyouji) 40 (make_color 82 81 78))
let ret_v_line v =
  line [(0, height)] Color.cyan
let ret_h_line v =
  line [(width, 0)] Color.cyan
let orenge = make_color 255 101 103
let draw {p = (xp, yp); q = (xq, yq)} =
  place_image (circle 5 orenge) (to_real_value_x xp, to_real_value_y yp) (place_image (circle 5 orenge) (to_real_value_x xq, to_real_value_y yq) (place_image linear_function_text (width - 150, height - 50) (place_images (List.map ret_v_line vertical_line_zahyous) vertical_line_zahyous (place_images (List.map ret_h_line horizontal_line_zahyous) horizontal_line_zahyous (place_image (line [(0, height)] Color.black) (width / 2, height / 2) (place_image (line [(width, 0)] Color.black) (width / 2, height / 2) (empty_scene width height)))))))
let on_mouse {p = p_v; q = q_v} mouse_x mouse_y event =
  if q_v = init_zahyou && event = "button_down" then (if p_v = init_zahyou then {p = (to_coordinate_value_x mouse_x, to_coordinate_value_y mouse_y); q = q_v}
  else {p = p_v; q = (to_coordinate_value_x mouse_x, to_coordinate_value_y mouse_y)})
  else {p = p_v; q = q_v}
let stop_when {p = p_v; q = q_v} =
  p_v <> init_zahyou && q_v <> init_zahyou
let judge {p = (p_x, p_y); q = (q_x, q_y)} =
  p_y = a * p_x + b && q_y = a * q_x + b
let make_line {p = (p_x, p_y); q = (q_x, q_y)} c =
  line [((to_real_value_x p_x - to_real_value_x q_x) * 100, (to_real_value_y p_y - to_real_value_y q_y) * 100)] c
let make_line_zahyou {p = (p_x, p_y); q = (q_x, q_y)} =
  ((to_real_value_x p_x + to_real_value_x q_x) / 2, (to_real_value_y p_y + to_real_value_y q_y) / 2)
let ans = {p = (0, b); q = (1, a + b)}
let to_draw_last {p = p_v; q = q_v} =
  place_image (make_line {p = p_v; q = q_v} orenge) (make_line_zahyou {p = p_v; q = q_v}) (if judge {p = p_v; q = q_v} then place_image (text "正解" 100 (make_color 255 78 98)) (width / 2, height / 2) (draw {p = p_v; q = q_v})
  else place_image (text "不正解" 100 (make_color 46 207 202)) (width / 2, height / 2) (place_image (make_line ans (make_color 46 207 202)) (make_line_zahyou ans) (draw {p = p_v; q = q_v})))
;; big_bang {p = init_zahyou; q = init_zahyou}
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_mouse:on_mouse
  ~stop_when:stop_when
  ~to_draw_last:to_draw_last
  ~onload:false;;
*/}.toString().split("\n").slice(1,-1).join("\n");
var main = function(){/**/}.toString().split("\n").slice(1,-1).join("\n");
var after = function(){/**/}.toString().split("\n").slice(1,-1).join("\n");
