const express = require("express");
const app = express();

// Read Data To Post Method
app.use(express.json());

// Import Routers
const router = require("./Router/testingApiRouter");
app.use("/", router);
app.use("/insertData", router);



const port = 4000;
app.listen(port, () => {
    console.log("Listening at port 4000");
})