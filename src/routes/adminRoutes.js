const express = require('express')

const router = express.Router()
const controllerAdmin= require('../controller/adminController')


router.post('/register', controllerAdmin.create)
router.post('/login', controllerAdmin.login)
router.get('/users', controllerAdmin.getAll)
router.delete('/user/:id', controllerAdmin.deleteById)

module.exports = router
