<script setup lang='ts'>
const runtimeConfig = useRuntimeConfig()
const supportedLocales = runtimeConfig.public.availableLocales.split(',')
</script>

<template>
  <nuxt-link
    v-for="locale in supportedLocales"
    :key="locale"
    :to="switchLocalePath(locale)"
  >
    {{ locale }}
  </nuxt-link>
</template>
