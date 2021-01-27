module.exports = () => {
    const {MongoClient} = require('mongodb');
    const config = require('../connection/config');
    const client = new MongoClient(config.uri, { useUnifiedTopology: true} );
    const listDatabases = require('../operations/common/check_database').listDatabases;
    let db = null;

    const createDatabase = () => {
        clientConnect();
        db = client.db(config.database);
    }
    const clientClose = () => {
        return client.close();
    }
    const clientConnect = () => {
        return client.connect();
    }
    const showDatabase = () => {
        listDatabases(client);
    }

    const getDatabase = () => {
        if(db == null){
            createDatabase();
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