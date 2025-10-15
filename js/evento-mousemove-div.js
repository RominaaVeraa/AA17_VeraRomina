// patrón de la guía: $(document).ready(...)
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  const zona = $("#zona");
  const estado = $("#estado");

  zona.on("mouseenter", function () {
    // al entrar, empieza a reportar
    estado.text("Dentro del área (mové el mouse)");
  });

  zona.on("mouseleave", function () {
    // al salir, mensaje de fuera
    estado.text("Fuera del área");
  });

  zona.on("mousemove", function (event) {
    // coordenadas relativas al div (más preciso que offsetX/offsetY cross-browser)
    const off = zona.offset();
    const x = Math.round(event.pageX - off.left);
    const y = Math.round(event.pageY - off.top);
    estado.text(`x=${x}, y=${y}`);
  });
}
