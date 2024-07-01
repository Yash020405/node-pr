const http = require('http');
const fs = require('fs');
const path = require('path');

function copyFileToDirectory(sourceFilePath, destinationDir) {
    const fileName = path.basename(sourceFilePath);
    const destinationFilePath = path.join(destinationDir, fileName);
    fs.copyFile(sourceFilePath, destinationFilePath, (err) => {
        if (err) {
            console.error('Error copying file:', err);
        } else {
            console.log('File copied successfully to', path.basename(destinationDir));
        }
    });
}

// copyFileToDirectory('/home/user/Desktop/Development/text/new-file.txt', '/home/user/Desktop/Development/text/dir1');

// HTTP
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    if (req.url === '/file') {
        fs.readFile("/home/user/Desktop/Development/text/idex.html", (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Internal Server Error');
            } else {
                res.statusCode = 200;
                res.end(data);
            }
        });
    } else {
        res.statusCode = 404;
        res.end('<h1>Page not found</h1>');
    }
});

const port = 3002;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
