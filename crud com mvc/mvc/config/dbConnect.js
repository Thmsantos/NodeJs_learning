const sequelize = require('sequelize')

const bancodados = new sequelize('consume_api','root','',{
    dialect: 'mysql',
    host:'localhost',
    port: 3306
})

module.exports = bancodados
