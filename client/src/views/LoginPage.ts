import { httpLoginUser } from "../hooks/requests";

export function bindLoginPage() {
  document.getElementById('btn-login')?.addEventListener('click', async () => {
    const token = await httpLoginUser({
      email: 'toledorusso@outlook.com',
      password: 'test'
    })
    if (token) {
      // TODO redirect to dashboard
      // TODO Store token in local storage
      window.location.hash = "#";
    }
  });
}

export default function getLoginPage() {
  return `
        <div
      class="flex w-full h-screen shrink-0 align-center justify-center gap-11"
    >
      <div
        style="background-image: url('https://source.unsplash.com/random')"
        class="w-[50%] h-screen bg-cover bg-center bg-no-repeat"
      ></div>
      <div
        class="flex w-[50%] h-screen flex-col justify-center items-center gap-3 shrink-0"
      >
        <div class="w-[16rem] h-[8rem] bg-red-200">Logo</div>
        <div
          class="shrink-0 rounded-sm flex w-[31.5rem] h-72 justify-center align-center gap-12 flex-col"
        >
          <input class="bg-red-200 h-16" type="text" />
          <input class="bg-red-200 h-16" type="text" />
        </div>

        <button
        id="btn-login"
          class="bg-[#5BFAC0] rounded-sm flex w-[31.5rem] h-[4rem] justify-center items-center shrink-0 text-white text-3xl font-bold font-sans"
        >
          Login
        </button>
      </div>
    </div>
    `;
}