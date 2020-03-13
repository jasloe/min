module.exports = {
  plugins: {
    "postcss-import": {},
    "precss": {},
    "postcss-preset-env": {},
    "rfs": {},
    "postcss-font-magician": {
      variants: {
        Lora: {
          "400": [],
          "400 italic": []
        }
      },
      foundries: ["google"],
    }
  }
};
