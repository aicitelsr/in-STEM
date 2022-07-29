const express = require('express')
const controller = require('../controller/cursosController')


const router = express.Router()

router.get('/cursos/buscar', controller.getCursoByCategory)
router.get('/cursos/buscar/abertos', controller.getCursosAbertos)
router.get("/cursos", controller.getAllCursos)
router.get('/cursos/:id', controller.getCursoById)
router.post('/cursos', controller.createCurso)
router.patch('/curso/:id', controller.updateCurso)
router.delete('/curso/:id', controller.deleteCurso)


module.exports = router;

