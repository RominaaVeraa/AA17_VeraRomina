let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let ps = $("#parrafos p");
  ps.each(resaltarParrafos);
}

function resaltarParrafos() {
  let p = $(this);
  if (p.text().length < 100) {
    p.css("background-color", "#ff0");
  }
}
