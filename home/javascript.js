class SellMenuCatJavascript extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('javascript')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/JAVASCRIPT/categoria.html">
                            <img src="styles/assets/categorias/javascript.png" alt="" width="auto" height="60" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/jscript_001.html">DESCRIPCIÓN Y ELEMENTOS</a></div>
                        <div class="col bg-Javascript rot-2 l-menu"><a href="componentes/JAVASCRIPT/jscript_002.html">BUSCADOR JAVASCRIPT</a></div>
                        <div class="col bg-Javascript rot-1 l-menu"><a href="componentes/JAVASCRIPT/jscript_003.html">ITERANDO ARRAYS</a></div>
                        <div class="col bg-Javascript rot-2 l-menu"><a href="componentes/JAVASCRIPT/jscript_004.html">LIBRERIAS</a></div>
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/jscript_005.html">CRUD</a></div>
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/jscript_006.html">MINI APIS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-javascript', SellMenuCatJavascript)