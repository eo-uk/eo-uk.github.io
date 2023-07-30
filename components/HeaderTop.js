import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import './IconLinkedin.js';
import './IconGithub.js';
import './IconEmail.js';
import './Divider.js';
import './LanguageSwitch.js';
import './Logo.js';
import { baseCSS } from '../src/common.js';

export default class HeaderTop extends LitElement {
    static properties = {
        language: {type: Array},
        setLanguage: {type: Function},
    }
    
    static styles = [
        baseCSS,
        css`
            .header-top {
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .header-top .buttons {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 1em;
                padding: 0;
                padding-right: 1em;
            }
        `
    ]

    constructor() {
        super();
    }

    render() {
        return html`
            <div class="header-top">
                <eo-logo
                ></eo-logo>

                <div class="buttons">
                    <eo-icon-github
                        .url=${"https://github.com/eo-uk"}
                    ></eo-icon-github>

                    <eo-icon-linkedin
                        .url=${"https://www.linkedin.com/in/ekin-o-5b82a4145/"}
                    ></eo-icon-linkedin>

                    <eo-divider
                        .orientation=${"vertical"}
                    ></eo-divider>

                    <eo-language-switch
                        .language=${this.language}
                        .setLanguage=${this.setLanguage}
                    ></eo-language-switch>
                </div>
            </div>
        `
    }
}
customElements.define("eo-header-top", HeaderTop);