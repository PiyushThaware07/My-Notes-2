const connectToMongo = require('./config');

let data_to_insert = {
    name: "Insert product",
    price: 100000,
    category: "Insert"
}

async function main() {
    let collection = await connectToMongo();
    let insertData = await collection.insertOne(data_to_insert); // <--- await is necessary as it return a promise needs to handle
    console.log(
        insertData.acknowledged ?           // <--- it return a boolean value used to check the conditions as we have done in this code
            "Data Inserted Successfully" :
            "Failed To Insert Data"
    );
}
main();