const express = require('express')
const controller = require('../controller/vacanciesController')

const router = express.Router()

router.get('/vagas', controller.getAllJobs)
router.get('/vaga/:id', controller.getVacancyById)
router.get('/vaga/buscar/area', controller.getVacancyByCategory)
router.get('/vaga/buscar/disponibilidade', controller.getvacancyAvailable)
router.post('/vaga', controller.createVacancy)
router.patch('/vaga/:id', controller.updateVacancy)
router.delete('/vaga/:id', controller.deleteVacancy)

module.exports = router