const username = encodeURIComponent("root");
const password = encodeURIComponent("password");
const clusterUrl = "localhost:27017";
const authMechanism = "DEFAULT";

exports.uri = `mongodb://${username}:${password}@${clusterUrl}/?authMechanism=${authMechanism}`; 
exports.database = "test_cf2" 