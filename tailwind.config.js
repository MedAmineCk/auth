/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        tertiary: "var(--tertiary)",
        textLight: "var(--text-light)",
        textLighter: "var(--text-lighter)",
        textDark: "var(--text-dark)",
        promoted: "var(--promoted)",
        verified: "var(--verified)",
        background: "var(--background)",
      },
    },
  },
  plugins: [],
};
