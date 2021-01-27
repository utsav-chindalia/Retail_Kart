const databaseFactory = require('../../interfaces/database');
const db = databaseFactory().getDatabase();
const testDatabase = (async () => {
    const productCollection = db.collection("product2");
    const prod1Document = {
        name: "Iphone12",
        price: "60000",
        tag: ["electronic","mobile"]
    }
    const result = await productCollection.insertOne( prod1Document );
    console.log(result);
})();

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};



module.exports = {
    listDatabases: listDatabases
};
