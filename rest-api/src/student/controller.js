const pool=require('../../psql_db');
const queries=require('./queries.js');

const getStudents= (req,res)=>{
    pool.query(queries.getStudentsQuery, (error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    } );
};


const getStudentById=(req,res)=>{
    const id= req.params.id;
    pool.query(queries.checkId,[id],(error,result)=>{
        if(error) throw error;
        if(result.rows.length){
            pool.query(queries.getStudentByIdQuery,[id],(error,result)=>{
                if(error) throw error;
                res.status(200).json(result.rows);
            });
        }
        else {
            res.send('No student with that user id');
        } 
    });    
};

const addStudent=(req,res)=>{
    const {first_name, last_name,gender, date_of_birth, email,score}=req.body;
    
    pool.query(queries.checkEmailExists,[email],(error,result)=>{
        if(error) throw error;
        if(result.rows.length) {
            res.send("email already exists");
        }
        else{
                pool.query(queries.addStudentQuery,[first_name, last_name, gender, date_of_birth, email,score],(error,result)=>{
                res.status(201).send("student created successfully");
            });
        }
    });
}
const removeStudent=(req,res)=>{
    const id= req.params.id; 

    pool.query(queries.checkId,[id],(error,result)=>{
        if(error) throw error;
        if(result.rows.length){
            pool.query(queries.removeStudentQuery,[id],(error,result)=>{
                if(error) throw error;
                res.status(200).send("student deleted succesfully");
            })
        }
        else{
            res.send("User not found to delete");
        }
    })
}

const getStudentsPercentage=(req,res)=>{
    pool.query(queries.getStudentsPercentageQuery,(error,result)=>{
        if(error) throw error;
        res.status(200).json(result.rows);
    });
}

const updateStudent=(req,res)=>{
    const id=req.params.id;
    const {first_name,last_name, gender,date_of_birth,email,score}=req.body;

    pool.query(queries.checkId,[id],(error,result)=>{
        if(error) throw error;
        if(result.rows.length){
            pool.query(queries.updateStudentQuery,[first_name,last_name, gender,date_of_birth,email,score,id],(error,result)=>{
                res.status(200).send('successfully updated data');
            });
        }
        else res.send('No student with that id');
    });
}



module.exports= {
    getStudents, getStudentById, addStudent, removeStudent,getStudentsPercentage,updateStudent
};