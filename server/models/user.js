'use strict';
const bcrypt = require('bcrypt') 
const saltRounds = 8

module.exports = (sequelize, DataTypes) => {
  const model = sequelize.Sequelize.Model
  // const sequelize = new Sequelize()
  class User extends model {}
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, { 
    hooks:{
      beforeSave: (user, options) => {
        bcrypt.hash(user.password, saltRounds)
        .then(hash => {
          this.password = hash
        })
      }
    },
    sequelize 
  });
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.ShopingCart, {
      foreignKey: 'userId'
    })
  };
  return User;
};