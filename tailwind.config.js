/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        'primary-color': '#5f5855',
        'primary-color-hover': '#839289',
        'background-color': '#F8F7F6',
        'border-color': '#DDDCD4',
        'menu-color': '#CBD1CD'
      },

      animation: {
        'fade-drawer-left': 'fadeDrawerLeft 0.3s ease',
        'fade-drawer-right': 'fadeDrawerRight 0.3s ease',
        fadeIn: 'FadeIn 0.5s ease',
      },

      keyframes: {
        fadeDrawerLeft: {
          '0%': { transform: 'translateX(-200px)' },

          '100%': { transform: 'translateX(0)' },
        },
        fadeDrawerRight: {
          '0%': { transform: 'translateX(200px)' },

          '100%': { transform: 'translateX(0)' },
        },
        FadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
    },
    fontFamily: {
      body: ['Playfair Display'],
    },
  },
  plugins: [],
};
