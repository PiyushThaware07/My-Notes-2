const express = require("express");
const router = express.Router();

// Importing Controllers
const homeController = require("../Controller/homeController");

router.route("/").get(homeController);

module.exports = router;