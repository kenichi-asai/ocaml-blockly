(* 飛行機の初期値の設定 *)
let initial_airplane_x = ?

(* airplane_on_tick関数 *)
let f x = ?
let dx = ?
let initial_airplane = (initial_airplane_x, f (initial_airplane_x))
let move_airplane_on_tick (x, y) =
  (x + dx, f (x + dx))
