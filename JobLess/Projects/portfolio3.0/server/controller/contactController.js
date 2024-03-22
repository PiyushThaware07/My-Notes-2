// Import Date Function ===========================================
const generateDate = require("../function/generateDate");
const generateTime = require("../function/generateTime");

// Import Models ==================================================
const contactModel = require("../db/model/contactModel");



async function contactController(request, response) {
    try {
        const currentDate = generateDate();
        const currentTime = generateTime();
        const requestedData = request.body;
        requestedData.date = currentDate;
        requestedData.time = currentTime;

        const newData = await contactModel(requestedData);
        const saveData = await newData.save();

        if (saveData) {
            console.log("contact - Record is inserted to database");
            response.status(200).send({
                success: true,
                data: requestedData,
                statusCode: 200
            })
        }
        else {
            console.log("contact - Record is not inserted to database");
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
            data: "Internal Server Error at Contact Controller",
            statusCode: 500
        })
    }
}

module.exports = contactController;