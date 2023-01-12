const Sequelize = require('sequelize')
const db = require('../db')

const Products = db.define('product',{
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    imageUrl: {
        type: Sequelize.STRING,
        defaultValue: 'default.png'
    }
})

module.exports = Products
