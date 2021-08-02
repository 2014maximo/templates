class SellMenuCategoriasSM extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="row d-md-none">
                <div class="col-md-12">
                    <h2 class="text-light categorias">CATEGORIAS</h2>
                </div>
                <div class="col-md-12">
                    <div class="row m-3">
                        <div class="col bg-light pos-z l-menu"><a href="componentes/ANDROID/categoria.html" class="t2">ANDROID</a></div>
                        <div class="col bg-light rot-2 l-menu"><a href="componentes/ANGULAR/categoria.html" class="t2">ANGULAR</a></div>
                        <div class="col bg-light rot-1 l-menu"><a href="componentes/CSS/categoria.html" class="t2">CSS</a></div>
                        <div class="col bg-light rot-2 l-menu"><a href="componentes/DART/categoria.html" class="t2">DART</a></div>
                        <div class="col bg-light pos-z l-menu"><a href="componentes/DEVELOP/categoria.html" class="t2">DEVELOP</a></div>
                        <div class="col bg-light pos-z l-menu"><a href="componentes/FLUTTER/categoria.html" class="t2">FLUTTER</a></div>
                        <div class="col bg-light pos-z l-menu"><a href="componentes/GIT/categoria.html" class="t2">GIT</a></div>
                        <div class="col bg-light pos-z l-menu"><a href="componentes/HTML/categoria.html" class="t2">HTML</a></div>
                        <div class="col bg-light rot-1 l-menu"><a href="componentes/JAVA/categoria.html" class="t2">JAVA</a></div>
                        <div class="col bg-light rot-2 l-menu"><a href="componentes/JAVASCRIPT/categoria.html" class="t2">JAVASCRIPT</a></div>
                        <div class="col bg-light rot-2 l-menu"><a href="componentes/LINUX/categoria.html" class="t2">LINUX</a></div>
                        <div class="col bg-light rot-1 l-menu"><a href="componentes/PHP/categoria.html" class="t2">PHP</a></div>
                        <div class="col bg-light pos-z l-menu"><a href="componentes/SQL/categoria.html" class="t2">SQL</a></div>
                        <div class="col bg-light rot-2 l-menu"><a href="componentes/WORDPRESS/categoria.html" class="t2">WORDPRESS</a></div>
                    </div>
                </div>
            </div>
        `;
    }
}
window.customElements.define('sell-menu-sm', SellMenuCategoriasSM)