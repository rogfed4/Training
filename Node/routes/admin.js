const express= require('express');

const router=express.Router();

router.get('/add-product',(req,res,next)=>{
    // console.log("ADD-PRODUCT-PAGE");
     res.send('<form action="/products" method="POST"><input type="text" name="title"><button type="submit"a>Add product</button></form>');
 })
 
 router.post('/products',(req,res,next)=>{
    // console.log("REDIRECTED-PRODUCT-PAGE");
    console.log(req.body);
     res.redirect('/');
 })
 

module.exports=router;