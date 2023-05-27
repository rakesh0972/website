/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'black': '#1B1E25',
      'blackbg': '#232323',
      'white': '#FEFEFF',
      'semi-white': '#7C8591',
      'logo': '#DEDFDF',
      'whitebg': '#FDFDFD',
      'line': '#D9D9D9',
      // 'high': '#00C667',
      'high': '#EB5757',

    },
    extend: {
      fontFamily: {
        burtons: 'burtons',
      }
    },
  },
  plugins: [


  ],
}