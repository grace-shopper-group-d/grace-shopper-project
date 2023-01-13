const Sequelize = require('sequelize')
// const pkg = require('../../package.json')

// const databaseName = pkg.name

// const config = {
//   logging: false
// };

// if(process.env.LOGGING === 'true'){
//   delete config.logging
// }

// if(process.env.DATABASE_URL){
//   config.dialectOptions = {
//     ssl: {
//       rejectUnauthorized: false
//     }
//   };
// }

const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/graceshopper', {logging: false})
module.exports = db

