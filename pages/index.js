import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import BasePage from './base.js';
import { baseCSS } from '../src/common.js';

import '../components/Banner.js';
import '../components/PostsGrid.js';
import '../components/ButtonAction.js';
import '../components/SectionTitle.js';

export default class PageIndex extends BasePage {
    static properties = {
        ...BasePage.properties,
        _posts: {type: Array},
    }

    static styles = [
        baseCSS,
        css`
            .latest-posts {
                margin: 3em 0;
            }
        `
    ]

    constructor() {
        super();

        // Define translations
        this._dictionary = {
            en: {
                ...this._dictionary.en,
                title: 'Home',
                subtitle: 'Courses on Tech',
                latestPostsTitle: "Latest Tutorials",
                latestPostsButton: "All Tutorials",
            },
            tr: {
                ...this._dictionary.tr,
                title: 'Anasayfa',
                subtitle: 'Teknoloji Hakkında Kurslar',
                latestPostsTitle: "En Yeni Dersler",
                latestPostsButton: "Tüm Dersler",
            }
        }

        this._posts = [];
    }

    updated(changedProps) {
        if (changedProps.has('_language')) {
            this.getPosts(this._language);
        }
    }
    
    getPosts = async (language) => {
        const postLimit = 3;
        const posts = await fetch(`/data/${language}/posts.json`).then(data => data.json());
        this._posts = this.sortByDate(posts).slice(0, postLimit);
    }
    
    render() {
        return html`
            ${this.getHeader()}

            <eo-banner
                .language=${this._language}
            ></eo-banner>

            <div class="latest-posts">
                <eo-section-title
                    .title=${this.getLocaleText('latestPostsTitle', this._language)}
                ></eo-section-title>
                
                <eo-posts-grid
                    .posts=${this._posts}
                    .columns=${3}
                    .language=${this._language}
                ></eo-posts-grid>
                
                <eo-button-action
                    .label=${this.getLocaleText('latestPostsButton', this._language)}
                    .type=${'dark'}
                    .onClick=${() => window.location = '/tutorials.html'}
                ></eo-button-action>
            </div>

            ${this.getFooter()}
        `
    }
}
customElements.define("eo-page-index", PageIndex);