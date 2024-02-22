const express = require('express')
const app = express()
const porta = 8080;
const sequelize = require('sequelize')

const bancodados = new sequelize('consume_api','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: 3306
})



const professores = bancodados.define('professores',{
    id: {
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: sequelize.STRING,
    idade: sequelize.INTEGER,
    nidentificador: sequelize.INTEGER,
    cargo: sequelize.STRING
})


//post


bancodados.sync()
    .then(() => {
        
        professores.create({
        nome: 'Thiago_sereio',
        idade: 20,
        nidentificador: 11521,
        cargo: 'Instrutor'
        })
    })

app.listen(porta, () =>{
    console.log("Servidor em operação ...")
})