/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-app": "url('/assets/images/banner-promo.png')",
      },
      colors: {
        primary: "#ff5b45",
        black: "#212121",
        secondary: "#494949",
      },
    },
  },
  plugins: [],
};
