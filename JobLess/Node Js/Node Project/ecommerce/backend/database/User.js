const mongoose = require("mongoose");

// Creating Schema
const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:Number
})

// EXPORTING MODEL
module.exports = mongoose.model("users",UserSchema);