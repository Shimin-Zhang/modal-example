const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      blue: colors.blue,
      green: colors.green,
      red: colors.rose,
      yellow: colors.amber
    },
    maxHeight: {
      '72/100': '72%',
      '85/100': '85%'
    },
    screens: {
      'full': '600px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1526px'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
