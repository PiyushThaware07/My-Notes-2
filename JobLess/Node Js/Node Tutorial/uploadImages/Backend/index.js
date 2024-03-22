const express = require("express");
const app = express();
const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/portfolio_offline";

mongoose.connect(url);

const uploadSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    image: String,
});

const uploadModel = mongoose.model("uploads", uploadSchema);

const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"))

const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/"); // specify the destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // use the original file name
    },
});
const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("image"), async (request, response) => {
    const { fname, lname } = request.body;
    const image = request.file.filename; // get the filename from the uploaded file

    const newData = new uploadModel({ fname, lname, image });

    try {
        const saveData = await newData.save();
        console.log("Record inserted successfully");
        response.send({
            success: true,
            data: newData,
        });
    } catch (error) {
        console.error("Failed to insert record", error);
        response.status(500).send({
            success: false,
            error: "Failed to insert record",
        });
    }
});

app.get("/", async (request, response) => {
    const readData = await uploadModel.find();
    response.send(readData);
})

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});
