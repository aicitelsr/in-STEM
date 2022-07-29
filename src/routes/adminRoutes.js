const express = require('express')

const router = express.Router()
const controllerAdmin= require('../controller/adminController')


router.post('/register', controllerAdmin.create)
// router.post('/register/company', controllerAdmin.createCompany)
router.post('/login', controllerAdmin.login)
// router.post('/login/company', controller.controllerAdmin)
router.get('/users', controllerAdmin.getAll)
// router.get('/companies', controllerAdmin.getAllCompanies)
// router.delete('/user/:id', controllerAdmin.deleteUser)
router.delete('/user/:id', controllerAdmin.deleteById)

module.exports = router
