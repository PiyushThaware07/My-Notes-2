const mongoose = require("mongoose");

const dbUrl = "mongodb://localhost:27017/mongoDB-relations";

mongoose.connect(dbUrl);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Connected to MongoDB database");
});

db.on("error", (err) => {
  console.error(`Error connecting to MongoDB: ${err}`);
});
