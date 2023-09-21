const express=require('express');
const router=express.Router();

const Product =require('../models/product.js');
const mongoose = require('mongoose');

router.get('/',(req,res,next)=>{
    Product.find()
    .select('name _id price')
    .exec().then(docs=>{
        const response={
            count: docs.length,
            products: docs.map(doc=>{
                return{
                    name:doc.name,
                    _id:doc._id,
                    price:doc.price,
                    request:{
                        type:'GET',
                        url:'http://localhost:3000/products/'+ doc._id
                    }
                }
            })

        }
        res.status(200).json(response);
    }).catch(err=>{
        res.status(500).json({
            error:err
        });
    });
});


router.post('/',(req,res,next)=>{
    // const product = {
    //     name: req.body.name,
    //     price: req.body.price
    // }
    const product=new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price: req.body.price 
    });
    product.save().then(result=>{
        res.status(200).json({
            message:'Handling POST request',
            createProduct: {
                name: result.name,
                price: result.price,
                _id:result._id,
                request:{
                    type: 'GET',
                    url:'http://localhost:3000/products/'+ result._id 
                }
            }
        });
    })
    .catch(err=>{
        console.log(err);
        res.status(500).json({
            error:err
        })
    }); 
   
});


router.get('/:productid', (req,res,next)=>{
    const id=req.params.productid;
    Product.findById(id).select('name price _id').then(doc=>{
        if(doc) res.status(200).json({doc});
        else res.status(404).json({ message: 'No valid entry for the provided id'})
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
});
router.patch('/:productid',(req,res,next)=>{
    res.status(200).json({
        message:'request patched'
    });
});


router.delete('/:productid', (req,res,next)=>{
    const id=req.params.productid;
    Product.deleteOne({ _id: id }).exec().then(result=>{
        res.status(200).json(result);   
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    });
});
module.exports= router;