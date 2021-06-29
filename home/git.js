class SellMenuCatGit extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
        this.innerHTML = `
            <div class="text-right">
                <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('git')">&times;</a>
            </div>
            <div class="row">
                <div class="col-md-1"></div>
                <div class="col-md-10">
                    <div class="text-right">
                        <img src="styles/assets/categorias/git-light.png" alt="" width="auto" height="40" class="drop">
                    </div>
                    <div class="row m-3">
                        <div class="col bg-Git pos-z l-menu"><a href="componentes/GIT/flutter_001.html">INSTALACIÓN</a></div>
                        <div class="col bg-Git rot-2 l-menu"><a href="componentes/GIT/flutter_002.html">COMANDOS</a></div>
                        <div class="col bg-Git rot-1 l-menu"><a href="componentes/GIT/flutter_003.html">INTREGRACIÓN</a></div>
                        <div class="col bg-Git rot-2 l-menu"><a href="componentes/GIT/flutter_004.html">PAGINA WEB CON GIT</a></div>
                        <div class="col bg-Git pos-z l-menu"><a href="componentes/GIT/flutter_005.html">GITHUB VS GITLAB</a></div>
                        <div class="col bg-Git pos-z l-menu"><a href="componentes/GIT/flutter_006.html">VENTAJAS VERSION PAGA</a></div>
                    </div>
                </div>
                <div class="col-md-1"></div>
            </div>
        `;
    }
}
window.customElements.define('sell-git', SellMenuCatGit)