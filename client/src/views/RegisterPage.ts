import { httpRegisterUser } from "../hooks/requests";

export function bindRegisterPage() {
  document.getElementById('btn-register')?.addEventListener('click', async () => {
    // TODO take values from form
    const email = (document.getElementById('email-input') as HTMLInputElement).value
    const password = (document.getElementById('password-input') as HTMLInputElement).value
    const passwordConfirm = (document.getElementById('password-confirm-input') as HTMLInputElement).value
    const registerTerms = (document.getElementById('register-terms') as HTMLInputElement).checked

    if (!email || !password || !passwordConfirm) {
      // TODO show error message
      alert('Please fill all the fields')
      return
    }
    if (!registerTerms) {
      // TODO show error message
      alert('Please accept the terms and conditions')
      return
    }


    // TODO validate form
    if (password !== passwordConfirm) {
      // TODO show error message
      alert('Passwords do not match')
      return
    }
    let user: User | null = null;
    try {
      user = await httpRegisterUser({
        email,
        password,
      })
    } catch (error) {
      // TODO show error message
      alert("Something went wrong")
    }


    if (user) {
      window.location.hash = "#login";
    }
  });
  document.getElementById('btn-cancel-register')?.addEventListener('click', () => {
    window.location.hash = "#";
  })
}

export default function getRegisterPage() {
  return `
    <div
      style="background-image: url('assets/images/background.jpg')"
      class="bg-cover flex w-full h-screen shrink-0 align-center items-center justify-center gap-11"
    >
      <div
        class="py-20 px-14 justify-center items-center flex-col shrink-0 gap-11 inline-flex bg-white h-[50rem] rounded-[1.125rem] shadow-2xl"
      >
        <h1 class="font-sans font-light text-5xl">Register</h1>
        <div class="w-full flex flex-col items-start gap-11">
        <form onclick="event.preventDefault();"
        class="shrink-0 rounded-sm flex w-[31.5rem] h-72 justify-center align-center gap-12 flex-col text-[#464646]  text-2xl"
      >
        <input id="email-input" placeholder="SilverFlin@outlook.com" class="text-center h-16 p-5 border-b-8 border-[#5BFAC0] rounded-md bg-gray-100" type="email" />
        <input id="password-input" placeholder="password"  class="text-center h-16 p-5 border-b-8 border-[#5BFAC0] rounded-md bg-gray-100" type="password" />
        <input id="password-confirm-input" placeholder="confirm password" class="text-center h-16 p-5 border-b-8 border-[#5BFAC0] rounded-md bg-gray-100" type="password" />
      </form>
        </div>
        <div>
          <input type="checkbox" id="register-terms" />
          <label for="register-terms">I Agree the terms and conditions</label>
        </div>
        <p>Already have an account? <a href="#login" class="text-[#5BFAC0]">Login</a></p>
        <div class="flex items-start gap-28">
          <button
            id="btn-cancel-register"
            class="font-normal text-white text-3xl font-bold font-sans rounded-sm text-3xl justify-center flex w-[11rem] h-[4rem] items-center px-[2.8rem] bg-[#5BFAC0]"
          >
            Cancel
          </button>
          <button
            id="btn-register"
            class="font-light text-3xl justify-center flex w-[11rem] h-[4rem] items-center px-[2.8rem] bg-red-200"
          >
            Register
          </button>
        </div>
      </div>
    </div>
    `
}