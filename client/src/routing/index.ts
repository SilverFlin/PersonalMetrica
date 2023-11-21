import { bindLoginPage } from "../views/LoginPage";
import { bindRegisterPage } from "../views/RegisterPage";
import { renderDashboardPage, renderLandingPage, renderLoginPage, renderProfilePage, renderRegisterPage } from "../views/renderPages";


type Route = {
    title: string;
    description: string;
    template: string;
    bindElements?: () => void;
    isProtected?: boolean;
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
        template: renderRegisterPage(),
        bindElements: bindRegisterPage
    },
    dashboard: {
        title: "Dashboard",
        description: "Dashboard page",
        template: renderDashboardPage(),
        isProtected: true
    },
    profile: {
        title: "Profile",
        description: "Profile page",
        template: renderProfilePage(),
        isProtected: true
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
    if (route.isProtected) {
        // TODO check if user is logged in
        const token = sessionStorage.getItem("token");

        if (!token) {
            alert("You must be logged in to access this page");
            window.location.hash = "#login";
            return;
        }
    }

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

