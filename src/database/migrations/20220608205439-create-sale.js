'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sale', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
     },
      date_sale:{
       type: Sequelize.DATE,
       allowNull:false,
     }, 
     status_sale:{
       type: Sequelize.STRING,
       allowNull:false,
     }, 
     price_sale:{
       type: Sequelize.DOUBLE,
       allowNull:false,
     },
      trader_id:{
       type: Sequelize.INTEGER,
       references:{
         model: 'trader',
         key:'id'
       }
     }, 
     purchase_in_installments:{
       type: Sequelize.STRING,
       allowNull:false,
     },
      payment_control:{
       type: Sequelize.STRING,
       allowNull:false,
     },
     total_sale:{
       type: Sequelize.DOUBLE,
       allowNull:false,
     },
     created_at:{
      type: Sequelize.DATE,
      allowNull:false,
    },
    updated_at:{
     type: Sequelize.DATE,
     allowNull:false,
   },
     });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sale')
  }
};
