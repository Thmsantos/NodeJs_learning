const express = require('express')
const app = express()
const porta = 3000;
const sequelize = require('sequelize')

app.use(express.json())

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

app.get('/',async function(req, res){
    await bancodados.sync()

    let dado = await professores.findAll({ raw: true })
    
    res.status(200).json(dado)

})

app.get('/:id',async function(req, res){
    
    let index = req.params.id

    await bancodados.sync()

    let dado = await  professores.findByPk(1)
    
    res.status(200).json(dado)

})

app.post('/', async function(req, res){
    let novoDado = req.body
    await bancodados.sync()
    await professores.create(novoDado)
    res.status(201).send("dado criado")
})


app.put('/:id', async function(req, res){
    let index = req.params.id
    let dadoAtualizado = req.body
    await bancodados.sync()
    await professores.update(dadoAtualizado, {where: {id: index}})
    res.status(200).send('dado upgrade')
})

app.delete('/:id', async function(req, res){

    await bancodados.sync()
    await professores.destroy({ where: { id: 5 }})
    res.status(200).send('cpf cancelado')
})

app.listen(porta, () =>{
    console.log("Servidor em operação ...")
}) 