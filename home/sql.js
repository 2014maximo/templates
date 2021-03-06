class SellMenuCatSQL extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="text-right">
            <a href="javascript:void(0)" class="closebtn" onclick="cierreMenu('sql')">&times;</a>
        </div>
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="text-right">
                    <a href="componentes/SQL/categoria.html">
                        <img src="styles/assets/categorias/sql.png" alt="" width="auto" height="80" class="drop h-zoom">
                    </a>
                </div>
                <div class="row m-3">
                    <div class="col bg-Sql pos-z l-menu"><a href="componentes/SQL/sql_001.html">MODELO RELACIONAL Y ENTIDAD RELACIÓN</a></div>
                    <div class="col bg-Sql rot-2 l-menu"><a href="componentes/SQL/sql_002.html">ELEMENTOS Y DESCRIPCIÓN</a></div>
                    <div class="col bg-Sql rot-1 l-menu"><a href="componentes/SQL/sql_003.html">CONSULTAS SQL SERVER...</a></div>
                    <div class="col bg-Sql pos-z l-menu"><a href="componentes/SQL/sql_004.html">CONSULTAS MYSQL</a></div>
                    <div class="col bg-Sql rot-2 l-menu"><a href="componentes/SQL/sql_005.html">INSTALACIÓN MOTORES</a></div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    `;
    }
}
window.customElements.define('sell-sql', SellMenuCatSQL);