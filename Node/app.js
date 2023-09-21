const http= require('http');  

const express=require('express');

const app=express();

const adminRouter= require('./routes/admin.js');
const shopRouter= require('./routes/shop.js');

const bodyParser=require('body-parser');

const db=require('./util/database.js');


db.query('SELECT * FROM person', (error, results) => {
  if (error) {
    console.error('Error executing query----------------:', error);
    return;
  }
  console.log('Query result--------------------:', results.rows);
});

app.use(bodyParser.urlencoded({extended:false}));

app.use(adminRouter);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})
app.listen(3000);



//----------------------------------------------------------
//module 3:

//const server= http.createServer(app);

// const routing=require('./route.js');

// console.log(routing.relatedText)

// const server= http.createServer(routing.handler);

//server.listen(3000);
//---------------------------------------------------------