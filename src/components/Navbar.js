import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import { baseCSS } from '../common.js';


export default class Navbar extends LitElement {
  static properties = {
    routes: { type: Array },
  }

  static styles = [
    baseCSS,
    css`
      .navbar ul {
        list-style: none;
        display: flex;
        justify-content: center;
        background-color: var(--clr-background);
      }
      .navbar ul li a {
        display: block;
        text-decoration: none;
        padding: 1em;
        transition: 0.3s ease-in-out;
        color: white;
      }
      .navbar ul li a:hover,
      .navbar ul li.active a {
        background-color: var(--clr-primary);
      }
    `
  ]

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="navbar">
        <nav>
          <ul>
            ${this.routes.map((route) => {
              if (route.hidden) {
                return;
              }
              return html`
                <li class=${window.location.pathname === route.url ? 'active' : ''}>
                  <a href=${route.url}>
                    ${route.label}
                  </a>
                </li>
              `;
            })}
          </ul>
        </nav>
      </div>
    `
  }
}
customElements.define("eo-navbar", Navbar);