const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send({ message: "Home Page" })
})




function startServer() {
    try {
        app.listen(3000, () => {
            console.log("Listening at 3000 port");
        })
    } catch (error) {
        console.log("Error : ", "Failed To Start Server");
    }
}
startServer();