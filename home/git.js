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
                    <ul class="text-light">
                        <li>
                            <a href="componentes/GIT/git_post_001.html">1. Descripción básica de comandos usados en Git.</a>
                        </li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="col-md-1"></div>
            </div>
     `;
    }
  }
window.customElements.define('sell-menu-cat-git', SellMenuCatGit)