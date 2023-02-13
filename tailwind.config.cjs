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
        98: "759.81px",
      },
      boxShadow: {
        "3xl": "0 35px 60px -15px rgba(0, 0, 0, 0.3)",
      },
      scale: {
        "103":"1.03"
      }
    },
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
};
