const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define("Cart", {
  quantity:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price:{
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  total:{
    type: Sequelize.DECIMAL,
    allowNull: false
  }
});

module.exports = Cart
