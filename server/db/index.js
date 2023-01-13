//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Orders = require('./models/Orders')
const Products = require('./models/Products')
const CreditCard = require('./models/CreditCard')
const Cart = require('./models/Cart')






// User.hasMany(Order)
// Order.belongsTo(User)

// User.belongsToMany(Product, {through: "userProducts"})
// Product.belongsToMany(User, {through: "userProducts"})

// User.hasOne(CreditCard)
// CreditCard.belongsTo(User)
// error


// Product.belongsToMany(Order, {through: "orderProducts"})
// Order.belongsToMany(Product, {through: "orderProducts"})

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

