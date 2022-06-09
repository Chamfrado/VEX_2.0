const Sequelize = require('sequelize');
const dbConfig =  require('../config/database');

const Trader = require('../models/Trader');
const Product = require('../models/Product');
const Sale = require('../models/Sale');
const Client = require('../models/Client');


const connection = new Sequelize(dbConfig);

Trader.init(connection);
Product.init(connection);
Sale.init(connection);
Client.init(connection);


module.exports = connection;

