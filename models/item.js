"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Item extends Model {
    static associate(models) {
      // define association here
      Item.belongsToMany(models.Sales, {
        through: "SalesItem",
        foreignKey: "itemId",
      });
    }
  }
  Item.init(
    {
      namaItem: DataTypes.STRING,
      unit: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      hargaSatuan: DataTypes.INTEGER,
      barang: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Item",
    }
  );
  return Item;
};
