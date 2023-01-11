//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Orders = require('./models/Products')
const Products = require('./models/Products')
const CreditCard = require('./models/CreditCard')
const Cart = require('./models/Cart')



//associations could go here!

// User Associations
User.hasMany.Orders
User.hasOne.Cart
User.hasOne.CreditCard

// Cart Associations
Cart.hasMany.Products
Cart.belongsTo.User

// Orders Associations
Orders.belongsTo.User
Orders.hasMany.Products

// CreditCard Assocation
CreditCard.belongsTo.User

// Products Association
Products.belongsToMany.Cart
Products.belongsToMany.Orders






module.exports = {
  db,

  models: {
    User,
    Orders,
    Products,
    CreditCard,
    Cart,
  },
}

