let initial_sun = (1100, 500)

(*  * 飛行機の初期値の設定 * *)
let initial_airplane = (0, 0)

(*  * airplane_on_tick関数 * *)
let f x =
  x / 2
let dx = 20
let move_airplane_on_tick (x, y) =
(x + dx, f (x + dx))
