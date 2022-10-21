const { validationResult } = require('express-validator');
const database = require('../database/db');

const Sale = require('../models/sale')


const initDatabase = (req, res) => {
    const sqlQuery = 'CREATE TABLE IF NOT EXISTS sale(id int AUTO_INCREMENT, date_sale DATE, status_sale VARCHAR(50), trader_id INTEGER, client_id INTEGER, purchase_in_installments VARCHAR(50), payment_control VARCHAR(50), total_sale FLOAT ,PRIMARY KEY(id), FOREIGN KEY (trader_id) REFERENCES trader(id), FOREIGN KEY (client_id) REFERENCES client(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};


//List All Sale
const listAllSales = (req, res) => {
    const sqlQuery = 'SELECT S.id,C.name_client, S.date_sale, SUM(PHS.quantity_sale_product * PHS.price_product_sale) AS total FROM sale S INNER JOIN client C ON C.id = S.client_id INNER JOIN product_has_sale PHS ON S.id = PHS.sale_id WHERE S.trader_id = '+ req.body.trader_id + ' GROUP BY S.id ORDER BY S.id desc';
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

        const sqlQuery = 'INSERT INTO sale set ?'

        console.log(`sqlQuery: ${sqlQuery}`);
        database.query(sqlQuery, Sale, (err, row) => {
            if (err) throw err;


            console.log('==============  ' + row.insertId);
            res.json({ 'id': row.insertId });
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

        database.query(sqlQuery, req.body.id, (err, row) => {
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
            total_sale: req.body.total_sale
        };

        const sqlQuery = 'UPDATE sale SET ? WHERE id = ' + req.body.id;

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

