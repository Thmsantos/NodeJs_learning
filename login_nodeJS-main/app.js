const express = require('express');
const app = express();
app.use(express.json());
const sequelize = require('sequelize');

//informações do workbench
const database = new sequelize('projeto','root','',{
    dialect: 'mysql',
    host: 'localhost',
    port: 3306
});

const loginModels = database.define('login', {
    id:{
        type: sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    usuario: sequelize.STRING(40),
    email: sequelize.STRING(30),
    senha: sequelize.STRING(20)
})

database.sync();

app.get('/teste', function(req,res){
    res.send('foi')
})

app.listen(3088, () =>{
    console.log('foi')
})