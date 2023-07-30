import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../src/common.js';


export default class ContactForm extends LitElement {
    static properties = {
        _dictionary: {type: Object},
        _focusedEmail: {type: Boolean},
        _focusedMessage: {type: Boolean},
        _formEmailHasText: {type: String},
        _formMessageHasText: {type: String},
        language: {type: String},
    }

    static styles = [
        baseCSS,
        css`
            form {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 1em;
                /*
                margin-left: 10vw;
                margin-right: 10vw;
                margin-bottom: 5em;
                */
                max-width: 500px;
                margin: auto auto 5em;
                padding: 2em 1em;
                border-radius: 7px;
                box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
            }
            form .form-group {
                position: relative;
                width: 100%;
            }
            form .form-group input,
            form .form-group textarea {
                width: 100%;
                line-height: 2em;
                border-radius: 3px;
                /*border: 1px solid rgb(171, 171, 171);*/
                border: 1px solid rgb(204, 204, 204);
                padding: 0.5em;
                transition: 0.3s;
                resize: none;
            }
            form .form-group input:focus,
            form .form-group input:focus-visible,
            form .form-group textarea:focus,
            form .form-group textarea:focus-visible {
                outline: none;
            }
            form .form-group label {
                position: absolute;
                left: 0.5em;
                top: 0.6em;
                background: none;
                transition: 0.3s;
                pointer-events: none;
                padding: 0 0.5em;
                color: #5a5a5a;
                user-select: none;
            }
            form .form-group.focused label {
                left: 1em;
                top: -0.5em;
                background: white;
            }
            form button {
                width: 100%;
                border: 1px solid rgb(171, 171, 171);
                background-color: var(--clr-primary);
                color: white;
                font-size: 1em;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            form button:hover {
                background: rgb(156, 0, 0);
            }
            form button .icon {
                font-size: 1em;
                margin-left: 0.5em;
            }
        `
    ]

    constructor() {
        super();
        this._formEmailHasText = false;
        this._formMessageHasText = false;

        this._dictionary = {
            en: {
                emailInputLabel: "Your Email",
                messageInputLabel: "Your Message",
                submitButtonLabel: "Send",
            },
            tr: {
                emailInputLabel: "Email Adresiniz",
                messageInputLabel: "Mesajınız",
                submitButtonLabel: "Gönder",
            }
        };
    }

    render() {
        return html`
            <form
                action="https://formspree.io/f/xqkvavpl"
                method="POST"
            >
                <div class=${"form-group" + (this._focusedEmail || this._formEmailHasText ? ' focused' : '')}>
                    <label>
                        ${this._dictionary[this.language].emailInputLabel}
                    </label>
                    <input
                        type="email"
                        name="email"
                        @change=${(event) => this._formEmailHasText = Boolean(event.target.value)}
                        @focus=${() => this._focusedEmail = true}
                        @blur=${() => this._focusedEmail = false}
                    >
                </div>

                <div class=${"form-group" + (this._focusedMessage || this._formMessageHasText ? ' focused' : '')}>
                    <label>
                        ${this._dictionary[this.language].messageInputLabel}
                    </label>
                    <textarea
                        name="message"
                        rows="5"
                        @change=${(event) => this._formMessageHasText = Boolean(event.target.value)}
                        @focus=${() => this._focusedMessage = true}
                        @blur=${() => this._focusedMessage = false}
                    ></textarea>
                </div>
            <button type="submit">${this._dictionary[this.language].submitButtonLabel}
                <span class="icon material-icons">
                    send
                </span>
            </button>
        </form>
        `
    }
}
customElements.define("eo-contact-form", ContactForm);