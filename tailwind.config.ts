import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './ui/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: ['bg-eggplant', 'bg-red-600', 'bg-black', 'bg-white', 'bg-kelp'],
  theme: {
    extend: {
      gridTemplateColumns: {
        'page-layout': '1fr 4fr 1fr 6fr'
      },
      colors: {
        eggplant: '#300d4f',
        kelp: '#2A6355'
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
      },
    },
  },
  plugins: [],
}
export default config
