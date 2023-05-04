import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: "#BF8450",
      "primary-light": "#e8ba91",
      "primary-dark": "#8C4F2B",
      accent: "#BF5E26",
      "accent-light": "#f97122",
      "accent-dark": "#401E12",
      darkest: "#26110A",
    },
    screens: {
      xs: "460px",
      sm: "640px",
      md: "900px",
      lg: "1000px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      sans: ["Montserrat", "sans-serif"],
      cursive: ["MedievalSharp", "cursive"],
    },
  },
  plugins: [],
} satisfies Config;
