const {Router}=require('express');
const controller= require('./controller.js');

const router=Router();

router.get('/percentage',controller.getStudentsPercentage);

router.get('/', controller.getStudents);
router.get('/:id',controller.getStudentById);
router.post('/add',controller.addStudent);
router.delete('/:id',controller.removeStudent);

router.put('/:id',controller.updateStudent);



module.exports= router;
