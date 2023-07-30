import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../src/common.js';


export default class IconLinkedin extends LitElement {
    static properties = {
        _hovering: {type: Boolean},
        url: {type: String},
    }

    static styles = [
        baseCSS,
        css`
            svg {
                width: 1.5em;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        return html`
            <a href=${this.url}>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"
                    @mouseenter=${() => this._hovering = true}
                    @mouseleave=${() => this._hovering = false}
                >
                    <path fill=${this._hovering ? 'red' : 'black'} d="M579.999 0H60C27 0 0 27 0 60v520c0 33 27 60 60 60h519.999c33 0 60-27 60-60V60c0-33-27-60-60-60zM239.991 519.999h-79.985V239.992h79.985v280.007zm-40.004-320.012c-22.11 0-39.993-17.882-39.993-39.993 0-22.122 17.882-40.004 39.993-40.004 22.122 0 40.004 17.882 40.004 40.004 0 22.11-17.882 39.993-40.004 39.993zm320.012 320.012h-79.986V360.005c0-22.122-17.893-40.004-40.004-40.004-22.122 0-40.004 17.882-40.004 40.004v159.994h-80.01V239.992h80.01v49.642c16.476-22.654 41.752-49.642 69.993-49.642 49.76 0 90 44.764 90 100.005v180.002z" />
                </svg>
            </a>
        `
    }
}
customElements.define("eo-icon-linkedin", IconLinkedin);