var Tutorial = {};

Tutorial.text = "draw関数の登録";

function make_block() {
    const code ="let draw v = place_image (read_image \"http://pllab.is.ocha.ac.jp/~asai/picture/images/background.png\" 100 100) (50, 50) (empty_scene 200 200);; big_bang ?";
      if (code) {
        openModal();
        setTimeout(function() {
          BlockOfOCamlUtils.codeToBlock(code);
          closeModal();
        }, 100);
      }
}

Tutorial.main = function() {
    div = document.createElement("div");
    div.innerHTML = "<br>"+Tutorial.text;
    document.querySelector("div[class='blockToCode']").appendChild(div);
    start = document.createElement("button");
    start.textContent = "チュートリアルスタート";/*
    Tutorial.intro.setOptions({
	nextToDone: false,
	exitOnOverlayClick: false}).onexit(function(){Tutorial.clear_rect(); Blockly.mainWorkspace.removeChangeListener(Tutorial.fun);});*/
    start.onclick = function() {
	make_block();
	/*Tutorial.intro.exit();
	Tutorial.step = 0;
	Tutorial.f(Tutorial.introlst);*/};
    document.querySelector("div[class='blockToCode']").appendChild(start);
}
