var readline = require('readline');

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

leitor.question("Frase: ", function(answer) {
    var resp = answer;
    leitor.close();
    let array_padrao = resp.split("")
    let array = []
    for(i = 0; i < array_padrao.length; i++){
        if(array_padrao[i] != ' '){
            array.push(array_padrao[i])
        }
    }
   
    let cont = 0

    for(i = 0; i < array.length; i++){
        let x = (array.length - 1) - i
        
        if(array[i] == array[x]){
            cont = cont + 1
        }else{
            cont = cont - 1
        }
    }
   
    if(cont == array.length){
        console.log('parabens, voce encontrou o palindromo perdido!')
    }else{
        console.log('a busca continua, o palindromo perdido ainda nao foi encontrado')
    }
});

