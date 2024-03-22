const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "studentDatabase";

const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection("Details");

        const data = await collection.find({ RollNo: { $gte: 100 } }).toArray();
        console.log(data);

        return "done";
    } catch (error) {
        console.log(error);
        return "error";
    } finally {
        await client.close();
    }
}

main()
    .then(result => {
        console.log(result);
    })
    .catch(e => {
        console.log(e);
    })
    .finally(() => {
        client.close();
    });
