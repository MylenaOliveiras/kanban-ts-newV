/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: {
      blue: "#59B4D1",
      orange: "#D0935A",
      green: "#54c689",
      white: "#ffff",
      black: "#000",
      gray: "#e1e8ed",
      transparent: "transparent",
    },
    textColor: {
      blue: "#59B4D1",
      orange: "#D0935A",
      green: "#54c689",
      white: "#ffff",
      black: "#000",
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
