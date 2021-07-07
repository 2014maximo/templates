class SellMenuCatDart extends HTMLElement {
    constructor () {
      super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('dart')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/DART/categoria.html">
                            <img src="styles/assets/categorias/dart_text_white.png" alt="" width="auto" height="40" class="drop">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Dart pos-z l-menu"><a href="componentes/DART/dart_001.html">INSTALACIÓN DE DART</a></div>
                        <div class="col bg-Dart rot-2 l-menu"><a href="componentes/DART/dart_001.html">ELEMENTOS Y DESCRIPCIÓN</a></div>
                        <div class="col bg-Dart rot-1 l-menu"><a href="componentes/DART/dart_001.html">CRUD</a></div>
                        <div class="col bg-Dart rot-2 l-menu"><a href="componentes/DART/dart_001.html">TERMINOS AVANZADOS</a></div>
                        <div class="col bg-Dart pos-z l-menu"><a href="componentes/DART/dart_001.html">CONTEXTO DART</a></div>
                        <div class="col bg-Dart pos-z l-menu"><a href="componentes/DART/dart_001.html">PRUEBAS UNITARIAS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
}
window.customElements.define('sell-dart', SellMenuCatDart)