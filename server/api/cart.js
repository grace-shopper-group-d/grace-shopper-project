const router = require('express').Router();
const {Orders, Products, Cart} = require('../db')




// find all carts
router.get('/', async (req, res, next) =>  {
  try {
    const carts = await Cart.findAll();
    res.send(carts)

  }
  catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, send) =>  {
  try {
    const cart = await Cart.findByPk(req.params.id)
    res.send(cart)
  }
  catch (error) {
    next (error)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const updatedCart = await Cart.findByPk(req.params.id);
    res.send(await updatedCart.update(req.body));
  } catch (err) {
    next(err);
  }
});


router.delete('/:id', async (req, res, next) => {
  try {
    const id = req.params.id
    await Cart.destroy({
      where: {
        cartId: id
      }
    })
    res.status(204).send(Cart.findByPk(id))

  }
  catch (error) {
    next(error)
  }
})




module.exports = router
