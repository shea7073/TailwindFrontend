/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    fontFamily: {
      'lato': ['lato']
    },
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
