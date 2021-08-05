class SellMenuCatJava extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('java')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <a href="componentes/JAVA/categoria.html">
                            <img src="styles/assets/categorias/logo-java.png" alt="" width="auto" height="90" class="drop h-zoom">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Java pos-z l-menu"><a href="componentes/JAVA/java_001.html">INSTALACIÓN</a></div>
                        <div class="col bg-Java rot-2 l-menu"><a href="componentes/JAVA/java_002.html">ECLIPSE</a></div>
                        <div class="col bg-Java rot-1 l-menu"><a href="componentes/JAVA/java_003.html">INTELLIJ</a></div>
                        <div class="col bg-Java rot-2 l-menu"><a href="componentes/JAVA/java_004.html">LIBRERIAS</a></div>
                        <div class="col bg-Java pos-z l-menu"><a href="componentes/JAVA/java_005.html">CRUD</a></div>
                        <div class="col bg-Java pos-z l-menu"><a href="componentes/JAVA/java_006.html">MINI APIS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-java', SellMenuCatJava)