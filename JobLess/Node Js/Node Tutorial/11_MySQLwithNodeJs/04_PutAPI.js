const express = require("express");
const app = express()

// connections
const importConnection = require("./config");

app.use(express.json());  //  <-- read data to json from request
app.put('/:id', (request, response) => {
    let updateData = [request.body.fname, request.body.lname, request.body.email, request.params.id];
    console.log(updateData);
    importConnection.query("UPDATE records SET fname = ?, lname = ?, email = ? where id = ?", updateData, (error, results, fields) => {    // (query,update data list,callback function)
        if (error) {
            console.log("Error Occur Failed To Change");
        }
        else {
            response.send(results);
        }
    });
})

app.listen(1000, () => {
    console.log("Server Started at port 1000");
})