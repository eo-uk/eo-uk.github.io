import { LitElement, html, css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {unsafeHTML} from 'https://cdn.jsdelivr.net/npm/lit-html@2.7.5/directives/unsafe-html.js';
import { baseCSS, formatDate } from '../common.js';


export default class PostsGrid extends LitElement {
  static properties = {
    _dictionary: {type: Object},
    language: {type: String},
    posts: {type: Array},
    columns: {type: Number}, // 3 || 4
  }

  static styles = [
    baseCSS,
    css`
        a {
            color: black;
            text-decoration: none;
        }
        .posts {
            margin: 1em;
            margin-bottom: 3em;
        }
        .posts ul {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;
            gap: 1em;
        }
        .posts li {
            width: 30%;
            padding: 1em;
            border-radius: 3px;
            box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 50px;
            min-width: 20em;
            margin: 1em 0px;
        }
        .posts.four-cols li {
            width: 23%;
        }
        .posts .image {
            height: 10em;
            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
            transition: 0.3s;
            background-color: white;
            background-blend-mode: darken;
        }
        .posts .image:hover {
            background-color: #0000001c;
        }
        .posts a {
            transition: 0.3s ease-in-out;
        }
        .posts a:hover {
            color: var(--clr-primary);
        }
    `
  ]

  constructor() {
    super();

    this._dictionary = {
        en: {
            buttonText: "Read More"
        },
        tr: {
            buttonText: "Derse Git",
        }
    }
  }

  getPostURL(post) {
      return `/tutorials/${post.slug}.html`;
  }

  render() {
    return html`
      <div class=${"posts" + (this.columns == 4 ? ' four-cols' : ' three-cols')}>
        <ul>
          ${this.posts.map((post) => {
            return html`
                <li>
                    <a href=${this.getPostURL(post)}>
                        <div
                            class="image"
                            style=${`background-image: url(../assets/images/${post.image});`}
                        ></div>
                    </a>

                    <a href=${this.getPostURL(post)}>
                        <h3>
                            ${post.title}
                        </h3>
                    </a>
                    
                    <small>
                        ${formatDate(post.date)}
                    </small>
                    <p>
                        ${post.excerpt}...
                    </p>
                    <a class="read-more-btn" href=${this.getPostURL(post)}>
                        ${this._dictionary[this.language].buttonText}
                    </a>
                </li>
            `
          })}
        </ul>
      </div>
    `
  }
}
customElements.define("eo-posts-grid", PostsGrid);