const mongoose = require('mongoose');

const dbName = "employeeDB";
const collectionName = "records";

// Creating Connection Only
const url = `mongodb://127.0.0.1:27017/${dbName}`;
async function connectDB() {
    const connect = await mongoose.connect(url);
    connect ? console.log("Mongoose Server is Connected") : console.log("Failed To Connect");
}
connectDB();


// create Schema 
const EmployeeSchema = {
    fname: String,
    lname: String,
    email: String,
    phone: Number
}

// Operations : CRUD
// 1. Create or insert data to db
async function insertDB() {
    const EmployeeModel = mongoose.model(collectionName, EmployeeSchema);
    let insertData = new EmployeeModel({
        fname: "Mongoose Fname",
        lname: "Mongoose lname",
        email: "Mongoose email",
        phone: 99999
    })
    let store = await insertData.save()
    console.log(store);
}
insertDB();

// 2. Read 
async function readDB() {
    const EmployeeModel = mongoose.model(collectionName, EmployeeSchema);
    let readData = await EmployeeModel.find();
    console.log(readData);
}
readDB();

// 3. Update 
async function updateDB() {
    const EmployeeModel = mongoose.model(collectionName, EmployeeSchema);
    let updates = {
        fname: "Updated",
        lname: "Updated",
    }
    let updateData = await EmployeeModel.updateOne(
        { name: "Piyush" },
        { $set: updates }
    );
    console.log(updateData.acknowledged);
}
updateDB();


// 4. Delete 
async function deleteDB() {
    const EmployeeModel = mongoose.model(collectionName, EmployeeSchema);
    let deleteData = await EmployeeModel.deleteOne({ fname: "Updated" })
    console.log(deleteData.acknowledged);
}
deleteDB();