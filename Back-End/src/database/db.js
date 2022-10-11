const mysql = require('mysql');

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: '1524',
    database: process.env.MYSQL_DATABASE
});

module.exports = database;