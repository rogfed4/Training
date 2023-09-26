const Product =require('../models/product.js');
const mongoose = require('mongoose');


const getProducts=(req,res,next)=>{
    Product.find().select('name _id price').exec().then(docs=>{
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
}


const getProductById= (req,res,next)=>{
    const id=req.params.productid;
    Product.findById(id).select('name price _id').then(doc=>{
        if(doc) res.status(200).json(doc);
        else res.status(404).json({ message: 'No valid entry for the provided id'})
    })
    .catch(err=>{
        res.status(500).json({
            error:err
        })
    })
};


const addProduct=(req,res,next)=>{
    console.log('damn1');
    const product=new Product({
        _id: new mongoose.Types.ObjectId(),
        name:req.body.name,
        price: req.body.price 
    });
    product.save().then(result=>{
        console.log('damn2');
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
}


const removeProduct= (req,res,next)=>{
    const id=req.params.productid;
    console.log('hello');
    Product.deleteOne({ _id: id }).exec().then(doc=>{
        if(doc.deletedCount=== 0) res.status(200).send('No such product to delete'); 
        else res.send('deleted successfully');  
    }).catch(err=>{
        res.status(500).json({
            error:err
        })
    });
};


module.exports={
    removeProduct,
    getProductById,
    addProduct,
    getProducts
}