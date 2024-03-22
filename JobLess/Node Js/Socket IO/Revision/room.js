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
    response.sendFile(`${currentPath}/room.html`);
})


// & 4.SocketIO Setup ======================================================
const socketIO = require("socket.io");
const ioServer = socketIO(httpServer);

ioServer.on("connection", function (socket) {
    // When a new user connects
    console.log('A user connected');


    // Create a room
    socket.on('createRoom', (room) => {
        socket.join(room);  // The socket.join(room) method is used to make the socket join the specified room.
        console.log(`Room ${room} created and user joined`);
    });


    // Join a room
    socket.on('joinRoom', (room) => {
        socket.join(room);
        console.log(`User joined room ${room}`);
    });


    // Broadcast to a specific room
    socket.on('sendMessage', (room, message) => {
        io.to(room).emit('message', message);
        console.log(`Message sent to room ${room}: ${message}`);
    });


    socket.on("disconnect", function () {
        console.log("User Diconnected");
    })
})







httpServer.listen(PORT, () => { console.log("Listening on port http://localhost:3000") })


