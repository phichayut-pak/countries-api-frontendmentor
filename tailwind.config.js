const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkElements: 'hsl(209, 23%, 22%)',
        darkBg: 'hsl(207, 26%, 17%)',
        lightText: 'hsl(200, 15%, 8%)',
        lightInput: 'hsl(0, 0%, 52%)',
        lightBg: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'nunito': ['Nunito Sans', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif']
      },
      screens: {
        'mid': '1260px',
        'larger': '1581px'
      }
    },

  },
  // screens: {
  //   'md': '1581px',
  //   'mid': '1260px'
  // },
  plugins: [],
}