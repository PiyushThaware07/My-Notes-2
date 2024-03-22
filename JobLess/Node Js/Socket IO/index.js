// & Express SetUp ---------------------------
const express = require("express");
const app = express();
// & Create Server ---------------------------
const http = require("http");
const server = http.createServer(app);
// & SocketIo Setup --------------------------
const socketIo = require("socket.io");
const io = socketIo(server);

// ~ Handle Connection Event -----------------------
io.on("connection", (socket) => {
    console.log("A User Connected");

    // ~ Event Handling in Socket IO ---------------
    // ^ Handle Message Sending From Server To Client
    setTimeout(() => {
        socket.send({
            success: true,
            status: 200,
            data: "Message From server site by prereserverd events"
        });
    }, 3000);

    // ^ Creating Custom Events on server side and catch it on client site 
    socket.emit("myCustomEventFromServerSide", {
        data: "Custom Events on server side and catch it on client site "
    });

    // ^ Handle Message Receiving From Client (custom event)
    socket.on("myCustomEventFromClientSide",(data)=>{
        console.log("Custom Event : ",data);
    })



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
    response.sendFile(`${currentPath}/index.html`);
})

// & Port Setup -----------------------------
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`);
});


