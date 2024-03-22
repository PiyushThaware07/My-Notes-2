// MongoDB + ExpressJs
const express = require("express");
const app = express();

app.get('', (request, response) => {
    response.send("Hello World");
})
app.listen(1000, () => {
    console.log("Server started at port 1000");
})