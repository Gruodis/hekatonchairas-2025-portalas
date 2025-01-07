/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#020403",
        "primary-light": "#ECECEC",
      },
      fontFamily: {
        sans: [
          '"Space Mono"',
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        grotesk: ['"Space Grotesk"', "monospace"],
      },
    },
  },
  plugins: [],
};
