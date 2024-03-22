const express = require("express");
const app = express();
// Import MongoDB =============================
const connectDB = require("./db/Connect");

// Import Routers ==============================
const router = require("./Router/crudRouter");
app.use("/", router);



async function startServer() {
    try {
        await connectDB();
        app.listen(3000, () => {
            console.log("Listening at 3000 port");
        })
    } catch (error) {
        console.log("Error : ", "Failed To Start Server");
    }
}
startServer();