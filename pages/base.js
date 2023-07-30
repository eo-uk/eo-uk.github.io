import {LitElement, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {routes} from '../src/routes.js';

import '../components/Navbar.js';
import '../components/LanguageSwitch.js';
import '../components/Footer.js';
import '../components/HeaderTop.js';


export default class BasePage extends LitElement {
    static properties = {
        _language: {type: String},
        _dictionary: {type: Object},
    }

    constructor() {
        super();
        this._language = localStorage.getItem('language') || "en";
        console.log('TTEST')
    }

    setLanguage = (language) => {
        this._language = language;
    }

    getLocaleText(text, language) {
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
        const DICTIONARY = {
            en: {
                Home: 'Home',
                About: 'About',
                Tutorials: 'Tutorials',
                Contact: 'Contact',
            },
            tr: {
                Home: 'Anasayfa',
                About: 'Hakkımda',
                Tutorials: 'Dersler',
                Contact: 'İletişim',
            }
        }

        const items = routes.map(route => {
            return ({
                ...route,
                label: DICTIONARY[this._language][route.title],
            })
        })

        console.log('test', items)

        return html`
            <header>
                <eo-header-top
                    .language=${this._language}
                    .setLanguage=${this.setLanguage}
                ></eo-header-top>

                <eo-navbar
                    .routes=${items}
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