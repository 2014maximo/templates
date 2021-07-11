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
                        <a href="componentes/CSS/categoria.html">
                            <img src="styles/assets/categorias/css.png" alt="" width="auto" height="80" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Css pos-z l-menu"><a href="componentes/CSS/css_001.html">ATRIBUTOS CSS</a></div>
                        <div class="col bg-Css rot-2 l-menu"><a href="componentes/CSS/css_002.html">HOVER SOBRE IMÁGENES</a></div>
                        <div class="col bg-Css rot-1 l-menu"><a href="componentes/CSS/css_003.html">VARIABLES CSS</a></div>
                        <div class="col bg-Css rot-2 l-menu"><a href="componentes/CSS/css_004.html">MEDIA QUERIES</a></div>
                        <div class="col bg-Css pos-z l-menu"><a href="componentes/CSS/css_005.html">SLIDER SOLO CON CSS</a></div>
                        <div class="col bg-Css pos-z l-menu"><a href="componentes/CSS/css_006.html">BOTONES REDES</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
}
window.customElements.define('sell-css', SellMenuCatCSS)