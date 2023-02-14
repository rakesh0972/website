/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#050505',
      'blackbg': '#232323',
      'white': '#DEDEDE',
      'whitebg': '#FDFDFD',
      'line': '#D9D9D9',
      'high': '#00C667',

    },
    extend: {
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [],
}