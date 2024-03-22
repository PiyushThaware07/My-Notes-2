const express = require("express");
const app = express()

// connections
const importConnection = require("./config");

app.get('/', (request, response) => {
    importConnection.query("select * from records", (error, result) => {
        result ? response.send(result) : "Error To Fetch Data"  // ternary operator
    })
})

app.listen(1000, () => {
    console.log("Server Started at port 1000");
})