(* see: https://khoanguyen.me/sketch/part-2-the-engine/ *)
(* used form demos/{typed, universe} *)

open Js_of_ocaml_toplevel
open Js_of_ocaml

let execute code =
  let code = Js_of_ocaml.Js.to_string code in
  let buffer = Buffer.create 100 in
  let formatter = Format.formatter_of_buffer buffer in
  JsooTop.execute true formatter code;
  Js_of_ocaml.Js.string (Buffer.contents buffer)

let append_string output cl s =
  let open Js_of_ocaml in
  let d = Dom_html.window##.document in
  let span = Dom_html.createDiv d in
  span##.classList##add (Js.string cl);
  Dom.appendChild span (d##createTextNode (Js.string s));
  Dom.appendChild output span

let runCode str =
  let toploop_ = open_out "/dev/null" in
  let toploop_ppf = Format.formatter_of_out_channel toploop_ in
  JsooTop.initialize ();
  let dom = Dom_html.getElementById "toplevel" in
  Sys_js.set_channel_flusher stdout (append_string dom "stdout");
  Sys_js.set_channel_flusher stderr (append_string dom "stderr");
  Sys_js.set_channel_flusher toploop_ (append_string dom "toploop");
  let txt = Js.to_string str in
  let _ret = JsooTop.execute true toploop_ppf txt in
  ()

let runGame str =
  let toploop_ = open_out "/dev/null" in
  let toploop_ppf = Format.formatter_of_out_channel toploop_ in
  JsooTop.initialize ();
  let txt = Js.to_string str in
  let _ret = JsooTop.use toploop_ppf txt in
  ()

let () =
  JsooTop.initialize ();
  Js_of_ocaml.Js.export
    "evaluator"
    (object%js
       val runCode = runCode
       val runGame = runGame
    end)
