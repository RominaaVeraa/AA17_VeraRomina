// patrón de la guía
let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  // asociamos focus y blur a ambos inputs
  let a = $("#text1");
  a.focus(tomaFoco);
  a.blur(pierdeFoco);

  a = $("#text2");
  a.focus(tomaFoco);
  a.blur(pierdeFoco);
}

function tomaFoco() {
  let x = $(this);
  x.css("color", "#f00"); // rojo al tomar foco
}

function pierdeFoco() {
  let x = $(this);
  x.css("color", "#00f"); // vuelve a azul al perder foco

  // si quedó vacío, avisar (extra de la consigna)
  let cadena = x.val();
  if (cadena.length === 0) {
    alert("No ingresó datos");
  }
}
