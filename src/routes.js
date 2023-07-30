// Register page components
import PageIndex from "../pages/index.js";
import PageAbout from "../pages/about.js";
import PageContact from "../pages/contact.js";
import PageTutorials from "../pages/tutorials.js";
import PageTutorial from "../pages/tutorial.js";


// Register routes and corresponding component tags
export const routes = [
    {url: '/', tag: 'eo-page-index', title: 'Home', label: 'Home'},
    //{url: '/about.html', tag: 'eo-page-about', title: 'About', label: 'About'},
    {url: '/tutorials.html', tag: 'eo-page-tutorials', title: 'Tutorials', label: 'Tutorials'},
    {url: '/contact.html', tag: 'eo-page-contact', title: 'Contact', label: 'Contact'},
    {url: '/tutorial.html', tag: 'eo-page-tutorial', title: 'Tutorial', label: 'Tutorial', hidden: true},
]