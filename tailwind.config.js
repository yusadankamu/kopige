/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A1810",
        secondary: "#D4A574",
        accent: "#8B4513",
      },
      fontFamily: {
        heading: ["JetBrains Mono", "monospace"],
        body: ["Sora", "sans-serif"],
      },
    },
  },
  plugins: [],
};
