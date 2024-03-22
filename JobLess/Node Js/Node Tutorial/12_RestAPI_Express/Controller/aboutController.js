function aboutController(request, response) {
    response.send({ message: "About Router Page" });
}

module.exports = aboutController;