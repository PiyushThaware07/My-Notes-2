require("dotenv").config();
const mongoose = require("mongoose");

const dbURL =
    process.env.HOST_ENV === "production"
        ? process.env.DATABASE_ONLINE
        : process.env.DATABASE_OFFLINE;

mongoose.connect(dbURL);

const dbConnection = mongoose.connection;

dbConnection.on("error", (error) => {
    console.error("Error connecting to the database:", error);
});

dbConnection.on("open", () => {
    console.log("Database is connected:", dbURL);
});
