//importando modulos para a aplicacão
const mysql = require('mysql2')
const express = require('express')
const app = express()

app.use(express.json())

//variaveis
const port = 3000
const banco = 'escola_mundial'
const tabela = 'alunos'
const colunas = ['id', 'nome', 'idade', 'cpf', 'matricula']

//conexão com o banco
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database : banco
})

//funções query

function coletaTodos(){
    return `select * from ${tabela}`
}

function coletaid(id){
    return `select * from ${tabela} WHERE ID = ${id}`
}

function insereDado(dado){
    return `insert into ${tabela} (${colunas}) VALUES("${dado.id}", "${dado.nome}","${dado.idade}","${dado.cpf}","${dado.matricula}")`
}

function conectaQuery(id,coluna,novodado){

    let sql = `UPDATE ${tabela} SET ${coluna}="${novodado}" WHERE ID="${id}"`
    connection.query(sql, function(err, result){
        if(err) throw err
    })
    
}


//get
app.get('/', function(req, res){
    connection.query(coletaTodos(), function(err, result){
        if(err) throw err
        console.log(result)
        res.status(200).json(result)
    }) 
})

app.get('/:id', function(req, res){
    let index = req.params.id
    connection.query(coletaid(index), function(err, result){
        if(err) throw err
        res.status(200).json(result)
    }) 
})

//post 

app.post('/', function(req, res){
    connection.query(insereDado(req.body), function(err, result){
        if(err) throw err
        res.status(200).send('dado inserido')
    }) 
})

//put
app.put('/:id', function(req, res){
    let index = req.params.id
    for (let params in req.body){
        conectaQuery(index,params,req.body[params])
    }
    res.status(200).send('Dado Atualizado')
})



app.listen(port, () => {
    console.log(`conectado com a porta ${port}`)
})
