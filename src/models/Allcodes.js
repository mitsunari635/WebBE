'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Allcodes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Allcodes.hasMany(models.Users, { foreignKey: 'gender', as: 'genderData' })
            Allcodes.hasMany(models.Products, { foreignKey: 'stockId', as: 'stockData' })
            
        }
    }
    Allcodes.init({
        keyMap: DataTypes.STRING,
        type: DataTypes.STRING,
        valueEn: DataTypes.STRING,
        valueVi: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Allcodes',
    });
    return Allcodes;
};