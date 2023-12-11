//     elabore um algorítmo que calcule o que deve ser pago por um produto, considerando o preço normal da etiqueta e a escolha
//     da condição de pagamento.
//     utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o calculo adequado.

//     código condição de pagamento:
//     - à vista débito, recebe 10% de desconto;
//     - à vista no dinheiro ou pix, recebe 15% de desconto;
//     - em duas vezes, preço normal de etiqueta sem juros;
//     - acima de duas vezes, preço normal de etiqueta mais juros de 10%;

function aplicarDesconto (valor, desconto) {
    return (valor - (valor * (desconto/100)));
}

function aplicarJuros (valor, juros) {
    return (valor + (valor *(juros/100)));
}

const precoEiqueta = 250;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEiqueta, 10));
} else if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEiqueta, 15));
} else if (formaPagamento === 3) {
    console.log(precoEiqueta);
} else {
    console.log(aplicarJuros(precoEiqueta, 10));
}
