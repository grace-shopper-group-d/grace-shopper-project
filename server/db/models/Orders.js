const Sequelize = require('sequelize')
const db = require('../db')


const Order = db.define('order',{
  invoice:{
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
  total:{
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  Date: {
    type: Sequelize.DATEONLY,
    allowNull:false
  }
})

module.exports= Order
