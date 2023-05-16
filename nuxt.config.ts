export default defineNuxtConfig({
  app: {
    baseURL: '/jgshop/'
  },

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

  runtimeConfig: {
    secretKey: process.env.SECRET_KEY,
    public: {
      availableLocales: process.env.AVAILABLE_LOCALES
    }
  },

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

  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.js'
      },
      {
        code: 'pl',
        file: 'pl-PL.js'
      }
    ],
    lazy: true,
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    langDir: 'locales',
    vueI18n: {
      fallbackLocale: 'en'
    }
  },

  device: {
    refreshOnResize: true
  },

  plugins: [
    { src: '~/plugins/tailwind-elements.js', mode: 'client' }
  ]
})
