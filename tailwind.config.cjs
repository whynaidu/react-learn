/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      height: {
      '98':'759.81px'
    }},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
