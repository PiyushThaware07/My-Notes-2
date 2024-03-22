const express = require("express");
const app = express()

// connections
const importConnection = require("./config");
const new_connection = require("./config");

app.use(express.json());  //  <-- read data to json from request
app.post('/', (request, response) => {
    /*
    const insertData = {
        fname: "Herik",
        lname: "Sevak",
        email: "Herik@gmail.com"
    }
    */
    const insertData = request.body;
    console.log(insertData);
    new_connection.query("INSERT INTO records SET ?", insertData, (error, result, fields) => {
        if (error) {
            console.log("Error Occurs Failed to post data");
        }
        else {
            response.send(result);
        }
    })
})

app.listen(1000, () => {
    console.log("Server Started at port 1000");
})