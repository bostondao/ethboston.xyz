import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        open: ["open", "sans-serif"],
      },
      colors: {
        blue: {
          1: `#030240`,
          2: `#93c4c7`,
          3: `#03023D`,
        },
        light: {
          1: `#fcbd4b`,
        },
        red: {
          1: `#C62329`,
          2: `#CB2B2A`,
        },
      },
    },
  },
  plugins: [],
};
export default config;
