'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class_scheduling extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Class_scheduling.belongsTo(models.Class, {
        foreignKey: 'class_id'
      })
      Class_scheduling.belongsTo(models.Teacher, {
        foreignKey: "teacher_id"
      })
      
    }
  }
  Class_scheduling.init({
    teacher_id: DataTypes.INTEGER,
    class_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Class_scheduling',
  });
  return Class_scheduling;
};