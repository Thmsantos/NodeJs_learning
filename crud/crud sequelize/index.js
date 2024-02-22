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

    let dado = await professores.findAll()({ raw: true })
    
    res.status(200).json(dado)

})

app.get('/:id',async function(req, res){
    
    let index = req.params.id

    await bancodados.sync()

    let dado = await  professores.findByPk(1)
    
    res.status(200).json(dado)

})


app.post('/', (req, res) => {
    
    async function insereDados(){
        
        const resultadoCreate = await professores.create({
                nome: req.body.nome,
                idade: req.body.idade,
                nidentificador: req.body.nidentificador,
                cargo: req.body.cargo
        
        })
    }
    insereDados();
})

app.put('/:id', function (req, res) {
    
    async function atualizaValores(){
        const dados_atualizados = await professores.findByPk(1);
        
        dados_atualizados.nome = "Thiago";
        dados_atualizados.idade = 18;
    
        const dado_atualizado = await dados_atualizados.save();
        res.send(dado_atualizado);
    }
    atualizaValores();
})

app.delete('/', function (req, res) {
    
    async function deleteValores(){
        professores.destroy({ where: { id: 4}})
        res.send(deletado);
    }
    
    deleteValores();
})


//SERVER
app.listen(porta, () =>{
    console.log("Servidor em operação ...")
}) 