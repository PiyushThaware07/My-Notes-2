const express = require("express");

const router = express.Router();
// Importing Controllers ====================
const {testingApiController,insertAPI} = require("../Controller/testingApiController");


router.route("/").get(testingApiController);
router.route("/insertData").post(insertAPI)

module.exports = router;