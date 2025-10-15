// patrón de la guía: $(document).ready(...)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  // al tomar foco, el control pasa a color rojo
  $('input[type="text"]').focus(function () {
    $(this).css('color', '#ff0000');
  });
}
