function testingApiController(request, response) {
    response.send({ message: "testing API" });
}

function insertAPI(request, response) {
    console.log(request.body);
    response.send({ message: request.body });
}

module.exports = { testingApiController, insertAPI };