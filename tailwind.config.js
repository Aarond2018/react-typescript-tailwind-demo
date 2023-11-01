/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      main: {
        100: "#E1DCD9",
        200: "#8F8681",
        300: "#32435F"
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
    },
    extend: {},
  },
  plugins: [],
}