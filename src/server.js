//import libs
const express = require('express');
const path = require('path')
const pages = require('./pages.js')
    //iniciando o express
const server = express()




//criar rota//
server
    .use(express.urlencoded({ extend: true }))
    .use(express.static('public'))

//configurar template engine
.set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')
    //criar uma rota
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage)
    .post('/save-orphanage', pages.saveOrphanage)
    //ligar server
server.listen(5505)