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
          100: '#252525',
          200: '#202020',
          300: '#171717',
          400: '#131313',
          500: '#111111',
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
          500: '#707070'
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
        text: [ 'var(--font-roboto)', 'var(--font-inter)', 'open-sans', 'sans-serif' ],
        title: [ 'var(--font-lily)', 'open-sans', 'sans-serif' ]
      },
      keyframes: {
        pulse: {
          '0%, 100%': {
            opacity: 0.3
          },
          '50%': {
            opacity: 0.05
          }
        }
      }
    }
  },
  plugins: []
};