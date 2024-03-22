// & 1.express Setup =======================================================
const express = require("express");
const app = express();
const PORT = 3000;


// & 2.Create HTTP Server ==================================================
const http = require("http");
const httpServer = http.createServer(app);


// & 3.Rendering HTML Page =================================================
const path = require("path");
const currentPath = path.join(__dirname);
// ~ Middlewares -----------------------------------------------------------
app.use("/public", express.static("public"));
// ~ Routes ----------------------------------------------------------------
app.get("/", (request, response) => {
    response.sendFile(`${currentPath}/index.html`);
})


// & 4.SocketIO Setup ======================================================
const socketIO = require("socket.io");
const ioServer = socketIO(httpServer);
/* Event Handler For SocketIo :
1.connection
2.disconnect
3.message
*/
let members = 0;
ioServer.on("connection", function (socket) {
    console.log("------>> User Connected");
    socket.on("disconnect", function () {
        members--;
        console.log("User Diconnected");
        ioServer.emit('broadcastMessage', {    // ? Broadcasts the message to all connected clients across all sockets, including the sender.
            members: members,
            data: "Broadcasting the message to all clients except the sender.Leave"
        });
    })
    // ! message receiving from : frontend ----------------------------------
    socket.on("message", function (data) {
        console.log("Message : ", data);
    })
    // ! message sending to : frontend --------------------------------------
    socket.emit("custom-event", 'Hello from the server!');

    members++;
    // ? Broadcasting the message to all clients except the sender ----------
    // a. Users can see how many user connected.
    // b. If user connect , then we will show a welcome message to user and oter users can see how many user connected    
    socket.broadcast.emit('broadcastMessage', {   // ? Broadcasts the message to all connected clients except the sender of the original message.
        members: members,
        data: "Broadcasting the message to all clients except the sender.Added"
    });

})







httpServer.listen(PORT, () => { console.log("Listening on port http://localhost:3000") })


