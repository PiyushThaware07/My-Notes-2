const express = require("express");
const router = express.Router();
// Import Controllers ===================================================
const contactController = require("../controller/contactController");
const { insertExperienceController, retriveExperienceController } = require("../controller/experienceController");

// * CRUD on contact
router.route("/contact").post(contactController);
// * CRUD on experience
router.route("/insertExperience").post(insertExperienceController);
router.route("/retriveExperience").get(retriveExperienceController);



module.exports = router;