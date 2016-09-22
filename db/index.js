var pg = require('pg');
var pgURL = "postgres://localhost:5432/twitterdb"
var client = new pg.Client(pgURL);

client.connect();
console.log("connected");


module.exports = client;