/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: {
        default: "#6557F5",
        light: "#aba4f2"
      },
      white: "#ffffff",
      lightGray: "#f7f7f7",
      gray: "#c1c1c1"
    }
  },
  plugins: [],
}
