const { validationResult } = require('express-validator');
const database = require('../database/db');

const Trader = require('../models/trader')


const initDatabase = (req, res) => {
    const sqlQuery =  'CREATE TABLE IF NOT EXISTS trader(id int AUTO_INCREMENT, name_trader VARCHAR(50), phone_trader VARCHAR(50),pass_trader VARCHAR(50),PRIMARY KEY(id),UNIQUE KEY (phone_trader))';

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

    const sqlQuery = 'SELECT * FROM trader where id = ?';

    console.log(`sqlQuery: ${sqlQuery}`);

    database.query(sqlQuery,req.body.id,  (err, result) => {
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
            pass_trader: req.body.pass_trader

        };

        const sqlQuery = 'INSERT INTO trader SET ?';
        console.log(`sqlQuery: ${sqlQuery}`);
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
        console.log(`sqlQuery: ${sqlQuery}`);
        database.query(sqlQuery, req.body.id, (err, row) => {
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
            pass_trader: req.body.pass_trader,
        };

        console.log(`sqlQuery: ${sqlQuery}`);
        
        const sqlQuery = 'UPDATE trader SET ? WHERE id = '+ req.body.id;
        database.query(sqlQuery, Trader,  (err, row) => {
            if (err) throw err;

            res.send('Trader updated successfully!');
        });
    }
};



//AUTENTICATE
 const autenticTrader  = (req, res) => {
    
    const errors = validationResult(req);

    if (errors.array().length > 0) {
        res.send(errors.array());
    } else {
        const Trader = {
            phone_trader: req.body.phone_trader,
            pass_trader: req.body.pass_trader
        };
    }

    const sqlQuery = 'SELECT * FROM trader where phone_trader = '+ req.body.phone_trader + ' AND pass_trader = "'+ req.body.pass_trader+ '"';
    const sqlQuery2 = 'SELECT COUNT(*) as count FROM trader where phone_trader = '+ req.body.phone_trader + ' AND pass_trader = "'+ req.body.pass_trader+ '"';

    console.log(`sqlQuery: ${sqlQuery}`);

    
    database.query(sqlQuery2,(error, result2) =>{

        console.log(result2[0]);
        chave = result2[0].count ;
        console.log(result2);
        console.log('ASALAMALEIKO '+chave)
        if(chave > 0){
            database.query(sqlQuery,  (err, result) => {
            if (err) throw err;
                 res.json({ 'trader': result });
             });
                
                
        }else{
            res.send('recusado');
        }
        
    })
 }

module.exports = {
    initDatabase,
    listAllTraders: listAllTraders,
    getTraderById: getTraderById,
    addTrader,
    deleteTrader,
    updateTrader,
    autenticTrader
}
