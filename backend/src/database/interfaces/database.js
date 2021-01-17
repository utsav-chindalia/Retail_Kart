module.exports = () => {
    const {MongoClient} = require('mongodb');
    const config = require('../connection/config');
    const client = new MongoClient(config.uri, { useUnifiedTopology: true} );
    const listDatabases = require('../operations/common/check_database').listDatabases;
    let db = null;

    const createDatabase = async () => {
        await clientConnect();
        db = client.db(config.database);
    }
    const clientClose = async () => {
        return await client.close();
    }
    const clientConnect = async () => {
        return await client.connect();
    }
    const showDatabase = async () => {
        await listDatabases(client);
    }

    const getDatabase = async () => {
        if(db == null){
            await createDatabase();
        }
        console.log( "Database:" + config.database + " Connected ")
        return db;
    }

    return {
        clientClose: clientClose,
        showDatabase: showDatabase,
        getDatabase : getDatabase
    }
}