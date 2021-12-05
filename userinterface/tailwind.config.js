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
        primary: "#4458FE",
        "normal-gray": "rgba(23, 62, 103, 0.5)",
        divideColor: "#EFF3F6",
        "secondary-text-color": "rgba(23, 62, 103, 0.6)",
        "primary-text-color": "#173E67",
        "light-gray": "rgba(23, 62, 103, 0.2)",
        placeholder: "rgba(149, 160, 184, 1)",
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
