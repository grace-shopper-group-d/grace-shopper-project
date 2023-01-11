//this is the access point for all things database related!

const db = require('./db')

const User = require('./models/User')
const Product = require('./models/Products')
const Order = require('./models/Orders')
const CreditCard = require('./models/CreditCard')

//associations could go here!
User.hasMany(Order)
Order.belongsTo(User)
User.hasOne(CreditCard)
CreditCard.belongsTo(User)

module.exports = {
  db,
  models: {
    User,
    Product,
    Order,
    CreditCard
  },
}
