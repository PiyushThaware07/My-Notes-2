const connectToMongo = require('./config');

let updates = {
    name: "updated name",
    price: "updated price",
    category: "updated category"
}

async function main() {
    let collection = await connectToMongo();
    let updateData = await collection.updateOne(
        { _id: 1 },                // <---- filter 
        { $set: updates }          // <---- updates $set: is a atomic operator in mongodb
    )
    console.log(
        updateData.acknowledged ?
            "Data Updated Successfully" :
            "Failed To Update Data"
    );

}
main();