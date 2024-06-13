/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#33CC99",
        primaryBold: "#2dc290",
        primaryThin: "#35e4a9",
        primaryLight: "rgba(53, 228, 169, 0.1)",
        light: "#F6F6F6",
        danger: "#b11010",
      },
    },
  },
  plugins: [],
};
