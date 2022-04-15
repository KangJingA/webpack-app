const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  mode: "production", // production mode by default
  devtool: false, // remove eval plus other words so that its easier to read the built code
  output: {
    filename: "[name].[contenthash].bundle.js", //content hashing to cache bust
    path: path.resolve(__dirname, "dist"), // __dirname in a node script returns the path of the folder where the current JavaScript file resides.
    assetModuleFilename: "images/[name].[hash][ext]",
  },
  optimization: {
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true,
        },
      }),
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
    new CleanWebpackPlugin(), // cleans old files in dist
  ],
  module: {
    rules: [
      {
        test: /\.scss$/, // finds files based on this regex
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"], // apply loader to the corresponding files.
        // order matters, loads in reverse order
        // sass loader converts scss to css
        // css loader turns css into commonJS
        // CssExtractPluginLoader extract css into files
      },
    ],
  },
});
