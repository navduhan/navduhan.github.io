/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Ensure it scans App Router files
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Scan components
  ],
  darkMode: "class", // Ensure dark mode works properly
  theme: {
    extend: {
      fontFamily: {
        mont: ["var(--font-mont)", ...fontFamily.sans],
      },
        colors: {
            dark: "#1b1b1b",
            light: "#f5f5f5",
            primary: "#ff3358", // 240,86,199
            primaryDark: "#58E6D9", // 80,230,217
          },
    },

  },
  plugins: [
    
  ],
};


