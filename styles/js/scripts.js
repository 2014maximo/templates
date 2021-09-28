//Para evitar conflictos con versiones de Jquery entre wordpress y sus plugins
/* $=jQuery.noConflict(); */


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
  aux.setAttribute("value", (document.getElementById(id_elemento).innerHTML).trim());
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
}

const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;

if(menuBtn){
  menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
  }
  });
}


 function typing(){

  var btclick = document.getElementById('btnclick');
  btclick.style.display = 'none';

  var btmostrarclick = document.getElementById('btnmostrar');
  btmostrarclick.style.height = '160px';
  
  var listaTexto = [
                  "Ha llegado un nuevo integrante a nuestra familia, se trata de MICROSOFT AZURE DEVOPS     ",           "Es el momento de entender como nos apoyará en la ejecución de nuestras tareas diarias y como con él trabajaremos para lograr una cultura 'DEVOPS'     ",
                  "Los días presenciales estaremos en capacitaciones de: HISTORIAS DE USUARIO, TABLEROS AZURE, PIPELINES AZURE       ",
                  "Revisa tu agenda y participa - ....¡CONTAMOS CONTIGO!       "
                ]  
  maquinaLista("typer",80,listaTexto,0);
  
  function maquinaLista(contenedor, intervalo, listaTexto, indice){      
	if (indice == listaTexto.length){
        indice = 0;
    }
     maquina2(contenedor, listaTexto[indice], intervalo, listaTexto, indice);	
  }
  
  function maquina2(contenedor, texto, intervalo, listaTexto, indiceLista){
  var indiceTexto = 0;
  var finalTexto = false;
  timer = setInterval( function(){			  
	if (indiceTexto == texto.length && finalTexto == false){
		finalTexto = true;			
	}
			
	if (finalTexto == false) indiceTexto++
	else indiceTexto--;
	mostrarEliminarTexto(contenedor, texto, indiceTexto, finalTexto);
	if (finalTexto == true && indiceTexto == 0){
		clearInterval(timer);
		maquinaLista(contenedor, intervalo, listaTexto, indiceLista+1);
	}		
  },intervalo)
  }	 
  
  function mostrarEliminarTexto(contenedor, texto, i, finalTexto){

if (finalTexto){
	$("#"+contenedor).html(texto.substr(0,i--) + "_");
}
else{
	$("#"+contenedor).html(texto.substr(0,i++) + "_");
}
  }
  
  
  
};