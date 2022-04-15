const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: false, // remove eval plus other words so that its easier to read the built code
  entry: {
    main: "./src/index.js", // explicit entrypoint for webpack
    vendor: "./src/vendor.js"
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
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
