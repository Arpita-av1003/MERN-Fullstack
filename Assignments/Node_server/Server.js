const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const server = http.createServer((req, res) => {
   
    console.log(`Request received: [${req.method}] ${req.url}`);

    if (req.url === '/') {
        const filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(500);
                res.end('Error loading the page');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Page not found');
    }
});
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});