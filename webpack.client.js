const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    app: [
      "react-hot-loader/patch",
      "webpack-hot-middleware/client",
      "./client/index.js"
    ]
  },
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
