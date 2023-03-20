/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: `#030240`,
          2: `#93c4c7`
        },
        light: {
          1: `#fcbd4b`
        },
        red: {
          1: `#C62329`
        }
      }
    },
  },
  plugins: [],
}
