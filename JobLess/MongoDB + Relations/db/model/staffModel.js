const mongoose = require("mongoose");

// Creating Schema
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true, default: "None" },
  email: { type: String, required: true, default: "None" },
  timeStamp: {type:Boolean,required:false},
});

// Creating Model
const staffModel = mongoose.model("staff", staffSchema);

module.exports = staffModel;
