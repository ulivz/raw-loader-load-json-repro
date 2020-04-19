const webpack = require('webpack');

module.exports = {
  mode: 'development',
  output: {
    filename: 'dist.js'
  },
  entry: {
    app: './index.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader'
      }
    ]
  }
};
