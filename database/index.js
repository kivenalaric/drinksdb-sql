const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
  user: 'root',
  database: 'drinks_db',
});

module.exports = connection.promise();