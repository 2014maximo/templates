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
            <img src="styles/assets/categorias/angular.png" alt="" width="auto" height="80" class="drop">
          </div>
          <ul class="text-light">
            <li>
              <a href="componentes/ANGULAR/angular_post_001.html">1. Instalación de angular y recomendaciones</a>
            </li>
            <li>
              <a href="componentes/ANGULAR/angular_post_002.html">2. Pruebas unitarias</a>
            </li>
            <li>
              <a href="componentes/ANGULAR/angular_post_003.html">3. Interceptor en Angular</a>
            </li>
            <li>
              <a href="componentes/ANGULAR/angular_post_004.html">4. Elementos de Angular, descripción y ejemplos</a>
            </li>
            <li></li>
          </ul>
        </div>
        <div class="col-md-1"></div>
      </div>
     `;
    }
}
window.customElements.define('sell-menu-cat-angular', SellMenuCatAngular)