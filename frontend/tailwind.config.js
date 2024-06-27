/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#1a1a1a',
          800: '#2e2e2e',
          700: '#424242',
        }
      }
    },
  },
  plugins: [],
}
