/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        caveatBrush: ["Caveat Brush"],
        titilliumWeb: ["Titillium Web"],
        blushes: ["Blushes"],
        moonTime: ["MoonTime"],
      },
      textShadow: {
        sm: "0 0 0.5rem var(--tw-shadow-color)",
        DEFAULT: "0 0 0.8rem var(--tw-shadow-color)",
        lg: "0 0 1.2rem var(--tw-shadow-color)",
      },
    },
  },
  variants: {
    extend: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
  corePlugins: {
    fontFamily: true,
  },
};
