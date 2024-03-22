/*
Mongoose : 
Mongoose is an ODM (Object-Document Mapping) library for MongoDB in Node.js.
It provides a higher-level, schema-based abstraction over the MongoDB driver.
Install : npm i mongoose
*/

const mongoose = require("mongoose");

const dname = "shopDB";
const collectionname = "productcollection"  // collection name should be lowercase always
async function dbConnect() {
    let url = `mongodb://127.0.0.1:27017/${dname}`;
    let connect = await mongoose.connect(url);
    // Creating Schema : A Mongoose schema defines the shape of documents within a MongoDB collection. It specifies the fields, their data types, and any additional options such as default values, validation rules, and more. A schema is a blueprint for how documents should be structured in the database.
    const ProductSchema = new mongoose.Schema({
        name: String,   // Validation - 1
        price: Number   // Validation - 2
    });

    // Creating Model : A Mongoose model is a constructor function that takes a schema and creates an instance of a document that can be saved to the database. 
    const ProductModel = mongoose.model(collectionname, ProductSchema);
    let data = new ProductModel({
        name: "Fasssst Charger",
        price: 1000
    });
    let store = await data.save()
    console.log(store);
}
dbConnect();
