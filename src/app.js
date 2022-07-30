require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const coursesRoutes = require('./routes/coursesRoutes')
const vacanciesRoutes = require('./routes/vacanciesRoutes')
const adminRoutes = require('./routes/adminRoutes')
const swaggerUi = require('swagger-ui-express');

const swaggerFile = require('../swagger/swagger_output.json');


const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(coursesRoutes)
app.use(vacanciesRoutes)
app.use(adminRoutes)
app.use('/minha-rota-de-documentacao', swaggerUi.serve, swaggerUi.setup(swaggerFile))

module.exports = app