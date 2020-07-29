open UniverseJs
open Color
open Image
open World
open TransformToInt

type world_t = {
  broccoli : int * int;
  nasu : int * int;
  tomato : int * int;
  meat : int * int;
  ika : int * int;
  salmon : int * int;
}
let width = 750
let height = 560
let image_length = 100

(* 籠内の座標 *)
let r0 = 530
let p1 = 450
let sm1 = 365
let p2 = 280
let sm2 = 195
let p3 = 110
let l0 = 30
let yh = 70
let mh = 280
let fh = 490
let initial_world = {broccoli = (680, 60); nasu = (680, 220); tomato = (610, 500); meat = (610, 140); ika = (610, 330); salmon = (680, 410)}
let background = read_image "img/background.png" width height
let broccoli = read_image "img/broccoli.png" image_length image_length
let nasu = read_image "img/nasu.png" image_length image_length
let tomato = read_image "img/tomato.png" image_length image_length
let meat = read_image "img/meat.png" image_length image_length
let ika = read_image "img/ika.png" image_length image_length
let salmon = read_image "img/salmon.png" image_length image_length
let kago = read_image "img/kago.png" 500 120
let cons = text "::" 80 Color.black
let empty = text "[ ]" 80 Color.black
let im_v = [broccoli; nasu; tomato]
let im_m = [meat]
let im_f = [ika; salmon]
let judge (x, y) h = x < 500 && y > h - 20 && y < h + 20
let rec judge_food lst h i =
  match lst with
  | [] -> []
  | first :: rest -> (if judge first h then (if i = 1 then (p1, h) :: judge_food rest h (i + 1)
  else if i = 2 then (p2, h) :: judge_food rest h (i + 1)
  else if i = 3 then (p3, h) :: judge_food rest h (i + 1)
  else first :: judge_food rest h i)
  else first :: judge_food rest h i)
let rec judge_i lst h =
  match lst with
  | [] -> 0
  | first :: rest -> (if judge first h then 1 + judge_i rest h
  else judge_i rest h)
let judge_veg lst h i =
  if judge_i lst h = 3 then [(390, h); (220, h); (50, h)]
  else judge_food lst h i
let judge_list_im lst h =
  let i = judge_i lst h
  in (if i = 1 then [empty; cons]
  else if i = 2 then [empty; cons; cons]
  else if i = 3 then [empty; cons; cons; cons]
  else [empty])
let judge_list_p lst h =
  let i = judge_i lst h
  in (if i = 1 then [(p1, h); (sm1, h)]
  else if i = 2 then [(p1, h); (sm1, h); (sm2, h)]
  else if i = 3 then [(555, h); (475, h); (305, h); (135, h)]
  else [(p1, h)])
let kago_list = [kago; kago; kago]
let kago_posn_list = [(p2, yh); (p2, mh); (p2, fh)]
let draw {broccoli = bv; nasu = nv; tomato = tv; meat = mv; ika = iv; salmon = sv} =
  let vegetable_list = [bv; nv; tv]
  in (let meat_list = [mv]
  in (let fish_list = [iv; sv]
  in place_images im_v (judge_veg vegetable_list yh 2) (place_images im_m (judge_food meat_list mh 2) (place_images im_f (judge_food fish_list fh 2) (place_images (judge_list_im vegetable_list yh) (judge_list_p vegetable_list yh) (place_images (judge_list_im meat_list mh) (judge_list_p meat_list mh) (place_images (judge_list_im fish_list fh) (judge_list_p fish_list fh) (place_images [text "野菜リスト" 50 Color.white; text "肉リスト" 50 Color.white; text "魚リスト" 50 Color.white] [(sm2, yh); (sm2, mh); (sm2, fh)] (place_images kago_list kago_posn_list (place_image background (width / 2, height / 2) (empty_scene width height)))))))))))

let mouse_check (ax, ay) mouse_x mouse_y p h =
  if mouse_x > ax - 20 && mouse_x < ax + 20 && mouse_y > ay - 20 && mouse_y < ay + 20 then (p, h)
  else (ax, ay)
let on_mouse {broccoli = bv; nasu = nv; tomato = tv; meat = mv; ika = iv; salmon = sv} mouse_x mouse_y event =
  {broccoli = mouse_check bv mouse_x mouse_y p1 yh; nasu = mouse_check nv mouse_x mouse_y p2 yh; tomato = mouse_check tv mouse_x mouse_y p3 yh; meat = mouse_check mv mouse_x mouse_y p1 mh; ika = mouse_check iv mouse_x mouse_y p1 fh; salmon = mouse_check sv mouse_x mouse_y p2 fh}

;; big_bang initial_world
  ~width:width
  ~height:height
  ~to_draw:draw
  ~on_mouse:on_mouse
