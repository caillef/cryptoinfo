const http = require('http');

const server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World! My name is Corentin Cailleaud, and this is my first Node.js server");
});

const port = process.env.PORT || 3000;
server.listen(port);
console.log("Server running at http://localhost:%d", port);
