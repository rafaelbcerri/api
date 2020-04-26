'use strict';
module.exports = (sequelize, DataTypes) => {
  const HistoricalDaily = sequelize.define('HistoricalDaily', {
    date: {
      allowNull: false,
      type: DataTypes.DATEONLY
    },
    open: DataTypes.DECIMAL(12, 4),
    close: DataTypes.DECIMAL(12, 4),
    high: DataTypes.DECIMAL(12, 4),
    low: DataTypes.DECIMAL(12, 4),
    volume: DataTypes.BIGINT,
  }, { underscored: true, tableName: 'historical_daily' });
  HistoricalDaily.associate = function(models) {
    HistoricalDaily.belongsTo(models.Stock, { foreignKey: 'stock_id' })
  };
  return HistoricalDaily;
};