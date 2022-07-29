const express = require('express')
const controller = require('../controller/vagasController')

const router = express.Router()

router.get('/vagas', controller.getAllVagas)
router.get('/vaga/:id', controller.getVagaById)
router.get('/vaga/buscar/area', controller.getVagaByCategory)
router.get('/vaga/buscar/disponibilidade', controller.getVagaByDisponibilidade)
router.post('/vaga', controller.createVaga)
router.patch('/vaga/:id', controller.updateVaga)
router.delete('/vaga/:id', controller.deleteVaga)

module.exports = router