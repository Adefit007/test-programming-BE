"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sales extends Model {
    static associate(models) {
      // define association here
      Sales.belongsTo(models.Customer, { foreignKey: "customerId" });
    }
  }
  Sales.init(
    {
      codeTransaksi: DataTypes.STRING,
      tanggalTransaksi: DataTypes.DATE,
      qty: DataTypes.INTEGER,
      totalDiscount: DataTypes.INTEGER,
      totalHarga: DataTypes.INTEGER,
      totalBayar: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Sales",
    }
  );
  return Sales;
};
