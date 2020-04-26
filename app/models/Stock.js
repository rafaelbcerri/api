'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stock = sequelize.define('Stock', {
    symbol: DataTypes.STRING,
  }, { underscored: true, tableName: 'stocks' });
  Stock.associate = function(models) {
    // associations can be defined here
  };
  return Stock;
};