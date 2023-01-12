//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Order = require('./models/Orders')
const Products = require('./models/Products')
const CreditCard = require('./models/CreditCard')
const Cart = require('./models/Cart');
const OrderProducts = require("./models/OrderProducts");




// User Associations
User.hasMany.Orders
User.hasOne.CreditCard
User.hasMany.Products


// Orders Associations
Order.belongsTo.User
Order.belongsToMany(Products, {through: OrderProducts})

// CreditCard Associations
CreditCard.belongsTo.User

// Products Association
Products.belongsToMany(Order, {through: OrderProducts})
Products.belongsToMany.User







module.exports = {
  db,

  models: {
    User,
    Order,
    Products,
    CreditCard,
    Cart,
    OrderProducts,
  },
}

