const http = require('http');

var requestListener = (request, response) => {
    console.log(response);
    response.write('Hello, Node!');
    response.end();
}

var server = http.createServer(requestListener);

var confirmationCallback = () => {
    console.log('Server is running...');
}

server.listen(9090, confirmationCallback);
