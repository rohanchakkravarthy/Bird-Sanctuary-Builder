/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0faf0",
          100: "#dcf0dc",
          200: "#b8e0b8",
          300: "#86c986",
          400: "#4da84d",
          500: "#2d8a4e",
          600: "#1f6b3a",
          700: "#155228",
          800: "#0d3a1c",
          900: "#072510",
        },
        sky: {
          50: "#f0f8ff",
          100: "#e0f0ff",
          200: "#baddff",
          300: "#84c2ff",
          400: "#429eff",
          500: "#1a7fe8",
          600: "#1060c0",
          700: "#0c4a96",
          800: "#083570",
          900: "#042248",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
    },
  },
  plugins: [],
};
