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
              <img src="styles/assets/categorias/angular.png" alt="" width="auto" height="80" class="drop h-zoom">
            </a>
          </div>
          <div class="row m-3">
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_001.html">INSTALACIÓN</a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/ang_002.html">PRUEBAS UNITARIAS</a></div>
            <div class="col bg-Angular rot-1 l-menu"><a href="componentes/ANGULAR/ang_003.html">INPUT Y OUTPUT</a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/ang_004.html"><del>ELEMENTOS DESCRIPCIÓN...</del></a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_005.html"><del>CRUD CON UN MOCKDATA</del></a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_006.html"><del>RXJS</del></a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_007.html"><del>MICROFRONTENDS</del></a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_008.html"><del>MONTAR EN DOMINIO</del></a></div>
            <div class="col bg-Angular rot-1 l-menu"><a href="componentes/ANGULAR/ang_009.html"><del>REDUX</del></a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/ang_010.html"><del>METODO DEL BARRIL</del></a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/ang_011.html"><del>TIEMPO REAL SOCKET Y REST</del></a></div>
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_012.html"><del>DEBUGGEAR EN CHROME</del></a></div>
          </div>
          <h2 class="fuenteSeis text-light mt-5 fs-40">Ionic</h2>
          <div class="row m-3">
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_001.html"><del>INSTALACIÓN</del></a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/ang_002.html"><del>ELEMENTOS DESCRIPCIÓN</del></a></div>
          </div>
          <h2 class="fuenteSeis text-light mt-5 fs-40"><del>PrimeNG</h2>
          <div class="row m-3">
            <div class="col bg-Angular pos-z l-menu"><a href="componentes/ANGULAR/ang_001.html"><del>INSTALACIÓN</del></a></div>
            <div class="col bg-Angular rot-2 l-menu"><a href="componentes/ANGULAR/ang_002.html"><del>ELEMENTOS DESCRIPCIÓN</del></a></div>
          </div>
        </div>
        <div class="col-md-1"></div>
      </div>
    `;
    }
}
window.customElements.define('sell-angular', SellMenuCatAngular)