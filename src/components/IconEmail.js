import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class IconEmail extends LitElement {
    static properties = {
        _hovering: {type: Boolean},
    }

    static styles = [
        baseCSS,
        css`
            svg {
                width: 1.8em;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        return html`
            <a href="#">
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="122.88px" height="78.607px" viewBox="0 0 122.88 78.607" enable-background="new 0 0 122.88 78.607" xml:space="preserve"
                    @mouseenter=${() => this._hovering = true}
                    @mouseleave=${() => this._hovering = false}
                >
                    <g>
                        <path fill=${this._hovering ? 'red' : 'black'} fill-rule="evenodd" clip-rule="evenodd" d="M61.058,65.992l24.224-24.221l36.837,36.836H73.673h-25.23H0l36.836-36.836 L61.058,65.992L61.058,65.992z M1.401,0l59.656,59.654L120.714,0H1.401L1.401,0z M0,69.673l31.625-31.628L0,6.42V69.673L0,69.673z M122.88,72.698L88.227,38.045L122.88,3.393V72.698L122.88,72.698z"/>
                    </g>
                </svg>

                
            </a>
        `
    }
}
customElements.define("eo-icon-email", IconEmail);