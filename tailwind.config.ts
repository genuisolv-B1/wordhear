import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50:  '#FDFAF5',
          100: '#F8F2E6',
          200: '#F2E9D8',
          300: '#E8DEC9',
          400: '#D9CEBC',
          500: '#C4B8A6',
        },
        forest: {
          950: '#071510',
          900: '#0D2B1D',
          800: '#1B4332',
          700: '#2D6A4F',
          600: '#3A8A65',
          500: '#52B788',
          400: '#74C69D',
        },
        rust: {
          900: '#4A1A0D',
          800: '#6B2D1A',
          700: '#8B3A2A',
          600: '#A84832',
          500: '#C4593D',
        },
        ink: {
          900: '#0F0F0F',
          800: '#1A1A1A',
          700: '#2D2D2D',
          600: '#444444',
          500: '#6B6560',
          400: '#8A8480',
          300: '#B0AAA4',
        },
        dark: {
          950: '#080808',
          900: '#111111',
          850: '#161616',
          800: '#1C1C1C',
          700: '#252525',
          600: '#303030',
          500: '#404040',
        },
      },
      fontFamily: {
        sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
