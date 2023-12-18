"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Policies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Policies.hasOne(models.Markdowns, { foreignKey: "policyId" });
    }
  }
  Policies.init(
    {
      name: DataTypes.TEXT,
      type: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Policies",
    }
  );
  return Policies;
};
