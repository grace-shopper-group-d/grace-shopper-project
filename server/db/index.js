//this is the access point for all things database related!

const db = require("./db");
const User = require("./models/User");
const Products = require("./models/Products");
const Orders = require("./models/Orders")


//associations could go here!

module.exports = {
  db,
  User,
  Products,
  Orders
};
