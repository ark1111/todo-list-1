/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        divider: {
          main: "#cccccc",
        },
        text: {
          main: "#111111",
          800: "#111111cc",
          600:"#11111199"
        },
        bg: {
          main: "#ffffff",
        },
        surface: {
          one: "#eeeeee",
          two: "#dddddd",
          three:"#eeeeee66"
        },
      },
    },
  },
  plugins: [],
};
