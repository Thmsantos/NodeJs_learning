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



//PUT
async function atualizaValores(){
    const dados_atualizados = await professores.findByPk(4);
    
    dados_atualizados.nome = "Thiago_zica_dabalada";
    dados_atualizados.idade = 18;

    const dado_atualizado = await dados_atualizados.save();
    console.log(dado_atualizado);
}
atualizaValores();

