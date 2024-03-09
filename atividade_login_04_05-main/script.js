function login(){

    let usuario_html = document.querySelector("#user")
    let senha_html = document.querySelector("#pass")

    let usuario = usuario_html.value
    let senha = senha_html.value

    
    let dados = [
        {id: 1, user:"thiago", senha: 2004},
        {id: 2, user:"messias", senha: 2000},
    ]

    for(i=0; dados.length > i; i++){
       user_loop = dados[i].user
       pass_loop = dados[i].senha

       if(usuario == user_loop && senha == pass_loop){
            document.location.href= 'dados.html'
       }else{
        console.log('nao foi')
       }
    }
}


