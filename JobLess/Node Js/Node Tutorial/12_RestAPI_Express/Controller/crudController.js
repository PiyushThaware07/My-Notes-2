// Import Models ======================================
const productModel = require("../Model/productModel");

async function crudController(request, response) {
    // Reading Data 
    const readData = await productModel.find();
    console.log(readData);
    response.send({ message: readData });
}

module.exports = crudController;