module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      }
    ]
  }
};
