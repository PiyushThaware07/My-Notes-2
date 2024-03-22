const express = require("express");
const router = express.Router();
// import controllers ==================
const aboutController = require("../Controller/aboutController");

router.route("/about").get(aboutController);

module.exports = router;