'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Khu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Khu.hasOne(models.Animal, {
        foreignKey: "khu_id"
      })
    }
  }
  Khu.init({
    khu_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Khu',
  });
  return Khu;
};