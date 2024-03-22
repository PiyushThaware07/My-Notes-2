const mongoose = require("mongoose");

// Creating Schema
const contactSchema = new mongoose.Schema({
    fullname: String,
    email: String,
    message: String,
    date: String,
    time: String
});

// Creating Model
const contactModel = mongoose.model('contacts', contactSchema);

module.exports = contactModel;