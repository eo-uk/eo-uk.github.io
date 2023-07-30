import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import BasePage from './_base.js';

import '../components/SectionTitle.js';

export default class PageAbout extends BasePage {
    constructor() {
        super();

        // Define translations
        this._dictionary = {
            en: {
                title: 'About',
                subtitle: 'About me...',
            },
            tr: {
                title: 'Hakkımda',
                subtitle: 'Hakkımda sayfası...',
            }
        }
    }

    render() {
        return html`
            ${this.getHeader()}

            <eo-section-title
                .title=${this.getLocaleText('title', this._language)}
            ></eo-section-title>

            <p>${this.getLocaleText('subtitle', this._language)}</p>

            ${this.getFooter()}
        `
    }
}
customElements.define("eo-page-about", PageAbout);