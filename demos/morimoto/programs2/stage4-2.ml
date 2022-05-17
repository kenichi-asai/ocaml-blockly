(* 初期値の設定 *)
let initial_airplane = ?
                         
(* airplane_on_tick関数 *)
let f x = ?
let dx = ?
let move_airplane_on_tick (x, y) =
  (x + dx, f (x + dx))
