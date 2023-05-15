import defaultTheme from 'tailwindcss/defaultTheme'
import plugin from 'tailwindcss/plugin'
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        yellow: {
          300: '#dcc364',
          400: '#e0b11a'
        },
        rose: {
          400: '#f65261'
        },
        gray: {
          600: '#424242',
          900: '#111111'
        }
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1200px',
        xl: '1440px',
        '2xl': '1536px'
      },
      gridTemplateColumns: {
        products: 'repeat(auto-fill, minmax(276px, 1fr))'
      }
    }
  },
  content: [
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  plugins: [
    require('tw-elements/dist/plugin'),
    plugin(({ addBase, theme }) => {
      addBase({
        html: { color: theme('colors.gray.900') }
      })
    })
  ]
}
