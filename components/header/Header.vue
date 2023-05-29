<script setup lang='ts'>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const { isMobile } = useDevice()
</script>
<template>
  <header>
    <div
      class="flex flex-wrap lg:max-w-screen-lg lg:mx-auto relative z-20 w-full lg:h-20 items-center justify-between bg-white py-3.5 px-5 space-y-2 md:space-y-0"
    >
      <LazyHeaderMobileMenu v-if="!isMobile" class="md:hidden" />
      <HeaderLogo class="mr-5" />
      <LazyHeaderCatalog v-if="!isMobile" class="ml-auto hidden lg:flex" />
      <HeaderSearch class="md:flex md:ml-auto lg:ml-0 sm:order-2 md:order-1 lg:order-2" />
      <HeaderCategories class="lg:flex m-auto sm:order-3 lg:order-1" />
    </div>
  </header>
</template>
