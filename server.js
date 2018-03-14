var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3004;

app.use(express.static(path.join(__dirname, 'dist')));

var server = app.listen(port, function() {
  console.log('Magic happens on port ' + port);
});
