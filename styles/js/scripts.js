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