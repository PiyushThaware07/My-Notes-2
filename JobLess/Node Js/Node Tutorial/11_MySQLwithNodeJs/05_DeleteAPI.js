const express = require("express");
const app = express()

// connections
const importConnection = require("./config");

app.use(express.json());  //  <-- read data to json from request
app.delete('/:id', (request, response) => {
    importConnection.query("DELETE FROM records WHERE id =" + request.params.id, (error, results, fields) => {
        if (error) {
            console.log("Failed To Delete Data");
        }
        else {
            response.send(results)
        }
    });
})

app.listen(1000, () => {
    console.log("Server Started at port 1000");
})