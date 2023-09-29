

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'customeOrange':{
          500:'#f97316',
        },
        'customeGreen':{
           400:'#bef264'
        },
        'customeGreen2':{
          600:'#65a30d'
        }
      },
      fontFamily:{

      },
    },
  },
  plugins: [],
}

