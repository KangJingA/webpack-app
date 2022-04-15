const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
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
  plugins: [
    // plugins customize the webpack build process in a variety of ways
    new HtmlWebpackPlugin({
      template: "./src/template.html", //use a template html so that webpack updates the js script since its hashed now
    }),
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, // finds files based on this regex
        use: ["style-loader", "css-loader", "sass-loader"], // apply loader to the corresponding files.
        // order matters, loads in reverse order
        // sass loader converts scss to css
        // css loader turns css into commonJS
        // style loader injects styles into the dom
      },
    ],
  },
});
