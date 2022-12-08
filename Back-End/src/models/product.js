class product {

    id;
    name_product;
    price_product;
    trader_id;

    constructor(id, name_product, price_product, trader_id) {
        this.id = id;
        this.name_product = name_product;
        this.price_product = price_product;
        this.trader_id = trader_id;

    }
}

module.exports = product;




// const {Model, DataTypes} = require ('sequelize');
// class product extends Model{
//     static init(sequelize){
//         super.init({
//             name_product: DataTypes.STRING,
//             price_product: DataTypes.STRING,
//             quantity_product: DataTypes.INTEGER,
//             description_product: DataTypes.STRING,
//             trader_id: DataTypes.INTEGER
//
//         },{
//             sequelize
//         })
//     }
// }
//
// module.exports = product;