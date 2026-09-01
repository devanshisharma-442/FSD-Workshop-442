import http from 'http';

const server = http.createServer((req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/msg' && method === 'GET') {
        res.end('this is welcome message from the server');
    } else if (url === '/sys' && method === 'GET') {
        res.end('this is system information');
    } else if (url === '/admin' && method === 'GET') {
        res.end('welcome Dhruv');
    } else {
        res.statusCode = 404;
        res.end('Page not found');
    }
});

server.listen(3000, () => {
    console.log('server running on port 3000');
});
