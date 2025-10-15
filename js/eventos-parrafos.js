// patrón de la guía: $(document).ready(...)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  // todos los párrafos del documento
  let ps = $("p");
  ps.click(presionParrafoDocumento);

  // párrafos contenidos en la segunda tabla (#tabla2)
  let psTabla2 = $("#tabla2 p");
  psTabla2.click(presionParrafoSegundaTabla);
}

function presionParrafoDocumento() {
  alert('se presionó un párrafo del documento');
}

function presionParrafoSegundaTabla() {
  alert('se presionó un párrafo contenido en la segunda tabla.');
}
