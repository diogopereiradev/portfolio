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
      '2xl': '1180px',
      xl: '900px',
      lg: '768px',
      mmd: '568px',
      md: '420px',
      sm: '320px',
      base: '0px'
    },
    extend: {
      colors: {
        background: '#0b1529',
        primary: {
          100: '#22ecce',
          200: '#23d6bb',
          300: '#23c7af',
          400: '#1ab09a',
          500: '#195e54',
          0: '#22ecce13'
        },
        secondary: {
          100: '#1c2c4d',
          200: '#15213b',
          300: '#121e36',
          400: '#0e172b',
          500: '#0b1426',
          0: '#1c2c4d33'
        },
        scrollbar: {
          track: 'transparent',
          thumb: '#1c2c4d'
        },
        outline: '#23d6bb33'
      },
      textColor: {
        primary: {
          100: '#7f8d99',
          200: '#516573',
          300: '#40557d',
          400: '#23324d',
          500: '#252e38'
        },
        secondary: {
          100: '#22ecce',
          200: '#23d6bb',
          300: '#23c7af',
          400: '#1ab09a',
          500: '#149985'
        },
        white: {
          100: '#f0f0f0',
          200: '#d3d3d3',
          300: '#c8c8c8',
          400: '#a8a8a8',
          500: '#909090'
        }
      },
      fontFamily: {
        text: [ 'var(--font-roboto)', 'open-sans', 'sans-serif' ],
        title: [ 'var(--font-calibre)', 'open-sans', 'sans-serif' ]
      }
    }
  },
  plugins: []
};