class SellMenuCategorias extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-10">
    
        <div class="row">
          <div class="col-md-8">
            <div class="menu-categorias p-5">
    
              <div class="d-flex justify-content-between mb-5 text-center row">
                <div class="linkCategoria col" onClick="menuUno('angular', '80%')">
                  <img src="styles/assets/categorias/angular.png" alt="" width="auto" height="80" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('html', '80%')">
                  <img src="styles/assets/categorias/html.png" alt="" width="auto" height="80" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('css', '80%')">
                  <img src="styles/assets/categorias/css.png" alt="" width="auto" height="80" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('javascript', '80%')">
                  <img src="styles/assets/categorias/javascript.png" alt="" width="auto" height="80" class="drop">
                </div>
              </div>
    
              <div class="d-flex justify-content-around mb-5 text-center row">
                <div class="linkCategoria col" onClick="menuUno('php', '80%')">
                  <img src="styles/assets/categorias/php.png" alt="" width="auto" height="80" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('wordpress', '80%')">
                  <img src="styles/assets/categorias/wordpress2.png" alt="" width="auto" height="80" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('linuxmint', '80%')">
                  <img src="styles/assets/categorias/linuxmint.png" alt="" width="auto" height="80" class="drop">
                </div>
              </div>
    
              <div class="d-flex justify-content-around mb-5 text-center row">
                <div class="linkCategoria col" onClick="menuUno('debian', '80%')">
                  <img src="styles/assets/categorias/debian.png" alt="" width="auto" height="80" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('visual_studio_code', '80%')">
                  <img src="styles/assets/categorias/visual_studio_code_text_white.png" alt="" width="auto" height="100" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('flutter', '80%')">
                  <img src="styles/assets/categorias/flutter_text_white.png" alt="" width="auto" height="100" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('dart', '80%')">
                  <img src="styles/assets/categorias/dart_text_white.png" alt="" width="auto" height="40" class="drop">
                </div>
              </div>
    
              <div class="d-flex justify-content-around mb-5 text-center row">
                <div class="linkCategoria col" onClick="menuUno('develop', '80%')">
                  <img src="styles/assets/categorias/devlop.png" alt="" width="auto" height="40" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('git', '80%')">
                  <img src="styles/assets/categorias/git-light.png" alt="" width="auto" height="40" class="drop">
                </div>
                <div class="linkCategoria col" onClick="menuUno('java', '80%')">
                  <img src="styles/assets/categorias/logo-java.png" alt="" width="auto" height="120" class="drop">
                </div>
              </div>
    
            </div>
          </div>
          <div class="col-md-4">
            <h2 class="text-light categorias">CATEGORIAS</h2>
          </div>
        </div>
    
      </div>
      <div class="col-md-1"></div>
    </div>
     `;
    }
  }
window.customElements.define('sell-menu', SellMenuCategorias)