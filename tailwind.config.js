const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        orange: colors.orange,
      },
      fontFamily: {
        fun: ['Benne', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
