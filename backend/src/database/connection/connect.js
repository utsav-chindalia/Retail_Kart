
async function connect_database(){ 
    const {MongoClient} = require('mongodb');
    console.log(config.uri);
    const listDatabases = require('../operations/common/check_database').listDatabases;
    const client = new MongoClient(config.uri, { useUnifiedTopology: true} );
    try {
        await client.connect();
        const db = client.db(config.database);
        const productCollection = db.collection("product");
        const prod1Document = {
            name: "Iphone12",
            price: "60000",
            tag: ["electronic","mobile"]
        }
        const result = await productCollection.insertOne( prod1Document );
        await listDatabases(client);
        exports.db = db;
    } catch (e) {
        console.error(e);
        console.error("Client not connected");
    }
}

const databaseFactory = require('../interfaces/database');
const getDatabase = ( async () => {
        const df = databaseFactory();
        const db = await df.getDatabase();
        return db;
});

module.exports = getDatabase;

//connect_database().catch(console.error);