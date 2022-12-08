
const { validationResult } = require('express-validator');
const database = require('../database/db');

const Product = require('../models/product')


const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS product(id int AUTO_INCREMENT, name_product VARCHAR(50), price_product FLOAT,trader_id INTEGER,PRIMARY KEY(id), FOREIGN KEY (trader_id) REFERENCES trader(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};


//List All Product
const listAllProducts = (req, res) => {
    const sqlQuery = 'SELECT * FROM product WHERE trader_id = '+req.body.trader_id+ ' ORDER BY name_product asc';

    console.log(`sqlQuery: ${sqlQuery}`);
    
    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.send({ 'product': result });
    });
};

//Get by Ids
const getProductById = (req, res) => {
    
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Product = {
            id: req.body.id
        };
    }

    const sqlQuery = 'SELECT * FROM product WHERE id = '+ req.body.id;

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'product': result });
    });
};

//Add Product
const addProduct = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Product = {
            name_product: req.body.name_product,
            price_product: req.body.price_product,
            trader_id: req.body.trader_id

        };

        const sqlQuery = 'INSERT INTO product SET ?';

        console.log(`sqlQuery: ${sqlQuery}`);
        console.log("TESTE");

        database.query(sqlQuery, Product, (err, row) => {
            if (err) throw err;
            console.log(row.insertId)
            res.json({ 'id': row.insertId  });
        });
    }
};

//Delete Product
const deleteProduct = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const product = {
            id: req.body.id
        };

        const sqlQuery = 'DELETE FROM product WHERE id = ?';

        console.log(`sqlQuery: ${sqlQuery}`);
        
        database.query(sqlQuery, req.body.id, (err, row) => {
            if (err) throw err;

            res.send('Product deleted successfully!');
        });
    }
};


//Update Product
const updateProduct = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Product = {
            
            name_product: req.body.name_product,
            price_product: req.body.price_product,
            trader_id: req.body.trader_id
        };

        const sqlQuery = 'UPDATE product SET  ? WHERE id = '+req.body.id;

        console.log(`sqlQuery: ${sqlQuery}`);

        database.query(sqlQuery, Product, (err, row) => {
            if (err) throw err;

            res.send('Product updated successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    listAllProducts: listAllProducts,
    getProductById: getProductById,
    addProduct,
    deleteProduct,
    updateProduct
}

