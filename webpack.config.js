'use strict'; // eslint-disable-line

const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const WebpackMd5Hash = require('webpack-md5-hash');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const pjson = require('./package.json');
const __versionString__ = JSON.stringify(pjson.version);
require('babel-polyfill');

const dev = require('./webpack.config.dev.js');
const production = require('./webpack.config.prod.js');


const TARGET = process.env.npm_lifecycle_event;

const PATHS = {
  app: path.join(__dirname, 'src/js'),
  build: path.join(__dirname, 'dist'),
};

let
  NODE_ENV,
  __DEVELOPMENT__,
  webpackConfig,
  entry;

process.env.BABEL_ENV = TARGET;
switch (TARGET) {
  // add additional environments here
  case 'build:webpack:prod':
    console.log('building webpack config for prod'); // eslint-disable-line no-console
    NODE_ENV = '"production"';
    __DEVELOPMENT__ = false;
    webpackConfig = production;
    entry = ['./src/js/index'];
    break;
  default:
    console.log('building webpack config for development'); // eslint-disable-line no-console
    NODE_ENV = '"development"';
    __DEVELOPMENT__ = true;
    webpackConfig = dev;
    entry = [
      // necessary for hot reloading with IE:
      'eventsource-polyfill',
      // hot reload server
      'webpack-dev-server/client?https://localhost:3000',
      'webpack/hot/only-dev-server',
      // main entry
      './src/js/index',
    ];
}

const common = {
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/js'),
    },
  },
  entry,
  output: {
    path: PATHS.build,
    filename: 'app.[hash].js',
    publicPath: '/',
  },
  node: {
    fs: 'empty',
  },
  plugins: [
    new WebpackMd5Hash(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV,
        __VERSION__: __versionString__,
      },
      __DEVELOPMENT__,
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      chunksSortMode: 'dependency',
    }),

  ],
};
module.exports = merge(webpackConfig, common);
