class SellMenuCatHTML extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div class="text-right">
      <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('html')">&times;</a>
  </div>
  <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
          <div class="text-right">
              <img src="styles/assets/categorias/html.png" alt="" width="auto" height="40" class="drop">
          </div>
          <ul class="text-light">
              <li>
                  <a href="componentes/HTML/html_post_0001.html">1. Etiquetas y su descripción.</a>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
          </ul>
      </div>
      <div class="col-md-1"></div>
  </div>
     `;
    }
  }
window.customElements.define('sell-menu-cat-html', SellMenuCatHTML)