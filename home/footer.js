class SellMenuFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="footer">
            <div class="text-center">
                <h2 class="fuenteDos text-primary">TRUCOS PA' DESARROLLO</h2>
            <div class="form-group fuenteDos transparenciaUno">
                <input type="email" class="form-control transparenciaUno" id="email" placeholder="Email">
                <textarea class="form-control transparenciaUno" id="texarea" rows="3" placeholder="Comentarios"></textarea>
                <div class="row transparenciaUno">
                    <div class="col-md-4"></div>
                    <div class="col-md-4">
                        <button type="submit" class="btn-comentarios m-3 btn-block">Enviar</button>
                    </div>
                    <div class="col-md-4"></div>
            </div>
        </div>
    `;
    }
}
window.customElements.define('sell-footer', SellMenuFooter);