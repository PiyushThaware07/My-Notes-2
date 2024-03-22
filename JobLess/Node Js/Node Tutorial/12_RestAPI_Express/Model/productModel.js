const mongoose = require("mongoose");
const collectionName = "productCollection";

// Creating Schema 
const productSchema = new mongoose.Schema({
    name: String,
    price: Number
})

// Creating Model 
const productModel = mongoose.model(collectionName, productSchema);

module.exports = productModel;