const { validationResult } = require('express-validator');
const database = require('../database/db');

const Trader = require('../models/trader')


const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS trader(id int AUTO_INCREMENT, name_trader VARCHAR(50), phone_trader VARCHAR(50), email_trader VARCHAR(50),pass_trader VARCHAR(50), date_acess DATE, date_term DATE,PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};


//List All Trader
const listAllTraders = (req, res) => {
    const sqlQuery = 'SELECT * FROM trader';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'trader': result });
    });
};

//Get by Id
const getTraderById = (req, res) => {
    
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Trader = {
            id: req.body.id
        };
    }

    const sqlQuery = 'SELECT * FROM trader WHERE id = ?';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'trader': result });
    });
};

//Add Trader
const addTrader = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Trader = {
            name_trader: req.body.name_trader,
            phone_trader: req.body.phone_trader,
            email_trader: req.body.email_trader,
            pass_trader: req.body.pass_trader,
            date_acess: req.body.date_acess,
            date_term: req.body.date_term

        };

        const sqlQuery = 'INSERT INTO trader SET ?';

        database.query(sqlQuery, Trader, (err, row) => {
            if (err) throw err;

            res.send('Trader add successfully!');
        });
    }
};

//Delete Trader
const deleteTrader = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const trader = {
            id: req.body.id
        };

        const sqlQuery = 'DELETE FROM trader WHERE id = ?';

        database.query(sqlQuery, Trader, (err, row) => {
            if (err) throw err;

            res.send('Trader deleted successfully!');
        });
    }
};


//Update Trader
const updateTrader = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Trader = {
            
            name_trader: req.body.name_trader,
            phone_trader: req.body.phone_trader,
            email_trader: req.body.email_trader,
            pass_trader: req.body.pass_trader,
            date_acess: req.body.date_acess,
            date_term: req.body.date_term,
            id: req.body.id
        };

        const sqlQuery = 'UPDATE trader SET name_Trader = ?, phone_trader = ?, email_trader = ?, pass_trader = ?, date_acess = ?, date_term = ? WHERE id = ?';

        database.query(sqlQuery, Trader, (err, row) => {
            if (err) throw err;

            res.send('Trader updated successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    listAllTraders: listAllTraders,
    getTraderById: getTraderById,
    addTrader,
    deleteTrader,
    updateTrader
}
