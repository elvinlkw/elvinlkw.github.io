import theme from './src/theme.jsx';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  daisyui: {
    darkTheme: 'light',
  },
  theme: {
    extend: {
      colors: {
        white: theme.colors.white,
        black: theme.colors.black,
        blue: theme.colors.iBlue,
      },
    },
  },
  plugins: [require('daisyui')],
};
