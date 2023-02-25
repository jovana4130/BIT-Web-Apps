const figlet = require('figlet');

const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const requestHandler = (req, res) => {
    res.setHeader('Content-Type', 'text/plain');

    const result = figlet(req.url, function (err, data) {
        console.log('test');
        res.end(data);
    });
};

const server = http.createServer(requestHandler);

server.listen(port, hostname, () => {
    console.log('Server running at http://${hostname}:{port}/');
});