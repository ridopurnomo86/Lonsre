module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#ffd6d6',
        'secondary': '#caf7e3',
        'third': '#c6ebc9',
        'fourth': '#dbf6e9',
      },
    },
    backgroundColor : theme => ({
      ...theme('colors'),
      'primary': '#ffd6d6',
      'secondary': '#caf7e3',
      'third': '#c6ebc9',
      'fourth': '#dbf6e9'
    }),
    textColor : theme => ({
      ...theme('colors'),
      'primary': '#ffd6d6',
      'secondary': '#caf7e3',
      'third': '#c6ebc9',
      'fourth': '#dbf6e9'
    }),
    fontFamily: {
      'display': ['Rubik', 'sans-serif'],
      'body': ['Rubik', 'sans-serif']
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
