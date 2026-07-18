// raw-server.js (no NPM needed!)
const http = require('http');  //Built-in module

const server = http.createServer((req, res) => {
    // reg: Incoming request {method, url, headers}
    // res: Outgoing response {write, end}

    if (req.method === 'GET' && req.url === '/') {
        // Manual route check
        res.writeHead(200, { 'content-type': 'text/plain'}); //Manual headers
        res.end('My week2 API!'); //send body and close
    } else {
        res.writeHead(404, {'content-type': 'text/plain '});
        res.end('Not Found :{'); // Basic error
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Raw server running on http://localhost:${PORT}`);
});