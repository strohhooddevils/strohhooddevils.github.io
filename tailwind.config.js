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
          50: '#fff5eb',
          100: '#fee9d2',
          200: '#fedcb9',
          300: '#fdd0a0',
          400: '#fdc387',
          500: '#fcb76e',
          600: '#fbab55',
          700: '#fb9e3c',
          800: '#fa9223',
          900: '#fa850a',
          950: '#e67805',
        },
      }
    },
  },
  plugins: [],
}
