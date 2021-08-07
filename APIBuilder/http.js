// const express = require("express;");
// const app = express ()

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('table.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

