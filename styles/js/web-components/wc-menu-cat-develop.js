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
        <ul class="text-light">
          <li>
            <a href="componentes/menu/DEVELOP/develop_post_001.html">1. Super recursos de internet</a>
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
window.customElements.define('sell-menu-cat-develop', SellMenuCatDevelop)