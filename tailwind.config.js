/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1d1e21",
        backupPrimary: "#161719",
        secondary: "#aaaaaa",
        backupSecondary: "#28292cb6",
        gray: "#c1c1c1",
        lightGray: "#6c717e",
        lightBlue: "#0dcaf0",
        yellow: "#ffc107",
      },
    },
  },
  plugins: [],
};
