/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./build/*.html'],
  theme: {
    extend: {},
    colors: {
      'udundi': '#611818',
      'white': '#ffffff',
      'black': '#000000',
    },
    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.75rem',
      '8xl': '6rem',
      '9xl': '7rem',
      'hero': '15rem',
    },
  },
  plugins: [],
}
