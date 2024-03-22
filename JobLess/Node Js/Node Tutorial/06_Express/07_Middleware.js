// 1. Application-Level Middleware: These are middleware functions that are bound to the application and are executed for every incoming request.
const express = require('express');
var  app = express();

const middleware_name = (request,response,next)=>{
    if(request.query.name=="Piyush" && request.query.password==12345){
        response.send("Login Success");
    }
    else{
        next();
    }
}
app.use(middleware_name);

// Routes 
app.get('', (request, response) => {
    response.send("Home Page");
})
app.get('/about', (request, response) => {
    response.send("About Page");
})
app.listen(1000);
// Chrome : http://localhost:3000/?name=Piyush&password=12345   OR http://localhost:3000/about/?name=Piyush&password=12345


// 2. Router-Level Middleware: Similar to application-level middleware, but bound to a specific router instead of the entire application.
const express = require('express');
var app = express();

const middleware_name1 = (request, response, next) => {
    if (request.query.name == "Piyush" && request.query.password == 12345) {
        response.send("Login Success");
    }
    else {
        next();
    }
}

app.get('', (request, response) => {
    response.send("Home");
});
app.get('/contact', middleware_name1, (request, response) => {
    response.send("Contact");
})
app.listen(2000);
// Chrome : http://localhost:3000/contact/?name=Piyush&password=12345


// 3. Import / Export With Middleware :
const express = require('express');
var app = express();
// Importing Middleware
const import_middleware = require('./middleware');
app.get('',(request,response)=>{
    response.send("Home");
})
app.get('/about',import_middleware,(request,response)=>{
    response.send("About");
})
app.get('/contact',import_middleware,(request,response)=>{
    response.send("Contact");
})
app.listen(3000);
// Chrome : http://localhost:3000/contact/?name=Piyush&password=12345   OR http://localhost:3000/about/?name=Piyush&password=12345


// Alternative of 3rd : More Effecient way to do this :
const express = require('express');
var app = express();
const import_middleware = require('./middleware');
const route = express.Router();

route.use(import_middleware);
app.get('', (request, response) => {
    response.send("Home");
})
route.get('/about', (request, response) => {
    response.send("About");
})
route.get('/contact', (request, response) => {
    response.send("Contact");
})
app.use('/',route);
app.listen(2001);