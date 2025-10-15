let x = $(document);
x.ready(inicializarEventos);

function inicializarEventos() {
  let btn = $("#btnReemplazar");
  btn.click(reemplazarSoloTabla1);
}

function reemplazarSoloTabla1() {
  let celdasTabla1 = $("#tabla1 td");
  celdasTabla1.text("-"); 
}
