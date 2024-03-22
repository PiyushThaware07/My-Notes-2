// & Express SetUp ---------------------------
const express = require("express");
const app = express();
// & Create Server ---------------------------
const http = require("http");
const server = http.createServer(app);
// & SocketIo Setup --------------------------
const socketIo = require("socket.io");
const io = socketIo(server);

var roomNo = 1;
var full = 0;
// ~ Handle Connection Event -----------------------
io.on("connection", (socket) => {
    console.log("A User Connected");

    // ^ Creating Room OR Channel ------------------
    socket.join("Room-" + roomNo);
    io.sockets.in("Room-" + roomNo).emit("connectedRoom", {  // emit() is used to fire event
        message: "You are connected to room no : "+roomNo
    })

    full++;
    if(full>=2){  // In one room only two user allowed
        full=0;
        roomNo++;
    }


    // ~ Handle Disconnection Event ----------------
    socket.on("disconnect", () => {
        console.log("User disconnected");
    })
})






// & Path Setup -----------------------------
const path = require("path");
const currentPath = path.join(__dirname);

// & Route Setup ----------------------------
app.get("/", (request, response) => {
    response.sendFile(`${currentPath}/index4.html`);
})

// & Port Setup -----------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});