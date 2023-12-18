"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DetailOrders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      DetailOrders.belongsTo(models.Orders, {
        foreignKey: "orderNumber",
        targetKey: "orderNumber",
        as: "detailData",
      });
    }
  }
  DetailOrders.init(
    {
      orderNumber: DataTypes.STRING,
      productName: DataTypes.STRING,
      amount: DataTypes.INTEGER,
      prePrice: DataTypes.INTEGER,
      form: DataTypes.STRING,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "DetailOrders",
    }
  );
  return DetailOrders;
};
