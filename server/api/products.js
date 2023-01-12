const router = require("express").Router();
const {
  models: { Products },
} = require("../db");

//router to find all products
router.get("/", async (req, res, next) => {
  try {
    const products = await Products.findAll();
    res.send(products);
  } catch (err) {
    next(err);
  }
});

//router to find single product
router.get('/:id', async (req, res, next) => {
    try {
        const product = await Products.findByPk(req.params.id)
        res.send(product)
    }
    catch (err) {
        next(err)
    }
})

//router to post new product
router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Products.create(req.body);
    res.send(newProduct);
  } catch (err) {
    next(err);
  }
});

//router to delete product based on the id
router.delete("/", async (req, res, next) => {
  try {
    const id = req.params.id;
    await Products.destroy({
      where: {
        id: id,
      },
    });
    res.status(204).send(Products.findByPk(id));
  } catch (err) {
    next(err);
  }
});

//router to update product based on the id
router.put("/:id", async (req, res, next) => {
  try {
    const updateProducts = await Products.findByPk(req.params.id);
    res.send(await updateProducts.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = router;
