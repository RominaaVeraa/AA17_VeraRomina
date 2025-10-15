// patrón de la guía
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let r = $("#recuadro");
  r.dblclick(toggleTamanio);
}

function toggleTamanio() {
  let $r = $("#recuadro");
  // si ya está expandido (250×250), vuelve a 800×70; si no, expande
  if ($r.data("expandido")) {
    $r.css({ width: "800px", height: "70px" });
    $r.data("expandido", false);
  } else {
    $r.css({ width: "250px", height: "250px" });
    $r.data("expandido", true);
  }
}
