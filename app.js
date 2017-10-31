var express = require('express');
var app = express();

app.use(express.static(__dirname + '/node_modules/'));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + "/" + req.path)
});

var server = app.listen(5000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});