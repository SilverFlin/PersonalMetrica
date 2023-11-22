function getLandingPageNavbar() {
    return `
    <div
      class="flex h-32 w-full py-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
        <div id="logo" class="w-28 h-14 bg-gray-200">Logo</div>
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
          Login
        </div>
      </div>
      <hr class="border-0 bg-gray-200 h-px w-full" />
    </div>
    `
}

function getAppNavbar() {
    return `
    <div
      class="flex h-32 w-full py-4 gap-6 items-center flex-col justify-center"
    >
      <div class="flex px-24 w-full h-full justify-between items-center">
        <div id="logo" class="w-28 h-14 bg-gray-200">Logo</div>
        <div class="h-14 w-[45rem]">
          <nav
            class="list-none text-4xl font-light flex h-full w-full justify-between items-center shrink-0"
          >
            <li><a href="#" class="text-[#5BFAC0]">Trackers</a></li>
            <li><a href="#">Profile</a></li>
            <li><a href="#">Help</a></li>
          </nav>
        </div>
        <div
          id="nav-login-btn"
          class="text-4xl font-light justify-center shrink-0 items-center flex w-48 h-14"
        >
          Log out
        </div>
      </div>
      <hr class="border-0 bg-gray-200 h-px w-full" />
    </div>
    `
}

export {
    getLandingPageNavbar,
    getAppNavbar
};
