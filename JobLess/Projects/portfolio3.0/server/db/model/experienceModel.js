const mongoose = require("mongoose");

// Creating Schema
const experienceSchema = new mongoose.Schema({
    jobTitle: String,
    companyName: String,
    duration: Number,
    startDate: String,
    endDate: String,
    responsibilities: Array,
    location:String
});

// Creating Model
const experienceModel = mongoose.model('experience', experienceSchema);

module.exports = experienceModel;