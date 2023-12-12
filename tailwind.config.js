/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      aclonica: ["Aclonica", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      roboto: ["Roboto", "sans-serif"],
      alef: ["Alef", "sans-serif"],
    },

    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],

};
