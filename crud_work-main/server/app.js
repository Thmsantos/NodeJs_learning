const mysql = require('mysql2')
const express = require('express')
const app = express()

app.use(express.json())

//variaveis
const port = 3000
const banco = 'ativWeb'
const tabela = 'cursos'
const colunas = ['id', 'nome', 'tipo']

//conexão com o banco
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database : 'ativWeb'
})

//funções query

function coletaTodos(){
    return `select * from ${tabela}`
}

function insereDado(dado){
    console.log(dado[0].id)
    return `insert into ${tabela} (${colunas}) VALUES("${dado[0].id}", "${dado[0].nome}","${dado[0].tipo}")`
}

function conectaQuery(id,coluna,novodado){

    let sql = `UPDATE ${tabela} SET ? WHERE ID="${id}"`
    connection.query(sql, [novodado], function(err, result){
        if(err) throw err
    })
    
}

function deletaDado(dado){
    return `delete from ${tabela} where ID="${dado}"`
}

app.delete('/del/:id', function(req,res){
    let id = req.params
    let teste = Object.values(id)
    let valor = teste[0]
    connection.query(deletaDado(valor), function(err, result){
        console.log(req.params)
        if(err) throw err
        res.status(200).send('excluido')
    })
})

//get
app.get('/', function(req, res){
    connection.query(coletaTodos(), function(err, result){
        if(err) throw err
        console.log(result)
        res.status(200).json(result)
    }) 
})

app.post('/adicionar', function(req, res){
    connection.query(insereDado(req.body), function(err, result){
        if(err) throw err
        res.status(200).send('dado inserido')
    }) 
})

app.put('/:id', function(req, res){
    let index = req.params.id
    for (let params in req.body){
        conectaQuery(index,index,req.body[params])
    }
    res.status(200).send('Dado Atualizado')
})
//put




app.listen(port, () => {
    console.log(`conectado com a porta ${port}`)
})


//rotas, declarando porta
