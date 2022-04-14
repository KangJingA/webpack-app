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
        test: /\.scss$/, // finds files based on this regex
        use: ["style-loader", "css-loader", "sass-loader"], // apply loader to the corresponding files.
        // order matters, loads in reverse order
        // sass loader converts scss to css
        // css loader turns css into commonJS
        // style loader injects styles into the dom
      },
    ],
  },
};
