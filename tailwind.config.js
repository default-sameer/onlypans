import { nextui } from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        backgound: {
          DEFAULT: '#16161a',
          dark: '#0d0d0d',
        },
        headline: {
          DEFAULT: '#fffffe',
          dark: '#eaeaea',
        },
        paragraph: {

        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui(), require('tailwind-scrollbar')],
}
