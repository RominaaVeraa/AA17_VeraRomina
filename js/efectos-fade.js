// patrón de la guía
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  $("#boton1").click(ocultarRecuadro);
  $("#boton2").click(mostrarRecuadro);
}

function ocultarRecuadro() {
  $("#descripcion").fadeOut("slow");
}

function mostrarRecuadro() {
  $("#descripcion").fadeIn("slow");
}
