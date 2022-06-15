const {Model, DataTypes} = require ('sequelize');

class client extends Model{
    static init(sequelize){
        super.init({
            name_client: DataTypes.STRING,
            phone_client: DataTypes.STRING,
            trader_id: DataTypes.INTEGER

        },{
            sequelize
        })
    }
}

module.exports = client;