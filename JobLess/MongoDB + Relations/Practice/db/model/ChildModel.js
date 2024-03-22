const mongoose = require("mongoose");

// Creating schema
const childSchema = new mongoose.Schema({
  parent_id: { type: mongoose.Schema.Types.ObjectId, ref: "parent" },
  child_fname: { type: String },
  child_lname: { type: String },
});

// Creating Model
const childModel = mongoose.model("child", childSchema);
module.exports = childModel;
