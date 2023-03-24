/** @type {import('tailwindcss').Config} */
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
        pixelPrimary: ["Silkscreen", "cursive"],
      },
    },
  },
  plugins: [],
};
