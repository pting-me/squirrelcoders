const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    screens: {
      // all in ratios of 240, except 2xl
      // added 32px to 1440px to avoid breakpoint on common 1440x900 screen
      sm: '480px',
      md: '720px',
      lg: '960px',
      xl: '1200px',
      '2xl': '1472px',
    },
    extend: {
      fontFamily: {
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
        sans: ['Montserrat', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
