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

class Table {
    constructor(tableName) {
        this.tableName = tableName;
    }

    // CRUD
    // Because mysql2 is callback function based, supply a cb function argument to handle what happens next.
    findAllData(cb) {
        return db.query('SELECT * FROM ??', this.tableName, cb)
    }

    findOneByPrimary(id, cb) {
        return db.query('SELECT * FROM ?? WHERE id = ?', [this.tableName, id], cb)
    }

    deleteByPrimary(id, cb) {
        return db.query(`DELETE FROM ?? WHERE ?`, [this.tableName, id], cb);
    }
}

module.exports = Table;