import { getLandingPageNavbar } from "../components/navbar.component"
import getLandingPage from "./LandingPage"
import getLoginPage from "./LoginPage"

// TODO ver como poner el navbar en todas las paginas sin tener que copiar y pegar el codigo
function renderLandingPage() {
    return `
    ${getLandingPageNavbar()}
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
    ${getLandingPageNavbar()}
    <p>register page</p>`
}

function renderDashboardPage() {
    return `
    ${getLandingPageNavbar()}
    <p>dashboard page</p>`
}

function renderProfilePage() {
    return `
    ${getLandingPageNavbar()}
    <p>profile page</p>`
}


export {
    renderLandingPage,
    renderLoginPage,
    renderRegisterPage,
    renderDashboardPage,
    renderProfilePage
}