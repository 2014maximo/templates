class SellMenuCatDevelop extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
        <div class="text-right">
          <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('develop')">&times;</a>
        </div>
        <div class="row">
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <div class="text-right">
              <img src="styles/assets/categorias/devlop.png" alt="" width="auto" height="40" class="drop">
            </div>
            <div class="row m-3">
              <div class="col bg-Dart pos-z l-menu"><a href="componentes/DEVELOP/develop_001.html">SUPER RECURSOS</a></div>
              <div class="col bg-Dart rot-2 l-menu"><a href="componentes/DEVELOP/develop_001.html">PSEINT EL INICIO</a></div>
              <div class="col bg-Dart rot-1 l-menu"><a href="componentes/DEVELOP/develop_001.html">VISUAL STUDIO CODE</a></div>
              <div class="col bg-Dart rot-2 l-menu"><a href="componentes/DEVELOP/develop_001.html">SUBLIME TEXT</a></div>
              <div class="col bg-Dart pos-z l-menu"><a href="componentes/DEVELOP/develop_001.html">ATOM</a></div>
              <div class="col bg-Dart pos-z l-menu"><a href="componentes/DEVELOP/develop_001.html">ALGORITMOS AVANZADOS</a></div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      `;
    }
  }
window.customElements.define('sell-develop', SellMenuCatDevelop)