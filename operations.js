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

const http = require('http');
//HTTP
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write('<html> <head> <title>Node js class</title> </head> <body>');
    res.write('<h1>Hello World!</h1>');
    res.write('</body> </html>');
    res.end();

});

const port = 3000;
const host = 'localhost';

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});