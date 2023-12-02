import { httpLoginUser } from "../hooks/requests";
export function bindLoginPage() {
  document.getElementById('btn-login')?.addEventListener('click', async () => {
    const email = (document.getElementById('email-login') as HTMLInputElement).value
    const password = (document.getElementById('password-login') as HTMLInputElement).value

    if (!email || !password) {
      alert('Please fill all the fields')
      return
    }
    let token: string | null = null;
    try {
      token = await httpLoginUser({ email, password })
    } catch (error) {
      alert("Something went wrong")
      console.error(error)
    }

    if (token) {
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
      style="background-image: url('assets/images/background.jpg')"
        class="w-[50%] h-screen bg-cover bg-center bg-no-repeat"
      ></div>
      <div
        class="flex w-[50%] h-screen flex-col justify-center items-center gap-3 shrink-0"
      >
      <div class="w-[16rem] h-[8rem]">
      <svg class="w-full h-full" xmlns="http://www.w3.org/2000/svg" width="110" height="58" viewBox="0 0 110 58" fill="none">
        <ellipse cx="18.3333" cy="18.8987" rx="18.3333" ry="18.3987" fill="#00F0FF"/>
        <rect y="18.538" width="18.6928" height="38.962" fill="#00F0FF"/>
        <path d="M65.7436 2.64657C66.8255 1.8078 68.3379 1.80779 69.4198 2.64657L75.7352 7.54276C76.1577 7.87028 76.66 8.07898 77.1901 8.14726L85.1098 9.16725C86.4637 9.34162 87.5292 10.4081 87.7024 11.7621L88.7206 19.7249C88.7881 20.2526 88.9947 20.7528 89.3192 21.1743L94.2123 27.5308C95.0426 28.6095 95.0426 30.112 94.2122 31.1907L89.3192 37.5472C88.9947 37.9687 88.7881 38.4689 88.7206 38.9966L87.7024 46.9593C87.5292 48.3134 86.4637 49.3799 85.1098 49.5542L77.1901 50.5742C76.66 50.6425 76.1577 50.8512 75.7352 51.1787L69.4198 56.0749C68.3379 56.9137 66.8255 56.9137 65.7436 56.0749L59.4282 51.1787C59.0057 50.8512 58.5034 50.6425 57.9733 50.5742L50.0536 49.5542C48.6996 49.3799 47.6342 48.3134 47.461 46.9593L46.4427 38.9966C46.3753 38.4689 46.1687 37.9687 45.8442 37.5472L40.9511 31.1907C40.1208 30.112 40.1208 28.6095 40.9511 27.5308L45.8442 21.1743C46.1687 20.7528 46.3753 20.2526 46.4427 19.7249L47.461 11.7621C47.6342 10.4081 48.6996 9.34162 50.0536 9.16725L57.9733 8.14726C58.5034 8.07898 59.0057 7.87028 59.4282 7.54276L65.7436 2.64657Z" fill="#FFF613"/>
      </svg>
    </div>
    <div
      class="shrink-0 rounded-sm flex w-[31.5rem] h-72 justify-center align-center gap-12 flex-col"
    >
    <form onclick="event.preventDefault();"
          class="shrink-0 rounded-sm flex w-[31.5rem] h-72 justify-center align-center gap-12 flex-col text-[#464646]  text-2xl"
        >
          <input id="email-login" class="text-center h-16 p-5 border-b-8 border-[#5BFAC0]" type="email" required placeholder="username"/>
          <input id="password-login" class="text-center h-16 p-5 border-b-8 border-[#5BFAC0]" type="password" required placeholder="password"/>
        </form>
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