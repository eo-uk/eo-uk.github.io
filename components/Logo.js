import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../src/common.js';


export class Logo extends LitElement {
    static properties = {
    }
    
    static styles = [
        baseCSS,
        css`
            .logo {
                margin-left: 1em;
            }
            .logo a {
                text-decoration: none;
                color: black;
            }
            .logo h1 {
                border-bottom: 5px solid red;
                margin: 0;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="logo">
                <a href="/">
                    <h1>EO-UK</h1>
                </a>
            </div>
        `
    }
}
customElements.define("eo-logo", Logo);