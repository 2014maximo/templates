class SellMenuCatPhp extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('php')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/PHP/categoria.html">
                            <img src="styles/assets/categorias/php.png" alt="" width="auto" height="60" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Php pos-z l-menu"><a href="componentes/PHP/php_001.html">INICIO PHP</a></div>
                        <div class="col bg-Php rot-2 l-menu"><a href="componentes/PHP/php_002.html">ELEMENTOS</a></div>
                        <div class="col bg-Php rot-1 l-menu"><a href="componentes/PHP/php_003.html">LIBRERIAS</a></div>
                        <div class="col bg-Php rot-2 l-menu"><a href="componentes/PHP/php_004.html">CRUD</a></div>
                        <div class="col bg-Php pos-z l-menu"><a href="componentes/PHP/php_005.html">CRUD</a></div>
                        <div class="col bg-Php pos-z l-menu"><a href="componentes/PHP/php_006.html">PRUEBAS UNITARIAS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-php', SellMenuCatPhp)