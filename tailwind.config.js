/** @type {import('tailwindcss').Config} */
export default {
  content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
  theme: {
    extend: {
      colors: {
        bgblack: "#0f0f0f",
        bgwhite: "#f0f0f0",
        accentGray: "#232222",
        accentWhite: "#dcdddd"
      },

      fontFamily: {
        "roboto": ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

