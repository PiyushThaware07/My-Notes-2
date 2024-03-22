// Express + MongoDB Integration


/*
API Methods :
1. GET: Retrieve data from the server.
2. POST: Create a new resource on the server.
3. PUT or PATCH: Update an existing resource on the server.
4. DELETE: Remove a resource from the server.
*/

// Express Setup
const express = require("express");
const app = express();
// Import config
const connectToMongo = require("./config");

// 1.GET
app.get('/', async (request, response) => {
    let collection = await connectToMongo();
    let readData = await collection.find().toArray();
    response.send(readData);  // this is send to the server or webpage
})




// 2.POST 
app.use(express.json()); // read requested data in json format server by a server
app.post('/', async (request, response) => {
    /*
    // Static Data
    let data_to_insert = {
        name: "insert from api",
        price: "insert from api",
        category: "insert from api"
    }
    */
    let data_to_insert = request.body; // this is received from server dynamic data
    let collection = await connectToMongo();
    let insertData = await collection.insertOne(data_to_insert);
    console.log(insertData);
    response.send(insertData);
})



// 3. Put 
app.use(express.json()); // read requested data in json format server by a server
app.put('/:pname', async (request, response) => {
    /*
    // Static Sata Updates
    let updates = {
        name: "update from static put",
        price: "update from static put",
        category: "update from static put"
    }
    */
    let updates = request.body;
    const collection = await connectToMongo();
    const updateData = await collection.updateOne(
        { name: request.params.pname },  // getting name from webpage url
        { $set: updates }
    );
    response.send(updateData);
})



// 4. Delete 
app.delete('/:pname', async (request, response) => {
    const collection = await connectToMongo();
    const deleteData = await collection.deleteOne({ name: request.params.pname })
    response.send(deleteData);
})



app.listen(1000, () => {
    console.log("server started at port 1000");
})