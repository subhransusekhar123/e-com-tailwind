/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        gotham: ["Gotham Pro"]
      },

      spacing: {
        '144': '32rem'
      }
    },
  },
  plugins: [],
}

