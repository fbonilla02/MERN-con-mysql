/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'bGray':'#f3f6fe',
        'boxColor':'#111315',
      },
      fontFamily:{
        'Roboto': ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}