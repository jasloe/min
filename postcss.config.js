module.exports = {
  plugins: {
    "postcss-import": {},
    "precss": {},
    "postcss-preset-env": {},
    "rfs": {},
    "postcss-font-magician": {
      variants: {
        Lora: {
          "400": ['svg'],
          "400 italic": ['svg']
        }
      },
      foundries: ["google"],
    }
  }
};
