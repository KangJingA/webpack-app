const path = require("path");

module.exports = {
  mode: "development", // production mode by default
  devtool: false, // remove eval plus other words so that its easier to read the built code
  entry: "./src/index.js", // explicit entrypoint for webpack
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"), // __dirname in a node script returns the path of the folder where the current JavaScript file resides.
  },
  module: {
    rules: [
      {
        test: /\.css$/, // finds files based on this regex
        use: ["style-loader", "css-loader"], // apply loader to the corresponding files. css loader first, then style
        // order matters, loads in reverse order
        // css loader bundles css
        // style loader takes the css and injects it to the dom
      },
    ],
  },
};