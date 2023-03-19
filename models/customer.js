'use strict';
const {
Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
class Customer extends Model {
static associate(models) {
// define association here
Customer.hasMany(models.Sales, { foreignKey: 'customerId' });
}
}
Customer.init({
nama: DataTypes.STRING,
contact: DataTypes.STRING,
email: DataTypes.STRING,
alamat: DataTypes.STRING,
discount: DataTypes.INTEGER,
tipeDiscount: DataTypes.STRING,
ktp: DataTypes.STRING
}, {
sequelize,
modelName: 'Customer',
});
return Customer;
};