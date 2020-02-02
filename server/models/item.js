'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Sequelize, Model } = require('sequelize')
  // const sequelize = new Sequelize()

  class Item extends Model {}

  Item.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER
  }, { sequelize });
  Item.associate = function(models) {
    // associations can be defined here
    Item.hasMany(models.Stock, {
      foreignKey: 'itemId'
    })
  };
  return Item;
};