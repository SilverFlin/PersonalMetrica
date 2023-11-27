import { logoutUser } from "../hooks/requests";

function bindNavbar() {
  // add event listener to logout button
  const logoutBtn = document.getElementById("nav-logout-btn")!;
  logoutBtn.addEventListener("click", () => {
    logoutUser();
    alert("User logged out successfully");
    window.location.hash = "#login";
  });
}

function getLandingPageNavbar() {
  setTimeout(bindNavbar, 10);
  return `
    <div
      class="flex h-32 w-full py-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
      <a href="/"><div id="logo" class="w-28 h-14 bg-gray-200">Logo</div></a>
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
        <div id="logo" class="w-28 h-14 bg-gray-200">Logo</div>
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

