let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let btn = $("#boton1");
  btn.click(resaltarOO);
}

function resaltarOO() {
  let elems = $(".resaltado");
  elems.css("background-color", "#ffff00");
}
