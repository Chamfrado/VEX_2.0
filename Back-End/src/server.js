const express =  require('express');
const app = express();

const routes = require('./routes/routes')

const port = 3333;

app.use(express.json());
app.use(routes);

app.listen(port, () => {
    console.log(`Server running! -> port ${port}`);
});





//------------------------------------------------------
// const express =  require('express');
// const routes = require('./routes/routes')
// const mysql = require('mysql');
// const { body, validationResult } = require('express-validator');
//
// const app = express();
//
// app.use(express.json());
// app.use(routes);
//
// require('dotenv').config();
//
// const database = mysql.createConnection({
//     user: process.env.MYSQL_USER,
//     password: process.env.MYSQL_ROOT_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });
//
// app.get('/init', (req, res) => {
//     const sqlQuery =  'CREATE TABLE IF NOT EXISTS emails(id int AUTO_INCREMENT, firstname VARCHAR(50), lastname VARCHAR(50), email VARCHAR(50), PRIMARY KEY(id))';
//
//     database.query(sqlQuery, (err) => {
//         if (err) throw err;
//
//         res.send('Table created!')
//     });
// });
//
// app.post('/subscribe',
//     body('email').isEmail().normalizeEmail(),
//     body('firstname').not().isEmpty().escape(),
//     body('lastname').not().isEmpty().escape(),
//     (req, res) => {
//         const errors = validationResult(req);
//
//         if (errors.array().length > 0) {
//             res.send(errors.array());
//         } else {
//             const subscriber = {
//                 firstname: req.body.firstname,
//                 lastname: req.body.lastname,
//                 email: req.body.email
//             };
//
//             const sqlQuery = 'INSERT INTO emails SET ?';
//
//             database.query(sqlQuery, subscriber, (err, row) => {
//                 if (err) throw err;
//
//                 res.send('Subscribed successfully!');
//             });
//         }
//     });
//
// app.get('/', (req, res) => {
//     const sqlQuery = 'SELECT * FROM emails';
//
//     database.query(sqlQuery, (err, result) => {
//         if (err) throw err;
//
//         res.json({ 'emails': result });
//     });
// });
//
// app.listen(3333);