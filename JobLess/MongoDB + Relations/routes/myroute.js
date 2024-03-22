const express = require("express");
const staff = require("../controllers/staffController");
const right = require("../controllers/rightController");
const router = express.Router();

router.route("/staff/create").post(staff.create);
router.route("/right/create").post(right.create);
router.route("/right/populate").get(right.staffByRight);

module.exports = router;
