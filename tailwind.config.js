/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '6': '6px',
      },
      rotate: {
        '720': '720deg',
      },
    },
  },
  plugins: [],
}