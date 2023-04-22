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
  },

  googleFonts: {
    families: {
      Lato: [400, 600, 700]
    },
    prefetch: true,
    preconnect: true,
    preload: true
  },

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tw.config',
    viewer: true
  },

  plugins: [
    { src: '~/plugins/tailwind-elements.js', mode: 'client' }
  ]
})
