const router = require('express').Router();
const {Orders, Products} = require('../db')




// find all orders
router.get('/', async (req, res, next) =>  {
  try {
    const orders = await Orders.findAll();
    res.send(orders)

  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, send) =>  {
  try {
    const order = await Orders.findByPk(req.params.id, {include: Products})
    res.send(order)
  }
  catch (error) {
    next (error)
  }
})


router.put('/', async (req, res, next) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    await order.destroy();
    res.send(order)

  }
  catch (error) {
    next(error)
  }
})



router.delete('/', async (req, res, next) => {
  try {
    const order = await Orders.findByPk(req.params.id);
    await order.destroy();
    res.send(order)

  }
  catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
      const order = await Orders.findByPk(req.params.id)
      res.send(await order.update(req.body))
  }
  catch (err) {
      next(err)
  }
})


module.exports = router
