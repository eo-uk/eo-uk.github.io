import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import BasePage from './base.js';

import '../components/SectionTitle.js';
import '../components/ContactForm.js';

export default class PageContact extends BasePage {
    constructor() {
        super();

        // Define translations
        this._dictionary = {
            en: {
                title: 'Contact',
            },
            tr: {
                title: 'İletişim',
            }
        }
    }

    render() {
        return html`
            ${this.getHeader()}

            <eo-section-title
                .title=${this.getLocaleText('title', this._language)}
            ></eo-section-title>

            <eo-contact-form
                .language=${this._language}
            ></eo-contact-form>

            ${this.getFooter()}
        `
    }
}
customElements.define("eo-page-contact", PageContact);