<script setup></script>

<template>
  <header>
    <nav
      class="lg:max-w-screen-lg lg:mx-auto relative flex w-full items-center justify-between bg-white py-3 px-3 text-neutral-600 shadow-lg hover:text-neutral-700 focus:text-neutral-700 md:flex-wrap md:justify-start"
      data-te-navbar-ref
    >
      <img src="~assets/images/logos/barber-logo.svg" alt="Gentleman's barbershop">
      <div class="flex flex-wrap items-center justify-between px-6">
        <div class="flex items-center">
          <button
            class="mr-2 border-0 bg-transparent py-2 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 md:hidden"
            type="button"
            data-te-collapse-init
            data-te-target="#navbarSupportedContentX"
            aria-controls="navbarSupportedContentX"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="[&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </span>
          </button>
        </div>
        <div
          id="navbarSupportedContentX"
          class="!visible hidden grow basis-[100%] items-center lg:!flex lg:basis-auto"
          data-te-collapse-item
        >
          <ul
            class="mr-auto flex flex-col lg:flex-row"
            data-te-navbar-nav-ref
          >
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30 lg:p-2 [&.active]:text-black/90"
                href="#"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >Home</a>
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="#"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >Features</a>
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="#"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >Pricing</a>
            </li>
            <li data-te-nav-item-ref>
              <a
                class="block transition duration-150 ease-in-out hover:text-neutral-700 focus:text-neutral-700 disabled:text-black/30  lg:p-2 [&.active]:text-black/90"
                href="#"
                data-te-nav-link-ref
                data-te-ripple-init
                data-te-ripple-color="light"
              >About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="homepage-slogan relative overflow-hidden bg-cover bg-no-repeat">
      <div
        class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
      >
        <div class="flex h-full items-center justify-center">
          <div class="px-6 text-center text-white md:px-12">
            <h1 class="mb-6 text-5xl font-bold">
              MORE THAN <br>
              JUST A SHAVING
            </h1>
            <button
              type="button"
              class="inline-block rounded border-2 border-neutral-50 px-6 pt-2 pb-[6px] text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              Get started
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss' scoped>
.homepage-slogan {
  height: 350px;
  background-image: url('assets/images/backgrounds/dusty-black.jpg');
  background-position: 50%;
}
</style>
