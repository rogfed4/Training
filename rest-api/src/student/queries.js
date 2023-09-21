const getStudents='SELECT * FROM person';
const getStudentById='SELECt * FROM person WHERE id= $1';
const checkEmailExists='SELECT * FROM person WHERE email=$1';
const addStudent = 'INSERT INTO person (first_name,last_name,gender,date_of_birth,email) VALUES ($1,$2,$3,$4,$5)';

module.exports={
    getStudents, getStudentById, checkEmailExists,addStudent
};
