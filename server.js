const express = require('express');
const routes = require('./helpers');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(routes);

const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: '',
    database: 'courses_db'
  },
  console.log(`Connected to the courses_db database.`)
);


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
  