const { MongoClient } = require("mongodb");
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function connectToMongo() {
    const create_connection = await client.connect();
    let database = create_connection.db('shopDB');
    let collection = database.collection('productCollection');
    return collection;
}

module.exports = connectToMongo;