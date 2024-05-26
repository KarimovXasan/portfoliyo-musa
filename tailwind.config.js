/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      maxWidth:{
        '1140' : '1140px'
      },
      colors:{
        'gray' : '#757575',
        'blue' : '#124354',
        'white' : '#FFFFFF',
        'yellow' : '#FFA63A',
        'orange' : '#FFA800',
        'bluehover' : '#145E76'
      },
      boxShadow: {
        '3xl' : '3px solid rgba(8, 84, 108, 1)'
      }
    },
  },
  plugins: [],
}