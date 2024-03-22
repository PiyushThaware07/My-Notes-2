const connectToMongo = require('./config');

async function main() {
    let collection = await connectToMongo();
    let deleteData = await collection.deleteOne({ _id: 2 }); 
    console.log(
        deleteData.acknowledged ?
            "Data Deleted Successfully" :
            "Failed To Delete Data"
    );
}
main();