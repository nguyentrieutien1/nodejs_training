'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Animal.belongsTo(models.Khu, {
        foreignKey: 'khu_id'
      })
      Animal.belongsTo(models.Food, {
        foreignKey: 'food_id'
      })
      Animal.hasMany(models.Schedule, {
        foreignKey: 'animal_id'
      })
    }
  }
  Animal.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    khu_id: DataTypes.INTEGER,
    food_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Animal',
  });
  return Animal;
};