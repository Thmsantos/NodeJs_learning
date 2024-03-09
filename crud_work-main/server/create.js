const mysql = require("mysql");
Error.stackTraceLimit = Infinity;

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Thiago2004!",
  database: "ativWeb",
});

//mojo
//deno

connection.connect();

//create - C
let sql = "insert into cursos set?";
let dados = { nome: "santos", tipo: "messias" };
connection.query(sql, dados, function (error, results, fields) {
  if (error) throw error;
  console.log("salvou no banco");
});

connection.end();