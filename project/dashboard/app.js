require('express-async-errors')
const express = require('express')
const app = express()
const cors = require('cors')
const {MONGODB_URL} = require('./utils/config')
const mongoose = require('mongoose')
const dashboardRouter = require('./controllers/dashboard')
const middleware = require('./utils/middleware')
mongoose.connect(MONGODB_URL)
app.use(cors())
app.use(express.json())
app.use('/', dashboardRouter)
app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)
module.exports = app