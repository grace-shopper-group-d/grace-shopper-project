const Sequelize = require('sequelize')
const db = require('../db')
const bcrypt = require('bcrypt');

// const SALT_ROUNDS = 5;

const CreditCard = db.define('creditCard', {
    //name as appears on card
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    // credit card number
    cardNumber: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [16, 16]
        }
    },
    //type of card
    cardType: {
        type: Sequelize.ENUM('Visa', 'MasterCard', 'American Express', 'Discover'),
        allowNull: false
    },
    //expiration date
    expirationDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    //security code
    securityCode: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [3, 3]
        }
    },
    //blling address
    billingAddress: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    //billing city
    billingCity: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    //billing state
    billingState: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [2, 2]
        }
    },
    //billing zip code
    billingZip: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            len: [5, 5]
        }
    },
    //billing country
    billingCountry: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    }
})

module.exports = CreditCard

// we need to encrypt credit card info
// const hashCreditCard = async (creditCard) => {
//     if (creditCard.changed('cardNumber')) {
//         creditCard.cardNumber = await bcrypt.hash(creditCard.cardNumber, SALT_ROUNDS)
//     }
//     if (creditCard.changed('securityCode')) {
//         creditCard.securityCode = await bcrypt.hash(creditCard.securityCode, SALT_ROUNDS)
//     }
//     if (creditCard.changed('expirationDate')) {
//         creditCard.expirationDate = await bcrypt.hash(creditCard.expirationDate, SALT_ROUNDS)
//     }
// }

// CreditCard.beforeCreate(hashCreditCard)
// CreditCard.beforeUpdate(hashCreditCard)
// CreditCard.beforeBulkCreate((creditCards) => {
//     creditCards.forEach(hashCreditCard)
// })
