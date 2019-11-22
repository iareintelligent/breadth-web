const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    app: "./src/main.ts",
    vendor: "./src/vendor.ts"
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [
      // rules for modules (configure loaders, parser options, etc)
      {
        test: /\.ts$/,
        loader: "awesome-typescript-loader"
      },
      {
        test: /\.scss$/,
        loaders: "style-loader!scss-loader"
      }
    ]
  }
};
