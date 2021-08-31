const http = require("http");

http
  .createServer(function (request, response) {
    console.log("request received");
    response.end("omg hi lol heheh v2", "utf-8");
  })
  .listen(3000);
console.log("server started");
