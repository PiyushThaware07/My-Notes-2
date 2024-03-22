const express = require("express");
const app = express();
const port = 8000;
require("./db/connect");

app.get("/", (request, response) => {
  response.send("server started successfully");
});

// Course :
const cors = require("cors");
const parentModel = require("./db/model/ParentModel");
const childModel = require("./db/model/ChildModel");
app.use(cors());
app.use(express.json());
app.post("/parent/create", async (request, response) => {
  console.log("creating parent");
  const newData = request.body;
  const savedData = await parentModel(newData).save();
  response.send(savedData);
});

app.post("/child/create", async (request, response) => {
  console.log("creating child");
  const newData = request.body;
  const savedData = await childModel(newData).save();
  response.send(savedData);
});

app.get("/populate/:child_id", async (request, response) => {
  const childID = request.params.child_id;
  const data = await childModel.find({ _id: childID }).populate("parent_id");
  response.send(data);
});

app.listen(port, () => {
  console.log("Server is started");
});
