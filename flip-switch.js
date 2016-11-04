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
        this._front = this._root.querySelector('.front');
        this._back = this._root.querySelector('.back');
        this._ripple = this._root.querySelector('.ripple');
        this._shadow2px = this._root.querySelector('.shadow2px');

        this._onResize = this._onResize.bind(this);
        this._onResize();
    }

    set value(_value) {
        this._value = _value;
        this._front.querySelector('button').textContent = _value;
    }

    get value() {
        return this._value;
    }

    connectedCallback() {
        this._addEventListeners();
    }

    disconnectedCallback() {

    }

    flip() {
        this._container.classList.toggle('flipped');
        this._ripple.classList.toggle('expanded');
        this._shadow2px.classList.toggle('flipped')
    }

    _addEventListeners () {
        this._front.addEventListener('click', () => this.flip());
        this._back.addEventListener('click', e => {

            // If we clic on the back
            if (e.target === e.currentTarget) {
                return;
            }

            this.value = e.target.textContent;
            this.flip();
        })

        window.addEventListener('resize', this._onResize);
    }

    _onResize () {
        const midX = window.innerHeight * 0.5;
        const midY = window.innerHeight * 0.5;

        const radius = Math.sqrt(midX * midX + midY * midY);

        this._ripple.style.width = `${radius * 2}px`;
        this._ripple.style.height = `${radius * 2}px`;
    }
})