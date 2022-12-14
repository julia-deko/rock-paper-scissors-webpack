const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './code/main.js',
  module: {
      rules: [
        {
          test: /\.css$/i,
          use: ["style-loader","css-loader"]
        },
        {
          test: /\.png$/i,
          type: "asset/resource"
        },
        {
          test: /\.txt$/i,
          type: 'asset/source'
        },
        {
          test: /\.ttf$/i,
          type: "asset/resource"
        }
      ]
  },
  plugins: [new HtmlWebpackPlugin({ template: "./index.html" })]
}