function escreverNome (nome) {
   return "Meu nome é " + nome;
}

function verificarIdade (idade) {
    if (idade >= 18) {
        console.log (escreverNome ('Gustavo') + " é maior de idade");
    } else {
        console.log (" é menor de idade");
    }
}

verificarIdade (19)
