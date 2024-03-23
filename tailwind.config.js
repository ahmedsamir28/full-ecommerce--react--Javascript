/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        'navbar': '#2a2a2a',
        'base': '#fac90a',
      },
    },
    screens:{
      'xs': '540px',
      'mdd': '768px',
      'lgg': '1000px',
      'xll': '1200px',
    }
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}

