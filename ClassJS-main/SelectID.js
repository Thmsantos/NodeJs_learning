const CarroDB = require('./CarroDB');

CarroDB.getCarrosById(3, function(carro){
    console.log(carro.id , ":" , carro.nome)
})