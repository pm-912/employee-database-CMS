//this file will talk to mysql
// Import and require mysql2
const mysql = require('mysql2');
// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'yourpassword',
        database: 'brewery_db'
    },
    console.log(`Connected to the brewery_db database.`)
);

db.connect(function(err) {
    if (err) throw err
});

module.exports = db;