
class client {

    id;
    name_client;
    phone_client;
    trader_id;

    constructor(id, name_client, phone_client, trader_id) {
        this.id = id;
        this.name_client = name_client;
        this.phone_client = phone_client;
        this.trader_id = trader_id;
    }
}

module.exports = client;


















//Sequelize Option

// const {Model, DataTypes} = require ('sequelize');
//
// class client extends Model{
//     static init(sequelize){
//         super.init({
//             name_client: DataTypes.STRING,
//             phone_client: DataTypes.STRING,
//             trader_id: DataTypes.INTEGER
//
//         },{
//             sequelize
//         })
//     }
// }
//
// module.exports = client;