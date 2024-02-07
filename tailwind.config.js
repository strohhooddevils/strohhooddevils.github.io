/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        red: {
          50: '#f96f7c',
          100: '#f85766',
          200: '#f73e4f',
          300: '#f62639',
          400: '#f50d23',
          500: '#e0091d',
          600: '#c7081a',
          700: '#af0717',
          800: '#960613',
          900: '#7e0510',
          950: '#65040d',
        },
        straw: {
          50: '#fedbb7',
          100: '#fdd4a8',
          200: '#fdcd9a',
          300: '#fdc58b',
          400: '#fcbe7d',
          500: '#fcb76e',
          600: '#e3a563',
          700: '#ca9258',
          800: '#b0804d',
          900: '#976e42',
          950: '#7e5c37',
        },
      }
    },
  },
  plugins: [],
}
