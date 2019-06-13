open Js_of_ocaml_toplevel
open Js_of_ocaml

let f str =
  let toploop_ = open_out "/dev/null" in
  let toploop_ppf = Format.formatter_of_out_channel toploop_ in
  JsooTop.initialize ();
  let txt = Js.to_string str in
  let _ret = JsooTop.use toploop_ppf txt in
  ()

let () =
  Js.Unsafe.global##.runGame := f
