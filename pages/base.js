import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

import '../components/Navbar.js';
import '../components/Footer.js';
import '../components/HeaderTop.js';


export default class BasePage extends LitElement {
    static properties = {
        _language: {type: String},
        _dictionary: {type: Object},
        _routes: {type: Array},
    }

    constructor() {
        super();

        this._dictionary = {
            en: {
                navbarHome: 'Home',
                navbarAbout: 'About',
                navbarTutorials: 'Tutorials',
                navbarContact: 'Contact',
            },
            tr: {
                navbarHome: 'Anasayfa',
                navbarAbout: 'Hakkımda',
                navbarTutorials: 'Dersler',
                navbarContact: 'İletişim',
            }
        }

        // Get user's latest language choice
        this._language = localStorage.getItem('language') || "en";
    }

    setLanguage = (language) => {
        this._language = language;
    }

    getLocaleText = (text, language) => {
        return this._dictionary[language][text];
    }

    sortByDate(posts) {
        // Sort from latest to oldest
        posts.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateB - dateA;
        });
        return posts;
    }

    getHeader() {
        return html`
            <header>
                <eo-header-top
                    .language=${this._language}
                    .setLanguage=${this.setLanguage}
                ></eo-header-top>

                <eo-navbar
                    .routes=${[
                        {
                            url: '/',
                            label: this.getLocaleText('navbarHome', this._language),
                        },
                        {
                            url: '/tutorials.html',
                            label: this.getLocaleText('navbarTutorials', this._language),
                        },
                        {
                            url: '/contact.html',
                            label: this.getLocaleText('navbarContact', this._language),
                        },
                    ]}
                ></eo-navbar>
            <header>
        `
    }

    getFooter() {
        return html`
            <eo-footer
                .language=${this._language}
            ></eo-footer>
        `
    }
}