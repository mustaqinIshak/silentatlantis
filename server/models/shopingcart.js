'use strict';
module.exports = (sequelize, DataTypes) => {
  const { Sequelize, Model } = require('sequelize')
  // const sequelize = new Sequelize()
  class ShopingCart extends Model {}
  ShopingCart.init({
      nameItem: DataTypes.STRING,
      size: DataTypes.STRING,
      price: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER
    }, {sequelize});

  ShopingCart.associate = function(models) {
    // associations can be defined here
    ShopingCart.belongsTo(models.User, {
      foreignKey: 'userId'
    })
  };
  return ShopingCart;
};