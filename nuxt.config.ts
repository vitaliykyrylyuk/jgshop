export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/stylelint-module',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@nuxtjs/device',
    '@nuxt/image',
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
    subsets: ['latin'],
    display: 'swap',
    prefetch: false,
    preconnect: false,
    preload: false,
    download: true,
    base64: false
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

  image: {
    dir: 'public/images',
    domains: ['https://picsum.photos'],
    screens: {
      sm: 500,
      md: 875,
      lg: 1200,
      xl: 1920
    },
    provider: 'ipx',
    presets: {
      card: {
        modifiers: {
          width: 200,
          height: 300
        }
      }
    }
  },

  plugins: [
    { src: '~/plugins/tailwind-elements.js', mode: 'client' }
  ]
})
