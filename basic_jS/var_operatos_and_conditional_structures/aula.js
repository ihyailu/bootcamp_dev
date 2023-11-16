const prova1 = 8;
const prova2 = 9;
const prova3 = 5;

const media = (prova1 + prova2 + prova3) / 3;
console.log (media);

if (media < 5) {
    console.log("Reprovado!")
} else if (media >=5 && media <=7) {
    console.log("Em recuperação");
} else if (media >7) {
    console.log("Aprovado!")
}
    

    