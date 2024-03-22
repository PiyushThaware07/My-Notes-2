const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/timePass";

mongoose.connect(dbUrl);

const dbConnection = mongoose.connection;

dbConnection.on("connected", () => {
  console.log(">> MongoDB connected successfully");
});

dbConnection.on("error", (err) => {
  console.error(">> MongoDB connection error:", err);
});

// Optional: You can listen for the "disconnected" event as well
dbConnection.on("disconnected", () => {
  console.log(">> MongoDB disconnected");
});
