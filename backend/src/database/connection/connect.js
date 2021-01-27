const databaseFactory = require('../interfaces/database');
async function connect_database(){ 
    try {
        const db = getDatabase();
    } catch (e) {
        console.error(e);
        console.error("Client not connected");
    }
}

const getDatabase = () => {
        const df = databaseFactory();
        const db = df.getDatabase();
        return db;
};

connect_database().catch(console.error);