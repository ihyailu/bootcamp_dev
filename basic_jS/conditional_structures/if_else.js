const precoGasolina = 5.20;
const precoEtanol = 4.44;
const kmLitro = 8;
const distanciaKM = 368;
const tipoCombustivel = 'etanol';

const litrosUsados = distanciaKM / kmLitro;

if (tipoCombustivel === 'gasolina') {
    const valorGasto = litrosUsados * precoGasolina;
    console.log(valorGasto.toFixed(2));

} 
else {
    const valorGasto = litrosUsados * precoEtanol;
    console.log(valorGasto.toFixed(2));
}

