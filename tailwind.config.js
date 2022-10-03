/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        Green: "#00FF85",
        Red: "#E90052",
        Cyan: "#04F5FF",
        Purple: "#38003c",
        Gold: "#FFD700",
        Silver: "#C0C0C0",
        Bronze: "#CD7F32",
      },
      screens: {},
      animation: {
        // Bounces 5 times 1s equals 5 seconds
        "bounce-short": "bounce 1s ease-in-out 2",
      },
    },
  },
  plugins: [],
};
