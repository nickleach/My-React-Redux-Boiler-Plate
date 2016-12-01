const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src/js'),
      exclude: path.join(__dirname, 'node_modules'),
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react'],
      },
    }],
    plugins: ['transform-flow-strip-types', 'syntax-async-functions', 'transform-async-to-generator'],
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/assets',
        to: 'assets',
      },
      {
        from: 'src/css',
        to: 'css',
      },
      {
        from: 'src/fonts',
        to: 'fonts',
      },
      {
        from: 'src/index.html',
        to: '',
      },
    ]),
  ],
};
