class SellMenuCatLinux extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('linux')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                    <a href="componentes/LINUX/categoria.html">
                            <img src="styles/assets/categorias/linux.png" alt="" width="auto" height="60" class="drop">
                        </a>
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Linux pos-z l-menu"><a href="componentes/LINUX/linux_001.html">COMANDOS</a></div>
                        <div class="col bg-Linux rot-2 l-menu"><a href="componentes/LINUX/linux_002.html">DISTROS CARACTERISTICAS</a></div>
                        <div class="col bg-Linux rot-1 l-menu"><a href="componentes/LINUX/linux_003.html">INTELLIJ</a></div>
                        <div class="col bg-Linux rot-2 l-menu"><a href="componentes/LINUX/linux_004.html">LIBRERIAS</a></div>
                        <div class="col bg-Linux pos-z l-menu"><a href="componentes/LINUX/linux_005.html">CRUD</a></div>
                        <div class="col bg-Linux pos-z l-menu"><a href="componentes/LINUX/linux_006.html">MINI APIS</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
    `;
    }
}
window.customElements.define('sell-linux', SellMenuCatLinux)