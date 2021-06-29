class SellMenuCatHTML extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('html')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                    <a href="componentes/HTML/categoria.html">
                            <img src="styles/assets/categorias/html.png" alt="" width="auto" height="60" class="drop">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Html pos-z l-menu"><a href="componentes/HTML/html_001.html">ETIQUETAS HTML</a></div>
                        <div class="col bg-Html rot-2 l-menu"><a href="componentes/HTML/html_001.html">$$$$$</a></div>
                        <div class="col bg-Html rot-1 l-menu"><a href="componentes/HTML/html_001.html">$$$$$</a></div>
                        <div class="col bg-Html rot-2 l-menu"><a href="componentes/HTML/html_001.html">$$$$$...</a></div>
                        <div class="col bg-Html pos-z l-menu"><a href="componentes/HTML/html_001.html">$$$$$</a></div>
                        <div class="col bg-Html pos-z l-menu"><a href="componentes/HTML/html_001.html">$$$$$</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-menu-cat-html', SellMenuCatHTML)