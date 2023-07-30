import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class ButtonAction extends LitElement {
    static properties = {
        label: {type: String},
        onClick: {type: Function},
        type: {type: String}, // dark | light
    }

    static styles = [
        baseCSS,
        css`
            button {
                color: white;
                padding: 0.5em 2.5em;
                font-size: 1.2em;
                position: relative;
                justify-content: center;
                display: flex;
                align-items: center;
                margin: auto;
            }
            button.dark {
                color: black;
            }
            button.dark:hover {
                color: white;
            }
            
            button .material-icons {
                color: white
            }
            button .material-icons {
                position: absolute;
                font-size: 0.9em;
                right: 2em;
                transition: 0.3s ease-in-out;
                opacity: 0;
            }
            button:hover .material-icons {
                right: 1em;
                opacity: 1;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        return html`
            <button
                class=${"button-action" + (this.type == 'dark' ? ' dark' : ' light')}
                @click=${this.onClick}
            >
                ${this.label}
                <span class="material-icons">
                    arrow_forward_ios
                </span>
            </button>
        `
    }
}
customElements.define("eo-button-action", ButtonAction);