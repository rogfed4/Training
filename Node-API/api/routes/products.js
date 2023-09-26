const express=require('express');
const router=express.Router();
const Product =require('../models/product.js');
const mongoose = require('mongoose');
const productController=require('../controllers/productController.js');

router.get('/',productController.getProducts);
router.post('/',productController.addProduct);
router.get('/:productid',productController.getProductById);
router.delete('/:productid',productController.removeProduct);
module.exports= router;