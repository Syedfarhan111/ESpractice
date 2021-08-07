const http = require("http");
var fs = require("fs"); /* fs = filesystem import*/

http
  .createServer(function (res, req) {
    fs.readFile("table.html", res.end());
  })
  .listen(4000);
