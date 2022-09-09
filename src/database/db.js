const mysql = require('mysql');

require('dotenv').config();

const database = mysql.createConnection({
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

module.exports = database;