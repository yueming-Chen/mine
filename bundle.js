var express = require('express');

var app = express();

app.use(express.static('./'));

var port = 3002;

app.listen(port, function () {
  console.log(port);
});