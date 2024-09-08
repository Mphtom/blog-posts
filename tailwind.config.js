/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {  colors: {
      'main': '#2dd3b7',
       'dark': '#3e535a',
        's-dark': '#848c90',
         'light-dark': '#949494',
          's-light': '#eaeceb'
    }},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
