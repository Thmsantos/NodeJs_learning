const sequelize = require('sequelize')


const bancodados = require('../config/dbConnect')
const professores = require('../models/professoresModel')

class ProfessoresController{
    static async listarDados(req, res){
        await bancodados.sync()
        let dado = await professores.findAll({ raw: true })
        res.status(200).json(dado)
    }

    static async listarDado(req, res){
        let index = req.params.id
        await bancodados.sync()
        let dado = await  professores.findByPk(1)
        res.status(200).json(dado)
    }

    static async inserirDado(req, res){
        let novoDado = req.body
        await bancodados.sync()
        await professores.create(novoDado)
        res.status(201).send("dado criado")
    }

    static async atualizarDado(req, res){
        let index = req.params.id
        let dadoAtualizado = req.body
        await bancodados.sync()
        await professores.update(dadoAtualizado, {where: {id: index}})
        res.status(200).send('dado upgrade')
    }

    static async apagarDado(req, res){
        await bancodados.sync()
        await professores.destroy({ where: { id: 5 }})
        res.status(200).send('cpf cancelado')
    }
    
}

module.exports = ProfessoresController



/* static async listartDado(req, res){
    let index = req.params.id
    await bancodados.sync()
    let dado = await  professores.findByPk(1)
    res.status(200).json(dado)
}

static async function inserirDado(req, res){
    let novoDado = req.body
    await bancodados.sync()
    await professores.create(novoDado)
    res.status(201).send("dado criado")
}


 static async atualizarDado(req, res){
    let index = req.params.id
    let dadoAtualizado = req.body
    await bancodados.sync()
    await professores.update(dadoAtualizado, {where: {id: index}})
    res.status(200).send('dado upgrade')
}

  static  async apagarDado(req, res){

    await bancodados.sync()
    await professores.destroy({ where: { id: 5 }})
    res.status(200).send('cpf cancelado')
} */