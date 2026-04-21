/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#005BA1',
        lightgray: '#E2E2E2',
        success: '#00A16E',
        headertable: '#DEF2FF',
      },
    },
  },
  plugins: [],
}
