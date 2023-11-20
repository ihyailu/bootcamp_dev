function incrementarJuros (valor, percentualJuros) {
    const valorAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 20));
console.log(incrementarJuros(100, 30));