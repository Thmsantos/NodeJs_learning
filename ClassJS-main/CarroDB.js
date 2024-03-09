const { error } = require('console')
const mysql = require('mysql2')

class CarroDB{
    static connect(){
        let connection = mysql.createConnection({
            host : "localhost",
            user: "root",
            database: "fatec"
        })
        connection.connect()
    }

    static getCarros(callback){
        let connection = mysql.createConnection({
            host : "localhost",
            user: "root",
            database: "fatec"
        })
        let sql = `select * from carro`
        let query = connection.query(sql, function(error, results, fields){
            if(error) throw Error;
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }

    static getCarrosByTipo(tipo, callback){
        let connection = CarroDB.connect()

        let sql = `select id, nome, tipo from carro where tipo = ?`
        let query = connection.query(sql, function(error, results, fields){
            if(error) throw error
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }

    static getCarrosById(id, callback){
        let connection = CarroDB.connect()
        let sql = `select * from where id = ?`
        let query = connection.query(sql, id, function(error, results, fiels){
            if(error) throw Error
            callback(results[0])
        })
        console.log(query.sql)
        connection.end()
    }

    static save(carro, callback){
        let connection = CarroDB.connect()
        let sql = "insert into carro set ?"
        let query = connection.query(sql, carro, function(error, results, fiels){
            if(error) throw Error;
            carro.id = results.id
            callback(carro)

        })
        console.log(query.sql)
        connection.end()
    }


    static update(carro, callback){
        let connection = CarroDB.connect()
        let sql = `update carro set ? where id = ?`
        let id = carro.id
        let query = connection.query(sql, [carro, id], function(error, results, fiels){
            if(error) throw Error
            callback(carro)
        })
        console.log(query.sql)
        connection.end()
    }

    static delete(carro, callback){
        let connection = CarroDB.connect()
        let sql = `delete from carro where id = ?`
        let id = carro.id
        let query = connection.query(sql, id, function(error, results, fields){
            if(error) throw Error
            callback(results)
        })
        console.log(query.sql)
        connection.end()
    }
}

module.exports = CarroDB

/* create database fatec;
use fatec;

create table carro(
	id int auto_increment primary key,
    nome varchar(30),
	tipo varchar(30)
);

insert into carro values ("", "hilux", "sedan");

select * from carro; */
