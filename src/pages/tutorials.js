import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import BasePage from './base.js';

import '../components/SectionTitle.js';
import '../components/PostsGrid.js';

export default class PageTutorials extends BasePage {
    static properties = {
        _posts: {type: Array},
    }

    constructor() {
        super();
        this._posts = [];

        // Define translations
        this._dictionary = {
            en: {
                ...this._dictionary.en,
                title: 'Tutorials',
            },
            tr: {
                ...this._dictionary.tr,
                title: 'Dersler',
            }
        }
    }

    updated(changedProps) {
        if (changedProps.has('_language')) {
            this.getPosts(this._language);
        }
    }

    getPosts = async (language) => {
        const posts = await fetch(`/api/${language}/posts.json`).then(data => data.json());
        this._posts = this.sortByDate(posts);
    }


    render() {
        return html`
            ${this.getHeader()}

            <eo-section-title
                .title=${this.getLocaleText('title', this._language)}
            ></eo-section-title>

            <eo-posts-grid
                .posts=${this._posts}
                .columns=${4}
                .language=${this._language}
            ></eo-posts-grid>

            ${this.getFooter()}
        `
    }
}
customElements.define("eo-page-tutorials", PageTutorials);