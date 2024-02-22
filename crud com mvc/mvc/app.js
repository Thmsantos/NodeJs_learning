const express = require('express')
const app = express()
const porta = 3000;
const sequelize = require('sequelize')

app.use(express.json())

 
const rotaProfessores = require('./routes/professoresRoutes')


app.use('/', rotaProfessores)
app.use('/professores', rotaProfessores)


app.listen(porta, () =>{
    console.log("Servidor em operação ...")
}) 