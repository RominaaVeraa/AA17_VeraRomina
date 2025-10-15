// patrón de la guía
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let celdas = $("#tablero td");

  // Al entrar con el mouse: pintar la celda
  celdas.mouseover(function () {
    $(this).addClass("pintada");
  });

  // Al salir NO revertimos: la consigna pide que quede con ese color
  celdas.mouseout(function () {
    // no hacemos nada; la clase queda aplicada
  });
}
