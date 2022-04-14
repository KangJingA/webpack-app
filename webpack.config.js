const path = require("path")

module.exports = {
    mode: "development", // production mode by default
    devtool: "none", // remove eval plus other words so that its easier to read the built code
    entry: "./src/index.js", // explicit entrypoint for webpack
    output: {
        filename: "main.js",
        path: path.resolve(__dirname,"dist") // __dirname in a node script returns the path of the folder where the current JavaScript file resides.
    },

}