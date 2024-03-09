const mysql = require('mysql');
Error.stackTraceLimit = Infinity;

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "ativweb"
})

//mojo
//deno

connection.connect()

//read - R
let sql = `select * from cursos`

    let id = 1
    
    connection.query(sql, id, function(error, results, fields){
        if(error) throw error
        if(results == 0){
            console.log('zero')
            return
        }
    
        let curso = results[0]
        console.log(curso.id, "-" , curso.nome, "-",  curso.tipo)
})

connection.end()