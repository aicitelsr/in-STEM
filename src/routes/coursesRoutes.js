const express = require('express')
const controller = require('../controller/coursesController')


const router = express.Router()

router.get('/cursos/buscar', controller.getAllCourses)
router.get('/cursos/buscar/abertos', controller.openCourses)
router.get('/cursos', controller.getAllCourses)
router.get('/cursos/:id', controller.getCourseById)
router.post('/cursos', controller.createCourse)
router.patch('/curso/:id', controller.updateCourse)
router.delete('/curso/:id', controller.deleteCourse)


module.exports = router;

