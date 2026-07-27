import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        primary: {
          50: "#f3f6f4",
          100: "#e2eae5",
          200: "#c6d6cc",
          300: "#9fbaa9",
          400: "#729681",
          500: "#4f7862",
          600: "#3c5f4c",
          700: "#314d3e",
          800: "#293f34",
          900: "#22342b",
        },
        secondary: {
          500: "#3d4c5c",
          600: "#2b3947",
          700: "#1f2a35",
          800: "#141d25",
        },
        accent: {
          500: "#b08d57",
          600: "#997a4a",
        },
      },
    },
  },
  plugins: [],
};
export default config;
