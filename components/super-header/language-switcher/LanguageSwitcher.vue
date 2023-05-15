<script setup>
const runtimeConfig = useRuntimeConfig()
const supportedLocales = runtimeConfig.public.availableLocales.split(',')
</script>

<template>
  <nav class="flex divide-x divide-white">
    <nuxt-link
      v-for="locale in supportedLocales"
      :key="locale"
      :to="switchLocalePath(locale)"
      class="text-xs px-2 leading-none uppercase"
    >
      <span class="border-white [.router-link-exact-active_&]:border-b transition duration-150 ease-in-out hover:border-b">
        {{ $t(`localeLabel.${locale}`) }}
      </span>
    </nuxt-link>
  </nav>
</template>
