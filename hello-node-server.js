const http = require('http');

var requestListener = (request, response) => {
    console.log(request.url);
    console.log('Call Me!');
    response.write('Hello, Node!');
    response.end();
}

var server = http.createServer(requestListener);

var confirmationCallback = () => {
    console.log('Server is running...');
}

server.listen(9090, confirmationCallback);
