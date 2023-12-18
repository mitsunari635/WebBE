"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Markdowns extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Markdowns.belongsTo(models.Products, { foreignKey: "productId" });
      Markdowns.belongsTo(models.Policies, { foreignKey: "policyId" });
    }
  }
  Markdowns.init(
    {
      contentHTML: DataTypes.TEXT("long"),
      contentMarkdown: DataTypes.TEXT("long"),
      description: DataTypes.STRING,
      productId: DataTypes.INTEGER,
      newsId: DataTypes.INTEGER,
      policyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Markdowns",
    }
  );
  return Markdowns;
};
