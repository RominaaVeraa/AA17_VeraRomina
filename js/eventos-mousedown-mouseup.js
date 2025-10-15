// patrón de la guía
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let celdas = $("td");
  celdas.mousedown(presionaMouse);
  celdas.mouseup(sueltaMouse);
}

function presionaMouse() {
  $(this).css("background-color", "#ff0"); // amarillo al presionar
}

function sueltaMouse() {
  $(this).css("background-color", "#fff"); // vuelve a blanco al soltar
}
