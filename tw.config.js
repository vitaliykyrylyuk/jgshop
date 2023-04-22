import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        rose: {
          400: '#f65261'
        },
        gray: {
          600: '#424242',
          900: '#232323'
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
  plugins: [require('tw-elements/dist/plugin')]
}
