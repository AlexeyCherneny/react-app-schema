const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  mode: "production",
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "bundle.js"
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-typescript", "@babel/preset-react"]
          }
        }
      }
    ]
  }
};
