function calcularIMC(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarIMC(IMC) {
    if (IMC < 18.5) {
        return "Abaixo do peso!";
    } else if (IMC >=18.5 && IMC <= 25) {
        return "Peso normal!";
    } else if (IMC >=25 && IMC <= 30) {
        return "Acima do peso!";
    } else if (IMC >=30 && IMC <= 40) {
        return "Obeso!";
    } else if (IMC > 40) {
        return "Obesidade Grave"
    }
}


// main
(function () {
const altura = 1.87
const peso = 68.0

const IMC = calcularIMC (peso, altura);
console.log(classificarIMC(IMC));
})();

