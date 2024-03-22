// Upload files : Install : npm i multer
const express = require("express");
const app = express();
const multer = require("multer");

const store_location = "uploads"
const uploadMiddleware = multer({
    storage: multer.diskStorage({
        destination: function (request, file, callback) {
            callback(null, store_location);
        },
        filename: function (request, file, callback) {
            callback(null, file.originalname + Date.now() + ".jpg");  // <-- (null,filename)
        }
    })
}).single("image");   // <input type="file" name="image" >

app.post('/upload', uploadMiddleware, (request, response) => {
    response.send("Post Upload");
})
app.listen(1000, () => {
    console.log("server started at port 1000");
})