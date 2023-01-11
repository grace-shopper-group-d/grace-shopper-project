const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('product',{
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    quantity: {
        type: Sequelize.NUMBER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price:{
        type: Sequelize.NUMBER,
        allowNull: false
    }
})

module.exports = Products