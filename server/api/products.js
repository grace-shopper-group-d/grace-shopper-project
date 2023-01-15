const router = require("express").Router();
const {
   Products ,
} = require("../db");

//router to find all products
router.get("/", async (req, res, next) => {
  // query parameters for pagination page = max number of items on the page, count= the offset for each page
  //Page = 0
  //Offset = page *COUNT (0) for the first page
  //Page = 1, COUNT = 10, Offset = 10.
  //Page = 2 Count = 10. Offset = 20.
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


    const products = await Products.findAndCountAll({
      limit: size,
      offset: page *size
    });
    res.send({
      content: products.rows,
      totalPages: Math.ceil(products.count / size)
    });
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
