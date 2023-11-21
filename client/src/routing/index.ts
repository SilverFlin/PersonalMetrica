import { bindLoginPage } from "../views/LoginPage";
import { renderDashboardPage, renderLandingPage, renderLoginPage, renderProfilePage, renderRegisterPage } from "../views/renderPages";


type Route = {
    title: string;
    description: string;
    template: string;
    bindElements?: () => void;
}

type Routes = {
    [key: string]: Route
}

const routes: Routes = {
    404: {
        title: "404",
        description: "Page not found",
        template: `<p>404</p>`
    },
    '/': {
        title: "Landing",
        description: "Landing page",
        template: renderLandingPage()
    },
    login: {
        title: "Login",
        description: "Login page",
        template: renderLoginPage(),
        bindElements: bindLoginPage
    },
    register: {
        title: "Register",
        description: "Register page",
        template: renderRegisterPage()
    },
    dashboard: {
        title: "Dashboard",
        description: "Dashboard page",
        template: renderDashboardPage()
    },
    profile: {
        title: "Profile",
        description: "Profile page",
        template: renderProfilePage()
    }
}

const locationHandler = async () => {
    let location = window.location.hash.replace("#", "");

    if (location.length == 0) {
        location = '/';
    }

    if (!routes[location as keyof typeof routes]) {
        location = '404';
    }

    const route = routes[location as keyof typeof routes]

    const html = route.template

    // TODO cambiar?
    document.getElementById("app")!.innerHTML = html;

    route.bindElements?.();

    document.title = route.title;
};

function setupRouting() {
    window.addEventListener("hashchange", locationHandler);
    window.addEventListener("DOMContentLoaded", locationHandler);
    locationHandler();
}

export {
    setupRouting
}

