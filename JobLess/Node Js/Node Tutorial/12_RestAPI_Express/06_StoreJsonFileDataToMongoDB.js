const dname = "shopDB";
let url = `mongodb://127.0.0.1:27017/${dname}`;
// Import jsonData
const jsonData = require("./sampleData.json");

// Import Connect
const connectDB = require("./db/Connect");
const productModel = require("./Model/productModel");

async function startMongoServer() {
    try {
        await connectDB(url);
        await productModel.create(jsonData);
        console.log("success collection is created and data is added");
    }
    catch (error) {
        console.log("Error : ", error);
    }
}

startMongoServer();