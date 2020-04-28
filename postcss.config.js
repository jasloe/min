module.exports = {
  plugins: {
    "postcss-import": {},
    "precss": {},
    "postcss-preset-env": {},
    "rfs": {},
    "postcss-font-magician": {
      variants: {
        'Source Sans Pro': {
          "400": [],
          "700 bold": []
        },
        'Old Standard TT': {
          "400": [],
          "400 italic": []
        },
        'Cormorant Garamond': {
          "300": [],
          "400": [],
          "400 italic": [],
          "500": [],
          "500 italic": []
        }
      },
      foundries: ["google"],
    }
  }
};
