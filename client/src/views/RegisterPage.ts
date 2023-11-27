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
      // TODO show success message
      alert(`User ${user.email} created successfully`)
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
      style="background-image: url('https://source.unsplash.com/random')"
      class="bg-cover flex w-full h-screen shrink-0 align-center items-center justify-center gap-11"
    >
      <div
        class="py-20 px-14 justify-center items-center flex-col shrink-0 gap-11 inline-flex bg-white h-[50rem] rounded-[1.125rem] shadow-md"
      >
        <h1 class="font-sans font-light text-5xl">Register</h1>
        <div class="w-full flex flex-col items-start gap-11">
          <input id="email-input" placeholder="SilverFlin" class="w-full h-16 bg-red-200 p-5" type="email" />
          <input id="password-input"  class="w-full h-16 bg-red-200 p-5" type="password" />
          <input id="password-confirm-input" class="w-full h-16 bg-red-200 p-5" type="password" />
        </div>
        <div>
          <input type="checkbox" id="register-terms" name="my-checkbox" id="my-checkbox" />
          <label for="my-checkbox">I Agree the terms and conditions</label>
        </div>
        <div class="flex items-start gap-28">
          <button
            id="btn-cancel-register"
            class="font-light text-3xl justify-center flex w-[11rem] h-[4rem] items-center px-[2.8rem] bg-red-200"
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