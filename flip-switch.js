class FlipSwitch extends HTMLElement {
    static get observedAttributes () {
        return [];
    }

    constructor () {
        super();
        const doc = document.currentScript.ownerDocument;
        const template = doc.querySelector("#fs-tmpl");
        this._root = this.attachShadow({mode: 'open'});
        this._root.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this._addEventListeners();
    }

    disconnectedCallback() {

    }

    flip() {
        
    }

    _addEventListeners () {
        
    }

    _onResize () {
        
    }
}

customElements.define("flip-switch", FlipSwitch);