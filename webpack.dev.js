const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");

module.exports = merge(common, {
  mode: "development", // production mode by default
  devtool: false, // remove eval plus other words so that its easier to read the built code
  output: {
    filename: "[name].bundle.js", //content hashing to cache bust
    path: path.resolve(__dirname, "dist"), // __dirname in a node script returns the path of the folder where the current JavaScript file resides.
    assetModuleFilename: "images/[name][ext]", // path of assets
  },
});
