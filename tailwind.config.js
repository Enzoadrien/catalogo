/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ca1507",
        "primary-foreground": "#ffffff",
        "primary-100": "#fee2e2",
        "primary-200": "#fecaca",
        "primary-500": "#ca1507",
        "secondary-700": "#374151",
      },
    },
  },
  plugins: [],
};
