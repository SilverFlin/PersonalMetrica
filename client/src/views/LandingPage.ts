

export async function bindLandingPage() {
    

}

export default function getLandingPage() {
    return `
    <!-- Primera capa -->
    <div class="w-full h-[139.625rem] flex flex-col items-center">
      <!-- Frame1 -->
      <div class="inline-flex items-center gap-[12.18rem]">
        <!-- Hero Content -->
        <div
          class="flex w-[38.125rem] h-[36rem] flex-col justify-center items-start gap-[3.3rem]"
        >
          <!-- Content Body -->
          <div class="flex flex-col items-start gap-[2.25rem] self-stretch">
            <h1
              class="font-sans font-semibold text-6xl leading-[4.29rem] self-stretch"
            >
              Transforming the way organizations define, design, and build
              software.
            </h1>
            <p
              class="text-[#616161] text-2xl font-normal leading-[1.87rem] self-stretch"
            >
              Sit aliquam quam consectetur enim habitant sollicitudin. Mus
              integer lobortis morbi iaculis dignissim. Consequat viverra lorem
              hendrerit arcu aliquam quam.
            </p>
            <div
              class="text-[2rem] text-[#FFFF] font-semibold flex w-[11.75rem] h-[4rem] justify-center items-center gap-[0.65rem] rounded-[0.1875rem] bg-[#5BFAC0]"
            >
              Register
            </div>
          </div>
        </div>
        <!-- Image -->
        <div
          class="bg-center w-[46.625rem] h-[80.75rem]"
          style="
            background: url('assets/images/hero1.jpg') -881.833px -2.769px /
              308.582% 100% no-repeat;
          "
        ></div>
      </div>
      <div
        class="border-[38px]  bg-center bg-auto border-[#f5f9f5] w-[28.6875rem] h-[23.626rem] shrink-0 absolute top-[75.5rem]"
        style="background-image: url('assets/images/hero3.jpg')"
      ></div>
      <!-- Frame2 -->
      <div class="inline-flex gap-[3.5rem] items-start">
        <!-- Image -->
        <div
          class="bg-center w-[48.125rem] h-[44.865rem]"
          style="background-image: url('assets/images/hero2.jpg')"
        ></div>
        <!-- Content1 -->
        <div
          class="flex w-[39.75rem] h-[44.875rem] flex-col justify-center items-end gap-[3.3125rem]"
        >
          <!-- Content body -->
          <div
            class="flex h-[44.75rem] flex-col justify-center items-end gap-[6.75rem] shrink-0 self-stretch"
          >
            <h1
              class="text-right text-6xl font-semibold leading-[4.29rem] self-stretch"
            >
              Cursus vel sit felis cum vivamus.
            </h1>
            <p class="text-[#616161] text-right text-2xl leading-[1.875rem]">
              Sit aliquam quam consectetur enim habitant sollicitudin. Mus
              integer lobortis morbi iaculis dignissim. Consequat viverra lorem
              hendrerit arcu aliquam quam.
            </p>
          </div>
        </div>
      </div>
    </div>
    `
}