/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      '3xl': '1566px',
      '2xl': '1280px',
      xl: '900px',
      lg: '768px',
      mmd: '568px',
      md: '420px',
      sm: '320px'
    },
    extend: {
      colors: {
        background: '#08101e',
        primary: {
          100: '#22ecce',
          200: '#23d6bb',
          300: '#23c7af',
          400: '#1ab09a',
          500: '#149985',
          0: '#5b9ec533'
        },
        secondary: {
          100: '#162440',
          200: '#121e36',
          300: '#0f192e',
          400: '#0b1324',
          500: '#09101f',
          0: '#463F6733'
        },
        scrollbar: {
          track: 'transparent',
          thumb: '#463F67'
        },
        outline: '#23d6bb33'
      },
      textColor: {
        primary: {
          100: '#f0f0f0',
          200: '#919ba3',
          300: '#788187',
          400: '#5d676e',
          500: '#454e54'
        },
        secondary: {
          100: '#22ecce',
          200: '#23d6bb',
          300: '#23c7af',
          400: '#1ab09a',
          500: '#149985'
        }
      },
      fontFamily: {
        text: [ 'var(--font-roboto)', 'Inter', 'open-sans', 'sans-serif' ],
        title: [ 'var(--font-inter)', 'open-sans', 'sans-serif' ]
      }
    }
  },
  plugins: []
};