const {Model, DataTypes} = require ('sequelize');
class product extends Model{
    static init(sequelize){
        super.init({
            name_product: DataTypes.STRING,
            price_product: DataTypes.STRING,
            quantity_product: DataTypes.INTEGER,
            description_product: DataTypes.STRING,
            trader_id: DataTypes.INTEGER

        },{
            sequelize
        })
    }
}

module.exports = product;