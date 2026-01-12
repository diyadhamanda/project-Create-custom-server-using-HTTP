const http = require('http');
const fs = require('fs');

const PORT = 8081;

const handleRequest = (req, res) => {
    let filename = '';

    switch (req.url) {
         case '/':
            filename = 'index.html';
            break;
        case '/':
            filename = 'home.html';
            break;
        case '/about':
            filename = 'about.html';
            break;   
        case '/contact':
            filename = 'contact.html';
            break;
        default:
            filename = '404.html';
            break;
    }

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1>');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
};

const server = http.createServer(handleRequest);

server.listen(PORT, () => {
    console.log('Server is started');
    console.log(`http://localhost:${PORT}`);
});
