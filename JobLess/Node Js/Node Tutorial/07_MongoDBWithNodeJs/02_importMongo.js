const import_connectToMongo = require('./02_exportMongo');

async function main(){
    const data = await import_connectToMongo();
    const readData = data.find().toArray();
    const readHandle = await readData;
    console.log(readHandle);
}
main();