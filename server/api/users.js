const router = require('express').Router()
const { User }  = require('../db');
const {Products} = require('../db')
module.exports = router


//router to find all users
router.get('/', async (req, res, next) => {
  //pagination request for all users to only show 10 per page
  try {
    const pageAsNumber= Number.parseInt(req.query.page);
    const sizeAsNumber= Number.parseInt(req.query.size);

    let page = 0;
    if(!Number.isNaN(pageAsNumber)&& pageAsNumber >0){
      page = pageAsNumber;
    }

    let size = 10;
    if(!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 10){
        size = sizeAsNumber;
    }
    const users = await User.findAndCountAll({
      // explicitly select only the id and username fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      // attributes: ['id', 'email']
      limit: size,
      offset: page *size

    })
    res.send({
      content: users.rows,
      totalPages: Math.ceil(users.count / size)
    })
  } catch (err) {
    next(err)
  }
})

//router to find single user based on id
router.get('/:id', async (req, res, next) => {
  try {
    const user = await User.findByPk(req.params.id, { include: Products })
    res.send(user)
  }
  catch (err) {
    next(err)
  }
})

//router to post new user
router.post('/', async (req, res, next) => {
  try {
    const newUser = await User.create(req.body)
    res.send(newUser)
  }
  catch (err) {
    next(err)
  }
})

//router to delete user based on id
router.delete('/', async (req, res, next) => {
  try {
    const id = req.params.id
    await User.destroy({
      where: {
        id: id
      }
    })
    res.status(204).send(User.findByPk(id))
  }
  catch (err) {
    next(err)
  }
})

//router to update user based on id
router.put('/:id', async (req, res, next) => {
  try {
    const updateUser = await User.findByPk(req.params.id)
    res.send(await updateUser.update(req.body))
  }
  catch (err) {
    next(err)
  }
})

module.exports = router
