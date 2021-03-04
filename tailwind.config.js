module.exports = {
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}'
    ],
    options: {
      safelist: ['bg-eggplant', 'bg-red-600', 'bg-black', 'bg-white']
    }
  },
  darkMode: 'media',
  theme: {
    extend: {
      gridTemplateColumns: {
        'page-layout': '1fr 4fr 1fr 6fr'
      },
      colors: {
        eggplant: '#300d4f'
      },
      fontFamily: {
        soehne: [
          'Söhne web',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ]
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
