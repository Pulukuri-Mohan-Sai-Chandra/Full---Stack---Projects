const express = require('express')
const app = express()
const router = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const database = require('./DataBase/dataBaseConnection')
console.log(`Database is ${JSON.stringify(database)}`)
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(cors())
app.use(router)
app.listen(8080, () => {
    console.log("Server Listeing on Port 8080")
})