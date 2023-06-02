/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      '3xl': { max: '1280px' },
      '2xl': { max: '1100px' },
      xl: { max: '900px' },
      lg: { max: '768px' },
      mmd: { max: '568px' },
      md: { max: '420px' },
      sm: { max: '320px' },
    },
    extend: {
      colors: {
        background: '#090909',
        primary: {
          100: '#696cff',
          200: '#5959e3',
          300: '#4b4bc9',
          400: '#3d3dad',
          500: '#313194',
          0: '#373966'
        },
        secondary: {
          100: '#303030',
          200: '#252525',
          300: '#202020',
          400: '#151515',
          500: '#131313',
          0: '#30303033'
        },
        scrollbar: {
          track: 'transparent',
          thumb: '#303030'
        },
        outline: '#4949cc'
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
          100: '#696cff',
          200: '#5959e3',
          300: '#4b4bc9',
          400: '#3d3dad',
          500: '#313194'
        }
      },
      fontFamily: {
        text: ['var(--font-roboto-text)', 'Inter', 'open-sans', 'sans-serif'],
        title: ['var(--font-libre-title)', 'var(--font-roboto-text)', 'Inter', 'open-sans', 'sans-serif']
      }
    }
  },
  plugins: []
};