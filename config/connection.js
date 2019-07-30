// Set up database connection
var mysql = require("mysql");
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "YES",
  database: "burgers_db"
});}


// Make connection and error handling
connection.connect();

// Export connection for ORM to use
module.exports = connection;