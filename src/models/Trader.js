const {Model, DataTypes} = require ('sequelize');

class Trader extends Model{
    static init(sequelize){
        super.init({
            name_trader: DataTypes.STRING,
            phone_trader: DataTypes.STRING,
            email_trader: DataTypes.STRING,
            pass_trader: DataTypes.STRING,
            date_acess: DataTypes.DATE,
            date_term: DataTypes.DATE

        },{
            sequelize
        })
    }
}

module.exports = Trader;