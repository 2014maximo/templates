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
                        <img src="styles/assets/categorias/css.png" alt="" width="auto" height="80" class="drop">
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Html pos-z l-menu"><a href="componentes/CSS/css_001.html">ATRIBUTOS CSS</a></div>
                        <div class="col bg-Html rot-2 l-menu"><a href="componentes/CSS/css_001.html">$$$$$</a></div>
                        <div class="col bg-Html rot-1 l-menu"><a href="componentes/CSS/css_001.html">$$$$$</a></div>
                        <div class="col bg-Html rot-2 l-menu"><a href="componentes/CSS/css_001.html">$$$$$...</a></div>
                        <div class="col bg-Html pos-z l-menu"><a href="componentes/CSS/css_001.html">$$$$$</a></div>
                        <div class="col bg-Html pos-z l-menu"><a href="componentes/CSS/css_001.html">$$$$$</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
}
window.customElements.define('sell-menu-cat-css', SellMenuCatCSS)