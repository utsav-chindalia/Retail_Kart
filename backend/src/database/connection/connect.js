 listDatabases = require('../operations/common/check_database').listDatabases;

async function connect_database(){
    const {MongoClient} = require('mongodb');
    const uri = "mongodb://root:password@localhost:27017";
    const client = new MongoClient(uri, { useUnifiedTopology: true} );
    try {
        await client.connect();

        await listDatabases(client);
    
    } catch (e) {
        console.error(e);
    }
    finally {
        await client.close();
    }
}

connect_database().catch(console.error);