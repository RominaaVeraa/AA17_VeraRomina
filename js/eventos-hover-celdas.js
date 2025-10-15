// patrón de la guía: $(document).ready(...)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let celdas = $("#tablero td");
  // hover(enterFn, leaveFn)
  celdas.hover(
    function entra()  { $(this).css("background-color", "#ffeb80"); },
    function sale()   { $(this).css("background-color", "#ffffff"); }
  );
}
