/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        text: {
          main: '#333333',
          link: '#1677FF'
        },
        border: {
          main: '#d9d9d9'
        }
      }
    }
  },
  plugins: []
}
