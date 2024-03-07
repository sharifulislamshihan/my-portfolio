/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          heading: "Montserrat, sans-serif",
          paragraph: "Lato, sans-serif"
      }
    },
  },
  plugins: [require("daisyui")],
}

