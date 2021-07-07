class SellMenuFooter extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `

    `;
    }
}
window.customElements.define('sell-footer', SellMenuFooter);