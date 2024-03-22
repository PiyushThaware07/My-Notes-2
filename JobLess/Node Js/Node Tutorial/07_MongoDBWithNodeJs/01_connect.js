const { MongoClient } = require('mongodb');
// dbName and collectionName are available in mongoDB
const dbName = "shopDB";
const collectionName = "productCollection";
const url = "mongodb://127.0.0.1:27017";
// Create Client
const client = new MongoClient(url);

async function connectToMongo() {
    // Establish a connection between client created with mongoDB
    let create_connection = await client.connect();
    // Extract Database from connection
    let database = create_connection.db(dbName);
    // Extract Collection from database
    let collection = database.collection(collectionName)
    // Reading Data of the collections
    let readData = collection.find().toArray();
    // We need to handle readData as it is a promise need to handle by await method
    let readHandle = await readData;
    console.log(readHandle);
}
connectToMongo();
