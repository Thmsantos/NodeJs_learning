const mysql = require("mysql2");
Error.stackTraceLimit = Infinity;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "ativWeb",
});

//mojo
//deno

connection.connect();

let sql = 'delete from cursos where id  = ?'
let id = 2

connection.query(sql, [id], function(error, results, fields){
    if(error) throw Error
    console.log("deletado")
}) 

connection.end();
