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
              <a href="componentes/DEVELOP/categoria.html">
                <img src="styles/assets/categorias/devlop.png" alt="" width="auto" height="60" class="drop h-zoom mr-4">
                <h2 class="fuenteSeis colorDevelop text-shadow-a">Developer</h2>
              </a>
            </div>
            <div class="row m-3">
              <div class="col bg-Develop pos-z l-menu"><a href="componentes/DEVELOP/dev_001.html">SUPER RECURSOS</a></div>
              <div class="col bg-Develop rot-2 l-menu"><a href="componentes/DEVELOP/dev_002.html">PSEINT</a></div>
              <div class="col bg-Develop rot-1 l-menu"><a href="componentes/DEVELOP/dev_003.html">VISUAL STUDIO CODE</a></div>
              <div class="col bg-Develop rot-2 l-menu"><a href="componentes/DEVELOP/dev_004.html">SUBLIME TEXT</a></div>
              <div class="col bg-Develop pos-z l-menu"><a href="componentes/DEVELOP/dev_005.html">ATOM</a></div>
              <div class="col bg-Develop pos-z l-menu"><a href="componentes/DEVELOP/dev_006.html">ALGORITMOS AVANZADOS</a></div>
              <div class="col bg-Develop rot-2 l-menu"><a href="componentes/DEVELOP/dev_007.html">PRINCIPIOS SOLID Y...</a></div>
              <div class="col bg-Develop pos-z l-menu"><a href="componentes/DEVELOP/dev_008.html">MÉTOLOGÍAS ÁGILES</a></div>
              <div class="col bg-Develop rot-1 l-menu"><a href="componentes/DEVELOP/dev_009.html">VISUAL STUDIO EXT..</a></div>
              <div class="col bg-Develop rot-1 l-menu"><a href="componentes/DEVELOP/dev_010.html">FICHA MODELO CANVAS</a></div>
              <div class="col bg-Develop pos-z l-menu"><a href="componentes/DEVELOP/dev_011.html">MOCKUPS Y RECOMENDACIONES</a></div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      `;
    }
  }
window.customElements.define('sell-develop', SellMenuCatDevelop)