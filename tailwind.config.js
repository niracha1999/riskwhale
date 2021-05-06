module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#D3E0EE",
          200: "#B6CBE2",
          300: "#A7C1DD",
          400: "#89ACD1",
          500: "#618fc1",
          600: "#4F83BA",
          700: "#3F6FA2",
          800: "#284667",
          900: "#17283B",
        },
        cream: {
          100: "#FFFFFF",
          200: "#FDFBF3",
          300: "#FCF9EE",
        },
        lightblue: {
          100: "#DEEBF7",
          200: "#CDE0F3",
          300: "#B6D1EE",
          400: "#ACCBEC",
          500: "#9BC1E8",
          600: "#8BB8E5",
          700: "#7AADE1",
          800: "#69A3DD",
          900: "#5999D9",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
