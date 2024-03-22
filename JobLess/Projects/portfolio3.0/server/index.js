require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
// Import Router ==================================================================
const router = require("./router/router");

// Import MongoDB Connection ======================================================
// const connectDB = require("./db/connect");
require("./db/connect");


// Middlewares --------------------------------------------------------------------
app.use(cors());
app.use(express.json());
// Handle Image Upload ------------------------------------------------------------
app.use("/uploads", express.static("uploads"));


app.get("/", (request, response) => {
    response.send(`Server is started`);
})

// Routers -------------------------------------------------------------------------
app.use("/api", router);




// Server Starting Function ========================================================
app.listen(process.env.PORT, () => {
    console.log(`Server Is Started on port http://localhost:${process.env.PORT}/`);
})