import { logoutUser } from "../hooks/requests";

function bindNavbar() {
  const logoutBtn = document.getElementById("nav-logout-btn")!;
  logoutBtn.addEventListener("click", () => {
    logoutUser();
    window.location.hash = "#login";
  });
}

function getLandingPageNavbar() {
  setTimeout(bindNavbar, 10);
  return `
    <div
    class="flex h-32 w-full pt-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
      <a href="/">
        <div id="logo" class="w-28 h-14">
          <svg xmlns="http://www.w3.org/2000/svg" width="110" height="58" viewBox="0 0 110 58" fill="none">
            <ellipse cx="18.3333" cy="18.8987" rx="18.3333" ry="18.3987" fill="#00F0FF"/>
            <rect y="18.538" width="18.6928" height="38.962" fill="#00F0FF"/>
            <path d="M65.7436 2.64663C66.8255 1.80786 68.3379 1.80786 69.4198 2.64663L75.7352 7.54282C76.1577 7.87034 76.66 8.07904 77.1901 8.14732L85.1098 9.16731C86.4637 9.34168 87.5292 10.4081 87.7024 11.7622L88.7206 19.725C88.7881 20.2526 88.9947 20.7528 89.3192 21.1744L94.2123 27.5308C95.0426 28.6095 95.0426 30.1121 94.2122 31.1908L89.3192 37.5472C88.9947 37.9688 88.7881 38.469 88.7206 38.9966L87.7024 46.9594C87.5292 48.3135 86.4637 49.3799 85.1098 49.5543L77.1901 50.5743C76.66 50.6426 76.1577 50.8513 75.7352 51.1788L69.4198 56.075C68.3379 56.9137 66.8255 56.9137 65.7436 56.075L59.4282 51.1788C59.0057 50.8513 58.5034 50.6426 57.9733 50.5743L50.0536 49.5543C48.6996 49.3799 47.6342 48.3135 47.461 46.9594L46.4427 38.9966C46.3753 38.469 46.1687 37.9688 45.8442 37.5472L40.9511 31.1907C40.1208 30.1121 40.1208 28.6095 40.9511 27.5308L45.8442 21.1744C46.1687 20.7528 46.3753 20.2526 46.4427 19.725L47.461 11.7622C47.6342 10.4081 48.6996 9.34168 50.0536 9.16731L57.9733 8.14732C58.5034 8.07904 59.0057 7.87034 59.4282 7.54282L65.7436 2.64663Z" fill="#FFF613"/>
          </svg>
        </div>
      </a>
        <div class="h-14 w-[45rem]">
          <nav
            class="list-none text-4xl font-light flex h-full w-full justify-between items-center shrink-0"
          >
            <li><a href="#" class="text-[#5BFAC0]">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Help</a></li>
          </nav>
        </div>
        <div
          id="nav-login-btn"
          class="text-4xl font-light justify-center shrink-0 items-center flex w-48 h-14"
        >
          <a href="#login" class="h-full w-full">Login</a>
        </div>
      </div>
      <hr class="border-0 bg-gray-200 h-px w-full" />
    </div>
    `
}

function getAppNavbar() {
  setTimeout(bindNavbar, 10);
  return `
    <div
      class="flex h-32 w-full py-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
      <a href="#dashboard">
      <div id="logo" class="w-28 h-14">
      <svg xmlns="http://www.w3.org/2000/svg" width="110" height="58" viewBox="0 0 110 58" fill="none">
        <ellipse cx="18.3333" cy="18.8987" rx="18.3333" ry="18.3987" fill="#00F0FF"/>
        <rect y="18.538" width="18.6928" height="38.962" fill="#00F0FF"/>
        <path d="M65.7436 2.64663C66.8255 1.80786 68.3379 1.80786 69.4198 2.64663L75.7352 7.54282C76.1577 7.87034 76.66 8.07904 77.1901 8.14732L85.1098 9.16731C86.4637 9.34168 87.5292 10.4081 87.7024 11.7622L88.7206 19.725C88.7881 20.2526 88.9947 20.7528 89.3192 21.1744L94.2123 27.5308C95.0426 28.6095 95.0426 30.1121 94.2122 31.1908L89.3192 37.5472C88.9947 37.9688 88.7881 38.469 88.7206 38.9966L87.7024 46.9594C87.5292 48.3135 86.4637 49.3799 85.1098 49.5543L77.1901 50.5743C76.66 50.6426 76.1577 50.8513 75.7352 51.1788L69.4198 56.075C68.3379 56.9137 66.8255 56.9137 65.7436 56.075L59.4282 51.1788C59.0057 50.8513 58.5034 50.6426 57.9733 50.5743L50.0536 49.5543C48.6996 49.3799 47.6342 48.3135 47.461 46.9594L46.4427 38.9966C46.3753 38.469 46.1687 37.9688 45.8442 37.5472L40.9511 31.1907C40.1208 30.1121 40.1208 28.6095 40.9511 27.5308L45.8442 21.1744C46.1687 20.7528 46.3753 20.2526 46.4427 19.725L47.461 11.7622C47.6342 10.4081 48.6996 9.34168 50.0536 9.16731L57.9733 8.14732C58.5034 8.07904 59.0057 7.87034 59.4282 7.54282L65.7436 2.64663Z" fill="#FFF613"/>
      </svg>
    </div>
        </a>
        <div class="h-14 w-[45rem]">
          <nav
            class="list-none text-4xl font-light flex h-full w-full justify-between items-center shrink-0"
          >
            <li><a href="#trackers" class="text-[#5BFAC0]">Trackers</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#help">Help</a></li>
          </nav>
        </div>
        <button
          id="nav-logout-btn"
          class="text-4xl font-light justify-center shrink-0 items-center flex w-48 h-14"
        >
          Log out
        </button>
      </div>
      <hr class="border-0 bg-gray-200 h-px w-full" />
    </div>
    `
}

export {
  getLandingPageNavbar,
  getAppNavbar,
  bindNavbar
};

