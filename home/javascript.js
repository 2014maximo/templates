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
                            <img src="styles/assets/categorias/javascript.png" alt="" width="auto" height="60" class="drop">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/javascript_001.html">ELEMENTOS 1</a></div>
                        <div class="col bg-Javascript rot-2 l-menu"><a href="componentes/JAVASCRIPT/javascript_002.html">ELEMENTOS 2</a></div>
                        <div class="col bg-Javascript rot-1 l-menu"><a href="componentes/JAVASCRIPT/javascript_003.html">INTELLIJ</a></div>
                        <div class="col bg-Javascript rot-2 l-menu"><a href="componentes/JAVASCRIPT/javascript_004.html">LIBRERIAS</a></div>
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/javascript_005.html">CRUD</a></div>
                        <div class="col bg-Javascript pos-z l-menu"><a href="componentes/JAVASCRIPT/javascript_006.html">MINI APIS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-javascript', SellMenuCatJavascript)