const export_middleware = (request, response, next) => {
    if (request.query.name == "Piyush" && request.query.password == 12345) {
        response.send("Login Sucess");
    }
    else if (request.query.name == "Piyush" || request.query.password == 12345) {
        response.send("Login Failed")
    }
    else {
        next();
    }
}

module.exports = export_middleware;