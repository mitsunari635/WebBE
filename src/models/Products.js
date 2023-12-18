'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Products extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Products.hasOne(models.Markdowns, { foreignKey: 'productId' });
            Products.belongsTo(models.Allcodes, { foreignKey: 'stockId', targetKey: 'keyMap', as: 'stockData'});
        }
    }
    Products.init({
        image: DataTypes.BLOB('long'),
        secondImage: DataTypes.BLOB('long'),
        thirdImage: DataTypes.BLOB('long'),
        name: DataTypes.STRING,
        price: DataTypes.INTEGER,
        discount: DataTypes.INTEGER,
        stockId: DataTypes.STRING,
        describe: DataTypes.TEXT,
        type: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Products',
    });
    return Products;
};