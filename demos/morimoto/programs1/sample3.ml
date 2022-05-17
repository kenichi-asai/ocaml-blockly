type world_t = {
  zahyou : int * int;
}
let draw {zahyou = (x, y)} =
  place_image (circle 20 Color.red) (x, y) (empty_scene 100 100)
let on_tick {zahyou = (x, y)} =
  {zahyou = (x + 5, y)}
;; big_bang {zahyou = (20, 40)}
  ~width:100
  ~height:100
  ~to_draw:draw
  ~on_tick:on_tick