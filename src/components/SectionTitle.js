import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class SectionTitle extends LitElement {
  static properties = {
    title: {type: String},
  }

  static styles = [
    baseCSS,
    css`
        h2 {
            font-size: 2.5em;
            text-align: center;
        }
    `
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <h2>${this.title}</h2>
    `
  }
}
customElements.define("eo-section-title", SectionTitle);