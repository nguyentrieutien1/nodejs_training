'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Food.hasMany(models.Animal, {
        foreignKey: 'food_id'
      })
    }
  }
  Food.init({
    food_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Food',
  });
  return Food;
};