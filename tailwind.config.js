module.exports = {
  purge: [
    "./src/components/**/*.tsx",
    "./src/components/**/*.ts",
    "./src/pages/**/*.tsx",
    "./src/context/*.tsx",
    "./src/utils/**/*.tsx",
    "./src/utils/**/*.ts",
    "./src/*.ts",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        snow: "#FFFBFA",
        "space-cadet": "#395686",
        golden: "#b28d48",
        "orange-red": "#FE5448",
        "mountbatten-pink": "#9d9d9d",
        "raisin-black": "#231f20",
        jet: "#383838",
      },
    },
  },
  variants: {},
  plugins: [],
};
