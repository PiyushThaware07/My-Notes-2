// 1. Handling Response Only
const http = require('http');
// Syntax :  http.createServer(function).listen(port number)
http.createServer((request, response) => {
    response.write("Hello this is the response from server 'Method-1'");
    response.end();
}).listen(1000);


// 2. Handling Request With Response
http.createServer((request, response) => {
    response.write("Hello this is the response from server 'Method-2' & the server data is "+request.query.age);
    response.end();
}).listen(2000);