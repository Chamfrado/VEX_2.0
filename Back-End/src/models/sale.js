class sale {

    id;
    date_sale;
    status_sale;
    trader_id;
    client_id;
    purchase_in_installments;
    payment_control;
    total_sale;

    constructor(id, date_sale, status_sale, trader_id,client_id, purchase_in_installments, payment_control, total_sale ) {
        this.id = id;
        this.date_sale = date_sale;
        this.status_sale = status_sale;
        this.trader_id = trader_id;
        this.client_id = client_id;
        this.purchase_in_installments = purchase_in_installments;
        this.payment_control = payment_control;
        this.total_sale = total_sale;
    }
}

module.exports = sale;




// const {Model, DataTypes} = require ('sequelize');
//
// class sale extends Model{
//     static init(sequelize){
//         super.init({
//             date_sale: DataTypes.DATE,
//             status_sale: DataTypes.STRING,
//             price_sale: DataTypes.DOUBLE,
//             trader_id: DataTypes.INTEGER,
//             purchase_in_installments: DataTypes.STRING,
//             payment_control: DataTypes.STRING,
//             total_sale: DataTypes.DOUBLE
//
//         },{
//             sequelize
//         })
//     }
// }
//
// module.exports = sale;