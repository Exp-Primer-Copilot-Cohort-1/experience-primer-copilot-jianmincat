// Create web server
// 1. Create a web server
// 2. Handle requests and send response
// 3. Read and write files
// 4. Create a form
// 5. Handle form data
// 6. Redirect user
// 7. Delete comments

// 1. Create a web server
const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // 2. Handle requests and send response
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url === '/about') {
        fs.readFile('about.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else if (req.url === '/contact') {
        fs.readFile('contact.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    } else {
        fs.readFile('404.html', (err, data) => {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }
});

// 3. Read and write files
fs.readFile('comments.json', 'utf-8', (err, data) => {
    const comments = JSON.parse(data);

    // 4. Create a form
    server.on('request', (req, res) => {
        if (req.method === 'POST' && req.url === '/submit') {
            let body = '';
            req.on('data', chunk => {
                body += chunk.toString();
            });
            req.on('end', () => {
                const comment = JSON.parse(body);
                comments.push(comment);

                // 5. Handle form data
                fs.writeFile('comments.json', JSON.stringify(comments), 'utf-8', (err) => {
                    res.writeHead(301, { 'Location': '/' });
                    return res.end();
                });
            });
        }
    });
});

// 6. Redirect user
// 7. Delete comments