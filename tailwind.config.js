module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "page-layout": "1fr 4fr 1fr 6fr",
      },
      colors: {
        eggplant: "#300d4f",
      },
    },
  },
  options: {
    safelist: ["bg-eggplant", "bg-red-600", "bg-black", "bg-white"],
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
