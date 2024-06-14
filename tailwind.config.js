/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        divider: "#111111",
        primary: "40A578",
        secondary: {
          one: "#FAD074",
          two: "#E2EEEC",
        },
      },
    },
  },
  plugins: [],
};

