<script setup></script>

<template>
  <div class="homepage-slogan relative overflow-hidden bg-cover bg-no-repeat">
    <div
      class="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed"
    >
      <div class="flex h-full items-center justify-center">
        <div class="px-6 text-center text-white md:px-12">
          <h1 class="mb-6 text-5xl font-bold uppercase">
            {{ $t('homepage.slogan') }}
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
</template>

<style lang='scss' scoped>
.homepage-slogan {
  height: 350px;
  background-image: url('assets/images/backgrounds/dusty-black.jpg');
  background-position: 50%;
}
</style>
