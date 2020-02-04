const http = require('http');

const requestListener = (request, response) => {
    response.write('Hello from different world\n');
    response.end();
}

const server = http.createServer(requestListener);

server.listen(9000, () => {
    console.log('Server is running...');
});