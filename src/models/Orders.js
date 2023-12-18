"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Orders.belongsTo(models.Users, {
        foreignKey: "userID",
        targetKey: "id",
        as: "userData",
      });
      Orders.hasMany(models.DetailOrders, { foreignKey: "orderNumber" });

      Orders.belongsTo(models.Allcodes, {
        foreignKey: "statusID",
        targetKey: "keyMap",
        as: "statusData",
      });
    }
  }
  Orders.init(
    {
      orderNumber: DataTypes.STRING,
      statusID: DataTypes.STRING,
      userID: DataTypes.INTEGER,
      taxNumber: DataTypes.STRING,
      address: DataTypes.STRING,
      preTotal: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      couponDiscount: DataTypes.INTEGER,
      vat: DataTypes.INTEGER,
      shipFee: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      payment: DataTypes.STRING,
      billPrinted: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Orders;
};
