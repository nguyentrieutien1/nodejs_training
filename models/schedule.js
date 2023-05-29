'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Schedule.belongsTo(models.Employee, {
        foreignKey: 'employee_id'
      })
      Schedule.belongsTo(models.Animal, {
        foreignKey: 'animal_id'
      })
    }
  }
  Schedule.init({
    employee_id: DataTypes.INTEGER,
    animal_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Schedule',
  });
  return Schedule;
};