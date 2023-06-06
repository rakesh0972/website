/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'blackbg': '#040405',
      'whiteFont': '#DEDFDF',
      'whitebg': '#FDFDFD',
      'blackFont': '#050505',

      'black': '#1B1E25',
      'white': '#FEFEFF',
      'semi-white': '#7C8591',
      'logo': '#DEDFDF',
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