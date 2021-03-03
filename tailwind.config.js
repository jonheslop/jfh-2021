module.exports = {
  purge: {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      safelist: ["bg-eggplant", "bg-red-600", "bg-black", "bg-white"],
    },
  },
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
  variants: {
    extend: {},
  },
  plugins: [],
};
