// patrón de la guía
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let b1 = $("#boton1");
  b1.click(ocultarRecuadro);

  let b2 = $("#boton2");
  b2.click(mostrarRecuadro);
}

function ocultarRecuadro() {
  let box = $("#descripcion");
  box.hide("slow");   // oculta lentamente
}

function mostrarRecuadro() {
  let box = $("#descripcion");
  box.show("fast");   // muestra rápidamente
}
