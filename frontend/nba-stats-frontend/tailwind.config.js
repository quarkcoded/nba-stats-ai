/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      //coolors.co palette https://coolors.co/4bb5e6-1f2421-216869-49a078-c4d6b0
      'pictonBlue': '4bb5e6',
      'eerieBlack': "#1f2421",
      'caribbeanCurrent': '#216869',
      'jungleGreen': '#49a078',
      'teaGreen': '#c4d6b0',
    },},
  },
  plugins: [],
}