import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class Banner extends LitElement {
    static properties = {
        language: {type: String},
        _dictionary: {type: Object},
    }

    static styles = [
        baseCSS,
        css`
            .banner {
                position: relative;
                min-height: 30em;
                background: rgba(0, 0, 0, 0.7) url("https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80");
                background-repeat: no-repeat;
                background-size: cover;
                background-blend-mode: darken;
                text-align: center;
            }
            
            .banner::after {
                /*content: "";*/
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: #000000af;
            }
            .banner h3 {
                font-weight: normal;
            }
            .banner .content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                gap: 1em;
                padding: 8em 1em;
                color: white;
            }
            .banner h2 {
                font-size: 2.5em;
                margin: 0;
            }
            .banner .banner-btn {
                color: white;
                padding: 0.5em 2.5em;
                font-size: 1.2em;

                position: relative;
                justify-content: center;
                display: flex;
                align-items: center;
            }
            .banner .banner-btn .material-icons {
                position: absolute;
                font-size: 0.9em;
                right: 2em;
                transition: 0.3s ease-in-out;
                opacity: 0;
            }
            .banner .banner-btn:hover .material-icons {
                right: 1em;
                opacity: 1;
            }
        `
    ]

    constructor() {
        super();

        // Define translations
        this._dictionary = {
            en: {
                title: 'Bits on Software Development',
                subtitle: 'Tutorials on developing apps and video games',
                buttonLabel: 'See All',
            },
            tr: {
                title: 'Yazılım Hakkında Yazılar',
                subtitle: 'Uygulama ve oyun geliştirme dersleri',
                buttonLabel: 'Tüm Dersler',
            }
        }
    }

    render() {
        return html`
            <div class="banner">
                <div class="content">
                    <h2>${this._dictionary[this.language].title}</h2>
                    <h3>${this._dictionary[this.language].subtitle}</h3>
                    <button
                        class="banner-btn"
                        @click=${() => window.location = '/tutorials.html'}
                    >
                        ${this._dictionary[this.language].buttonLabel}
                        <span class="material-icons">
                            arrow_forward_ios
                        </span>
                    </button>
                </div>
            </div>
        `
    }
}
customElements.define("eo-banner", Banner);