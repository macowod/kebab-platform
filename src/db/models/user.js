'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({history}) {
      this.hasMany(history, { foreignKey: 'userId' });
    }
  }
  user.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    tel: DataTypes.STRING,
    address: DataTypes.STRING,
    password: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    lon: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};