'use strict'

const {db, models:{User, Products, Cart, CreditCard}} = require('../server/db');
// const {} = require('../server/db')
const {faker} = require('@faker-js/faker');

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
// This function creates an array of 100 random users, which we will then use to bulkCreate to seed our database
 function createUsers(){
  let users = [];
  for (let i = 0; i < 100; i++){
    users.push({
      isAdmin: faker.datatype.boolean(),
      password: faker.internet.password(8),
      address: faker.address.streetAddress(true),
      telephone: faker.phone.number(),
      first_Name: faker.name.firstName(),
      last_Name:faker.name.lastName(),
      email: faker.helpers.unique(faker.internet.email)
    })
  }
  return users
}

function createProducts(){
  let products = [];
  for (let i = 0; i < 100; i++){
    products.push({
      name: faker.helpers.unique(faker.commerce.productName),
      quantity: faker.random.numeric(3),
      description: faker.commerce.productDescription(),
      price: faker.datatype.number({min: 1, max: 1000, precision:.01})
    })
  }
  return products
}

function createCreditCards(){
  let creditCards = [];
  for (let i = 0; i < 50; i++){
    creditCards.push({
      name: faker.name.fullName(),
      cardNumber: faker.datatype.number({min:16, max: 16}),
      cardType: faker.helpers.arrayElement(['Visa', 'MasterCard', 'American Express', 'Discover']),
      expirationDate: faker.date.future(),
      securityCode: faker.datatype.number({min:3, max: 3}),
      billingAddress: faker.address.streetAddress(),
      billingCity: faker.address.cityName(),
      billingState: faker.address.stateAbbr(),
      billingZip: faker.datatype.number({min:5, max: 5}),
      billingCountry: faker.address.countryCode()
    })
  }
  return creditCards
}

async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const users = createUsers();
  // Creating Products
  const products = createProducts()
  // Creating Credit Cards
  const creditCards = createCreditCards()

  User.bulkCreate(users)
  Products.bulkCreate(products)
  CreditCard.bulkCreate(creditCards)

  const carts = [
    {
      quantity: 10,
      price: 3.50,
      total: 35.00
    },
    {
      quantity: 25,
      price: 10,
      total: 250.00
    },
  ]
  //Creating a couple of dummy carts
  Cart.bulkCreate(carts)

  console.log(`successfully seeded ${users.length} users`)
  console.log(`successfully seeded ${products.length} products`)
  console.log(`successfully seeded ${creditCards.length} credit cards`)
  console.log('carts successfully seeded')
}

seed()


/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
// async function runSeed() {
//   console.log('seeding...')
//   try {
//     await seed()
//   } catch (err) {
//     console.error(err)
//     process.exitCode = 1
//   } finally {
//     console.log('closing db connection')
//     await db.close()
//     console.log('db connection closed')
//   }
// }

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
// if (module === require.main) {
//   runSeed()
// }

module.exports = seed
