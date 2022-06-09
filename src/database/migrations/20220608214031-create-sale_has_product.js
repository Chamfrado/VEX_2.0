'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sale_has_product', {
      sale_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'sale',
          key:'id'
        },
        primaryKey: true,
        allowNull:false.valueOf,
      },trader_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'trader',
          key:'id'
        },
        primaryKey: true,
        allowNull:false.valueOf,
      },
      quantity_sale_product:{
       type: Sequelize.DOUBLE,
       allowNull:false,
     }, 
     date_sale_product:{
       type: Sequelize.DATE,
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
    return queryInterface.dropTable('sale_has_product')
  }
};
