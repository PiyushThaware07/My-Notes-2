/*
// & Express SetUp ---------------------------
const express = require("express");
const app = express();
// & Create Server ---------------------------
const http = require("http");
const server = http.createServer(app);
// & SocketIo Setup --------------------------
const socketIo = require("socket.io");
const io = socketIo(server);

var totalUsers = 0;
// ~ Handle Connection Event -----------------------
io.on("connection", (socket) => {
    console.log("A User Connected");
    totalUsers++;

    // ^ Broadcasting ------------------------------
    // a. Users can see how many user connected.
    // b. If user connect , then we will show a welcome message to user and oter users can see how many user connected
    io.sockets.emit("broadcast", {   // this isalso a custom event // * It is used for global Broadcasting  io.sockets.emit
        usersCount: totalUsers,
        message: "message from backend : user just join the chat room"
    })

    // ~ Handle Disconnection Event ----------------
    socket.on("disconnect", () => {
        console.log("User disconnected");
        totalUsers--;
        io.sockets.emit("broadcast", {
            usersCount: totalUsers,
            message: "message from backend : user just leave the chat room"
        })
    })

})

// & Path Setup -----------------------------
const path = require("path");
const currentPath = path.join(__dirname);

// & Route Setup ----------------------------
app.get("/", (request, response) => {
    response.sendFile(`${currentPath}/index2.html`);
})

// & Port Setup -----------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});
*/





// * Method 2 : Show welcome message when first time room join 
// & Express SetUp ---------------------------
const express = require("express");
const app = express();
// & Create Server ---------------------------
const http = require("http");
const server = http.createServer(app);
// & SocketIo Setup --------------------------
const socketIo = require("socket.io");
const io = socketIo(server);

var totalUsers = 0;
// ~ Handle Connection Event -----------------------
io.on("connection", (socket) => {
    console.log("A User Connected");
    totalUsers++;



    // ^ Broadcasting ------------------------------
    // case : new user connect
    socket.emit("newUserConnect", {
        message: "Hii,welcome Dear"
    })

    // Case : Already Users are connected
    socket.broadcast.emit("newUserConnect", {
        message: totalUsers + "users connected"
    })


    // ~ Handle Disconnection Event ----------------
    socket.on("disconnect", () => {
        console.log("User disconnected");
        totalUsers--;
        // Case : Already Users are connected
        socket.broadcast.emit("newUserConnect", {
            message: totalUsers + "users connected"
        })
    })

})

// & Path Setup -----------------------------
const path = require("path");
const currentPath = path.join(__dirname);

// & Route Setup ----------------------------
app.get("/", (request, response) => {
    response.sendFile(`${currentPath}/index2.html`);
})

// & Port Setup -----------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});