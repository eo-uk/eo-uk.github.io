import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


export default class Divider extends LitElement {
    static properties = {
        orientation: {type: String}, // "vertical" || "horizontal"
    }

    static styles = [
        css`
            .divider.vertical {
                border-left: 1px solid #dbdbdb;
                height: 2em;
                margin: 0 0.5em;
            }
            .divider.horizontal {
                margin: 3em;
                border-bottom: 1px solid rgba(52, 58, 64, 0.19);
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        return html`
            <div class=${"divider" + (this.orientation == "vertical" ? " vertical" : " horizontal")}
            ></div>
        `
    }
}
customElements.define("eo-divider", Divider);