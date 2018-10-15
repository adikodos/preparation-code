const http = require('http');
const url = require('url');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = '.'+q.pathname;
    fs.readFile(filename, (err,data) => {
        if(err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    })
}).listen(3000);

server.listen(3000, '127.0.0.1', () => {
    console.log(`server running at http://127.0.0.1:3000`);
})