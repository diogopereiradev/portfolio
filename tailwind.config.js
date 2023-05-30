/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '3xl': { max: '1280px' },
        '2xl': { max: '900px' },
        xl: { max: '768px' },
        lg: { max: '568px' },
        md: { max: '420px' },
        sm: { max: '320px' },
      },
      colors: {
        background: '#',
        primary: {
          100: '#',
          200: '#',
          300: '#',
          400: '#',
          500: '#'
        },
        secondary: {
          100: '#',
          200: '#',
          300: '#',
          400: '#',
          500: '#'
        },
        scrollbar: {
          track: 'transparent',
          thumb: '#'
        },
        outline: '#'
      },
      textColor: {
        primary: {
          100: '#f0f0f0',
          200: '#d3d3d3',
          300: '#c8c8c8',
          400: '#8a8a8a',
          500: '#707070',
        },
        secondary: {
          100: '#',
          200: '#',
          300: '#',
          400: '#',
          500: '#'
        },
      },
      fontFamily: {
        default: 'Roboto'
      }
    },
  },
  plugins: [],
};