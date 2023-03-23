/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brownPrimary: "#aa937b",
      },
      backgroundImage: {
        paper: "url(./assets/bg-paper.jpeg)",
      },
      fontFamily: {
        serif: [
          "Cormorant Garamond",
          "monospace",
          ...defaultTheme.fontFamily.serif,
        ],
        pixelPrimary: ["Silkscreen", "cursive"],
      },
    },
  },
  plugins: [],
};
