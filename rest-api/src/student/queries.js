const getStudentsQuery='SELECT * FROM student';
const getStudentByIdQuery='SELECt * FROM student WHERE id= $1';
const checkEmailExists='SELECT * FROM student WHERE email=$1';
const checkId ='SELECT * FROM student WHERE id=$1';
const addStudentQuery = 'INSERT INTO student (first_name,last_name,gender,date_of_birth,email, score) VALUES ($1,$2,$3,$4,$5,$6)';
const removeStudentQuery='DELETE FROM student where id=$1';
const getStudentsPercentageQuery='SELECT id,first_name,last_name,score, ROUND(score*100::NUMERIC / 360.0, 2) AS percentage, ROUND((SELECT AVG(score) FROM student),2) AS average_score FROM student';
const updateStudentQuery='UPDATE student SET first_name= $1 , last_name= $2, gender=$3, date_of_birth=$4, email=$5, score=$6 WHERE id=$7';
module.exports={
    getStudentsQuery,
    getStudentByIdQuery, 
    checkId,checkEmailExists,
    addStudentQuery,
    removeStudentQuery,
    getStudentsPercentageQuery,
    updateStudentQuery
};
