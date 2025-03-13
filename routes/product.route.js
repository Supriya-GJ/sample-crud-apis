const express = require("express");
const Product = require("../models/product.model");
const { getProducts, getProduct, createProduct, updatedProduct, deleteProduct } = require("../models/controllers.js/product.controller");
const router = express.Router();


router.get('/', getProducts);
router.get('/:id', getProduct);

router.post('/', createProduct);
router.put('/:id', updatedProduct);
router.delete('/:id', deleteProduct);

module.exports = router;