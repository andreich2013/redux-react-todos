(function() {

  var webpack = require('webpack'),
      webpackDevMiddleware = require('webpack-dev-middleware'),
      webpackHotMiddleware = require('webpack-hot-middleware'),
      config = require('../webpack.config.js'),
      compiler = webpack(config);

  webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath });
  webpackHotMiddleware(compiler);

}());
