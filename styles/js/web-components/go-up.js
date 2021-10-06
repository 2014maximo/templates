class SellGoUp extends HTMLElement {
    constructor () {
        super();
    }
    
    connectedCallback () {
    this.innerHTML = `
        <a href="#head">
            <div class="go-up">
                <i class="fa fa-chevron-up" aria-hidden="true"></i>
            </div>
        </a>
    `;
    }
}
window.customElements.define('sell-go-up', SellGoUp);