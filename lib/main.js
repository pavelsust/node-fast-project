"use strict";

var _ConnectionCount = require("./ConnectionCount");

var http = require('http');

var connection = new _ConnectionCount.ConnectionCount();
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.write('hello world' + connection.showCount());
    response.end();
  }

  if (request.url === '/api/courses') {
    response.write(JSON.stringify([1, 2, 3]));
    response.end();
  }
});
server.on('connection', function () {//console.log(`new connection id: ${connection.showCount()}`)
});
server.listen(3000, function (args) {
  id: 1;
});