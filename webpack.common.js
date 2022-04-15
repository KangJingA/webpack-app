module.exports = {
  devtool: false, // remove eval plus other words so that its easier to read the built code
  entry: {
    main: "./src/index.js", // explicit entrypoint for webpack
    vendor: "./src/vendor.js",
  },
  module: {
    rules: [
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
