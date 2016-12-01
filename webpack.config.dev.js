const path = require('path');
const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  module: {
    loaders: [{
      test: /\.js$/,
      include: path.join(__dirname, 'src/js'),
      exclude: path.join(__dirname, 'node_modules'),
      loader: 'babel',
      query: {
        presets: ['es2015', 'stage-0', 'react', 'react-hmre'],
      },
    }],
    plugins: ['transform-flow-strip-types', 'syntax-async-functions', 'transform-async-to-generator'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
};
