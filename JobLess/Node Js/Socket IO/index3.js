// & Express SetUp ---------------------------
const express = require("express");
const app = express();
// & Create Server ---------------------------
const http = require("http");
const server = http.createServer(app);
// & SocketIo Setup --------------------------
const socketIo = require("socket.io");
const io = socketIo(server);


// * Default Namespace "/" ----------------------------------
// ~ Handle Connection Event -----------------------
io.on("connection", (socket) => {  // defualt namespace is "/"
    console.log("A User Connected");

    io.emit("testEvent","Default Name Space") // message : tester event call


    // ~ Handle Disconnection Event ----------------
    socket.on("disconnect", () => {
        console.log("User disconnected");
    })
})

// ^ Namespaces -------------------------------
/* In Socket.IO, namespaces provide a way to create separate communication channels on the same Socket.IO server. They allow you to organize your socket connections into different groups, each with its own set of events. This can be useful for structuring your real-time application, especially if you have different components or modules that need to communicate independently. */
const customNameSpace = io.of('/myNamespace');
customNameSpace.on("connection", (socket) => {  // defualt namespace is "/"
    console.log("A User Connected");

    customNameSpace.emit("testEvent", "Custom Name Space") // message : tester event call


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
    response.sendFile(`${currentPath}/index3.html`);
})

// & Port Setup -----------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});