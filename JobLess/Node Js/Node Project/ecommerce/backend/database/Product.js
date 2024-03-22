const mongoose = require("mongoose");
// Creating Schema 
const ProductSchema = new mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    userId: String,
    company: String
})

// Creating Model
const ProductModel = mongoose.model("products", ProductSchema);

// Export Model 
module.exports = ProductModel;