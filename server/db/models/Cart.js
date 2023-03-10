const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define("cart", {
  cartId: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,

  },
  cartQuantity:{
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,

    }
  },
});

module.exports = Cart
