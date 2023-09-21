const pool=require('../../psql_db');
const queries=require('./queries.js');

const getStudents= (req,res)=>{
    pool.query(queries.getStudents, (error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    } );
};


const getStudentById=(req,res)=>{
    const id= req.params.id;
    pool.query(queries.getStudentById,[id],(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });
};

const addStudent=(req,res)=>{
    const {first_name, last_name,gender, date_of_birth, email}=req.body;
    
    pool.query(queries.checkEmailExists,[email],(error,result)=>{
        if(error) throw error;
        if(result.rows.length) {
            res.send("email already exists");
        }
        else{
                pool.query(queries.addStudent,[first_name, last_name, gender, date_of_birth, email],(error,result)=>{
                res.status(201).send("student created successfully");
            });
        }
    });

    
}

module.exports= {
    getStudents, getStudentById, addStudent
};