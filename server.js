var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var fs = require('fs')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)

var fs = require('fs');

function readJSONFile(filename, callback) {
  fs.readFile(filename, function (err, data) {
    if(err) {
      callback(err);
      return;
    }
    try {
      callback(null, JSON.parse(data));
    } catch(exception) {
      callback(exception);
    }
  });
}

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/api/users", function(req, res) {
  readJSONFile(__dirname + '/assets/fixture/users.json', function (err, data) {
    if (err) {
      throw err;
    }
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Accept", "application/json");
    res.setHeader("Content-Type", "application/json");
    res.json(data);

  });


})

app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
