'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Customer.belongsTo(models.Bank, { foreignKey: "bank_id" });
      Customer.belongsTo(models.Account, { foreignKey: "account_id" });
    }
  }
  Customer.init({
    customer_name: DataTypes.STRING,
    bank_id: DataTypes.INTEGER,
    account_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};