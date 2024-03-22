const express = require('express');
const app = express();

require('./config');
const import_employee_model = require('./methods');


// 1. Post 
app.use(express.json()) // convert data received from post to json format
app.post('/create', async (request, response) => {
    console.log(request.body);
    let insertData = new import_employee_model(request.body);
    let store = await insertData.save();
    console.log(store);
    response.send(store);
})
app.listen(1000, () => {
    console.log("server started at port 1000");
})

// 2. Get
app.get('/display', async (request, response) => {
    let display = await import_employee_model.find()
    console.log(display);
    response.send(display);
})


// 3. Delete
app.delete('/delete/:_id', async (request, response) => {
    let deleteData = await import_employee_model.deleteOne(request.params);
    response.send(deleteData)
})


// 4. Put
app.put('/put/:_id', async (request, response) => {
    let updateData = await import_employee_model.updateOne(
        request.params,
        { $set: request.body }
    )
    response.send(updateData);
})