const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // production mode by default
  devtool: false, // remove eval plus other words so that its easier to read the built code
  output: {
    filename: "[name].[contenthash].bundle.js", //content hashing to cache bust
    path: path.resolve(__dirname, "dist"), // __dirname in a node script returns the path of the folder where the current JavaScript file resides.
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  plugins: [new CleanWebpackPlugin()], // cleans old files in dist
});
