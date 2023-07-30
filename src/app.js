import {routes} from './routes.js';


function matchRoute(route) {
    return window.location.pathname === route.url;
}

function loadRoute(route) {
    const pageElement = document.createElement(route.tag);
    document.getElementById('app').append(pageElement);
    document.title = route.title || 'Missing Title';
}

function loadRoutes(routes) {
    for (let route of routes) {
        if (matchRoute(route)) {
            loadRoute(route);
        }
    }
}

function main() {
    loadRoutes(routes);
}
main();