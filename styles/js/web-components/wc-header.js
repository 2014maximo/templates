class SellHeader extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
      this.innerHTML = `
        <div id="head"></div>
        <div class="header fixed-top text-primary pt-3 pb-3 grandes transparenciaUno">
            <div class="row">
                <div class="col-1"></div>
                <div class="col-4">
                    <a href="../../index.html">
                        <h2 class="tituloDos text-light">TRUCOS PA' DESARROLLO</h2>
                    </a>
                </div>
                <div class="col-6">
                    <form class="formUno">
                        <input class="inputUno text-light fuente bg-transparent" type="search" placeholder="Buscar"
                            aria-label="Search">
                    </form>
                </div>
                <div class="col-1"></div>
            </div>
        </div>
        <div class="pos-f-t mobile fixed-top">
            <div class="collapse" id="navbarToggleExternalContent">
                <div class="bg-dark p-4">
                    <form class="formUno tituloDos">
                        <input class="inputUno text-light bg-transparent" type="search" placeholder="Buscar"
                            aria-label="Search">
                    </form>
                </div>
            </div>
            <nav class="navbar navbar-dark bg-dark text-light">
                <h2 class="fuenteDos">TRUCOS PA' DESARROLLO</h2>
                <button class="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
        <a href="#head">
            <div class="go-up">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
        </a>
    `;
    }
}
window.customElements.define('sell-head', SellHeader)