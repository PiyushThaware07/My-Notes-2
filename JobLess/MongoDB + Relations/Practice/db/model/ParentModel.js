const mongoose = require("mongoose");

// Creating schema
const parentSchema = new mongoose.Schema({
  fname: { type: String },
  lname: { type: String },
  email: { type: String },
});

// Creating Model
const parentModel = mongoose.model("parent", parentSchema);
module.exports = parentModel;
