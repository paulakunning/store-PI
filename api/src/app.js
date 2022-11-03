//Configurar nuestro servidor

const express = require('express')
const morgan = require('morgan')

const productsRouter = require('../src/routes/productsRouter')
const categoriesRouter = require('../src/routes/categoriesRouter')

const server = express()

//middleware

server.use(morgan('dev'))
server.use(express.json())

//router

server.use("/products", productsRouter)
server.use("/categories", categoriesRouter)



module.exports = server