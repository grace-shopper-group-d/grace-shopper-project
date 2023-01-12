const Sequelize = require('sequelize')
const db = require('../db')
const Order = require('./Orders')
const Products = require('./Products')


const OrderProducts = db.define('OrderProducts', {
  orderId: {
    type: Sequelize.INTEGER,
    references: {
      model: Order,
      key: 'id',
    }
  },
  productId: {
    type: Sequelize.INTEGER,
    refernces: {
      model: Products,
      key: "id",

    }

  },
})

module.exports = OrderProducts
