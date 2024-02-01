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

class Table {
    constructor(tableName, db) {
        this.tableName = tableName;
        this.db = db
    }

    // CRUD
    // Because mysql2 is callback function based, supply a cb function argument to handle what happens next.
    findAllData() {
        return this.db.query('SELECT * FROM ?', this.tableName, (err, res) =>{
            if(err) throw err
            console.table(res)
            init(initQ)
        })
    }
    findAllDepartments(){
        db.query("SELECT * FROM departments", (err, res) => {
            if (err) throw err
            console.table(res)
           
        })
    }

    findOneByPrimary(id, cb) {
        return db.query('SELECT * FROM ?? WHERE id = ?', [this.tableName, id], cb)
    }

    deleteByPrimary(id, cb) {
        return db.query(`DELETE FROM ?? WHERE ?`, [this.tableName, id], cb);
    }
}

module.exports = db;