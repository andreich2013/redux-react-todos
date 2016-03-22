var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config.js');
var fs = require('fs');
var root = path.resolve(__dirname, '../');

var app = new (require('express'))();
var port = 3000;

var compiler = webpack(config);

function readJSONFile(filename, callback) {
  fs.readFile(filename, function(err, data) {
    if (err) {
      callback(err);
      return;
    }

    try {
      callback(null, JSON.parse(data));
    } catch (exception) {
      callback(exception);
    }
  });
}

function setHeaders(res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Accept', 'application/json');
  res.setHeader('Content-Type', 'application/json');
}

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

app.get('/[^(api)]{0,}', function(req, res) {
  res.sendFile(root + '/src/index.html');
});

app.get('/api/users', function(req, res) {
  readJSONFile(root + '/assets/fixture/users.json', function(err, data) {
    if (err) {
      throw err;
    }

    setHeaders(res);

    res.json(data);
  });
});

app.listen(port, function(error) {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser', port, port);
  }
});
