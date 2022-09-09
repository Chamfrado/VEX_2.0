const express = require('express');
const { body } = require('express-validator');
const routes = new express.Router();

const sampleController = require('../controllers/sampleController')
const traderController = require('../controllers/traderController');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleController');
const clientController = require('../controllers/clientController');

// sample routes ------------------------------------
routes.get('/init', sampleController.initDatabase);

routes.get('/first-sample', sampleController.getFirstSubscribersSample);

routes.get('/second-sample', sampleController.getSecondSubscribersSample);

routes.post('/subscribe',
    body('email').isEmail().normalizeEmail(),
    body('firstname').not().isEmpty().escape(),
    body('lastname').not().isEmpty().escape(),
    sampleController.addSubscriber
);
// end of sample routes ------------------------------



//Routes for the table "trader"
routes.post('/trader', traderController.store);

routes.get('/trader', traderController.listAll);

routes.get('/trader/:trader_id', traderController.getById);

routes.delete('/trader/:trader_id', traderController.delete);

routes.put('/trader/:trader_id', traderController.update);



//Routes for the table "Product"
routes.post('/product', productController.store);

routes.get('/product', productController.listAll);

routes.get('/product/:product_id', productController.getById);

routes.delete('/product/:product_id', productController.delete);

routes.put('/product/:product_id', productController.update);



//Routes for the table "Sale"
routes.post('/sale', saleController.store);

routes.get('/sale', saleController.listAll);

routes.get('/sale/:sale_id', saleController.getById);

routes.delete('/sale/:sale_id', saleController.delete);

routes.put('/sale/:sale_id', saleController.update);



//Routes for the table "Client"

routes.post('/client', clientController.store);

routes.get('/client', clientController.listAll);

routes.get('/client/:client_id', clientController.getById);

routes.delete('/client/:client_id', clientController.delete);

routes.put('/client/:client_id', clientController.update);

module.exports = routes;