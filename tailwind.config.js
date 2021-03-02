module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        "page-layout": "1fr 4fr 6fr",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
