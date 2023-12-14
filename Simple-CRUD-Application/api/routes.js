const express = require('express')
const AppRouter = express.Router()
const healthCheck = require('./Controllers/HealthCheck')
const register = require('./Controllers/Register')
const getAll  = require('./Controllers/GetAll')
const logger = require('./Controllers/Logger')
// Health Check 
AppRouter.get('/status',logger,healthCheck)

// Register 
AppRouter.post('/register',logger,register)

// Get all Students 
AppRouter.get('/all',logger,getAll)

module.exports = AppRouter