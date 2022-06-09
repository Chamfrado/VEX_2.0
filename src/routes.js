const express = require('express');

const TraderController = require('./controllers/TraderController');
const ProductController = require('./controllers/ProductController');
const SaleController = require('./controllers/SaleController');
const ClientController = require('./controllers/ClientController');

const routes = express.Router();

//Routes for the table "trader"
routes.post('/trader', TraderController.store);

routes.get('/trader', TraderController.listAll);

routes.get('/trader/:trader_id', TraderController.getById);

routes.delete('/trader/:trader_id', TraderController.delete);

routes.put('/trader/:trader_id', TraderController.update);

//Routes for the table "Product"
routes.post('/product', ProductController.store);

routes.get('/product', ProductController.listAll);

routes.get('/product/:product_id', ProductController.getById);

routes.delete('/product/:product_id', ProductController.delete);

routes.put('/product/:product_id', ProductController.update);

//Routes for the table "Sale"
routes.post('/sale', SaleController.store);

routes.get('/sale', SaleController.listAll);

routes.get('/sale/:sale_id', SaleController.getById);

routes.delete('/sale/:sale_id', SaleController.delete);

routes.put('/sale/:sale_id', SaleController.update);

//Routes for the table "Client"

routes.post('/client', ClientController.store);

routes.get('/client', ClientController.listAll);

routes.get('/client/:client_id', ClientController.getById);

routes.delete('/client/:client_id', ClientController.delete);

routes.put('/client/:client_id', ClientController.update);

module.exports = routes;