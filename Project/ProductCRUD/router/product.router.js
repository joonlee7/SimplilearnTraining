var express = require("express");
var router = express.Router();

var ProductController = require("../controller/product.controller.js");

router.get("/product", ProductController.GetProduct);
router.get("/productById/:id", ProductController.GetProductById);
router.post("/storeProduct", ProductController.StoreProduct);
router.put("/updateProduct", ProductController.UpdateProduct);
router.delete("/deleteProduct/:id", ProductController.DeleteProduct);

module.exports = router;