class SellMenuFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="row">
            <div class="col-md-1"></div>
            <div class="col-md-10">
                <div class="row">
                    <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <div class="text-center">
                            <h2 class="tituloDos text-light sombra-texto">TRUCOS PA' DESARROLLO</h2>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="text-center">
                            <div class="form-group fuenteDos">
                                <form action="mailto:alexuriel.777@gmail.com" method="post" enctype="text/plain">
                                    <input type="email" class="form-control" id="email" placeholder="Email">
                                    <textarea class="form-control" id="texarea" rows="3" placeholder="Comentarios"></textarea>
                                    <button type="submit" id="bt-enviar" class="p-2 btn-block text-light bg-warning sombraUno">Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-1"></div>
        </div>
    `;
    }
}
window.customElements.define('sell-footer', SellMenuFooter);