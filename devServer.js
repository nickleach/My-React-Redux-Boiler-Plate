const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  contentBase: './src',
}).listen(3000, 'localhost', (err) => { // eslint-disable-line consistent-return
  if (err) {
    return console.log(err); // eslint-disable-line no-console
  }

  console.log('Listening at http://localhost:3000/'); // eslint-disable-line no-console
});
