const path = require("path")

module.exports = [
  {
    test: /\.node$/,
    use: 'node-loader',
  },
  {
    test: /\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@marshallofsound/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  {
    test: /\.(js|ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
    },
  },
  {
    test: /\.(png|jpe?g|gif)$/i,
    loader: 'file-loader',
    options: {
      name: '[path][name].[ext]',
    },
  },
  {
    test: /\.jsx?$/,
    include: [path.resolve(__dirname, '../src')],
    loader: 'babel-loader',
    resolve: {
      extensions: ['.js', '.jsx', '.json'],
    },
  },
  {
    test: /\.(html)$/,
    include: [path.resolve(__dirname, '../src')],
    use: {
      loader: 'html-loader',
    },
  },
  {
    test: /\.css$/,
    include: [path.resolve(__dirname, '../src')],
    use: ['style-loader', 'css-loader', 'postcss-loader'],
  },
]
