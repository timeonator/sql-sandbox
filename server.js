"use strict";
const http = require('http');
const mysql = require('mysql');
const port = 3000;

// Get the Host from Environment or use default
const host = process.env.DB_HOST || 'localhost';

// Get the User for DB from Environment or use default
const user = process.env.DB_USER || 'root';

// Get the Password for DB from Environment or use default
const password = process.env.DB_PASS || '';

// Get the Database from Environment or use default
const database = process.env.DB_DATABASE || 'pikto';

// Create the connection with required details
const con = mysql.createConnection({
  host, user, password, database,
});

const query = "SELECT * FROM users";
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
});

  // if connection is successful
  con.query(query, (err, result, fields) => {
    // if any error while executing above query, throw error
    if (err) throw err;

    // if there is no error, you have the result
    console.log(result);
});
// });

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Hello, World!');
}

const server = http.createServer(requestListener);
console.log("Listening on localhost:3000")
server.listen(port);