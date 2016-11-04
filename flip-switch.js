"use strict";

customElements.define("flip-switch", class extends HTMLElement {
    static get observedAttributes () {
        return [];
    }

    constructor () {
        super();
        const doc = document.currentScript.ownerDocument;
        const tmpl = doc.querySelector("#fs-tmpl");
        this._root = this.attachShadow({mode: 'open'});
        this._root.appendChild(tmpl.content.cloneNode(true));
        
        this._container = this._root.querySelector('.container');
    }

    connectedCallback() {
        this._addEventListeners();
    }

    disconnectedCallback() {

    }

    flip() {
        this._container.classList.toggle('flipped');
    }

    _addEventListeners () {
        document.addEventListener('click', () => this.flip());
    }
})