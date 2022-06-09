'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('product', {
      id: {
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
     },
      name_product:{
       type: Sequelize.STRING,
       allowNull:false,
     }, 
     price_product:{
       type: Sequelize.DOUBLE,
       allowNull:false,
     }, 
     quantity_product:{
       type: Sequelize.DOUBLE,
       allowNull:false,
     },
      drscription_product:{
       type: Sequelize.STRING,
       allowNull:false,
     },
     trader_id:{
      type: Sequelize.INTEGER,
      references:{
        model: 'trader',
        key:'id'
      }
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
    return queryInterface.dropTable('product')
  }
};
