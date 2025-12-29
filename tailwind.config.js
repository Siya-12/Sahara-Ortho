export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1f78c1",
        secondary: "#0f4c81",
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merri: ["Merriweather", "serif"],
        changa: ["'Changa One'", "cursive"],
      },
    },
  },
  plugins: [],
};
