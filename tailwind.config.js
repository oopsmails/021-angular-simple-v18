/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'element-base': `rgba(var(--default-color), <alpha-value)`,
        'nav-default-height': `var(--nav-bar-height)`
      }
    },
  },
  plugins: [],
}

