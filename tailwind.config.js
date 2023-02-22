/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    colors: {
      blue: '#0B0D17',
      lightBlue: '#D0D6F9',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}