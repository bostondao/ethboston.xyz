/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          1: `#2b4084`,
          2: `#93c4c7`
        },
        light: {
          1: `#fcbd4b`
        }
      }
    },
  },
  plugins: [],
}
