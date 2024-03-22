const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

require("./db/connect");

// Middleware
app.use(cors()); // Invoke cors middleware function
app.use(express.json());
app.use(morgan("dev")); // Invoke morgan middleware function with "dev" format

app.get("/", (request, response) => {
  console.log("Server started successfully");
  response.send({
    success: true,
    data: "Server started successfully",
    statusCode: 200, // Corrected the typo in 'statusCide'
  });
});

// Import and use router
const router = require("./routes/myroute");
app.use("/api", router);

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
