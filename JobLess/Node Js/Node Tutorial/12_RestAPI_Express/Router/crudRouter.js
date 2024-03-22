const express = require("express");
const router = express.Router();
// import controllers ==================
const crudController = require("../Controller/crudController");

router.route("/").get(crudController);

module.exports = router;