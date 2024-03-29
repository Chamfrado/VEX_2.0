const express = require('express');
const { body } = require('express-validator');
const routes = new express.Router();

const sampleController = require('../controllers/sampleController')
const traderController = require('../controllers/traderController');
const productController = require('../controllers/productController');
const saleController = require('../controllers/saleController');
const clientController = require('../controllers/clientController');
const productHasSaleController= require('../controllers/productHasSaleController');
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

//Client Routes------------------------------------------------------------------------------
routes.get('/client/init', clientController.initDatabase);

routes.post('/client/list', clientController.listAllClients);

routes.post('/client/getById',body('id').not().escape() ,clientController.getClientById);

routes.post('/client/add',
    body('name_client').not().isEmpty().escape(),
    body('phone_client').not().isEmpty().escape(),
    body('trader_id').not().isEmpty().escape(),
    clientController.addClient
    );

routes.put('/client/update',
    body('name_client').not().isEmpty().escape(),
    body('phone_client').not().isEmpty().escape(),
    body('trader_id').not().isEmpty().escape(),
    body('id').not().isEmpty().escape(),
    clientController.updateClient);

routes.delete('/client/delete',
    body('id').not().isEmpty().escape(),
    clientController.deleteClient);



//Product Routes ------------------------------------------------------------------------------
routes.get('/product/init', productController.initDatabase);

routes.post('/product/list', productController.listAllProducts);

routes.post('/product/getById',body('id').not().escape() ,productController.getProductById);

routes.post('/product/add',
    body('name_product').not().isEmpty().escape(),
    body('price_product').not().isEmpty().escape(),
    body('trader_id').not().isEmpty().escape(),
    productController.addProduct
    );

routes.put('/product/update',
    body('name_product').not().isEmpty().escape(),
    body('price_product').not().isEmpty().escape(),
    body('trader_id').not().isEmpty().escape(),
    body('id').not().isEmpty().escape(),
    productController.updateProduct);

routes.delete('/product/delete',
    body('id').not().isEmpty().escape(),
    productController.deleteProduct);



//Sale Controller------------------------------------------------------------------------------
routes.get('/sale/init', saleController.initDatabase);

routes.post('/sale/list', saleController.listAllSales);

routes.get('/sale/getById',body('id').not().escape() ,saleController.getSaleById);

routes.post('/sale/add',
    body('date_sale').not().isEmpty().escape(),
    body('trader_id').not().isEmpty().escape(),
    body('client_id').not().isEmpty().escape(),
    body('total_sale').not().isEmpty().escape(),
    saleController.addSale
    );

routes.put('/sale/update',
    body('date_sale').not().isEmpty().escape(),
    body('trader_id').not().isEmpty().escape(),
    body('client_id').not().isEmpty().escape(),
    body('total_sale').not().isEmpty().escape(),
    body('id').not().isEmpty().escape(),
    saleController.updateSale);

routes.delete('/sale/delete',
    body('id').not().isEmpty().escape(),
    saleController.deleteSale);

//Trader Controller ------------------------------------------------------------------------------
routes.get('/trader/init', traderController.initDatabase);

routes.get('/trader/list', traderController.listAllTraders);

routes.post('/trader/getById',body('id').not().escape() ,traderController.getTraderById);

routes.post('/trader/add',
    body('name_trader').not().isEmpty().escape(),
    body('phone_trader').not().isEmpty().escape(),
    body('pass_trader').not().isEmpty().escape(),
    traderController.addTrader
    );

routes.put('/trader/update',
    body('name_trader').not().isEmpty().escape(),
    body('phone_trader').not().isEmpty().escape(),
    body('pass_trader').not().isEmpty().escape(),
    body('id').not().isEmpty().escape(),
    traderController.updateTrader);

routes.delete('/trader/delete',
    body('id').not().isEmpty().escape(),
    traderController.deleteTrader);

routes.post('/trader/autentic',
body('phone_trader').not().isEmpty().escape(),
body('pass_trader').not().isEmpty().escape(),
traderController.autenticTrader);

//Products of a Sale
routes.post('/sale/products',
body('sale_id').not().isEmpty().escape(),

productHasSaleController.listAllProductHasSales );

routes.get('/sale/products/init', productHasSaleController.initDatabase);

routes.post('/sale/products/add', productHasSaleController.addProductHasSale);

module.exports = routes;