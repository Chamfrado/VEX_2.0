'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('trader', {
       id: {
         type:Sequelize.INTEGER,
         primaryKey:true,
         autoIncrement:true,
         allowNull:false,
      },
       name_trader:{
        type: Sequelize.STRING,
        allowNull:false,
      }, 
      phone_trader:{
        type: Sequelize.STRING,
        allowNull:false,
      }, 
      email_trader:{
        type: Sequelize.STRING,
        allowNull:false,
      },
       pass_trader:{
        type: Sequelize.STRING,
        allowNull:false,
      }, 
      date_acess:{
        type: Sequelize.DATE,
        allowNull:false,
      },
       date_term:{
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
    return queryInterface.dropTable('trader')
  }
};
