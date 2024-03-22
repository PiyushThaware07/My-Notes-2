const mongoose = require("mongoose");
const dname = "shopDB";
let url = `mongodb://127.0.0.1:27017/${dname}`;

console.log("connect database");
function connectDB() {
    return mongoose.connect(url);
}

module.exports = connectDB;