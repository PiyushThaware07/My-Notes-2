// Import Models ==================================================
const experienceModel = require("../db/model/experienceModel");

// & 1. Inert Experience Details ========================================
async function insertExperienceController(request, response) {
    try {
        const newData = await experienceModel(request.body);
        const saveData = await newData.save();

        if (saveData) {
            console.log("experience - Record is inserted to database");
            response.status(200).send({
                success: true,
                data: newData,
                statusCode: 200
            })
        }
        else {
            console.log("experience - Record is not inserted to database");
            response.status(400).send({
                success: false,
                data: "failed to insert data to database",
                statusCode: 400
            })
        }
    }
    catch (error) {
        response.status(500).send({
            success: false,
            data: "Internal Server Error at InsertExperience Controller",
            statusCode: 500
        })
    }
}



// & 2. Read Experience Details ========================================
async function retriveExperienceController(request, response) {
    try {
        const readData = await experienceModel.find();
        response.status(200).send({
            success: true,
            data: readData,
            statusCode: 200
        })

    }
    catch (error) {
        response.status(500).send({
            success: false,
            data: "Internal Server Error at RetriveExperience Controller",
            statusCode: 500
        })
    }
}



module.exports = { insertExperienceController, retriveExperienceController };