const Sequelize = require('sequelize')
const db = require('../db')
const jwt = require('jsonwebtoken')
const bcrypt= require('bcrypt')



const Order = db.define('order',{
  invoice:{
    type: Sequelize.INTEGER,
    unique: true,
    allowNull: false,
  },
  total:{
    type: Sequelize.INTEGER,
    allowNull: false
  },
  Date: {
    type: Sequelize.DATEONLY,
    allowNull:false
  }
})

module.exports= Order
