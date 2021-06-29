class SellMenuCatAngular extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="text-right">
        <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('angular')">&times;</a>
      </div>
      <div class="row">
        <div class="col-md-1"></div>
        <div class="col-md-10">
          <div class="text-right">
            <a href="componentes/ANGULAR/categoria.html">
              <img src="styles/assets/categorias/angular.png" alt="" width="auto" height="80" class="drop">
            </a>
          </div>
          <div class="row m-3">
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/angular_001.html">INSTALACIÓN DE ANGULAR...</a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/angular_002.html">PRUEBAS UNITARIAS</a></div>
            <div class="col bg-Angular rot-1 l-menu"><a href="componentes/ANGULAR/angular_003.html">INPUT Y OUTPUT</a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/angular_004.html">ELEMENTOS DESCRIPCIÓN...</a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/angular_003.html">CRUD CON UN MOCKDATA</a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/angular_003.html">RXJS</a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/angular_003.html">MICROFRONTENDS</a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/angular_003.html">REDUX</a></div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    `;
    }
}
window.customElements.define('sell-menu-cat-angular', SellMenuCatAngular)