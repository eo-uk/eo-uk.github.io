import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class LanguageSwitch extends LitElement {
    static properties = {
        language: {type: Array},
        setLanguage: {type: Function},
    }

    static styles = [
        baseCSS,
        css`
            button {
                padding: 0;
                margin: 0;
                border: 0;
                background: none;
                height: 1.4em;
            }
            button img {
                width: 2em;
                height: 1.4em;
            }
        `
    ]

    constructor() {
        super();
    }

    switchLanguage = () => {
        const newLanguage = this.language == 'en' ? 'tr' : 'en';
        localStorage.setItem('language', newLanguage);
        this.setLanguage(newLanguage);
    }

    render() {
        return html`
            <button
                @click=${this.switchLanguage}
            >
                <img src=${`../assets/images/flag-${this.language == 'en' ? 'tr' : 'en'}.png` } />
            </button>
        `
    }
}
customElements.define("eo-language-switch", LanguageSwitch);