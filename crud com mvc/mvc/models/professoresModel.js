const sequelize = require('sequelize')
const bancodados = require('../config/dbConnect')



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

module.exports = professores