const {Model, DataTypes} = require ('sequelize');

class sale extends Model{
    static init(sequelize){
        super.init({
            date_sale: DataTypes.DATE,
            status_sale: DataTypes.STRING,
            price_sale: DataTypes.DOUBLE,
            trader_id: DataTypes.INTEGER,
            purchase_in_installments: DataTypes.STRING,
            payment_control: DataTypes.STRING,
            total_sale: DataTypes.DOUBLE

        },{
            sequelize
        })
    }
}

module.exports = sale;