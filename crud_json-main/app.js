let dados = [
    {id: 0, name: 'corsa'},
    {id: 1, name: 'palio'},
    {id: 2, name: 'gol'},
    {id: 3, name: 'uno'},
    {id: 4, name: 'celta'},
]

let indice = 0 

function Get(){
    for (let x = 0; x < dados.length; x++){
        console.log(dados[x].id, dados[x].name)
        console.log('-------------')
        indice = x
    }
}

//Get()

function Post(){

    let x = indice + 1
    let new_dado = {id: x, name: 'onix'}
    let dado_add = dados.push(new_dado)
    for (let x = 0; x < dados.length; x++){
        indice = x
    }
}

//Post()

function atualizar(){

    function Put(array, index, newValue) {
    array[index] = newValue;
    }

    let x = indice - 2
    let dado_att = {id: x, name: 'classic'}
    Put(dados, x, dado_att);

    console.log(dados)

}

//atualizar()

function Delete(){
    let x = indice - 2
    dados.splice(x, 1);
    console.log(dados)
}

//Delete()
