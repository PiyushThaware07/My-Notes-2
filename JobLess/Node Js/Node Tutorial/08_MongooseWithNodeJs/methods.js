const mongoose = require("mongoose");
// creating Schemas
const EmployeeSchema = mongoose.Schema({
    _id: Number,
    fname: String,
    lname: String,
    email: String,
    salary: Number
});

// Creating Models
const EmployeeModel = mongoose.model('records', EmployeeSchema);
module.exports = EmployeeModel;

