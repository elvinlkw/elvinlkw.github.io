import theme from './src/theme';

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
        'light-gray': '',
        white: theme.colors.white,
        black: theme.colors.black,
      },
    },
  },
  plugins: [require('daisyui')],
};
