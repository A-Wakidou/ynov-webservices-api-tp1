const express = require('express')
const helmet = require("helmet")
const bodyParser = require('body-parser')
require('dotenv').config()

const moviesRoutes = require('./routes/movies')


const http = require('http')
const app = express()
const server = http.createServer(app)
const PORT = 3000 || process.env.port


app.use(helmet())

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,Authorization')
    res.setHeader('Access-Control-Allow-Credentials', true)
    next();
})

app.use(bodyParser.json())

app.use('/movies', moviesRoutes)


server.listen(PORT, () => console.log(`Server running on ${PORT}`))