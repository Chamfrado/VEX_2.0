const { validationResult } = require('express-validator');
const database = require('../database/db');

const Sale = require('../models/sale')


const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS sale(id int AUTO_INCREMENT, status_sale, trader_id INTEGER,client_id INTEGER, purchase_in_installments VARCHAR[50],payment_control VARCHAR[50],total_sale FLOAT ,PRIMARY KEY(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};


//List All Sale
const listAllSales = (req, res) => {
    const sqlQuery = 'SELECT * FROM sale';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'sale': result });
    });
};

//Get by Id
const getSaleById = (req, res) => {
    
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Sale = {
            id: req.body.id
        };
    }

    const sqlQuery = 'SELECT * FROM sale WHERE id = ?';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'sale': result });
    });
};

//Add Sale
const addSale = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Sale = {
            date_sale: req.body.date_sale,
            status_sale: req.body.status_sale,
            trader_id: req.body.trader_id,
            client_id: req.body.client_id,
            purchase_in_installments: req.body.purchase_in_installments,
            payment_control: req.body.payment_control,
            total_sale: req.total_sale

        };

        const sqlQuery = 'INSERT INTO sale SET ?';

        database.query(sqlQuery, Sale, (err, row) => {
            if (err) throw err;

            res.send('Sale add successfully!');
        });
    }
};

//Delete Sale
const deleteSale = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const sale = {
            id: req.body.id
        };

        const sqlQuery = 'DELETE FROM sale WHERE id = ?';

        database.query(sqlQuery, Sale, (err, row) => {
            if (err) throw err;

            res.send('Sale deleted successfully!');
        });
    }
};


//Update Sale
const updateSale = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Sale = {
            
            date_sale: req.body.date_sale,
            status_sale: req.body.status_sale,
            purchase_in_installments: req.body.purchase_in_installments,
            payment_control: req.body.payment_control,
            total_sale: req.body.total_sale,
            id: req.body.id
        };

        const sqlQuery = 'UPDATE sale SET date_sale = ?, status_sale = ?, purchase_in_installments = ?, payment_control = ?, total_sale = ? WHERE id = ?';

        database.query(sqlQuery, Sale, (err, row) => {
            if (err) throw err;

            res.send('Sale updated successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    listAllSales: listAllSales,
    getSaleById: getSaleById,
    addSale,
    deleteSale,
    updateSale
}
