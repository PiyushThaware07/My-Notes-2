const mongoose = require("mongoose");
const dbName = "ecommerceDB";
const url = `mongodb://127.0.0.1:27017/${dbName}`;
const connect = mongoose.connect(url);