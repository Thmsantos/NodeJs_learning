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



//GET

async function apresentaValores(){
       await bancodados.sync()

       let dados = await professores.findAll()
       
       res.status(200).json(dado)
}

apresentaValores();



//PUT

/* async function atualizaValores(){
    const dados_atualizados = await professores.findByPk(1);
    
    
    dados_atualizados.nome = "Thiago";
    dados_atualizados.idade = 18;

    const dado_atualizado = await dados_atualizados.save();
    console.log(dado_atualizado);
}

atualizaValores(); */


//DELETE


async function deleteValores(){
    professores.destroy({ where: { id: 2}})
}

deleteValores();