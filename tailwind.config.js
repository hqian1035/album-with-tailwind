/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        night: {
          DEFAULT: "#0D1120",
          50: "#171E2C",
          500: "#0D1120"
        }
      }
    },
  },
  darkMode: 'class',
  plugins: [
    // "prettier-plugin-svelte",
    // "prettier-plugin-organize-imports",
    "prettier-plugin-tailwindcss", // MUST come last
  ],
};
