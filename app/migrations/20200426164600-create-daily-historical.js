'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('historical_daily', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      stock_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'stocks',
          key: 'id'
        }
      },
      date: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      open: Sequelize.DECIMAL(12, 4),
      close: Sequelize.DECIMAL(12, 4),
      high: Sequelize.DECIMAL(12, 4),
      low: Sequelize.DECIMAL(12, 4),
      volume: Sequelize.BIGINT,
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('historical_daily');
  }
};