"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SalesItem extends Model {
    static associate(models) {
      // define association here
    }
  }
  SalesItem.init(
    {
      salesId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      qty: DataTypes.INTEGER,
      hargaSatuan: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "SalesItem",
    }
  );
  return SalesItem;
};
