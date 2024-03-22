// & Express SetUp ---------------------------
const express = require("express");
const app = express();
// & Create Server ---------------------------
const http = require("http");
const server = http.createServer(app);

app.set("view engine","ejs");
app.set("views","/views");
app.use(express.static("public"));


// & Routes Setup ----------------------------
app.get("/",(request,response)=>{
    response.render("index5");
})










// & Port Setup -----------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});