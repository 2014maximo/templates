class SellMenuCatCSS extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('css')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <img src="styles/assets/categorias/css.png" alt="" width="auto" height="80" class="drop">
                    </div>
                    <ul class="text-light">
                        <li>
                            <a href="componentes/menu/CSS/css_post_001.html">1. Atributos CSS</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
  }
window.customElements.define('sell-menu-cat-css', SellMenuCatCSS)