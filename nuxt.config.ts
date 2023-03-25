export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@nuxt/image-edge',
    'nuxt-icon',
    '@nuxtjs/google-fonts'
  ],

  pinia: {
    autoImports: [
      'defineStore',
      'definePiniaStore',
      'acceptHMRUpdate'
    ]
  }
})
