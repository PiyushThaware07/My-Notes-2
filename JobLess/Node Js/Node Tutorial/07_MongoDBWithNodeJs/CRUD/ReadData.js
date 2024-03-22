const connectToMongo = require('./config');

async function main(){
    let collection = await connectToMongo();
    let readData = await collection.find().toArray(); // <--- await is necessary as it return a promise needs to handle
    console.log(readData);
}
main();