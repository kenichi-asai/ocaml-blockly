SOURCES = game.ml
PACKS = universeJs
RESULT = game
OCAMLMAKEFILE = ~/.opam/4.04.0/lib/ocaml-makefile/OCamlMakefile
include $(OCAMLMAKEFILE)

$(RESULT).js : byte-code
	js_of_ocaml $(RESULT)

