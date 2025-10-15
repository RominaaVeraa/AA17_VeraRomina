let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let btn = $("#boton1");
  btn.click(ocultarItemsPrimeraLista);
}

function ocultarItemsPrimeraLista() {
  let items = $("#lista1 li");
  items.hide();
}
