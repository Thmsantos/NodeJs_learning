const CarroDB = require('./CarroDB')


CarroDB.getCarros(function(carro){
    for(let i = 0; i < carro.length; i++){
        console.log(carro[i])
    }
})