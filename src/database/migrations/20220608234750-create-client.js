'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('client', {
        id: {
            type:Sequelize.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
         },name_client:{
          type: Sequelize.STRING,
          allowNull:false,
         },
          phone_client:{
           type: Sequelize.STRING,
           allowNull:false,
         },
        trader_id:{
        type: Sequelize.INTEGER,
        references:{
          model: 'trader',
          key:'id'
        },
        primaryKey: true,
        allowNull:false.valueOf,
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
    return queryInterface.dropTable('client')
  }
};
