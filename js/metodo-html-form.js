let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let x = $("#boton1");
  x.click(crearFormulario);
  x = $("#boton2");
  x.click(mostrarHtmlFormulario);
}

function crearFormulario() {
  let cont = $("#formulario");
  cont.html(
    '<form id="login">' +
      'Ingrese nombre: <input type="text" id="nombre"><br>' +
      'Ingrese clave: <input type="password" id="clave"><br>' +
      '<input type="submit" value="Confirmar">' +
    '</form>'
  );
}

function mostrarHtmlFormulario() {
  let cont = $("#formulario");
  alert(cont.html());
}
