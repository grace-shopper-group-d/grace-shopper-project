//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Order = require("./models/Orders");
const Products = require("./models/Products");
const CreditCard = require("./models/CreditCard");
const Cart = require("./models/Cart");


User.hasOne(CreditCard);
CreditCard.belongsTo(User);

User.hasMany(Order);
Order.belongsTo(User);

User.belongsToMany(Products, { through: "UserProducts" });
Products.belongsToMany(User, { through: "UserProducts" });

Order.belongsToMany(Products, { through: "OrderProducts" });
Products.belongsToMany(Order, { through: "OrderProducts" });

module.exports = {
  db,
  User,
  Order,
  Products,
  CreditCard,
  Cart,
};
