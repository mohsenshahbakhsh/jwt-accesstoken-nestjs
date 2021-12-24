module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      Inter: ["Inter"],
      OpenSansRegular: ['"OpenSansRegular"'],
      RubikRegular: ['"RubikRegular"'],
      RubikBold: ['"RubikBold"'],
    },
    extend: {
      colors: {
        primary: "#34485E",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["group-focus"],
      opacity: ["group-focus"],
      textColor: ["group-focus"],
      fontSize: ["hover", "focus", "group-focus"],
    },
  },
  plugins: [],
};
