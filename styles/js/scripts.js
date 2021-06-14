//Para evitar conflictos con versiones de Jquery entre wordpress y sus plugins
$=jQuery.noConflict();

function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

function menuUno(menu, ancho){
    document.getElementById(menu).style.width = ancho;
}

function cierreMenu(menu) {
    document.getElementById(menu).style.width = "0";
}

function abrirUrl(url) {
    window.open(url);
}

function copiarAlPortapapeles(id_elemento) {
  

  var aux = document.createElement("input");
  aux.setAttribute("value", id_elemento);
  
  document.body.appendChild(aux);
  aux.select();
  console.log(document.body.appendChild(aux), 'LO QUE TIENE DOCUMENT BODY');
  document.execCommand("copy");

  /* document.body.removeChild(aux); */
}