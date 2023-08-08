var before = function(){/*
open UniverseJs
open Color
open Image
open World
open Utility

type world_t = {
  ufo : int * int;
}
let width = 700
let height = 600

*/}.toString().split("\n").slice(1,-1).join("\n");

var main = function(){/*
let ufo_x = Random.int 5 + 1
let ufo_y = Random.int 5 + 1
let alien_x = (ufo_x + Random.int 4) mod 5 + 1
let alien_y = (ufo_y + Random.int 4) mod 5 + 1
let bunbo = ...
let bunsi = ...
*/}.toString().split("\n").slice(1,-1).join("\n");

var after = function(){/*
let ufo_x_100 = ufo_x * 100
let ufo_y_100 = ufo_y * 100
let ufo_100 = (ufo_x_100, ufo_y_100)
let alien_x_100 = alien_x * 100
let alien_y_100 = alien_y * 100
let alien_100 = (alien_x_100, alien_y_100)
let henkan_y y =
  height - y
let place_zahyo_image (x, y) scene =
  place_image (text (string_of_int (x / 100)) 20 Color.green) (x - 10, henkan_y y) (place_image (text (string_of_int (y / 100)) 20 Color.green) (x + 10, henkan_y y) (place_image (text "(" 20 Color.green) (x - 30, henkan_y y) (place_image (text ")" 20 Color.green) (x + 30, henkan_y y) (place_image (text "," 20 Color.green) (x, henkan_y y) scene))))
let background = place_image (read_image "https://1.bp.blogspot.com/-nD_lpeb1pD8/X4vHKEWXmII/AAAAAAABb2E/Mx07lrXL8qM59wfQM4cKAgwPhoflaKWlACNcBGAsYHQ/s750/nasca_neko.png" width (height / 3)) (350, 500) (place_image (read_image "http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png" width (height / 3)) (350, 300) (place_image (read_image "https://2.bp.blogspot.com/-S35fdHRbAd0/WQvu0er5TfI/AAAAAAABECI/t9I_aSAdtCgQVcAXhWUgNFJx_8J0eFKSQCLcB/s800/bg_uchu_space.jpg" width (height / 3)) (350, 100) (empty_scene width height)))
let place_katamuki_image scene =
  place_image (text "=" 50 Color.black) (600, 550) (place_image (text "分子" 30 Color.black) (550, 530) (place_image (text (string_of_int bunsi) 30 Color.black) (650, 530) (place_image (text "分母" 30 Color.black) (550, 570) (place_image (text (string_of_int bunbo) 30 Color.black) (650, 570) (place_image (text "___" 30 Color.black) (550, 538) (place_image (text "__" 30 Color.black) (650, 538) scene))))))
let const_scene = place_katamuki_image (place_zahyo_image alien_100 (place_image (rectangle 80 20 Color.white) (alien_x_100, henkan_y alien_y_100) (place_image (read_image "https://2.bp.blogspot.com/-E0iVRq7GiXI/VaYrTddMLzI/AAAAAAAAvoI/3zSlmjimdII/s800/space_kaseijin.png" 80 80) (alien_x_100, henkan_y alien_y_100) (place_image (circle 20 Color.red) (ufo_x_100, henkan_y ufo_y_100) background))))
let draw {ufo = (x, y)} =
  place_zahyo_image ufo_100 (place_image (rectangle 80 20 Color.white) (ufo_x_100, henkan_y ufo_y_100) (place_image (read_image "https://1.bp.blogspot.com/-8vjnbp_AXMM/USSkq9AIKTI/AAAAAAAANV0/PQ6FLf-xUks/s1600/alien_ufo.png" 150 150) (x, henkan_y y) const_scene))
let dx_dy = if ufo_x_100 < alien_x_100 then (if bunbo > 0 then (bunbo, bunsi)
  else (bunbo * (-1), bunsi * (-1)))
  else if bunbo > 0 then (bunbo * (-1), bunsi * (-1))
  else (bunbo, bunsi)
let add_vec (x1, y1) (x2, y2) =
  (x1 + x2, y1 + y2)
let on_tick {ufo = ufo_v} =
  {ufo = add_vec ufo_v dx_dy}
let is_away (x, y) =
  x < 0 || x > width || y < 0 || y > height
let stop {ufo = ufo_v} =
  ufo_v = alien_100 || bunbo = 0 || is_away ufo_v
let draw_last {ufo = ufo_v} =
  place_image (if ufo_v = alien_100 then text "CLEAR!!" 50 Color.black
  else text "GAME OVER" 50 Color.black) (width / 2, height / 2) (place_image (if ufo_v = alien_100 then text "お迎えありがとう！" 20 Color.black
  else if bunbo = 0 then text "分母は0にならないよ" 20 Color.black
  else text "もう一度探しに行こう！" 20 Color.black) (250, 500) (place_image (read_image "https://2.bp.blogspot.com/-JyEgpfHBNNE/UZoVeq44JrI/AAAAAAAATi4/9Ai4NjmZV54/s800/fukidashi04.png" 250 100) (250, 500) (place_image (if ufo_v = alien_100 then read_image "https://2.bp.blogspot.com/-E0iVRq7GiXI/VaYrTddMLzI/AAAAAAAAvoI/3zSlmjimdII/s800/space_kaseijin.png" 100 100
  else if bunbo = 0 then read_image "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh6ErsCMbdaxWNDI5KnQe3hwVRLXrRWmqzmMtPQLTAVclBn5PCkCGuBXGmFNovC7I1pFCVYb6PhLs0LK85zUA0JeUJB_jad416aRl7E0snf9pACrT3GNVRwQrb0uDbWt9sCV_nsxIpl33eCi8dlSpgsIUJXgS_Ho7y3vgAam2apeqV1C0KV2F1XzdVv2v52/s656/kodai_sacabambaspis.png" 100 100
  else read_image "https://2.bp.blogspot.com/-SW0NVFeAqC4/USSkq2jHEhI/AAAAAAAANV4/kk4mmsD73Ew/s1600/alien_grey.png" 100 100) (100, 500) (draw {ufo = ufo_v}))))
;; big_bang {ufo = (ufo_x_100, ufo_y_100)}
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_tick:on_tick
  ~rate:50
  ~stop_when:stop
  ~to_draw_last:draw_last
  ~onload:false;;
*/}.toString().split("\n").slice(1,-1).join("\n");
