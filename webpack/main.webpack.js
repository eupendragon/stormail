const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require('path')

module.exports = {
  entry: './electron/main.ts',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html'),
      filename: 'index.html',
    }),
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: require('./rules.webpack'),
  },
}
