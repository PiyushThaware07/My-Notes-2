function homeController(request, response) {
    response.send({ message: "Home Page Router" })
}

module.exports = homeController;