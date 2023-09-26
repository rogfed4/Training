const express= require('express');
const app= express();
const body=require('body-parser');
const productRoutes=require('./api/routes/products.js');
const mongoose= require('mongoose');


// Parsing the request
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

mongoose.connect("mongodb+srv://vishwajith:" + process.env.MONGO_ATLAS_PW +"@vishwajith.yspprff.mongodb.net/?retryWrites=true&w=majority");


//Adding headers eith responses

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin",'*');
    res.header("Access-Control-Allow-Headers",'*');
    
    if(req.method==='OPTIONS'){
        res.header("Access-Control-Allow-Methods",'PUT,GET,POST,DELETE,PATCH');
        return res.status(200).json({});
    }
    next();
});


// Handling requests
app.use('/products', productRoutes);



console.log('a');
app.use((req,res,next)=>{
    const err= new Error('Not Found');
    err.status=405;
    next(err);
});

app.use((error,req,res,next)=> {
    res.status(error.status||500).json({
        message:" fucked up backend"
    });
});

module.exports = app;