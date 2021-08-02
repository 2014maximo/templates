class SellMenuVicente extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            
        `;
    }
}
window.customElements.define('sell-angular', SellMenuVicente)