class SellMenuCategorias extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
      <div class="row d-none d-md-block">
      <div class="col-md-1"></div>
      <div class="col-md-10">
    
        <div class="row flex-lg-row-reverse">
          <div class="col-lg-4">
            <h2 class="text-light categorias">CATEGORIAS</h2>
          </div>
          <div class="col-lg-8" data-aos="flip-left">
              <div class="p-4 d-flex justify-content-around align-items-center text-center drop" style="background-image:url('./styles/assets/categorias/tablaMenu1.png');background-repeat:no-repeat;background-size:cover;">
                <div class="linkCategoria" onClick="menuUno('android', '80%')">
                  <img src="styles/assets/categorias/android-studio_text_white.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('angular', '80%')">
                  <img src="styles/assets/categorias/angular.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('css', '80%')">
                  <img src="styles/assets/categorias/css.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('dart', '80%')">
                  <img src="styles/assets/categorias/dart_text_white.png" alt="" width="auto" height="40" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>

              </div>
    
              <div class="p-4 d-flex justify-content-around align-items-center text-center drop" style="background-image: url('./styles/assets/categorias/tablaMenu1.png');background-repeat: no-repeat;background-size: cover;">
                <div class="linkCategoria" onClick="menuUno('develop', '80%')" data-anijs="if: mouseover, do: swing animated">
                  <img src="styles/assets/categorias/devlop.png" alt="" width="auto" height="60" class="drop">
                  <h2 class="fuenteSeis colorDevelop text-shadow-a">Developer</h2>
                </div>
                <div class="linkCategoria" onClick="menuUno('flutter', '80%')">
                  <img src="styles/assets/categorias/flutter_text_white.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('git', '80%')">
                  <img src="styles/assets/categorias/git-light.png" alt="" width="auto" height="60" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('html', '80%')">
                  <img src="styles/assets/categorias/html.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
              </div>
    
              <div class="p-3 d-flex justify-content-around align-items-center text-center drop" style="background-image:url('./styles/assets/categorias/tablaMenu1.png');background-repeat:no-repeat;background-size:cover;">
                <div class="linkCategoria" onClick="menuUno('java', '80%')">
                  <img src="styles/assets/categorias/logo-java.png" alt="" width="auto" height="125" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('javascript', '80%')">
                  <img src="styles/assets/categorias/javascript.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('linux', '80%')">
                  <img src="styles/assets/categorias/linux.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
              </div>
    
              <div class="p-3 d-flex justify-content-around align-items-center text-center drop" style="background-image:url('./styles/assets/categorias/tablaMenu1.png');background-repeat:no-repeat;background-size:cover;">
                <div class="linkCategoria" onClick="menuUno('sql', '80%')">
                  <img src="styles/assets/categorias/sql.png" alt="" width="auto" height="55" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('php', '80%')">
                  <img src="styles/assets/categorias/php.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
                <div class="linkCategoria" onClick="menuUno('wordpress', '80%')">
                  <img src="styles/assets/categorias/wordpress2.png" alt="" width="auto" height="80" class="drop" data-anijs="if: mouseover, do: swing animated">
                </div>
              </div>
          </div>
        </div>
      </div>
      <div class="col-md-1"></div>
    </div>
    `;
    }
  }
window.customElements.define('sell-menu', SellMenuCategorias)