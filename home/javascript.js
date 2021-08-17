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
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/jscript_001.html"><del>DESCRIPCIÓN Y ELEMENTOS</del></a></div>
                        <div class="col bg-Javascript rot-2 l-menu"><a href="componentes/JAVASCRIPT/jscript_002.html"><del>BUSCADOR JAVASCRIPT</del></a></div>
                        <div class="col bg-Javascript rot-1 l-menu"><a href="componentes/JAVASCRIPT/jscript_003.html">ITERANDO ARRAYS</a></div>
                        <div class="col bg-Javascript rot-2 l-menu"><a href="componentes/JAVASCRIPT/jscript_004.html"><del>LIBRERIAS</del></a></div>
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/jscript_005.html"><del>CRUD</del></a></div>
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/jscript_006.html"><del>MINI APIS</del></a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-javascript', SellMenuCatJavascript)