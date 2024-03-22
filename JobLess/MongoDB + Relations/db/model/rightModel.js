const mongoose = require("mongoose");

// Creating Schema
const rightSchema = new mongoose.Schema({
  staff_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "staff",
  },
  right: {
    type: String,
  },
  timeStamp: { type: Boolean, required: false },
});

// Creating Model
const rightModel = mongoose.model("right", rightSchema);

module.exports = rightModel;
