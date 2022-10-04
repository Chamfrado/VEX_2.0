const { validationResult } = require('express-validator');
const database = require('../database/db');

const productHasSale = require('../models/Product_has_sale')


const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS product_has_sale(product_id INTEGER, sale_id INTEGER, quantity_sale_product INTEGER, price_product_sale DECIMAL(10,2) ,PRIMARY KEY(product_id, sale_id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};


//List All Sale
const listAllProductHasSales = (req, res) => {
    const sqlQuery = 'SELECT * FROM product_has_sale';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'productHasSale': result });
    });
};

//Add ProductHasSale
const addProductHasSale = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const ProductHasSale = {
            product_id: req.body.product_id,
            sale_id: req.body.sale_id,
            quantity_sale_product: req.body.quantity_sale_product,
            price_product_sale: req.body.price_product_sale

        };

        const sqlQuery = 'INSERT INTO product_has_sale SET ?';

        database.query(sqlQuery, ProductHasSale, (err, row) => {
            if (err) throw err;

            res.send('ProductHasSale add successfully!');
        });
    }
};

//Delete ProductHasSale
const deleteProductHasSale = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const ProductHasSale = {
            id: req.body.id
        };

        const sqlQuery = 'DELETE FROM product_has_sale WHERE id = ?';

        database.query(sqlQuery, ProductHasSale, (err, row) => {
            if (err) throw err;

            res.send('ProductHasSale deleted successfully!');
        });
    }
};


//Update ProductHasSale
const updateProductHasSale = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const ProductHasSale = {
            
            product_id : res.body.product_id,
            sale_id :  res.body.sale_id,
            quantity_sale_product: res.body.quantity_sale_product,
            price_product_sale: res.body.price_product_sale

        };

        const sqlQuery = 'UPDATE product_has_sale SET ? WHERE product_id = '+ res.body.product_id + ' AND sale_id = '+ res.body.sale_id;

        database.query(sqlQuery, ProductHasSale, (err, row) => {
            if (err) throw err;

            res.send('ProductHasSale updated successfully!');
        });
    }
};




module.exports = {
    initDatabase,
    listAllProductHasSales: listAllProductHasSales,
    addProductHasSale,
    deleteProductHasSale,
    updateProductHasSale
}
