/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: {
        tomato: "hsl(4, 100%, 67%)",
      },
      neutral: {
        darkslategrey: "hsl(234, 29%, 20%)",
        charcoalgrey: "hsl(235, 18%, 26%)",
        grey: "hsl(231, 7%, 60%)",
      },
      gradients: {
        from: "hsl(4, 100%, 67%)",
        to: "hsl(4, 100%, 72%)",
      },
      white: "#ffff",
      util: "hsla(4, 100%, 67%, 15%)",
    },
    fontFamily: { sans: "Roboto, sans-serif" },
    screens: { desktop: "950px" },
    extend: {
      boxShadow: {
        "3xl": "-11px 14px 47px -2px rgba(255, 119, 110, 0.6)",
      },
    },
  },
  plugins: [],
};
