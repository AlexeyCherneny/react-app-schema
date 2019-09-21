const PATHS = require("./paths")

module.exports = {
  devtool: "inline-source-map",

  devServer: {
    contentBase: PATHS.build
  },
};