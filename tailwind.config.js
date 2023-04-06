/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  variants: {},
  theme: {
      fontFamily: {
          sans: ['Work Sans', 'sans-serif'],
          mono: ['B612 Mono', 'monospace']
      },
      extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'), 
    require('daisyui')
  ],
  daisyui: {
      themes: ['night'],
  },
}

