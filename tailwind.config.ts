import type { Config } from 'tailwindcss'
const colors = require('tailwindcss/colors')

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
        green: colors.emerald,
        eggplant: '#300d4f',
        kelp: '#2A6355'
      },
      fontFamily: {
        soehne: ['var(--font-soehne)']
      },
    },
  },
  plugins: [],
}
export default config
