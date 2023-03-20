const mysql = require("mysql");
const dbConfig = require("../config/db.config.js");


// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.dbLocatHost.HOST,
  user: dbConfig.dbLocatHost.USER,
  password: dbConfig.dbLocatHost.PASSWORD,
  database: dbConfig.dbLocatHost.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});
module.exports = connection;