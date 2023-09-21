const express=require('express');
const studentRoutes= require('./src/student/routes');


const app=express();
const port=3000;

app.use(express.json());

app.get('/',(req,res,next)=> res.send('hello dick'));

app.use('/api/allstudents',studentRoutes);

app.listen(port,()=> console.log('app is listening on port ${port}'));
