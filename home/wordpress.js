class SellMenuCatWordpress extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('wordpress')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/WORDPRESS/categoria.html">
                            <img src="styles/assets/categorias/wordpress2.png" alt="" width="auto" height="60" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Wordpress pos-z l-menu"><a href="componentes/WORDPRESS/wordpress_001.html">INSTALACIÓN</a></div>
                        <div class="col bg-Wordpress rot-2 l-menu"><a href="componentes/WORDPRESS/wordpress_002.html">PLUGINES DESCRIPCION</a></div>
                        <div class="col bg-Wordpress rot-1 l-menu"><a href="componentes/WORDPRESS/wordpress_003.html">ELEMENTOS</a></div>
                        <div class="col bg-Wordpress rot-2 l-menu"><a href="componentes/WORDPRESS/wordpress_004.html">WOOCOMMERCE</a></div>
                        <div class="col bg-Wordpress pos-z l-menu"><a href="componentes/WORDPRESS/wordpress_005.html">BLOGS</a></div>
                        <div class="col bg-Wordpress pos-z l-menu"><a href="componentes/WORDPRESS/wordpress_006.html">ENTORNO GRÁFICO</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-wordpress', SellMenuCatWordpress)