/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateColumns: {
      "auto-fill": "repeat(auto-fill, minmax(200px,1fr))",
    },
    extend: {},
    fontFamily: {
      raleway: ["Raleway", "Sans-serif"],
    },
  },
  plugins: [],
};
