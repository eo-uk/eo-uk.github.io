import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class Footer extends LitElement {
    static properties = {
        language: {type: String},
        _dictionary: {type: Object},
    }

    static styles = [
        baseCSS,
        css`
            footer {
                padding: 3em;
                text-align: center;
                color: white;
                background-color: #292a2d;
            }
        `
    ]

    constructor() {
        super();

        // Define translations
        this._dictionary = {
            en: {
                copyrightText: 'Copyright 2023 by Ekin Odabas. All Rights Reserved.',
            },
            tr: {
                copyrightText: 'Copyright 2023 by Ekin Odabas. Tüm hakları saklıdır.',
            }
        }
    }

    render() {
        return html`
            <footer>
                <p>${this._dictionary[this.language].copyrightText}</p>
            </footer>
        `
    }
}
customElements.define("eo-footer", Footer);