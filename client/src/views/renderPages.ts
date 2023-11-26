import getLandingPage from "./LandingPage"
import getLoginPage from "./LoginPage"
import getProfilePage from "./ProfilePage"
import getRegisterPage from "./RegisterPage"
import getTrackerPage from "./TrackerPage"

// TODO ver como poner el navbar en todas las paginas sin tener que copiar y pegar el codigo
function renderLandingPage() {
    return `
    ${getLandingPage()}
    `
}

function renderLoginPage() {
    return `
   ${getLoginPage()}
   `
}

function renderRegisterPage() {
    return `
    ${getRegisterPage()}
    `
}

function renderDashboardPage() {
    return `
    <p>dashboard page</p>`
}

async function renderProfilePage() {
    return `
    ${await getProfilePage()}
    `
}
function renderTrackerPage() {
    return `
    ${getTrackerPage()}
    `
}


export {
    renderLandingPage,
    renderLoginPage,
    renderRegisterPage,
    renderDashboardPage,
    renderProfilePage,
    renderTrackerPage
}