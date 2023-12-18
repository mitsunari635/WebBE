'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Customers extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // Customers.hasMany(models.Orders, { foreignKey: 'customerID' })
        }
    }
    Customers.init({
        email: DataTypes.STRING,
        fullName: DataTypes.STRING,
        phoneNumber: DataTypes.STRING,
        companyName: DataTypes.STRING,
        taxNumber: DataTypes.STRING,
        companyAddress: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Customers',
    });
    return Customers;
};