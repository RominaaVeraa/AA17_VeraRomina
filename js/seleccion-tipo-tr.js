let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let filas = $("tr");
  filas.click(presionFila);
}

function presionFila() {
  let fila = $(this);
  fila.css("background-color", "#eeeeee");
}
