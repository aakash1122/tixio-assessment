/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: "#5C6AC4",
        dark_primary: "#161D25",
        dark_secondary: "#161D25",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        body: ['"Roboto"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
