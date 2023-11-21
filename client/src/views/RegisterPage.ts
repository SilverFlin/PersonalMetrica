export function bindRegisterPage() {
    document.getElementById('btn-register')?.addEventListener('click', () => {
        console.log('register');
    });
    document.getElementById('btn-cancel-register')?.addEventListener('click', () => {
        console.log('cancel register');
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
          <input class="w-full h-16 bg-red-200" type="text" />
          <input class="w-full h-16 bg-red-200" type="text" />
          <input class="w-full h-16 bg-red-200" type="text" />
          <input class="w-full h-16 bg-red-200" type="text" />
        </div>
        <div>
          <input type="checkbox" name="my-checkbox" id="my-checkbox" />
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