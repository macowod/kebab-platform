const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.woker, { foreignKey: 'wokerId' });
      this.hasMany(models.history, { foreignKey: 'orderId' });
    }
  }
  order.init({
    name: DataTypes.STRING,
    wokerId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    img: DataTypes.STRING,
    price: DataTypes.STRING,
    discont: DataTypes.STRING,
    disprice: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    lon: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};
