const express = require("express");
const app = express();
// Event & Event Emitter Setup
const EventEmitter = require("events");
const event = new EventEmitter();
let count = 1;
event.on("APIcalled", () => {
    console.log("Hello Event", count);
    count++;
})


app.get('/', (request, response) => {
    response.send("API Called");
    event.emit("APIcalled")   // <-- his will generate an event for this route.
})
app.get('/about', (request, response) => {
    response.send("About API Called");
})
app.get('/contact', (request, response) => {
    response.send("Contact API Called");
    event.emit("APIcalled")   // <-- his will generate an event for this route.
})
app.listen(1000, () => {
    console.log("server Started at port 1000");
});
