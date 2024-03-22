const express = require("express");
const app = express();

// Import Routers
const homeRouter = require("./Router/homeRouter");
app.use("/", homeRouter);

const aboutRouter = require("./Router/aboutRouter");
app.use("/",aboutRouter);

const port = 4000;
app.listen(port, () => {
    console.log("Listening at port 4000");
})