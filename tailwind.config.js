/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        divider: "#111111",
        primary: "#40A578",
        secondary: {
          one: "#FAD074",
          two: "#E2EEEC",
        },
        text: {
          main: "#111111",
          onPrimary: "#ffffff",
        },
      },
      boxShadow: {
        "3xl": "0px -3px 30px -10px rgba(0,0,0,0.2)",
      },
    },
  },
  plugins: [],
};
