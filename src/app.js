require('dotenv').config();
const express = require('express')
const cors = require('cors')
const mongoose = require('./database/mongooseConnect')
const cursosRoutes = require('./routes/cursosRoutes')
const vagasRoutes = require('./routes/vagasRoutes')
const adminRoutes = require('./routes/adminRoutes')

const app = express()

app.use(express.json())
app.use(cors())

mongoose.connect()

app.use(cursosRoutes)
app.use(vagasRoutes)
app.use(adminRoutes)

module.exports = app