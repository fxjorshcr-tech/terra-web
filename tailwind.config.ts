import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#2d8a4e",
          600: "#25743f",
          700: "#1a5c30",
          800: "#145226",
          900: "#0f3d1c",
        },
        secondary: {
          500: "#1b3a5c",
          600: "#152e49",
          700: "#0f2236",
          800: "#0a1724",
        },
        accent: {
          500: "#e8731a",
          600: "#d06515",
        },
      },
    },
  },
  plugins: [],
};
export default config;
