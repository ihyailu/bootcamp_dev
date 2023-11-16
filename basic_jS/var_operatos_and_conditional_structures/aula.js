// const prova1 = 8;
// const prova2 = 9;
// const prova3 = 5;

// const media = (prova1 + prova2 + prova3) / 3;
// console.log (media);

// if (media < 5) {
//     console.log("Reprovado!")
// } else if (media >=5 && media <=7) {
//     console.log("Em recuperação");
// } else if (media >7) {
//     console.log("Aprovado!")
// }

// const altura = 1.87
// const peso = 65.0

// const IMC = (peso / Math.pow(altura, 2)).toFixed(0);
// console.log(IMC);

//     if (IMC < 18.5) {
//         console.log("Abaixo do peso!");
//     } else if (IMC >=18.5 && IMC <= 25) {
//         console.log("Peso normal!");
//     } else if (IMC >=25 && IMC <= 30) {
//         console.log("Acima do peso!");
//     } else if (IMC >=30 && IMC <= 40) {
//         console.log("Obeso!");
//     } else if (IMC > 40) {
//         console.log("Obesidade Grave")
//     }

const precoProduto = 150
const formaPagamento = 0;

if (formaPagamento ===1) {
    console.log (precoProduto - (precoProduto * 0.1));
} else if (formaPagamento === 2) {
    console.log(precoProduto - (precoProduto * 0.15));
}  else if (formaPagamento === 3) {
    console.log(precoProduto)
}  else {
    console.log(precoProduto + (precoProduto * 0.1));
}


    

    