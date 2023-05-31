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
        background: '#171826',
        primary: {
          100: '#65acdb',
          200: '#4c9acf',
          300: '#3c84b5',
          400: '#2d6f9c',
          500: '#225d85',
          0: '#65acdb18'
        },
        secondary: {
          100: '#30304a',
          200: '#2a2a42',
          300: '#26263d',
          400: '#1f1f33',
          500: '#131321',
          0: '#30304a33'
        },
        scrollbar: {
          track: 'transparent',
          thumb: '#0c0c12'
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
          100: '#154663',
          200: '#10344a',
          300: '#0c2738',
          400: '#081a26',
          500: '#07151f'
        },
      },
      fontFamily: {
        default: ['Inter', 'Roboto']
      }
    },
  },
  plugins: []
};