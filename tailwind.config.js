/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'screen-navbar': 'calc(100vh - 4.125rem)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
