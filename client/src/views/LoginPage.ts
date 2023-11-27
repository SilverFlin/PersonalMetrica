import { httpLoginUser } from "../hooks/requests";

export function bindLoginPage() {
  document.getElementById('btn-login')?.addEventListener('click', async () => {


    const email = (document.getElementById('email-login') as HTMLInputElement).value
    const password = (document.getElementById('password-login') as HTMLInputElement).value

    if (!email || !password) {
      // TODO show error message
      alert('Please fill all the fields')
      return
    }

    // TODO validate form


    let token: string | null = null;
    try {
      token = await httpLoginUser({ email, password })
    } catch (error) {
      // TODO show error message
      alert("Something went wrong")
    }

    if (token) {
      // TODO redirect to dashboard
      alert(`User ${email} logged in successfully`)

      sessionStorage.setItem("token", token);

      window.location.hash = "#trackers";
    } else {
      alert(`User ${email} not found`)
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
          <input id="email-login" class="bg-red-200 h-16" type="email" />
          <input id="password-login" class="bg-red-200 h-16" type="password" />
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