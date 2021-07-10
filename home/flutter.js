class SellMenuCatFlutter extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('flutter')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/FLUTTER/categoria.html">
                            <img src="styles/assets/categorias/flutter_text_white.png" alt="" width="auto" height="40" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Flutter pos-z l-menu"><a href="componentes/FLUTTER/flutter_001.html">INSTALACIÓN</a></div>
                        <div class="col bg-Flutter rot-2 l-menu"><a href="componentes/FLUTTER/flutter_002.html">ELEMENTOS</a></div>
                        <div class="col bg-Flutter rot-1 l-menu"><a href="componentes/FLUTTER/flutter_003.html">CONSTRUCCIÓN APK</a></div>
                        <div class="col bg-Flutter rot-2 l-menu"><a href="componentes/FLUTTER/flutter_004.html">FLUTTER WEB</a></div>
                        <div class="col bg-Flutter pos-z l-menu"><a href="componentes/FLUTTER/flutter_005.html">ESTILOS</a></div>
                        <div class="col bg-Flutter pos-z l-menu"><a href="componentes/FLUTTER/flutter_006.html">PRUEBAS UNITARIAS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
}
window.customElements.define('sell-flutter', SellMenuCatFlutter)