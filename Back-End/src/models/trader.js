class trader {

    id;
    name_trader;
    phone_trader;
    email_trader;
    pass_trader;
    date_acess;
    date_term;

    constructor(id, name_trader, phone_trader, email_trader, pass_trader, date_acess, date_term ) {
        this.id = id;
        this.name_trader = name_trader;
        this.phone_trader = phone_trader;
        this.email_trader = email_trader;
        this.pass_trader = pass_trader;
        this.date_acess = date_acess;
        this.date_term = date_term;
    }
}

module.exports = trader;
















// const {Model, DataTypes} = require ('sequelize');
//
// class Trader extends Model{
//     static init(sequelize){
//         super.init({
//             name_trader: DataTypes.STRING,
//             phone_trader: DataTypes.STRING,
//             email_trader: DataTypes.STRING,
//             pass_trader: DataTypes.STRING,
//             date_acess: DataTypes.DATE,
//             date_term: DataTypes.DATE
//
//         },{
//             sequelize
//         })
//     }
// }
//
// module.exports = Trader;