const express = require("express");
const app = express();

app.get("/", (request, response) => {
    response.send("Server Started");
})

app.listen(1000, () => {
    console.log("Server Started at port 1000");
})

