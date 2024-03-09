const mysql = require("mysql2");
Error.stackTraceLimit = Infinity;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ativWeb",
});

//mojo
//deno

connection.connect();

let dados = {id: 3, nome: "teste", tipo: "love"}
let id = dados.id
let sql = 'update cursos set nome = ?, tipo = ? where id  = ?'

connection.query(sql, [dados.nome, dados.tipo, id], function(error, results, fields){
    if(error) throw Error
    console.log("att com sucesso")
}) 


connection.end();
