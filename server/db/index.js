//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
<<<<<<< HEAD
const Products = require("./models/Products");
const Orders = require("./models/Orders")
=======
const Orders = require('./models/Products')
const Products = require('./models/Products')
const CreditCard = require('./models/CreditCard')
const Cart = require('./models/Cart')
>>>>>>> fbb0d9003a0ad6f2ce7012cbc1c45d72f950f2cc


//associations could go here!

// User Associations 
User.hasMany.Orders
User.hasOne.Cart
User.hasOne.CreditCard

// Cart Associations 
Cart.hasMany.Products
Cart.BelongsTo.User

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
<<<<<<< HEAD
  User,
  Products,
  Orders
};
=======
  models: {
    User,
    Orders,
    Products,
    CreditCard,
    Cart,
  },
}
>>>>>>> fbb0d9003a0ad6f2ce7012cbc1c45d72f950f2cc
