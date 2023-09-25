const express=require('express');
const studentRoutes= require('./src/student/routes');


const app=express();
const port=3000;

app.use(express.json());


app.use('/allstudents',studentRoutes);
app.use('/calculations',studentRoutes);

app.all('*',(req,res,next)=> res.send('you have reached the end of the responses'));

app.listen(port,()=> console.log('app is listening on port ${port}'));
