const { db } = require('./db')
const PORT = process.env.PORT || 8080
const app = require('./app')
const seed = require('../script/seed');



db.sync({force: true}).then(() => {
  seed()
  console.log("DB Synced!!!")
  app.listen(PORT, () =>
    console.log(
      `listening on port ${PORT}
   http://localhost:${PORT}/
`
    )
  );
});
