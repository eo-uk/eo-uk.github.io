import { css } from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';


export const baseCSS = css`
    :host {
        --clr-primary: red;
        --clr-primary-transparent: #ff0000a3;
        --clr-background: #202124;
        --clr-background-dark: #343a40;
        --clr-background-light: #f1f3f5;

        font-family: 'Inter', sans-serif;
    }

    ::-moz-selection { /* Code for Firefox */
        color: white;
        background: red;
    }
    ::selection {
        color: white;
        background: red;
    }

    ::-webkit-scrollbar {
        width: 0.5em;
        height: 0.5em;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }
    ::-webkit-scrollbar-thumb {
        background-color: var(--clr-primary);
    }

    * {
        box-sizing: border-box;
    }

    ul {
        list-style: none;
        padding-left: 0;
        margin: 0;
    }

    p, h1, h2, h3 {
        line-height: 1.5em;
    }

    button {
        border: 2px solid grey;
        padding: 0.5em 1em;
        border-radius: 2px;
        background: none;
        cursor: pointer;
        transition: 0.3s ease-in-out;
    }
    button:hover {
        background-color: var(--clr-primary);
        color: var(--clr-background-light);
        border-color: transparent;
    }

    .material-icons {
        font-family: 'Material Icons';
        font-weight: normal;
        font-style: normal;
        font-size: 24px;  /* Preferred icon size */
        display: inline-block;
        line-height: 1;
        text-transform: none;
        letter-spacing: normal;
        word-wrap: normal;
        white-space: nowrap;
        direction: ltr;
      
        /* Support for all WebKit browsers. */
        -webkit-font-smoothing: antialiased;
        /* Support for Safari and Chrome. */
        text-rendering: optimizeLegibility;
      
        /* Support for Firefox. */
        -moz-osx-font-smoothing: grayscale;
      
        /* Support for IE. */
        font-feature-settings: 'liga';
      }
`;

export function formatDate(dateString) {
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