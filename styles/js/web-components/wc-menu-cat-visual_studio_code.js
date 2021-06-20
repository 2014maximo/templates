class SellMenuCatVisualStudioCode extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('visual_studio_code')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <img src="styles/assets/categorias/visual_studio_code_text_white.png" alt="" width="auto" height="40" class="drop">
                    </div>
                    <ul class="text-light">
                        <li>
                            <a href="componentes/menu/VISUAL STUDIO CODE/visual_studio_code_post_001.html">1. Snipets en Visual Studio Code.</a>
                        </li>
                        <li>
                            <a href="componentes/menu/VISUAL STUDIO CODE/visual_studio_code_post_002.html">2. Teclas de acceso rápido en Visual Studio Code.</a>
                        </li>
                    </ul>
                </div>
                <div class="col-md-1"></div>
            </div>
     `;
    }
  }
window.customElements.define('sell-menu-cat-visual-studio-code', SellMenuCatVisualStudioCode)