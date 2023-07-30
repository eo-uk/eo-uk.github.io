import {LitElement, html, css} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {unsafeHTML} from 'https://cdn.jsdelivr.net/npm/lit-html@2.7.5/directives/unsafe-html.js';
import { baseCSS } from '../src/common.js';
import BasePage from './base.js';

import '../components/ButtonAction.js';
import '../components/Divider.js';

export default class PageTutorial extends BasePage {
    static properties = {
        _post: {type: Object},
    }

    static styles = [
        baseCSS,
        css`
            pre {
                background: #333333;
                color: white;
                padding: 1em;
            }

            .content {
                width: 80%;
                margin: auto;
            }

            aside {
                margin: 3em;
            }

            .content pre {
                overflow: auto;
            }
            
            .title {
                padding: 2em;
                border-bottom: 1px solid #343a4030;
                margin-bottom: 2em;
            }
            .title h2,
            .title small {
                text-align: center;
            }
            .title h2 {
                margin: 0px;
                margin-bottom: 0.5em;
            }
            .title small {
                display: block;
            }

            .divider-horizontal {
                border-bottom: 1px solid rgba(52, 58, 64, 0.19);
            }
        `,
    ]

    constructor() {
        super();

        // Define translations
        this._dictionary = {
            en: {
                title: 'Tutorials',
                buttonLabel: 'Other Tutorials',
            },
            tr: {
                title: 'Dersler',
                buttonLabel: 'Diğer Dersler',
            }
        }

        this._post = {}
    }

    firstUpdated() {
        const postSlug = this.getPostSlug();
        this.displayPost(postSlug);
    }

    updated(changedProps) {
        console.log(changedProps);
        if (changedProps.has('_language') && this._post) {
            this.switchPostLanguage();
        }
    }

    navigateTo = (path) => {
        window.location.replace(path);
    }

    switchPostLanguage = async () => {
        const posts = await this.getPosts(this._language);
        
        // get post with same id from other language posts
        const newPost = posts.find(post => post.id == this._post.id);

        if (!newPost) {
            window.location = "/tutorials.html";
        }
        
        this._post = newPost;
    }

    getPostSlug() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('post');
    }

    getPosts = async (language) => {
        return await fetch(`/data/${language}/posts.json`).then(data => data.json());
    }

    displayPost = async (postSlug) => {
        const posts = await this.getPosts(this._language);
        this._post = posts.find((post) => post.slug == postSlug);
    }

    formatDate(dateString) {
        const date = new Date(Date.parse(dateString));
        const months = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
          ];
        
        const day = date.getDate().toString().padStart(2, "0");
        const month = months[date.getMonth()];
        const year = date.getFullYear();
        
        return `${day} ${month} ${year}`; 
    }

    render() {
        return html`
            ${this.getHeader()}

            <div class="content">

                <div class="title">
                    <h2>${this._post.title || 'Post Not Found'}</h2>

                    <small>${this.formatDate(this._post.date)}</small>
                </div>

                <p>${unsafeHTML(this._post.body)}</p>

            </div>

            <aside>
            
                <eo-divider
                ></eo-divider>                

                <eo-button-action
                    .label=${this.getLocaleText('buttonLabel', this._language)}
                    .type=${'dark'}
                    .onClick=${() => window.location = '/tutorials.html'}
                ></eo-button-action>
            </aside>

            ${this.getFooter()}
        `
    }
}
customElements.define("eo-page-tutorial", PageTutorial);