


const { validationResult } = require('express-validator');
const database = require('../database/db');

const Client = require('../models/client')


const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS client(id int AUTO_INCREMENT, name_client VARCHAR(50), phone_client VARCHAR(50),trader_id INTEGER ,PRIMARY KEY(id), FOREIGN KEY (trader_id) REFERENCES trader(id))';

    database.query(sqlQuery, (err) => {
        if (err) throw err;

        res.send('Table created!')
    });
};


//List All Client
const listAllClients = (req, res) => {
    const sqlQuery = 'SELECT * FROM client';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'clients': result });
    });
};

//Get by Id
const getClientById = (req, res) => {
    
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const client = {
            id: req.body.id
        };
    }

    const sqlQuery = 'SELECT * FROM client WHERE id = ' + req.body.id ;

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery, (err, result) => {
        if (err) throw err;

        res.json({ 'client': result });
    });
};
//Add Client
const addClient = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const client = {
            name_client: req.body.name_client,
            phone_client: req.body.phone_client,
            trader_id: req.body.trader_id
        };

        const sqlQuery = 'INSERT INTO client SET ?';
        console.log(`sqlQuery: ${sqlQuery}`);

        database.query(sqlQuery, client, (err, row) => {
            if (err) throw err;

            res.send('Client add successfully!');
        });
    }
};

//Delete Client
const deleteClient = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const client = {
            id: req.body.id
        };

        const sqlQuery = 'DELETE FROM client WHERE id = '+ req.body.id;
        console.log(`sqlQuery: ${sqlQuery}`);

        database.query(sqlQuery, client, (err, row) => {
            if (err) throw err;

            res.send('Client deleted successfully!');
        });
    }
};


//Update Client
const updateClient = (req, res) => {
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const client = {
            
            name_client: req.body.name_client,
            phone_client: req.body.phone_client,
            trader_id: req.body.trader_id,
            id: req.body.id
        };

        const sqlQuery = 'UPDATE client SET ? WHERE id = '+req.body.id;
        console.log(`sqlQuery: ${sqlQuery}`);

        database.query(sqlQuery, client, (err, row) => {
            if (err) throw err;

            res.send('Client updated successfully!');
        });
    }
};

module.exports = {
    initDatabase,
    listAllClients: listAllClients,
    getClientById: getClientById,
    addClient,
    deleteClient,
    updateClient
}







