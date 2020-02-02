'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Sequelize, Model } = require('sequelize')
  // const sequelize = new Sequelize()

  class Stock extends Model {}

  Stock.init({
    itemId: DataTypes.INTEGER,
    size: DataTypes.STRING,
    stock: DataTypes.INTEGER
  }, { sequelize });
  Stock.associate = function(models) {
    // associations can be defined here
    Stock.belongsTo(models.Item)
  };
  return Stock;
};